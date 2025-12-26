'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { ArrowRight, Clock, Zap } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface ExampleCardProps {
  problem: string;
  before: string;
  after: string;
  speedup: string;
  delay?: number;
}

export function ExampleCard({
  problem,
  before,
  after,
  speedup,
  delay = 0,
}: ExampleCardProps) {
  return (
    <GlassCard
      variant="elevated"
      hover="border"
      delay={delay}
      className="p-6 group"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Problem */}
        <div className="flex-1">
          <p className="text-white font-medium mb-2">{problem}</p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Without ekkOS: {before}</span>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:block">
          <ArrowRight className="w-6 h-6 text-purple-400" />
        </div>

        {/* After */}
        <div className="flex-1 md:text-right">
          <div className="flex items-center justify-start md:justify-end gap-2 mb-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-medium">With ekkOS: {after}</span>
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {speedup} faster
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
