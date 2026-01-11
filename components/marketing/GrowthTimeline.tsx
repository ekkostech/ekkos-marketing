'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { cn } from '@/lib/utils/cn';
import { Rocket, TrendingUp, Zap } from 'lucide-react';

interface TimelinePhase {
  period: string;
  title: string;
  icon: typeof Zap;
  color: string;
  bgColor: string;
  metrics: {
    patterns: string;
    coverage: string;
    speedup: string;
  };
  features: string[];
}

const phases: TimelinePhase[] = [
  {
    period: 'Day 1',
    title: 'Immediate Value',
    icon: Zap,
    color: 'text-emerald-400',
    bgColor: 'from-emerald-500/20 to-green-500/20',
    metrics: {
      patterns: '50+ pre-loaded',
      coverage: 'Common issues',
      speedup: '2-3x',
    },
    features: [
      '50+ pre-loaded patterns for Node.js, React, Next.js, Supabase',
      '2-3x speedup on common setup/config issues',
      'Conflict checking works from first session',
    ],
  },
  {
    period: 'Week 1-4',
    title: 'Accelerating Returns',
    icon: Rocket,
    color: 'text-blue-400',
    bgColor: 'from-blue-500/20 to-cyan-500/20',
    metrics: {
      patterns: '20-50 custom',
      coverage: 'Your codebase',
      speedup: '4-6x',
    },
    features: [
      'Your unique patterns start accumulating (target: 20-50 patterns)',
      'Coverage expands to your specific codebase/stack',
      'Speedup grows to 4-6x as pattern library matures',
    ],
  },
  {
    period: 'Month 2-3',
    title: 'Compound Intelligence',
    icon: TrendingUp,
    color: 'text-purple-400',
    bgColor: 'from-purple-500/20 to-pink-500/20',
    metrics: {
      patterns: '100+',
      coverage: '70%+',
      speedup: '10-15x',
    },
    features: [
      '100+ patterns capturing your workflow and decisions',
      '70%+ problem coverage (most issues have patterns)',
      '10-15x speedup on recurring problems',
      'AI "knows" your codebase like a senior engineer',
    ],
  },
];

export function GrowthTimeline() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
            How Long Until I See Results?
          </span>
        </h2>
        <p className="text-xl text-white/60 max-w-3xl mx-auto">
          Transparent timelines showing when you'll see compound learning kick in.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {phases.map((phase, i) => {
          const Icon = phase.icon;
          return (
            <GlassCard
              key={i}
              variant="elevated"
              className={cn("p-8 relative overflow-hidden", `bg-gradient-to-br ${phase.bgColor}`)}
            >
              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className={cn("w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center", phase.color)}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 font-medium">{phase.period}</div>
                    <h3 className={cn("text-2xl font-bold", phase.color)}>
                      {phase.title === 'Immediate Value' ? (
                        <>
                          Immediate<br />Value
                        </>
                      ) : (
                        phase.title
                      )}
                    </h3>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Patterns</span>
                    <span className="text-white font-semibold">{phase.metrics.patterns}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Coverage</span>
                    <span className="text-white font-semibold">{phase.metrics.coverage}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Speedup</span>
                    <span className={cn("font-bold text-lg", phase.color)}>{phase.metrics.speedup}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {phase.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                      <div className={cn("w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0", phase.color.replace('text-', 'bg-'))} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Compound Effect Message */}
      <GlassCard variant="prominent" glow="purple" className="p-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white">The Longer You Use It, The Better It Gets</h3>
          <p className="text-white/80 leading-relaxed">
            ekkOS is designed for compound learning. Unlike static tools that plateau, 
            your memory system gets exponentially smarter with every problem solved.
          </p>
          <div className="pt-4 border-t border-white/10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">
                Exponential curve: Week 1 → Month 1 → Month 3
              </span>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}



































































