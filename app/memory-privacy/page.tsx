'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { ArrowLeft, CheckCircle2, Eye, Globe, Lock, Shield, Users, X } from 'lucide-react';
import Link from 'next/link';

export default function MemoryPrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How ekkOS Memory Privacy Works
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Your memory is private by default. You choose what can be shared. Sensitive information is never shared.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Key Principle */}
          <GlassCard variant="elevated" className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-emerald-500/20">
                <Lock className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  The Core Promise
                </h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  <strong className="text-white">ekkOS only shares what you intentionally allow</strong> — and only as anonymized strategy patterns, never as code or content. Everything else stays private by architecture.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Section 1: Private by Default */}
          <GlassCard variant="elevated" className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3">
                  1. Your memory is private by default
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Everything ekkOS learns from your work is stored under your account only.
                </p>
                <p className="text-white/70 leading-relaxed mb-4">
                  Other users cannot see:
                </p>
                <ul className="space-y-2 text-white/70 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Your events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Your episodes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Your patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Your project data</span>
                  </li>
                </ul>
                <p className="text-white/70 leading-relaxed mt-4">
                  All data is protected by row-level security (RLS) that enforces privacy at the database level. Even our team cannot access your private memory.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Section 2: You Choose What Can Be Shared */}
          <GlassCard variant="elevated" className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-purple-500/20">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3">
                  2. You choose what can be shared
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Some discoveries are universal (debug fixes, workflow improvements, common approaches).
                </p>
                <p className="text-white/70 leading-relaxed mb-4">
                  You can mark these as:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="w-5 h-5 text-blue-400" />
                      <h3 className="font-semibold text-white">Private</h3>
                    </div>
                    <p className="text-sm text-white/60">Only you can see and use this pattern</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-purple-400" />
                      <h3 className="font-semibold text-white">Team</h3>
                    </div>
                    <p className="text-sm text-white/60">Only your team/org can see this pattern</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-5 h-5 text-emerald-400" />
                      <h3 className="font-semibold text-white">Collective</h3>
                    </div>
                    <p className="text-sm text-white/60">Shared anonymously as a general pattern (anonymized)</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed mt-4">
                  <strong className="text-white">Nothing leaves your private space unless you intentionally allow it.</strong>
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Section 3: Sensitive Information Never Shared */}
          <GlassCard variant="elevated" className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-red-500/20">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3">
                  3. Sensitive information is never shared
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  ekkOS never shares:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  {[
                    'Code',
                    'Project names',
                    'Files',
                    'Documents',
                    'Conversations',
                    'Credentials',
                    'Anything traceable to you',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed">
                  Only the abstract strategy (the "shape" of a solution) can be shared, and only if you've allowed it.
                </p>
                <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-white/60 mb-2">
                    <strong className="text-white">Example of what is NOT shared:</strong>
                  </p>
                  <p className="text-sm text-red-400/80 font-mono">
                    "Fix auth.js line 43, user model credentials missing."
                  </p>
                  <p className="text-sm text-white/60 mt-3 mb-2">
                    <strong className="text-white">Example of what CAN be shared (if you allow):</strong>
                  </p>
                  <p className="text-sm text-emerald-400/80 font-mono">
                    "When authentication fails due to missing configuration, validate environment variables and provider settings."
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Section 4: Patterns Evolve Safely */}
          <GlassCard variant="elevated" className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-cyan-500/20">
                <Globe className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3">
                  4. Patterns evolve safely
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  When a shared pattern succeeds or fails, ekkOS adjusts its confidence automatically.
                </p>
                <ul className="space-y-2 text-white/70 ml-4 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Low-success patterns fade out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>High-value patterns surface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>The system gets smarter without exposing your data</span>
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>

          {/* Section 5: You Can Opt Out */}
          <GlassCard variant="elevated" className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-yellow-500/20">
                <Eye className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3">
                  5. You can opt out at any time
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Set any pattern to:
                </p>
                <ul className="space-y-2 text-white/70 ml-4 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Never share</strong> — Keep it completely private</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Never promote</strong> — Don't consider this for collective learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Project-only</strong> — Scoped to specific projects</span>
                  </li>
                </ul>
                <p className="text-white/70 leading-relaxed mt-4">
                  <strong className="text-white">You are always in control</strong> of what ekkOS learns from your work.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Visual Diagram */}
          <GlassCard variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-sm font-semibold text-blue-400 mb-2">Your Data</p>
                <p className="text-sm text-white/70">Events → Episodes → Patterns → Your Memory</p>
              </div>
              <div className="flex items-center justify-center text-white/40">
                <div className="h-px w-full bg-white/10" />
                <span className="px-4">↓ (optional, anonymized)</span>
                <div className="h-px w-full bg-white/10" />
              </div>
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-sm font-semibold text-emerald-400 mb-2">Collective Memory</p>
                <p className="text-sm text-white/70">Abstract pattern templates only (no data)</p>
              </div>
            </div>
            <p className="text-sm text-white/60 mt-4">
              <strong className="text-white">Your memory is your memory.</strong> Collective memory is pattern shapes only, not data.
            </p>
          </GlassCard>

          {/* CTA */}
          <GlassCard variant="elevated" className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/70 mb-6">
              Your memory is private by default. You control what's shared.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://platform.ekkos.dev/signup"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all"
              >
                Get Started
              </Link>
              <Link
                href="/docs/memory/privacy"
                className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all border border-white/20"
              >
                Technical Documentation
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/support" className="text-white/60 hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
