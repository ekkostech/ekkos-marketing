'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { BarChart3, Target, TrendingUp } from 'lucide-react';

interface DataPoint {
  week: number;
  patterns: number;
  speedup: number;
  coverage: number;
}

const timelineData: DataPoint[] = [
  { week: 1, patterns: 12, speedup: 2.3, coverage: 8 },
  { week: 2, patterns: 28, speedup: 3.1, coverage: 15 },
  { week: 3, patterns: 45, speedup: 3.8, coverage: 22 },
  { week: 4, patterns: 62, speedup: 4.5, coverage: 28 },
  { week: 8, patterns: 89, speedup: 5.8, coverage: 34 },
  { week: 12, patterns: 347, speedup: 12.4, coverage: 71 },
];

export function LearningCurve() {
  const maxPatterns = Math.max(...timelineData.map(d => d.patterns));
  const maxCoverage = 100;

  return (
    <div className="space-y-12">
      {/* Pattern Library Growth */}
      <GlassCard variant="elevated" className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-6 h-6 text-purple-400" />
          <h3 className="text-2xl font-bold text-white">Pattern Library Growth</h3>
        </div>
        <p className="text-white/60 mb-6 text-sm">
          Cumulative patterns captured over time. More patterns = faster problem solving.
        </p>
        
        <div className="space-y-4">
          {timelineData.map((point, i) => {
            const isMilestone = point.week === 1 || point.week === 4 || point.week === 8 || point.week === 12;
            if (!isMilestone) return null;
            
            const width = (point.patterns / maxPatterns) * 100;
            const label = point.week === 1 ? 'Week 1' : point.week === 4 ? 'Month 1' : point.week === 8 ? 'Month 2' : 'Month 3';
            
            return (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80 font-medium">{label}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-purple-400 font-bold">{point.patterns} patterns</span>
                    <span className="text-emerald-400 font-bold">→ {point.speedup}x speedup</span>
                  </div>
                </div>
                <div className="h-8 bg-white/5 rounded-lg overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500/60 to-purple-400/80 rounded-lg transition-all duration-1000"
                    style={{ width: `${width}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-semibold text-white/90">{point.patterns}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>

      {/* Pattern Coverage Evolution */}
      <GlassCard variant="elevated" className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-6 h-6 text-blue-400" />
          <h3 className="text-2xl font-bold text-white">Pattern Coverage Evolution</h3>
        </div>
        <p className="text-white/60 mb-6 text-sm">
          Percentage of problems that have matching patterns. Higher coverage = less time explaining context.
        </p>
        
        <div className="space-y-4">
          {timelineData.filter(p => p.week === 1 || p.week === 4 || p.week === 8 || p.week === 12).map((point, i) => {
            const width = (point.coverage / maxCoverage) * 100;
            const label = point.week === 1 ? 'Week 1' : point.week === 4 ? 'Month 1' : point.week === 8 ? 'Month 2' : 'Month 3';
            const description = point.week === 1 ? 'mostly common fixes' : point.week === 4 ? 'recurring issues captured' : point.week === 8 ? 'workflow patterns emerging' : 'deep institutional knowledge';
            
            return (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80 font-medium">{label}</span>
                  <span className="text-white/50 text-xs italic">{description}</span>
                </div>
                <div className="h-8 bg-white/5 rounded-lg overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500/60 to-cyan-400/80 rounded-lg transition-all duration-1000"
                    style={{ width: `${width}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-semibold text-white/90">{point.coverage}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>

      {/* Success Rate Maturation */}
      <GlassCard variant="elevated" className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-emerald-400" />
          <h3 className="text-2xl font-bold text-white">Success Rate Maturation</h3>
        </div>
        <p className="text-white/60 mb-6 text-sm">
          Average pattern confidence improves as patterns are validated through real usage.
        </p>
        
        <div className="space-y-6">
          {[
            { period: 'Initial patterns', rate: 0.62, label: 'learning phase', color: 'from-amber-500/60 to-orange-400/80' },
            { period: 'Month 1 patterns', rate: 0.81, label: 'validated', color: 'from-blue-500/60 to-cyan-400/80' },
            { period: 'Month 3 patterns', rate: 0.93, label: 'battle-tested', color: 'from-emerald-500/60 to-green-400/80' },
          ].map((item, i) => {
            const width = item.rate * 100;
            
            return (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80 font-medium">{item.period}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">{(item.rate * 100).toFixed(0)}%</span>
                    <span className="text-white/50 text-xs italic">({item.label})</span>
                  </div>
                </div>
                <div className="h-8 bg-white/5 rounded-lg overflow-hidden relative">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-lg transition-all duration-1000`}
                    style={{ width: `${width}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-semibold text-white/90">{(item.rate * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </div>
  );
}



































































