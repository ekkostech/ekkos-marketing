'use client';

import { useState, useRef, useEffect } from 'react';
import { useI18n } from '@/i18n/provider';
import { locales, LocaleCode } from '@/i18n/config';
import { Globe, Check, Sparkles, ChevronDown } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, setLocale, isLoading, isAiTranslated, localeInfo } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4 text-white/60" />
        <span className="hidden sm:inline">{localeInfo.flag}</span>
        <span className="text-white/80">{localeInfo.code.toUpperCase()}</span>
        {isAiTranslated && (
          <Sparkles className="w-3 h-3 text-purple-400" />
        )}
        <ChevronDown className={`w-3 h-3 text-white/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        {isLoading && (
          <div className="w-3 h-3 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[#0d0d12] border border-white/10 shadow-2xl shadow-black/50 overflow-hidden z-50">
          <div className="p-2 border-b border-white/10">
            <div className="px-3 py-2 text-xs text-white/40 uppercase tracking-wider">
              Select Language
            </div>
          </div>
          
          <div className="max-h-80 overflow-y-auto py-1">
            {locales.map((loc) => {
              const isSelected = locale === loc.code;
              const isStatic = ['en', 'de', 'ja', 'zh'].includes(loc.code);
              
              return (
                <button
                  key={loc.code}
                  onClick={() => {
                    setLocale(loc.code as LocaleCode);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-white/5 transition-colors ${
                    isSelected ? 'bg-purple-500/10' : ''
                  }`}
                >
                  <span className="text-lg">{loc.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${isSelected ? 'text-white font-medium' : 'text-white/80'}`}>
                        {loc.native}
                      </span>
                      {!isStatic && (
                        <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-purple-500/20 text-[10px] text-purple-300">
                          <Sparkles className="w-2.5 h-2.5" />
                          AI
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-white/40">{loc.name}</span>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-purple-400" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="p-3 border-t border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 text-[10px] text-white/40">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span>AI translations powered by ekkOS_™</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Compact version for mobile/footer
export function LanguageSwitcherCompact() {
  const { locale, setLocale, localeInfo } = useI18n();
  
  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as LocaleCode)}
      className="bg-transparent border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white/70 focus:outline-none focus:border-purple-500/50"
    >
      {locales.map((loc) => (
        <option key={loc.code} value={loc.code} className="bg-[#0d0d12]">
          {loc.flag} {loc.native}
        </option>
      ))}
    </select>
  );
}
