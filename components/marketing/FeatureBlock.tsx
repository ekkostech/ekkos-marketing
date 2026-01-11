'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface FeatureBlockProps {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  detail?: string;
  delay?: number;
  glow?: 'purple' | 'blue' | 'emerald' | 'pink' | 'none';
}

export function FeatureBlock({
  icon: Icon,
  number,
  title,
  description,
  detail,
  delay = 0,
  glow = 'purple',
}: FeatureBlockProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <GlassCard
      variant="elevated"
      glow={glow}
      hover="lift"
      delay={delay}
      className="p-8 group"
    >
      {/* Number Badge */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {number}
        </span>
      </div>

      {/* Icon */}
      <div className="mb-6">
        <Icon className="w-12 h-12 text-purple-400" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-lg leading-relaxed mb-4">
        {description}
      </p>

      {/* Expandable Detail */}
      {detail && (
        <div className="mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ChevronRight
              className={cn(
                'w-4 h-4 transition-transform',
                expanded && 'rotate-90'
              )}
            />
            <span className="text-sm font-medium">
              {expanded ? 'Show less' : 'How it works'}
            </span>
          </button>

          {expanded && (
            <div className="mt-4 p-4 bg-black/20 rounded-lg border border-white/5 animate-fade-in-up">
              <p className="text-sm text-gray-400 leading-relaxed">
                {detail}
              </p>
            </div>
          )}
        </div>
      )}
    </GlassCard>
  );
}
