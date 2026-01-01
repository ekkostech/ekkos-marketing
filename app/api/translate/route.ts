import { LocaleCode, getLocaleInfo, staticLocales } from '@/i18n/config';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Lazy-initialize OpenAI client to avoid build-time failures
let openaiClient: OpenAI | null = null;
function getOpenAI(): OpenAI {
  if (!openaiClient) {
    openaiClient = new OpenAI({
      apiKey: process.env.XAI_API_KEY || '',
      baseURL: 'https://api.x.ai/v1',
    });
  }
  return openaiClient;
}

// In-memory cache for translated messages (in production, use Redis)
const translationCache = new Map<string, { messages: Record<string, unknown>; timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours

export async function POST(request: NextRequest) {
  try {
    const { locale, messages } = await request.json();

    if (!locale || !messages) {
      return NextResponse.json(
        { error: 'Missing locale or messages' },
        { status: 400 }
      );
    }

    // Don't translate static locales - they have pre-made translations
    if (staticLocales.includes(locale as LocaleCode)) {
      return NextResponse.json({
        messages,
        source: 'static',
        aiTranslated: false
      });
    }

    // Check if XAI_API_KEY is configured
    if (!process.env.XAI_API_KEY) {
      console.warn('[Translate API] XAI_API_KEY not configured - falling back to English');
      return NextResponse.json({
        messages,
        source: 'fallback',
        aiTranslated: false,
        warning: 'XAI_API_KEY not configured'
      });
    }

    const localeInfo = getLocaleInfo(locale);
    const cacheKey = `${locale}:${JSON.stringify(messages).substring(0, 100)}`;

    // Check cache
    const cached = translationCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return NextResponse.json({
        messages: cached.messages,
        source: 'cache',
        aiTranslated: true
      });
    }

    // AI Translation using xAI's Grok model
    const systemPrompt = `You are a professional translator for ekkOS, the memory substrate for AI.
Translate the following JSON from English to ${localeInfo.name} (${localeInfo.native}).

Rules:
1. Preserve all JSON keys exactly as they are
2. Only translate the string values
3. Keep technical terms like "ekkOS", "ekko", "crystallize", "reflex", "trace", "consolidate" unchanged
4. Keep product tier names like "Echo", "Resonance", "Harmony" unchanged
5. Adapt pricing symbols if appropriate ($ → € for German, ¥ for Japanese/Chinese, etc.)
6. Maintain the same tone: professional but approachable, developer-focused
7. Return valid JSON only, no markdown or explanations

${localeInfo.rtl ? 'Note: This is a right-to-left language.' : ''}`;

    const response = await getOpenAI().chat.completions.create({
      model: 'grok-4.1-fast-non-reasoning', // Fast xAI model for translation (non-reasoning for speed)
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: JSON.stringify(messages, null, 2) }
      ],
      temperature: 0.3, // Low temperature for consistent translations
      response_format: { type: 'json_object' }
    });

    const translatedText = response.choices[0]?.message?.content;
    if (!translatedText) {
      throw new Error('No translation received');
    }

    const translatedMessages = JSON.parse(translatedText);

    // Cache the result
    translationCache.set(cacheKey, {
      messages: translatedMessages,
      timestamp: Date.now()
    });

    return NextResponse.json({
      messages: translatedMessages,
      source: 'ai',
      aiTranslated: true,
      locale: localeInfo.native
    });

  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json(
      { error: 'Translation failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// GET endpoint to check supported languages
export async function GET() {
  return NextResponse.json({
    staticLocales,
    aiTranslationEnabled: !!process.env.XAI_API_KEY,
    cacheTTL: CACHE_TTL
  });
}
