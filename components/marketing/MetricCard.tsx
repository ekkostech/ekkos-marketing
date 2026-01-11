'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { cn } from '@/lib/utils/cn';

interface MetricCardProps {
  value: string;
  label: string;
  detail: string;
  variant?: 'subtle' | 'default' | 'elevated' | 'prominent';
  glow?: 'purple' | 'blue' | 'emerald' | 'pink' | 'none';
  delay?: number;
}

export function MetricCard({
  value,
  label,
  detail,
  variant = 'elevated',
  glow = 'purple',
  delay = 0,
}: MetricCardProps) {
  // Extract numeric value for animation if present
  const numericMatch = value.match(/^(\d+\.?\d*)/);
  const numericValue = numericMatch ? parseFloat(numericMatch[1]) : null;
  const suffix = numericValue && numericMatch ? value.replace(numericMatch[0], '') : value;
  const hasDecimal = value.includes('.');

  return (
    <GlassCard
      variant={variant}
      glow={glow}
      hover="lift"
      delay={delay}
      className="p-8 text-center group"
    >
      <div className="mb-4">
        {numericValue !== null ? (
          <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            <AnimatedCounter
              value={numericValue}
              duration={2000}
              decimals={hasDecimal ? 2 : 0}
            />
            <span>{suffix}</span>
          </div>
        ) : (
          <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {value}
          </div>
        )}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">
        {label}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {detail}
      </p>
    </GlassCard>
  );
}
