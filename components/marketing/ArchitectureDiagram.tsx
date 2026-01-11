'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { cn } from '@/lib/utils/cn';
import {
  Brain,
  Code2,
  Database,
  FileText,
  Search,
  Shield,
  Sparkles,
  TrendingUp,
  User,
  Zap,
} from 'lucide-react';

export function ArchitectureDiagram() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-2">
            The ekkOS Layer
          </h2>
          <p className="text-white/50 text-lg">
            The infrastructure that gives your AI persistent memory
          </p>
        </div>

        {/* Main Flow Diagram */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1.5fr_auto_1fr] gap-4 items-center min-h-[320px]">
            {/* Box 1: YOU */}
            <GlassCard variant="elevated" className="p-6 text-center h-full flex flex-col justify-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
                <User className="w-7 h-7 text-white/80" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">You</h3>
              <p className="text-sm text-white/50">Ask a question</p>
            </GlassCard>

            {/* Arrow 1 */}
            <div className="flex items-center justify-center">
              <svg width="48" height="24" viewBox="0 0 48 24" className="text-purple-400/60">
                <defs>
                  <linearGradient id="arrowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 12 L36 12 M30 6 L42 12 L30 18"
                  stroke="url(#arrowGrad1)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Box 2: ekkOS MEMORY (Center - Dominant) */}
            <GlassCard
              variant="prominent"
              glow="purple"
              className="p-8 relative overflow-hidden"
            >
              {/* Subtle animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-purple-500/10 opacity-50" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">ekkOS Memory</h3>
                    <p className="text-xs text-purple-300/80">Living knowledge layer</p>
                  </div>
                </div>

                {/* Sub-boxes Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {/* Patterns */}
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <Sparkles className="w-5 h-5 text-amber-400 mb-2" />
                    <div className="text-sm font-semibold text-white">Patterns</div>
                    <div className="text-xs text-white/50">What worked</div>
                  </div>

                  {/* Directives */}
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <Shield className="w-5 h-5 text-blue-400 mb-2" />
                    <div className="text-sm font-semibold text-white">Directives</div>
                    <div className="text-xs text-white/50">Your rules</div>
                  </div>

                  {/* Episodes */}
                  <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <FileText className="w-5 h-5 text-purple-400 mb-2" />
                    <div className="text-sm font-semibold text-white">Episodes</div>
                    <div className="text-xs text-white/50">Past work</div>
                  </div>
                </div>

                {/* Golden Loop Badge */}
                <div className="flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                    <div className="w-4 h-4 rounded-full border-2 border-purple-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    </div>
                    <span className="text-xs font-medium text-purple-300">Golden Loop: Learn → Apply → Improve</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Arrow 2 */}
            <div className="flex items-center justify-center">
              <svg width="48" height="24" viewBox="0 0 48 24" className="text-emerald-400/60">
                <defs>
                  <linearGradient id="arrowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 12 L36 12 M30 6 L42 12 L30 18"
                  stroke="url(#arrowGrad2)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Box 3: SMARTER AI */}
            <GlassCard variant="elevated" className="p-6 text-center h-full flex flex-col justify-center bg-gradient-to-br from-emerald-500/5 to-transparent">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center border border-emerald-500/30">
                <Brain className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smarter AI</h3>
              <div className="space-y-1 text-sm text-white/60">
                <p>Knows your history</p>
                <p>Follows your rules</p>
                <p className="text-emerald-400/80">Gets smarter daily</p>
              </div>
            </GlassCard>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-4">
            {/* YOU */}
            <GlassCard variant="elevated" className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-white/80" />
              </div>
              <div>
                <h3 className="font-semibold text-white">You</h3>
                <p className="text-sm text-white/50">Ask a question in your IDE</p>
              </div>
            </GlassCard>

            {/* Down Arrow */}
            <div className="flex justify-center py-2">
              <svg width="24" height="32" viewBox="0 0 24 32" className="text-purple-400/60">
                <path
                  d="M12 0 L12 24 M6 18 L12 28 L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* ekkOS MEMORY */}
            <GlassCard variant="prominent" glow="purple" className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">ekkOS Memory</h3>
                  <p className="text-xs text-purple-300/80">Living knowledge layer</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
                  <Sparkles className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <div className="text-xs font-medium text-white">Patterns</div>
                </div>
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center">
                  <Shield className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                  <div className="text-xs font-medium text-white">Rules</div>
                </div>
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-center">
                  <FileText className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                  <div className="text-xs font-medium text-white">History</div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30">
                  <div className="w-3 h-3 rounded-full border-2 border-purple-400 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
                  </div>
                  <span className="text-xs text-purple-300">Golden Loop Active</span>
                </div>
              </div>
            </GlassCard>

            {/* Down Arrow */}
            <div className="flex justify-center py-2">
              <svg width="24" height="32" viewBox="0 0 24 32" className="text-emerald-400/60">
                <path
                  d="M12 0 L12 24 M6 18 L12 28 L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* SMARTER AI */}
            <GlassCard variant="elevated" className="p-5 flex items-center gap-4 bg-gradient-to-r from-emerald-500/5 to-transparent">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                <Brain className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Smarter AI</h3>
                <p className="text-sm text-white/50">Knows history • Follows rules • Improves daily</p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Bottom Capability Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Search, label: 'Search', desc: 'Finds relevant patterns before AI answers', color: 'purple' },
            { icon: Sparkles, label: 'Capture', desc: 'Auto-saves what works without effort', color: 'amber' },
            { icon: Shield, label: 'Validate', desc: 'Checks against your rules first', color: 'blue' },
            { icon: TrendingUp, label: 'Compound', desc: 'Gets smarter every day you use it', color: 'emerald' },
          ].map((item, i) => (
            <div
              key={item.label}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className={cn(
                "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0",
                item.color === 'purple' && 'bg-purple-500/20',
                item.color === 'amber' && 'bg-amber-500/20',
                item.color === 'blue' && 'bg-blue-500/20',
                item.color === 'emerald' && 'bg-emerald-500/20',
              )}>
                <item.icon className={cn(
                  "w-4 h-4",
                  item.color === 'purple' && 'text-purple-400',
                  item.color === 'amber' && 'text-amber-400',
                  item.color === 'blue' && 'text-blue-400',
                  item.color === 'emerald' && 'text-emerald-400',
                )} />
              </div>
              <div>
                <div className="text-sm font-semibold text-white mb-0.5">{item.label}</div>
                <div className="text-xs text-white/50 leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
