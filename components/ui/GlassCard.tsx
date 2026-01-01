'use client';

import { cn } from '@/lib/utils/cn';
import { HTMLAttributes, ReactNode } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'subtle' | 'default' | 'elevated' | 'prominent';
  glow?: 'purple' | 'blue' | 'emerald' | 'pink' | 'amber' | 'none';
  hover?: 'lift' | 'glow' | 'border' | 'none';
  animate?: boolean;
  delay?: number;
  children: ReactNode;
}

const variantClasses = {
  subtle: 'bg-white/[0.02] border-white/5',
  default: 'bg-white/[0.04] border-white/8',
  elevated: 'bg-white/[0.06] border-white/10',
  prominent: 'bg-white/[0.08] border-white/12',
};

const glowClasses = {
  purple: 'shadow-glow-purple hover:shadow-[0_0_80px_rgba(139,92,246,0.5)]',
  blue: 'shadow-glow-blue hover:shadow-[0_0_80px_rgba(59,130,246,0.5)]',
  emerald: 'shadow-glow-emerald hover:shadow-[0_0_80px_rgba(16,185,129,0.5)]',
  pink: 'shadow-glow-pink hover:shadow-[0_0_80px_rgba(217,70,239,0.5)]',
  amber: 'shadow-[0_0_60px_rgba(245,158,11,0.4)] hover:shadow-[0_0_80px_rgba(245,158,11,0.5)]',
  none: '',
};

const hoverClasses = {
  lift: 'hover:-translate-y-1 hover:shadow-2xl hover:border-white/20',
  glow: 'hover:shadow-glow-purple hover:border-white/15',
  border: 'hover:border-white/25',
  none: '',
};

// CSS animation delays
const delayClasses: Record<number, string> = {
  0: 'animate-fade-in-up',
  0.1: 'animate-fade-in-up animation-delay-100',
  0.2: 'animate-fade-in-up animation-delay-200',
  0.3: 'animate-fade-in-up animation-delay-300',
  0.4: 'animate-fade-in-up animation-delay-400',
};

export function GlassCard({
  variant = 'default',
  glow = 'none',
  hover = 'none',
  animate = true,
  delay = 0,
  children,
  className,
  style,
  ...props
}: GlassCardProps) {
  const baseClasses = 'backdrop-blur-md border rounded-2xl transition-all duration-300 ease-out';

  // Convert delay to animation delay style
  const animationStyle = animate && delay > 0 ? {
    ...style,
    animationDelay: `${delay}s`,
    animationFillMode: 'both' as const,
  } : style;

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        glowClasses[glow],
        hoverClasses[hover],
        animate && 'animate-fade-in-up',
        className
      )}
      style={animationStyle}
      {...props}
    >
      {children}
    </div>
  );
}
