'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: ReactNode;
}

export function ShimmerButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className = '',
  children,
  ...props
}: ShimmerButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary: 'bg-gradient-neural text-white',
    secondary: 'bg-white/10 text-primary border border-white/20',
    ghost: 'bg-transparent text-primary hover:bg-white/5',
  };

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-xl font-semibold
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      disabled={disabled || loading}
      {...props}
    >
      {/* Shimmer effect */}
      {variant === 'primary' && !disabled && !loading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{
            x: '200%',
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </span>

      {/* Glow effect on hover */}
      {variant === 'primary' && !disabled && (
        <motion.div
          className="absolute inset-0 opacity-0 blur-xl"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6), transparent)',
          }}
          whileHover={{
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}
