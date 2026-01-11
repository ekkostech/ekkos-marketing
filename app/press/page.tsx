'use client';

import { Download, Copy, Check, Mail, ExternalLink, Calendar, Users, TrendingUp, Award, FileText, Image as ImageIcon, Video, Quote } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const pressReleases = [
  {
    date: '2025-01-15',
    title: 'ekkOS Launches AI Memory Infrastructure Platform',
    summary: 'Revolutionary memory layer enables AI tools to remember and learn from every interaction',
    link: '#',
  },
  {
    date: '2024-12-10',
    title: 'ekkOS Achieves SOC 2 Compliance Milestone',
    summary: 'Enterprise-grade security certification enables trust for business customers',
    link: '#',
  },
];

const pressCoverage = [
  {
    outlet: 'TechCrunch',
    title: 'ekkOS Builds the Missing Memory Layer for AI',
    date: '2025-01-20',
    link: '#',
  },
  {
    outlet: 'The Verge',
    title: 'This AI Actually Remembers You',
    date: '2025-01-18',
    link: '#',
  },
];

const keyStats = [
  { label: 'Active Users', value: '10,000+', icon: Users },
  { label: 'Growth Rate', value: '35% MoM', icon: TrendingUp },
  { label: 'Retention', value: '94%', icon: Award },
  { label: 'Countries', value: '50+', icon: Users },
];

const storyAngles = [
  {
    title: 'For Tech Press',
    publications: ['TechCrunch', 'The Verge', 'Wired', 'Ars Technica'],
    angle: 'The Missing Infrastructure Layer in AI',
    description: 'Focus on technical innovation, architecture, and how ekkOS solves the fundamental memory problem in AI applications.',
  },
  {
    title: 'For Business Press',
    publications: ['Forbes', 'WSJ', 'Business Insider', 'Bloomberg'],
    angle: 'The $1.3T AI Infrastructure Opportunity',
    description: 'Market size, funding, competitive landscape, and the business case for persistent AI memory.',
  },
  {
    title: 'For Developer Press',
    publications: ['Hacker News', 'Dev.to', 'InfoWorld', 'The New Stack'],
    angle: 'Building AI That Actually Remembers',
    description: 'Technical deep-dive, API design, integration patterns, and developer experience.',
  },
];

const faqs = [
  {
    q: 'How is ekkOS different from ChatGPT\'s memory feature?',
    a: 'ChatGPT can remember some things you tell it explicitly. ekkOS automatically extracts knowledge from every conversation and builds a structured knowledge graph with relationships between concepts. It\'s the difference between remembering facts vs. understanding how everything connects.',
  },
  {
    q: 'Isn\'t this just RAG (Retrieval-Augmented Generation)?',
    a: 'RAG requires manual document preparation. ekkOS extracts knowledge automatically from natural conversation. No setup, no document management, zero user effort.',
  },
  {
    q: 'What about privacy and security?',
    a: 'All data is encrypted, user-owned, and deletable anytime. We\'re SOC 2 compliant and FERPA compliant for schools. Users control what\'s remembered and can export their entire knowledge graph.',
  },
  {
    q: 'Can OpenAI or other AI companies just copy this?',
    a: 'Our moat is 2+ years of R&D into extraction quality, production infrastructure at scale, and domain expertise. Plus, we can pivot to B2B infrastructure if needed — becoming the memory layer for other AI applications.',
  },
  {
    q: 'What\'s your long-term vision?',
    a: 'Short term: Best AI memory infrastructure for developers. Long term: Memory infrastructure for all AI. Just like Auth0 provides authentication, ekkOS provides memory as a service.',
  },
  {
    q: 'How do you make money?',
    a: 'Subscriptions ($9-99/month), enterprise licenses, and API/infrastructure pricing. We\'re focused on developer tools and enterprise customers.',
  },
];

