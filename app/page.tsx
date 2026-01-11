'use client';

import { ArchitectureDiagram } from '@/components/marketing/ArchitectureDiagram';
import { ExampleCard } from '@/components/marketing/ExampleCard';
import { FeatureBlock } from '@/components/marketing/FeatureBlock';
import { GrowthTimeline } from '@/components/marketing/GrowthTimeline';
import { IntelligenceTrace } from '@/components/marketing/IntelligenceTrace';
import { InteractiveDemo } from '@/components/marketing/InteractiveDemo';
import { LearningCurve } from '@/components/marketing/LearningCurve';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { EarlyAccessBanner } from '@/components/ui/EarlyAccessBanner';
import { GlassCard } from '@/components/ui/GlassCard';
import { useLiveStats } from '@/hooks/useLiveStats';
import { cn } from '@/lib/utils/cn';
import { PRICING_PLANS, formatPrice } from '@/lib/pricing-config';
import {
    AlertTriangle,
    ArrowRight,
    Brain,
    Check,
    CheckCircle2,
    ChevronRight,
    Code2,
    Cpu,
    Database,
    GitBranch,
    Globe,
    Layers,
    Lock,
    Search,
    Shield,
    Sparkles,
    Terminal,
    TrendingUp,
    X,
    Zap
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const { stats } = useLiveStats(30000); // Refresh every 30 seconds

  // IDE integrations
  const agents = [
    { name: 'Cursor', icon: Terminal, color: 'from-blue-500 to-cyan-500' },
    { name: 'Claude Code', icon: Brain, color: 'from-orange-500 to-red-500' },
    { name: 'VS Code', icon: Code2, color: 'from-purple-500 to-pink-500' },
    { name: 'Windsurf', icon: Zap, color: 'from-green-500 to-emerald-500' },
    { name: 'API / CLI', icon: Terminal, color: 'from-gray-500 to-gray-600' },
  ];

  // Core capabilities (outcome-focused, no tool names)
  const capabilities = [
    { name: 'Smart Search', desc: 'Your AI automatically searches your memory before answering. Get relevant patterns, solutions, and context instantly.', icon: Search, color: 'purple' },
    { name: 'Auto-Capture', desc: 'Solutions that work become reusable patterns. Your AI learns from every problem solved without manual effort.', icon: Sparkles, color: 'amber' },
    { name: 'Set Rules', desc: 'Define MUST/NEVER/PREFER/AVOID rules your AI follows. Your preferences become permanent behavioral constraints.', icon: Zap, color: 'blue' },
    { name: 'Total Recall', desc: 'Remember what you discussed days or weeks ago. Find past conversations and decisions instantly.', icon: GitBranch, color: 'emerald' },
    { name: 'Conflict Check', desc: 'Validate suggestions against your rules before acting. Flags when suggestions conflict with your preferences.', icon: Lock, color: 'rose' },
    { name: 'Schema Awareness', desc: 'Knows your database fields and types. No more "column does not exist" errors from AI-generated queries.', icon: Database, color: 'cyan' },
  ];

  // Pricing tiers from centralized config
  const tiers = [
    {
      name: PRICING_PLANS.developer.displayName,
      tier: PRICING_PLANS.developer.displayName,
      price: formatPrice(PRICING_PLANS.developer),
      period: '',
      badge: PRICING_PLANS.developer.badge,
      description: PRICING_PLANS.developer.description,
      features: [
        'Cross-platform memory (Cursor, Claude Code, VS Code)',
        'Auto-save solutions (20/day limit)',
        'Conflict checking (100 checks/month)',
        '1 active workspace',
        '100 memory searches / month',
        '50 solutions saved / month',
        '7-day retention',
        'Community support',
      ],
      cta: 'Start Free',
      ctaLink: '/signup',
      variant: 'elevated' as const,
    },
    {
      name: PRICING_PLANS.professional.displayName,
      tier: PRICING_PLANS.professional.displayName,
      price: formatPrice(PRICING_PLANS.professional),
      period: '',
      badge: PRICING_PLANS.professional.badge || null,
      description: PRICING_PLANS.professional.description,
      features: [
        'Unlimited cross-platform memory',
        'Unlimited solution capture',
        'Unlimited conflict checks',
        'ekkOS_Forever_Memory™',
        'Unlimited IDE connections',
        'Pattern insights dashboard',
        'Community knowledge access',
        'API access',
        'Priority support',
      ],
      cta: 'Coming Soon',
      ctaLink: null,
      variant: 'prominent' as const,
    },
    {
      name: PRICING_PLANS.team.displayName,
      tier: PRICING_PLANS.team.displayName,
      price: formatPrice(PRICING_PLANS.team),
      period: '',
      badge: PRICING_PLANS.team.badge || null,
      description: PRICING_PLANS.team.description,
      features: [
        'Everything in Pro',
        'Shared pattern library across team',
        'Team memory spaces with role-awareness',
        'Team analytics & drift detection',
        'Collaborative pattern curation',
        'Admin controls & permissions',
        'SSO (Google, GitHub, SAML)',
        'Audit logs',
        'Custom retention policies',
      ],
      cta: 'Contact Us',
      ctaLink: 'mailto:team@ekkos.dev',
      variant: 'elevated' as const,
    },
    {
      name: PRICING_PLANS.enterprise.displayName,
      tier: 'Enterprise',
      price: formatPrice(PRICING_PLANS.enterprise),
      period: '',
      badge: PRICING_PLANS.enterprise.badge || null,
      description: PRICING_PLANS.enterprise.description,
      features: [
        'Everything in Team',
        'Self-hosted / VPC deployment',
        'SOC2, HIPAA compliance',
        'Custom data residency',
        'Dedicated CSM',
        'Custom integrations',
        'SLA guarantees',
      ],
      cta: 'Contact Us',
      ctaLink: 'mailto:enterprise@ekkos.dev',
      variant: 'elevated' as const,
    },
  ];

  return (
    <>
      <EarlyAccessBanner />
      <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />

        {/* Massive Background ekkOS_ */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none overflow-hidden pt-[8vh] md:pt-[10vh]">
          <span
            className="text-[20vw] md:text-[25vw] lg:text-[30vw] font-black tracking-tighter whitespace-nowrap"
            style={{
              background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ekkOS_
          </span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Brand */}
          <div className="mb-4 sm:mb-6 animate-fade-in-up">
            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                ekkOS
              </span>
              <span className="cursor-blink text-purple-400">_</span>
              <sup className="text-base sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent align-super ml-0.5 sm:ml-1">™</sup>
            </h1>
          </div>

          {/* Badges */}
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 animate-fade-in-up backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
              <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm text-emerald-300 font-medium">Starts at 2x. Accelerates to 10x+.</span>
            </div>
            <Link
              href="/security"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-colors animate-fade-in-up backdrop-blur-sm"
              style={{ animationDelay: '0.15s' }}
            >
              <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
              <span className="text-xs sm:text-sm text-green-300 font-medium">SOC 2 Compliant</span>
            </Link>
          </div>

          {/* Headline - Problem First */}
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Stop Re-Explaining Your Code to AI
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-4 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Your AI forgets everything between sessions. ekkOS remembers — and gets smarter every time you use it.
          </p>

          {/* Growth Timeline Badge */}
          <div className="max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-emerald-500/20 border border-purple-500/30 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
              <div className="text-center">
                <div className="text-xs sm:text-sm font-semibold text-white">
                  <span className="hidden sm:inline">Week 1: Solve first problems | Month 1: 5-7x | Month 3: 10-15x</span>
                  <span className="sm:hidden">Week 1: 2x → Month 3: 10x+</span>
                </div>
                <div className="text-[10px] sm:text-xs text-white/60 mt-0.5 hidden sm:block">
                  Your AI builds compound intelligence from every problem solved.
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="https://platform.ekkos.dev/signup"
              className="group flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl font-bold text-base sm:text-lg hover:from-emerald-600 hover:to-green-600 transition-all shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 ring-2 ring-emerald-400/30"
            >
              Start Free — No Credit Card
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105"
            >
              See How It Works
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Install - VS Code Extension */}
          <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl border border-purple-500/30 p-4 sm:p-8 shadow-2xl hover:shadow-purple-500/20 transition-shadow">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white">Get Started in 3 Clicks</h3>
                  <p className="text-xs sm:text-sm text-white/60">Install ekkos-connect for VS Code</p>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-white/80 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>One-click authentication</span>
                </div>
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-white/80 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>Automatic configuration</span>
                </div>
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-white/80 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>Works with Claude Code & Cursor</span>
                </div>
              </div>

              <a
                href="vscode:extension/ekkos.ekkos-connect"
                className="group flex items-center justify-center gap-2 w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
              >
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                Install Extension
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-[10px] sm:text-xs text-white/40 mt-3 sm:mt-4 text-center">
                Works with Cursor, Claude Code & VS Code
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram - The ekkOS Layer */}
      <ArchitectureDiagram />

      {/* Interactive Demo - Show the magic moment */}
      <InteractiveDemo />

      {/* How It Works - Simplified to Top 3 Features */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent to-purple-500/5" id="how-it-works">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                How It Works
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 max-w-3xl mx-auto">
              Three core capabilities that make your AI genuinely smarter over time.
            </p>
          </div>

          <div className="space-y-8">
            {/* Feature 1: Cross-Platform Cognitive Infrastructure */}
            <FeatureBlock
              icon={Globe}
              number="1"
              title="One Memory, All Your Tools"
              description="Install once. Works across Cursor, Claude Code, VS Code, Windsurf, and any MCP-compatible tool. Your AI assistants share the same memory."
              detail="No more explaining your codebase to every new tool. ekkOS syncs your memory across all your development environments. Switch tools freely—your patterns, decisions, and fixes come with you."
              glow="blue"
              delay={0}
            />

            {/* Feature 2: Continuous Learning */}
            <FeatureBlock
              icon={Sparkles}
              number="2"
              title="Continuous Learning"
              description="Every time you solve a problem, ekkOS learns from it. Next time, your AI already knows the answer."
              detail="Your solutions improve with use. No manual curation required—what works gets better, what doesn't gets filtered. This is living memory, not static storage."
              glow="purple"
              delay={0.1}
            />

            {/* Feature 3: Confidence Signals */}
            <FeatureBlock
              icon={Shield}
              number="3"
              title="Confidence Signals for AI Suggestions"
              description="ekkOS checks if suggestions match your experience. Grounded ✅, Speculative ⚠️, or Conflicts ❌—know before you implement."
              detail="Validates suggestions instantly against your patterns, decisions, and preferences. Saves hours of debugging bad AI advice by flagging problems before you commit."
              glow="emerald"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-12 sm:py-24 px-4 sm:px-6" id="capabilities">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                What Your AI Can Do
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 max-w-3xl mx-auto">
              Powerful capabilities that happen automatically.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {capabilities.map((cap, i) => (
              <GlassCard key={cap.name} variant="elevated" hover="lift" delay={i * 0.05} className="p-3 sm:p-6 text-center group">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 rounded-lg sm:rounded-xl bg-${cap.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <cap.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${cap.color}-400`} />
                </div>
                <div className="text-sm sm:text-lg font-bold mb-1 sm:mb-3 text-white">{cap.name}</div>
                <div className="text-xs sm:text-sm text-white/60 leading-relaxed hidden sm:block">{cap.desc}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Your Learning Curve Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Your Learning Curve
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 max-w-3xl mx-auto">
              Real metrics showing how ekkOS compounds over time.
            </p>
          </div>

          {/* Growth Charts */}
          <LearningCurve />

          {/* Real Examples */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Real Examples from Our Internal Development
            </h3>
            <div className="max-w-3xl mx-auto mb-8">
              <GlassCard variant="elevated" className="p-6 bg-amber-500/10 border-amber-500/30">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-white/80">
                    <strong className="text-amber-300">Important:</strong> These are specific documented cases after months of use
                    with a mature pattern library. Your early results will be more modest
                    (2-3x) and accelerate as your library grows.
                  </div>
                </div>
              </GlassCard>
            </div>
            <div className="space-y-4 max-w-4xl mx-auto">
              <ExampleCard
                problem="ES Module configuration errors"
                before="47 minutes"
                after="31 seconds"
                speedup="91x"
                delay={0}
              />
              <ExampleCard
                problem="MCP server connection issues"
                before="38 minutes"
                after="1m 42s"
                speedup="22x"
                delay={0.1}
              />
              <ExampleCard
                problem="Supabase timeout handling"
                before="23 minutes"
                after="2m 14s"
                speedup="10x"
                delay={0.2}
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm">
                <strong className="text-white">Your First Week:</strong> Expect 2-3x speedup on common issues as you build 
                your initial pattern library. By month 3, you'll see speedups like these.
              </p>
            </div>
          </div>

          {/* Key Insight */}
          <div className="mt-16 max-w-3xl mx-auto">
            <GlassCard variant="prominent" glow="purple" className="p-8 text-center">
              <p className="text-lg text-white/80 leading-relaxed">
                <span className="text-purple-400 font-semibold">The compound effect:</span> Every problem solved becomes a pattern. Every pattern saves time. The more you use ekkOS, the faster you ship.
              </p>
            </GlassCard>
          </div>

          {/* Mid-scroll CTA */}
          <div className="mt-12 text-center">
            <Link
              href="https://platform.ekkos.dev/signup"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
            >
              Start Building Your Advantage
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-white/40 mt-3">Free forever on {PRICING_PLANS.developer.displayName} plan • No credit card required</p>
          </div>
        </div>
      </section>

      {/* How Long Until I See Results? */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-purple-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <GrowthTimeline />
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                AI That Actually Learns
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 max-w-3xl mx-auto">
              ekkOS runs continuous learning around every interaction
            </p>
          </div>

          {/* Key Insight */}
          <div className="mb-12">
            <GlassCard variant="prominent" glow="purple" className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">The Key Insight</h3>
                  <p className="text-white/80 leading-relaxed">
                    Most AI tools start from zero every session. ekkOS builds on what worked before.
                    <span className="text-purple-400 font-semibold"> The more you use it, the smarter it gets.</span>
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Simple Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard variant="elevated" className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Search className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Remembers</h3>
              <p className="text-sm text-white/60">Pulls relevant solutions when you ask a question</p>
            </GlassCard>
            <GlassCard variant="elevated" className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Learns</h3>
              <p className="text-sm text-white/60">Captures what works for next time</p>
            </GlassCard>
            <GlassCard variant="elevated" className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Improves</h3>
              <p className="text-sm text-white/60">Gets better with every use</p>
            </GlassCard>
          </div>

          {/* Live Intelligence Trace */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-white text-center mb-6">
              See It In Action
            </h3>
            <IntelligenceTrace />
          </div>

        </div>
      </section>

      {/* The Magic Moment - Day 1 / Day 2 / Day 30 */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-blue-500/5 to-transparent relative overflow-hidden" id="magic">
        {/* Background Image - Magic Particles */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: 'url(/images/magic-moment-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                The Magic Moment
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 max-w-3xl mx-auto">
              Feel the difference from day one. Watch it compound over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {/* Day 1 */}
            <GlassCard variant="elevated" className="p-4 sm:p-8 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-base sm:text-lg font-bold text-purple-400">1</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">Day 1: First Session</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 rounded-lg bg-white/5 border-l-2 border-purple-500">
                  <p className="text-xs sm:text-sm text-white/60 mb-1">You ask:</p>
                  <p className="text-sm sm:text-base text-white">"Set up auth with Supabase"</p>
                </div>

                <div className="p-3 sm:p-4 rounded-lg bg-white/5 border-l-2 border-blue-500">
                  <p className="text-xs sm:text-sm text-white/60 mb-1">ekkOS_ asks:</p>
                  <p className="text-sm sm:text-base text-white">"Remember this?"</p>
                </div>

                <div className="p-3 sm:p-4 rounded-lg bg-white/5 border-l-2 border-green-500">
                  <p className="text-xs sm:text-sm text-white/60 mb-1">You say "Yes" — now it's:</p>
                  <p className="text-sm sm:text-base text-green-400 font-medium">ekkOS_Forever_Memory™</p>
                </div>
              </div>
            </GlassCard>

            {/* Day 2 */}
            <GlassCard variant="prominent" glow="purple" className="p-4 sm:p-8 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-base sm:text-lg font-bold text-green-400">2</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">Day 2: The Magic</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 rounded-lg bg-white/5 border-l-2 border-purple-500">
                  <p className="text-xs sm:text-sm text-white/60 mb-1">You ask:</p>
                  <p className="text-sm sm:text-base text-white">"Add password reset"</p>
                </div>

                <div className="p-3 sm:p-4 rounded-lg bg-white/5 border-l-2 border-blue-500">
                  <p className="text-xs sm:text-sm text-white/60 mb-1">ekkOS automatically:</p>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Applies your prior knowledge and validates suggestions.
                  </p>
                </div>

                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
                    <span className="text-green-400 font-medium text-sm">Verified</span>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm">
                    "Matches your prior decisions."
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Day 30 */}
            <GlassCard variant="prominent" glow="emerald" className="p-4 sm:p-8 space-y-4 sm:space-y-6 md:col-span-3 lg:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-base sm:text-lg font-bold text-emerald-400">30</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">Day 30: Acceleration</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <p className="text-xs sm:text-sm text-white/60">After 1 month:</p>
                    <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">Typical</span>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-xs sm:text-sm">Solutions</span>
                      <span className="text-base sm:text-lg font-bold text-emerald-400">Dozens</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-xs sm:text-sm">Decisions</span>
                      <span className="text-base sm:text-lg font-bold text-cyan-400">Hundreds</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-xs sm:text-sm">Speedup</span>
                      <span className="text-base sm:text-lg font-bold text-purple-400">~5x</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <span className="text-white/80 text-xs sm:text-sm">Month 3</span>
                      <span className="text-lg sm:text-xl font-bold text-emerald-400">~10x</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-4 rounded-lg bg-white/5 border-l-2 border-emerald-500">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium text-xs sm:text-sm">Compound Effect</span>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Ship faster. Fewer mistakes. The gap widens.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* IDE Integrations */}
      <section className="py-12 sm:py-24 px-4 sm:px-6" id="integrations">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                One Memory. All Tools.
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 max-w-3xl mx-auto">
              Switch between IDEs, web, and CLI — your memory follows everywhere.
            </p>
          </div>

          {/* Center Hub */}
          <div className="flex justify-center mb-8">
            <GlassCard variant="prominent" glow="purple" className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-50 blur-xl animate-pulse-slow" />
              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">ekkOS_™</div>
                  <div className="text-sm text-white/60">Unified Memory</div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Agent Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {agents.map((agent, index) => (
              <GlassCard
                key={agent.name}
                variant="elevated"
                hover="lift"
                delay={index * 0.05}
                className="p-6 text-center group relative overflow-hidden"
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity",
                  agent.color
                )} />
                <div className="relative space-y-3">
                  <div className={cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mx-auto",
                    "group-hover:scale-110 transition-transform duration-300",
                    agent.color
                  )}>
                    <agent.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-white">{agent.name}</div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <div className="text-xs text-green-400">Ready</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Memory Gateway - Use Any AI */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" id="gateway">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Memory Gateway</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Works Across Leading AI Providers. One Memory.
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 max-w-3xl mx-auto">
              Use GPT-5, Claude, Grok, or Gemini — your patterns and context follow you everywhere.
            </p>
          </div>

          {/* Provider Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { name: 'OpenAI', examples: 'GPT-5.1, GPT-4o, o3, o4', status: 'live', color: 'from-emerald-500 to-green-500' },
              { name: 'Anthropic', examples: 'Claude 4.5, Claude 4', status: 'live', color: 'from-orange-500 to-amber-500' },
              { name: 'xAI (Grok)', examples: 'Grok 4, Grok 3', status: 'live', color: 'from-blue-500 to-cyan-500' },
              { name: 'Google', examples: 'Gemini 3, 2.5, 2.0', status: 'live', color: 'from-red-500 to-rose-500' },
            ].map((provider, index) => (
              <GlassCard
                key={provider.name}
                variant="elevated"
                hover="lift"
                delay={index * 0.05}
                className="p-6 text-center group relative overflow-hidden"
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity",
                  provider.color
                )} />
                <div className="relative space-y-2">
                  <div className={cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mx-auto",
                    "group-hover:scale-110 transition-transform duration-300",
                    provider.color
                  )}>
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-bold text-white">{provider.name}</div>
                  <div className="text-xs text-white/50">{provider.examples}</div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <div className="text-xs text-green-400">Live</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <GlassCard variant="elevated" className="p-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Automatic Context</h3>
              <p className="text-sm text-white/60">
                Your relevant knowledge is automatically applied to every request, no matter which provider you use.
              </p>
            </GlassCard>

            <GlassCard variant="elevated" className="p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                <Brain className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Unified Memory</h3>
              <p className="text-sm text-white/60">
                Teach Claude something, GPT knows it. All your tools share the same knowledge base.
              </p>
            </GlassCard>

            <GlassCard variant="elevated" className="p-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Simple Integration</h3>
              <p className="text-sm text-white/60">
                Connect once and get memory-aware AI across all your tools. Works out of the box.
              </p>
            </GlassCard>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="https://docs.ekkos.dev/integrations/memory-gateway"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-medium hover:bg-white/10 hover:border-cyan-500/30 transition-all"
            >
              View Gateway Docs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Solo Devs */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-purple-500/5 to-transparent" id="individuals">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                For Solo Developers
              </h2>
              <p className="text-lg text-white/60 mb-8">
                Stop explaining your codebase to AI every session. Stop re-debugging the same issues.
                Your AI remembers so you can focus on shipping.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Never repeat yourself to AI again',
                  'Auto-capture fixes and decisions',
                  'Avoid past mistakes automatically',
                  'See why suggestions were made',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-purple-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-xl font-medium text-white">
                Your AI gets smarter every day you use it.
              </p>
            </div>

            <GlassCard variant="elevated" className="p-8 space-y-6">
              <h3 className="text-lg font-bold text-white">Typical After 30 Days</h3>
              <p className="text-sm text-white/50 -mt-2">Based on active users with mature pattern libraries</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                  <span className="text-sm text-white/60">Solutions Captured</span>
                  <span className="text-xl font-bold text-emerald-400">
                    <AnimatedCounter value={stats.patterns} decimals={0} />+
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                  <span className="text-sm text-white/60">Decisions Remembered</span>
                  <span className="text-xl font-bold text-blue-400">
                    <AnimatedCounter value={stats.episodes} decimals={0} />+
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                  <span className="text-sm text-white/60">Average Speedup</span>
                  <span className="text-xl font-bold text-purple-400">
                    {stats.speedup}
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* For Teams */}
      <section className="py-12 sm:py-24 px-4 sm:px-6" id="teams">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              For Teams
            </h2>
            <p className="text-base sm:text-xl text-white/60 max-w-3xl mx-auto">
              New engineer + ekkOS_ = instant team knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Shared Knowledge', desc: 'One senior solves a problem. Everyone\'s AI learns it instantly.' },
              { title: 'Consistent Suggestions', desc: 'AI recommendations aligned with team conventions, not random Stack Overflow.' },
              { title: 'Onboarding Acceleration', desc: 'New hires have access to years of institutional knowledge from day one.' },
              { title: 'Drift Detection', desc: 'Analytics show when patterns diverge. Consolidate before it becomes debt.' },
            ].map((item, i) => (
              <GlassCard key={i} variant="elevated" hover="lift" delay={i * 0.05} className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Confidence Signals Deep Dive */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-emerald-500/5 to-transparent" id="firewall">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">Pro Feature</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                Confidence Signals™
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 max-w-3xl mx-auto">
              Every AI suggestion verified against your actual history.
            </p>
          </div>

          <GlassCard variant="prominent" glow="emerald" className="p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-green-400">Verified</h3>
                <p className="text-sm text-white/60">
                  Suggestion aligns with what's worked for you before. Safe to use.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-amber-400">Unverified</h3>
                <p className="text-sm text-white/60">
                  New territory—no prior experience. Proceed with caution.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-red-500/20 flex items-center justify-center">
                  <X className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-red-400">Conflicts</h3>
                <p className="text-sm text-white/60">
                  Contradicts a past decision. ekkOS_ tells you what and why.
                </p>
              </div>
            </div>
          </GlassCard>

          <div className="text-center">
            <p className="text-white/50">
              ekkOS continuously validates AI suggestions against your accumulated knowledge and preferences,
              helping you catch mistakes before they cost you time.
            </p>
          </div>
        </div>
      </section>

      {/* The Golden Loop - Learning Differentiator */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" id="golden-loop">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-400 font-medium">What Makes ekkOS Different</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Other MCP Servers Store. ekkOS Learns.
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 max-w-3xl mx-auto">
              The difference between static memory and adaptive intelligence
            </p>
          </div>

          {/* The Golden Loop Visual */}
          <div className="max-w-4xl mx-auto mb-12">
            <GlassCard variant="prominent" glow="amber" className="p-8">
              <h3 className="text-xl font-bold text-center text-white mb-6">The Golden Loop™</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Search className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="text-sm font-semibold text-white">1. Retrieve</div>
                  <div className="text-xs text-white/50">Find relevant patterns</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-sm font-semibold text-white">2. Apply</div>
                  <div className="text-xs text-white/50">Use the solution</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="text-sm font-semibold text-white">3. Measure</div>
                  <div className="text-xs text-white/50">Track if it worked</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="text-sm font-semibold text-white">4. Learn</div>
                  <div className="text-xs text-white/50">Update patterns</div>
                </div>
              </div>
              <p className="text-center text-white/70 text-sm">
                Every cycle makes your patterns smarter. Bad solutions get demoted. Good solutions get promoted.
              </p>
            </GlassCard>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <GlassCard variant="elevated" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Static Memory</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Returns same answer whether it worked or not',
                  'Requires manual curation and cleanup',
                  'No feedback loop - can\'t improve',
                  'Outdated patterns stay forever',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                    <X className="w-4 h-4 mt-0.5 text-red-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard variant="prominent" glow="emerald" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white">ekkOS Learning Memory</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Tracks what worked and what didn\'t',
                  'Auto-captures successful solutions',
                  'Continuous improvement from usage',
                  'Outdated patterns decay naturally',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          {/* Key Insight */}
          <div className="max-w-3xl mx-auto">
            <GlassCard variant="elevated" className="p-8 text-center">
              <p className="text-lg text-white/80 leading-relaxed">
                <span className="text-purple-400 font-semibold">The difference:</span> After 100 uses,
                static memory is exactly where it started. ekkOS has learned from 100 outcomes —
                promoting what worked, demoting what didn't. That's compound intelligence.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-24 px-4 sm:px-6" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 max-w-3xl mx-auto">
              Start free. Scale as your memory grows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {tiers.map((tier, i) => (
              <GlassCard
                key={tier.name}
                variant={tier.variant}
                glow={tier.variant === 'prominent' as string ? 'purple' : 'none'}
                hover="lift"
                delay={i * 0.1}
                className="p-4 sm:p-8 relative"
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-purple-500 text-xs font-semibold">
                    {tier.badge}
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                <div className="text-4xl font-bold mb-2 text-white">
                  {tier.price}
                </div>
                <p className="text-sm text-white/50 mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.variant === 'prominent' as string ? 'text-purple-400' : 'text-white/40'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* What to Expect Timeline */}
                {tier.name !== PRICING_PLANS.enterprise.displayName && (
                  <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-xs font-semibold text-white/50 mb-3 uppercase tracking-wide">What to Expect</div>
                    <div className="space-y-3 text-xs">
                      <div>
                        <div className="text-emerald-400 font-semibold mb-1">Week 1:</div>
                        <div className="text-white/60">Solve real problems • Start building your library</div>
                      </div>
                      <div>
                        <div className="text-blue-400 font-semibold mb-1">Month 1:</div>
                        <div className="text-white/60">4-6x speedup • Dozens of solutions learned</div>
                      </div>
                      <div>
                        <div className="text-purple-400 font-semibold mb-1">Month 3:</div>
                        <div className="text-white/60">10-15x speedup • Growing library • compound acceleration</div>
                      </div>
                    </div>
                  </div>
                )}

                {tier.ctaLink ? (
                  tier.ctaLink.startsWith('mailto:') ? (
                    <a
                      href={tier.ctaLink}
                      className="block w-full py-3 text-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium"
                    >
                      {tier.cta}
                    </a>
                  ) : (
                    <Link
                      href={tier.ctaLink}
                      className={cn(
                        "block w-full py-3 text-center rounded-lg font-medium transition-colors",
                        tier.variant === 'prominent' as string
                          ? "bg-purple-500 hover:bg-purple-600"
                          : "bg-white/10 hover:bg-white/20"
                      )}
                    >
                      {tier.cta}
                    </Link>
                  )
                ) : (
                  <button
                    disabled
                    className="block w-full py-3 text-center rounded-lg bg-purple-500/50 cursor-not-allowed font-medium"
                  >
                    {tier.cta}
                  </button>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-purple-500/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Start Building Your Memory Advantage
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/60 mb-4">
            Install in 2 minutes. Start building your memory advantage Day 1.
            <span className="block mt-2 text-white/80 font-medium">
              Accelerate to 10x+ as your pattern library compounds.
            </span>
          </p>
          <p className="text-sm text-white/50 mb-8">
            Free forever on {PRICING_PLANS.developer.displayName} plan. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://platform.ekkos.dev/signup"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-green-600 transition-all shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 ring-2 ring-emerald-400/30"
            >
              Start Free — No Credit Card
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#magic"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all"
            >
              See Sample Learning Curve
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-sm text-white/40 mt-4">
            Works with Cursor, Claude Code, VS Code, and more.
          </p>
        </div>
      </section>
    </div>
    </>
  );
}
