'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import {
    ArrowRight,
    BookOpen,
    Check,
    Code,
    Copy,
    Database,
    ExternalLink,
    Search,
    Shield,
    Sparkles,
    Terminal,
    Zap
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function DocsPage() {
  const [copied, setCopied] = useState('');

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  const quickStart = `{
  "mcpServers": {
    "ekkos-memory": {
      "command": "npx",
      "args": ["-y", "@ekkos/mcp-server"],
      "env": {
        "EKKOS_API_KEY": "your-key-here"
      }
    }
  }
}`;

  const sections = [
    {
      title: 'Quick Start',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'Installation', href: '#installation' },
        { name: 'Configuration', href: '#configuration' },
        { name: 'First Steps', href: '#first-steps' },
      ]
    },
    {
      title: 'Core Concepts',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: '8-Layer Memory System', href: '#memory-layers' },
        { name: 'Pattern Learning', href: '#patterns' },
        { name: 'Golden Loop', href: '#golden-loop' },
      ]
    },
    {
      title: 'Core Memory Tools',
      icon: Terminal,
      color: 'from-emerald-500 to-teal-500',
      items: [
        { name: 'search_memory - Search Memory', href: '#search-memory' },
        { name: 'forge_pattern - Save Patterns', href: '#forge-pattern' },
        { name: 'forge_directive - Create Rules', href: '#forge-directive' },
        { name: 'check_conflict - Validate Actions', href: '#check-conflict' },
        { name: 'recall_conversation - Recall Past', href: '#recall-conversation' },
      ]
    },
    {
      title: 'Integration',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      items: [
        { name: 'Cursor IDE', href: '#cursor' },
        { name: 'Claude Code', href: '#claude-code' },
        { name: 'VS Code', href: '#vscode' },
        { name: 'API Reference', href: '#api' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black select-text">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            ekkOS<sup className="text-lg">™</sup> Documentation
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Build AI agents with persistent memory, pattern learning, and hallucination detection
          </p>
        </div>

        {/* Quick Start Card */}
        <GlassCard variant="elevated" glow="purple" className="max-w-4xl mx-auto mb-12 p-8 select-text">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Quick Start</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3" id="installation">1. Get Your API Key</h3>
              <p className="text-white/60 mb-4">
                Sign up for a free account and generate your API key from the dashboard.
              </p>
              <Link
                href="https://platform.ekkos.dev/signup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Create Free Account
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div id="configuration">
              <h3 className="text-lg font-semibold text-white mb-3">2. Install MCP Server</h3>
              <p className="text-white/60 mb-4">
                Add ekkOS to your Claude Desktop or IDE configuration:
              </p>
              <div className="relative">
                <pre className="bg-black/40 border border-white/10 rounded-xl p-4 overflow-x-auto select-text">
                  <code className="text-sm text-emerald-400 select-text">{quickStart}</code>
                </pre>
                <button
                  onClick={() => copyCode(quickStart, 'quickstart')}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {copied === 'quickstart' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/60" />
                  )}
                </button>
              </div>
            </div>

            <div id="first-steps">
              <h3 className="text-lg font-semibold text-white mb-3">3. Start Using Core Memory Tools</h3>
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 select-text">
                  <Search className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <code className="text-emerald-400 select-text">search_memory</code>
                    <span className="text-white/60 ml-2 select-text">- Search your memory for past solutions</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 select-text">
                  <Sparkles className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <code className="text-emerald-400 select-text">forge_pattern</code>
                    <span className="text-white/60 ml-2 select-text">- Save important decisions and patterns</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 select-text">
                  <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <code className="text-emerald-400 select-text">check_conflict</code>
                    <span className="text-white/60 ml-2 select-text">- Validate AI suggestions against your history</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Documentation Sections Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <GlassCard key={section.title} variant="elevated" className="p-6 select-text">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors py-1"
                      >
                        <ArrowRight className="w-4 h-4" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            );
          })}
        </div>

        {/* Core Concepts */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Memory Layers */}
          <div id="memory-layers">
            <h2 className="text-3xl font-bold text-white mb-6">8-Layer Memory System</h2>
            <GlassCard variant="elevated" className="p-6 select-text">
              <div className="space-y-4">
                <p className="text-white/60">
                  ekkOS implements an advanced 8-layer memory architecture inspired by cognitive science:
                </p>
                <div className="grid gap-3">
                  {[
                    { layer: 'Working Memory', desc: 'Recent chat messages (24h window)' },
                    { layer: 'Episodic Memory', desc: 'Conversation episodes and context' },
                    { layer: 'Semantic Memory', desc: 'Compressed knowledge entries' },
                    { layer: 'Pattern Memory', desc: 'Reusable strategies and solutions' },
                    { layer: 'Procedural Memory', desc: 'Step-by-step workflows' },
                    { layer: 'Collective Memory', desc: 'Cross-agent learning (7d window)' },
                    { layer: 'Meta Memory', desc: 'System self-awareness records' },
                    { layer: 'Codebase Memory', desc: 'Code embeddings for semantic search' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 select-text">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium select-text">{item.layer}</p>
                        <p className="text-sm text-white/50 select-text">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Golden Loop */}
          <div id="golden-loop">
            <h2 className="text-3xl font-bold text-white mb-6">The Golden Loop</h2>
            <GlassCard variant="elevated" glow="amber" className="p-6 select-text">
              <p className="text-white/60 mb-6">
                The self-improving cycle that makes ekkOS smarter with every interaction:
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {['CAPTURE', 'LEARN', 'RETRIEVE', 'INJECT', 'MEASURE'].map((step, i) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-2">
                        <span className="text-white font-bold">{i + 1}</span>
                      </div>
                      <p className="text-white font-medium text-sm">{step}</p>
                    </div>
                    {i < 4 && <ArrowRight className="w-5 h-5 text-amber-400" />}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Need Help */}
          <GlassCard variant="elevated" className="p-8 text-center select-text">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
            <p className="text-white/60 mb-6">
              Join our community or reach out to support for assistance
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/support"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
              >
                Contact Support
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://github.com/ekkostech/ekkos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
              >
                GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
