'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface ComparisonCardProps {
  label: string;
  items: string[];
  highlight?: boolean;
  delay?: number;
}

export function ComparisonCard({
  label,
  items,
  highlight = false,
  delay = 0,
}: ComparisonCardProps) {
  return (
    <GlassCard
      variant={highlight ? 'prominent' : 'elevated'}
      glow={highlight ? 'purple' : 'none'}
      hover={highlight ? 'glow' : 'border'}
      delay={delay}
      className={cn(
        'p-6 group',
        highlight && 'ring-2 ring-purple-500/50'
      )}
    >
      {/* Label */}
      <div className="mb-6">
        <h3 className={cn(
          'text-xl font-bold mb-2',
          highlight
            ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
            : 'text-white'
        )}>
          {label}
        </h3>
        {highlight && (
          <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full">
            <span className="text-xs font-medium text-purple-300">
              ekkOS Approach
            </span>
          </div>
        )}
      </div>

      {/* Items */}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            {highlight ? (
              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
            )}
            <span className={cn(
              'text-sm leading-relaxed',
              highlight ? 'text-gray-300' : 'text-gray-400'
            )}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
