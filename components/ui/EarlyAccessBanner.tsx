'use client';

import { motion } from 'framer-motion';
import { Rocket, MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface EarlyAccessBannerProps {
  variant?: 'full' | 'compact';
  dismissible?: boolean;
}

const DISCORD_INVITE = 'https://discord.gg/w2JGepq9qZ';

export function EarlyAccessBanner({ variant = 'full', dismissible = false }: EarlyAccessBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissible) {
      const wasDismissed = localStorage.getItem('ekkos_beta_banner_dismissed');
      if (wasDismissed) setDismissed(true);
    }
  }, [dismissible]);

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('ekkos_beta_banner_dismissed', 'true');
  };

  if (dismissed) return null;

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-emerald-500/10 border border-purple-500/20 rounded-xl p-3 mb-4"
      >
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              🎉 2026
            </span>
            <span className="text-sm text-white/70">
              New Year, Smarter AI. Free forever on Developer plan.
            </span>
          </div>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#5865F2]/20 hover:bg-[#5865F2]/30 text-[#5865F2] text-sm font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Join Discord
          </a>
        </div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-white/40" />
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-500/20 via-blue-500/15 to-emerald-500/20 border-b border-white/10"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-2 sm:py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="hidden sm:block"
            >
              <Rocket className="w-5 h-5 text-emerald-400" />
            </motion.div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              🎉 2026
            </span>
            <span className="text-xs sm:text-sm text-white/80">
              <strong className="text-white">New Year, Smarter AI.</strong>
              <span className="hidden sm:inline"> Join developers who never explain their code twice.</span>
            </span>
          </div>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs sm:text-sm font-medium transition-colors shadow-lg shadow-[#5865F2]/25"
          >
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            Join Discord
          </a>
        </div>
      </div>

      {dismissible && (
        <button
          onClick={handleDismiss}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded-lg transition-colors"
        >
          <X className="w-4 h-4 text-white/40" />
        </button>
      )}
    </motion.div>
  );
}
