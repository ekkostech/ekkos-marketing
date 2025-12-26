'use client';

import { Activity, Sparkles, TrendingUp, TrendingDown, Users, Zap, Database } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { AnimatedCounter } from './AnimatedCounter';
import { cn } from '@/lib/utils/cn';

// Icon mapping for server component compatibility
const iconMap = {
  Activity,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Database,
} as const;

type IconName = keyof typeof iconMap;

interface MetricCardProps {
  label: string;
  value: number | string;
  previousValue?: number;
  format?: 'number' | 'percentage' | 'duration' | 'currency';
  icon: IconName;
  color: 'purple' | 'blue' | 'emerald' | 'pink' | 'amber';
  sparklineData?: number[];
  loading?: boolean;
  delay?: number;
}

const colorClasses = {
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-500',
    gradient: 'from-purple-500/20 to-transparent',
  },
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-500',
    gradient: 'from-blue-500/20 to-transparent',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-500',
    gradient: 'from-emerald-500/20 to-transparent',
  },
  pink: {
    bg: 'bg-pink-500/10',
    text: 'text-pink-500',
    gradient: 'from-pink-500/20 to-transparent',
  },
  amber: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-500',
    gradient: 'from-amber-500/20 to-transparent',
  },
};

function formatValue(value: number, format: MetricCardProps['format']): string {
  switch (format) {
    case 'percentage':
      return `${value.toFixed(1)}%`;
    case 'duration':
      return `${value}ms`;
    case 'currency':
      return `$${value.toLocaleString()}`;
    default:
      return value.toLocaleString();
  }
}

function calculateTrend(current: number, previous: number): {
  percentage: number;
  direction: 'up' | 'down' | 'neutral';
} {
  if (previous === 0) return { percentage: 0, direction: 'neutral' };
  const percentage = ((current - previous) / previous) * 100;
  const direction = percentage > 0 ? 'up' : percentage < 0 ? 'down' : 'neutral';
  return { percentage: Math.abs(percentage), direction };
}

export function MetricCard({
  label,
  value,
  previousValue,
  format = 'number',
  icon: iconName,
  color,
  sparklineData,
  loading = false,
  delay = 0,
}: MetricCardProps) {
  const colors = colorClasses[color];
  const numericValue = typeof value === 'number' ? value : 0;
  const trend = previousValue !== undefined ? calculateTrend(numericValue, previousValue) : null;

  // Get the icon component from the map
  const Icon = iconMap[iconName];

  if (loading) {
    return (
      <GlassCard variant="elevated" animate delay={delay} className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-4 w-24 bg-white/10 rounded" />
            <div className="h-10 w-10 bg-white/10 rounded-xl" />
          </div>
          <div className="h-8 w-32 bg-white/10 rounded" />
          <div className="h-4 w-20 bg-white/10 rounded" />
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard
      variant="elevated"
      hover="lift"
      animate
      delay={delay}
      className="p-6 relative overflow-hidden group"
    >
      {/* Background gradient */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500',
          colors.gradient
        )}
      />

      {/* Content */}
      <div className="relative z-10 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-secondary font-medium">{label}</span>
          <div className={cn('p-2.5 rounded-xl', colors.bg)}>
            <Icon className={cn('w-5 h-5', colors.text)} />
          </div>
        </div>

        {/* Value */}
        <div className="flex items-end justify-between">
          <div>
            {typeof value === 'number' ? (
              <AnimatedCounter
                value={value}
                format={(n) => formatValue(n, format)}
                className="text-3xl font-bold text-primary"
              />
            ) : (
              <div className="text-3xl font-bold text-primary">{value}</div>
            )}
          </div>

          {/* Trend */}
          {trend && trend.direction !== 'neutral' && (
            <div
              className={cn(
                'flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full',
                trend.direction === 'up'
                  ? 'bg-emerald-500/10 text-emerald-500'
                  : 'bg-red-500/10 text-red-500'
              )}
            >
              {trend.direction === 'up' ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span>{trend.percentage.toFixed(1)}%</span>
            </div>
          )}
        </div>

        {/* Sparkline */}
        {sparklineData && sparklineData.length > 0 && (
          <div className="h-12 -mx-6 -mb-6 px-6 pb-6">
            <div className="h-full relative">
              <svg
                viewBox={`0 0 ${sparklineData.length * 10} 40`}
                className="w-full h-full opacity-50"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d={generateSparklinePath(sparklineData)}
                  fill={`url(#gradient-${color})`}
                  className={colors.text}
                />
                <path
                  d={generateSparklinePath(sparklineData, true)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={colors.text}
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </GlassCard>
  );
}

function generateSparklinePath(data: number[], strokeOnly = false): string {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => {
    const x = index * 10;
    const y = 40 - ((value - min) / range) * 35;
    return `${x},${y}`;
  });

  if (strokeOnly) {
    return `M ${points.join(' L ')}`;
  }

  const firstPoint = points[0].split(',');
  const lastPoint = points[points.length - 1].split(',');

  return `M ${firstPoint[0]},40 L ${points.join(' L ')} L ${lastPoint[0]},40 Z`;
}
