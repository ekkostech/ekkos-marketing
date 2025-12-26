'use client';

import { cn } from '@/lib/utils/cn';

interface PulseIndicatorProps {
  status: 'healthy' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
  className?: string;
}

const statusColors = {
  healthy: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
};

const statusRingColors = {
  healthy: 'bg-green-500/30',
  warning: 'bg-yellow-500/30',
  error: 'bg-red-500/30',
  info: 'bg-blue-500/30',
};

const sizeClasses = {
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
};

export function PulseIndicator({
  status,
  size = 'md',
  showLabel = false,
  label,
  className,
}: PulseIndicatorProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative flex items-center justify-center">
        {/* Outer pulsing ring */}
        <span
          className={cn(
            'absolute rounded-full animate-ping',
            statusRingColors[status],
            sizeClasses[size]
          )}
          style={{ animationDuration: '2s' }}
        />
        {/* Middle ring */}
        <span
          className={cn(
            'absolute rounded-full opacity-75 animate-ping',
            statusRingColors[status],
            sizeClasses[size]
          )}
          style={{ animationDuration: '2s', animationDelay: '0.3s' }}
        />
        {/* Core dot */}
        <span
          className={cn(
            'relative rounded-full',
            statusColors[status],
            sizeClasses[size]
          )}
        />
      </div>

      {showLabel && (
        <span className="text-sm text-secondary">
          {label || status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      )}
    </div>
  );
}