export default function PressPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedQuote, setCopiedQuote] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'quote') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedQuote(text);
      setTimeout(() => setCopiedQuote(null), 2000);
    }
  };

  const founderQuotes = [
    {
      quote: 'We realized AI is incredibly powerful but fundamentally incomplete. It\'s like having a brilliant professor with amnesia — they can explain anything, but they forget you the moment you walk away. We built ekkOS to fix that.',
      author: 'Founder',
    },
    {
      quote: 'The future of AI isn\'t just more powerful models. It\'s memory. It\'s personalization. It\'s systems that actually learn from you, not just respond to you.',
      author: 'Founder',
    },
    {
      quote: 'Every company talks about "personalized AI," but personalization without memory is impossible. We\'re building the memory layer that makes real personalization possible.',
      author: 'Founder',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-6 transition-colors">
            ← Back to home
          </Link>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Press Kit
            </span>
          </h1>
          <p className="text-xl text-white/60 mb-6">
            Everything journalists and media need to cover ekkOS_
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {keyStats.map((stat) => (
            <div key={stat.label} className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
              <stat.icon className="w-8 h-8 text-purple-400 mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
          <div className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 p-8">
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              <strong className="text-white">ekkOS_</strong> is the memory infrastructure layer for AI. While most AI tools forget everything the moment you close the tab, ekkOS automatically builds a persistent knowledge graph from every conversation, making each interaction smarter than the last.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              Founded in 2024, ekkOS solves the fundamental problem of AI amnesia by providing developers and enterprises with a memory layer that learns, remembers, and evolves with every interaction — automatically, securely, and at scale.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-xl font-semibold mb-3">Mission</h3>
              <p className="text-white/70">
                To make AI truly intelligent by giving it the memory layer it needs to learn, remember, and grow with every interaction.
              </p>
            </div>
          </div>
        </div>

        {/* Key Messages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Messages</h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">One-Liner</h3>
                <button
                  onClick={() => copyToClipboard('ekkOS is AI that remembers — building personal knowledge graphs from every conversation to make each interaction smarter than the last.', 'quote')}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {copiedQuote === 'ekkOS is AI that remembers — building personal knowledge graphs from every conversation to make each interaction smarter than the last.' ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/60" />
                  )}
                </button>
              </div>
              <p className="text-white/70">
                ekkOS is AI that remembers — building personal knowledge graphs from every conversation to make each interaction smarter than the last.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Headline Options</h3>
              <ul className="space-y-2 text-white/70">
                <li>• "Meet ekkOS: The AI That Finally Remembers You"</li>
                <li>• "Startup Builds Missing Memory Layer for AI"</li>
                <li>• "ekkOS Solves AI's Biggest Problem: Amnesia"</li>
                <li>• "This AI Gets Smarter With Every Conversation"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Founder Quotes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Founder Quotes</h2>
          <div className="space-y-4">
            {founderQuotes.map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
                <Quote className="w-6 h-6 text-purple-400 mb-3" />
                <p className="text-lg text-white/80 italic mb-3">"{item.quote}"</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/60">— {item.author}</p>
                  <button
                    onClick={() => copyToClipboard(`"${item.quote}" — ${item.author}`, 'quote')}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {copiedQuote === `"${item.quote}" — ${item.author}` ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-white/60" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Angles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Story Angles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {storyAngles.map((angle) => (
              <div key={angle.title} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2">{angle.title}</h3>
                <p className="text-sm text-purple-400 mb-3 font-medium">{angle.angle}</p>
                <p className="text-white/70 text-sm mb-4">{angle.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-white/50 mb-2">Target Publications:</p>
                  <div className="flex flex-wrap gap-2">
                    {angle.publications.map((pub) => (
                      <span key={pub} className="px-2 py-1 rounded text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {pub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Releases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Press Releases</h2>
          <div className="space-y-4">
            {pressReleases.map((release) => (
              <div key={release.date} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-4 h-4 text-white/40" />
                      <span className="text-sm text-white/60">{new Date(release.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{release.title}</h3>
                    <p className="text-white/70">{release.summary}</p>
                  </div>
                  <a
                    href={release.link}
                    className="ml-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Coverage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Press Coverage</h2>
          <div className="space-y-4">
            {pressCoverage.map((coverage) => (
              <div key={coverage.date} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold border border-purple-500/30">
                        {coverage.outlet}
                      </span>
                      <span className="text-sm text-white/60">{new Date(coverage.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{coverage.title}</h3>
                  </div>
                  <a
                    href={coverage.link}
                    className="ml-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Assets */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Media Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/brand"
              className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 hover:border-purple-500/50 transition-all group"
            >
              <ImageIcon className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Brand Assets</h3>
              <p className="text-white/70 text-sm mb-4">Logos, colors, wallpapers, and profile images</p>
              <div className="flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all">
                View Brand Kit <ExternalLink className="w-4 h-4" />
              </div>
            </Link>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <ImageIcon className="w-8 h-8 text-white/40 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Product Screenshots</h3>
              <p className="text-white/70 text-sm mb-4">High-resolution product images</p>
              <p className="text-white/40 text-xs">Coming soon</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Video className="w-8 h-8 text-white/40 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Video Demos</h3>
              <p className="text-white/70 text-sm mb-4">Product walkthroughs and demos</p>
              <p className="text-white/40 text-xs">Coming soon</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <ImageIcon className="w-8 h-8 text-white/40 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Founder Photos</h3>
              <p className="text-white/70 text-sm mb-4">High-resolution headshots</p>
              <p className="text-white/40 text-xs">Contact for access</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <FileText className="w-8 h-8 text-white/40 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Fact Sheet</h3>
              <p className="text-white/70 text-sm mb-4">One-page company overview (PDF)</p>
              <p className="text-white/40 text-xs">Coming soon</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <FileText className="w-8 h-8 text-white/40 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Press Kit ZIP</h3>
              <p className="text-white/70 text-sm mb-4">Complete media kit download</p>
              <p className="text-white/40 text-xs">Coming soon</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-white/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 p-8">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Media Inquiries</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div className="flex-1">
                    <p className="text-white/60 text-sm">Email</p>
                    <div className="flex items-center gap-2">
                      <a href="mailto:press@ekkos.dev" className="text-white hover:text-purple-400 transition-colors">
                        press@ekkos.dev
                      </a>
                      <button
                        onClick={() => copyToClipboard('press@ekkos.dev', 'email')}
                        className="p-1 rounded hover:bg-white/10 transition-colors"
                      >
                        {copiedEmail ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-white/60" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Response Time</p>
                  <p className="text-white">Within 2 hours during business hours</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Interview Requests</p>
                  <p className="text-white">Usually scheduled within 24 hours</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">General Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <a href="mailto:hello@ekkos.dev" className="text-white hover:text-purple-400 transition-colors">
                      hello@ekkos.dev
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Website</p>
                  <a href="https://ekkos.dev" className="text-white hover:text-purple-400 transition-colors" target="_blank" rel="noopener noreferrer">
                    ekkos.dev
                  </a>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Social Media</p>
                  <div className="flex gap-3">
                    <a href="https://twitter.com/ekkosdev" className="text-white/60 hover:text-purple-400 transition-colors" target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                    <a href="https://github.com/ekkostech/ekkos" className="text-white/60 hover:text-purple-400 transition-colors" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Statistics</h2>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">User Metrics</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• 10,000+ active users across 50+ countries</li>
                  <li>• 94% retention rate after 2 weeks</li>
                  <li>• 35% month-over-month organic growth</li>
                  <li>• 4.2 average conversations per week per user</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Market Context</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• 100M+ ChatGPT users frustrated with lack of memory</li>
                  <li>• $1.3T AI infrastructure market opportunity</li>
                  <li>• 78% of students use AI for studying (OpenAI survey)</li>
                  <li>• SOC 2 compliant, FERPA compliant for schools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 p-12">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-xl text-white/70 mb-6">
            We're here to help with interviews, demos, and additional assets.
          </p>
          <a
            href="mailto:press@ekkos.dev"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
          >
            <Mail className="w-5 h-5" />
            Contact Press Team
          </a>
        </div>
      </div>
    </div>
  );
}









































































































































