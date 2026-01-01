'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { ArrowLeft, Brain, Clock, Database, FileImage, Infinity, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ForeverMemoryPage() {
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
            <Infinity className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Forever Memory<sup className="text-2xl">™</sup>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Some things you never want the AI to forget. ekkOS gives them Forever Memory™.
          </p>
        </div>

        {/* Core Principle */}
        <div className="max-w-4xl mx-auto space-y-8">
          <GlassCard variant="elevated" className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-purple-500/20">
                <Infinity className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Never Forgotten, Never Decayed
                </h2>
                <p className="text-white/70 leading-relaxed text-lg mb-4">
                  Every memory item in ekkOS has a retention mode. <strong className="text-white">Forever Memory™</strong> means items that never decay or get pruned—always retrievable, always preserved.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Files, images, audio, patterns, and key insights are stored as Forever Memory™ so you can always recall them, no matter how much time passes.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Three Retention Levels */}
          <GlassCard variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Three Levels of Memory Retention</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Session Memory</h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    Ephemeral
                  </span>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Short-term context that clears when you&apos;re done. Perfect for temporary context during active work sessions.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">Standard Memory</h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    Long-term
                  </span>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Long-term knowledge that can gradually fade if irrelevant or unused. Subject to intelligent decay algorithms that preserve what matters.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <Infinity className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Forever Memory™</h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 font-semibold">
                    Permanent
                  </span>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  Never decayed, never pruned. Always preserved. Items stored as Forever Memory™ skip all decay algorithms and remain accessible indefinitely.
                </p>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-white/70">
                    <strong className="text-purple-400">Protected:</strong> Forever Memory™ items are excluded from all retention maintenance, decay calculations, and pruning operations.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* What Uses Forever Memory */}
          <GlassCard variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">What Uses Forever Memory™</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              These types of content are automatically stored as Forever Memory™:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <FileImage className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-white">Multimodal Items</h3>
                </div>
                <p className="text-sm text-white/60">
                  Images, audio files, and other media uploads are stored as Forever Memory™ so you can always reference them.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-white">Forged Patterns</h3>
                </div>
                <p className="text-sm text-white/60">
                  Patterns you forge are Forever Memory™—they represent proven solutions you want to keep.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-white">Core Semantic Knowledge</h3>
                </div>
                <p className="text-sm text-white/60">
                  Key insights and important facts are preserved as Forever Memory™ for long-term reference.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-white">User Preferences</h3>
                </div>
                <p className="text-sm text-white/60">
                  Your settings and preferences are Forever Memory™ so your AI always knows how you work.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* How It Works */}
          <GlassCard variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">How Forever Memory™ Works</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-white mb-2">1. Automatic Assignment</h3>
                <p className="text-sm text-white/70">
                  When you upload files, forge patterns, or save important insights, ekkOS automatically assigns them Forever Memory™ retention.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-white mb-2">2. Decay Exception</h3>
                <p className="text-sm text-white/70">
                  Items with <code className="text-purple-400 bg-white/10 px-1.5 py-0.5 rounded">retention_policy='forever'</code> skip all decay algorithms. The system explicitly checks and returns a decay score of 1.0 (no decay) for Forever Memory™ items.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-white mb-2">3. Always Retrievable</h3>
                <p className="text-sm text-white/70">
                  Forever Memory™ items are always included in search results and never pruned, even if they haven&apos;t been accessed in a long time.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-white mb-2">4. Manual Upgrade</h3>
                <p className="text-sm text-white/70">
                  You can upgrade any memory item to Forever Memory™ if you want to ensure it&apos;s never forgotten.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Visual Comparison */}
          <GlassCard variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Memory Retention Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-3 pr-6 text-white font-semibold">Retention Type</th>
                    <th className="pb-3 pr-6 text-white font-semibold">Duration</th>
                    <th className="pb-3 pr-6 text-white font-semibold">Decay</th>
                    <th className="pb-3 text-white font-semibold">Use Case</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-6">
                      <span className="px-2 py-1 text-xs rounded bg-blue-500/20 text-blue-400">Session</span>
                    </td>
                    <td className="py-3 pr-6">Until session ends</td>
                    <td className="py-3 pr-6">Immediate</td>
                    <td className="py-3">Temporary context</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-6">
                      <span className="px-2 py-1 text-xs rounded bg-cyan-500/20 text-cyan-400">Standard</span>
                    </td>
                    <td className="py-3 pr-6">30+ days</td>
                    <td className="py-3 pr-6">Gradual (if unused)</td>
                    <td className="py-3">General knowledge</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-6">
                      <span className="px-2 py-1 text-xs rounded bg-purple-500/20 text-purple-400 font-semibold">Forever™</span>
                    </td>
                    <td className="py-3 pr-6">Permanent</td>
                    <td className="py-3 pr-6">Never</td>
                    <td className="py-3">Files, patterns, key insights</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* CTA */}
          <GlassCard variant="elevated" className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Experience Forever Memory™?</h2>
            <p className="text-white/70 mb-6">
              Start using ekkOS and see how Forever Memory™ preserves what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://platform.ekkos.dev/signup"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Get Started Free
              </Link>
              <Link
                href="/docs/memory/retention"
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
            <Link href="/features" className="text-white/60 hover:text-white transition-colors">
              All Features
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/docs" className="text-white/60 hover:text-white transition-colors">
              Documentation
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/pricing" className="text-white/60 hover:text-white transition-colors">
              Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
