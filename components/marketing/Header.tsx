'use client';

import { LanguageSwitcher, LanguageSwitcherCompact } from '@/components/LanguageSwitcher';
import { useTranslation } from '@/i18n';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                ekkOS
              </span>
              <span className="text-purple-400 animate-pulse">_</span>
              <sup className="text-xs text-purple-400/60 ml-0.5">™</sup>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm text-white/60 hover:text-white transition-colors">
              {t('nav.features')}
            </Link>
            <Link href="/pricing" className="text-sm text-white/60 hover:text-white transition-colors">
              {t('nav.pricing')}
            </Link>
            <a
              href="https://blog.ekkos.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Blog
            </a>
            <a
              href="https://docs.ekkos.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {t('nav.docs')}
            </a>
            <a
              href="https://github.com/ekkostech/ekkos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Desktop CTA + Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="https://platform.ekkos.dev/login"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {t('nav.signIn')}
            </a>
            <a
              href="https://platform.ekkos.dev/signup"
              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
            >
              {t('nav.getStarted')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/features" className="text-sm text-white/60 hover:text-white transition-colors">
                {t('nav.features')}
              </Link>
              <Link href="/pricing" className="text-sm text-white/60 hover:text-white transition-colors">
                {t('nav.pricing')}
              </Link>
              <a
                href="https://blog.ekkos.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Blog
              </a>
              <a
                href="https://docs.ekkos.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {t('nav.docs')}
              </a>
              <a
                href="https://github.com/ekkostech/ekkos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                GitHub
              </a>

              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs text-white/40 mb-2">{t('language.select')}</div>
                <LanguageSwitcherCompact />
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                <a
                  href="https://platform.ekkos.dev/login"
                  className="text-sm text-center py-2 text-white/70 hover:text-white transition-colors"
                >
                  {t('nav.signIn')}
                </a>
                <a
                  href="https://platform.ekkos.dev/signup"
                  className="text-sm text-center py-2 font-medium bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
                >
                  {t('nav.getStarted')}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
