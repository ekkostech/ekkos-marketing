'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import {
  ArrowRight,
  Brain,
  Check,
  CheckCircle2,
  Code2,
  Database,
  FileCode,
  Globe,
  Infinity,
  Layers,
  Lock,
  MessageSquare,
  Search,
  Shield,
  Sparkles,
  Terminal,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const coreFeatures = [
  {
    icon: Globe,
    title: 'Cross-Platform Memory',
    description: 'One memory, all your tools. Works across Cursor, Claude Code, VS Code, Windsurf, and any MCP-compatible tool.',
    details: [
      'Switch IDEs freely—your patterns come with you',
      'Automatic sync across all connected tools',
      'No re-explaining your codebase to each tool',
    ],
    color: 'blue',
  },
  {
    icon: Sparkles,
    title: 'Auto-Forge Patterns',
    description: 'Every time you solve a problem, ekkOS captures it as a reusable pattern. Next time, your AI already knows the answer.',
    details: [
      'Semantic pattern detection (not keyword matching)',
      '70%+ confidence threshold before activation',
      'Patterns prove themselves through success rates',
    ],
    color: 'purple',
  },
  {
    icon: Shield,
    title: 'Hallucination Buster™',
    description: 'Every AI suggestion verified against your actual history. Grounded, Speculative, or Conflict—know before you implement.',
    details: [
      'Real-time validation under 100ms',
      'Cross-references patterns, decisions, and directives',
      'Catches problems before you implement them',
    ],
    color: 'emerald',
  },
  {
    icon: Infinity,
    title: 'Forever Memory™',
    description: 'Some things you never want the AI to forget. Files, patterns, and key insights are preserved permanently.',
    details: [
      'Never decayed, never pruned',
      'Always retrievable, always preserved',
      'Automatic for files, patterns, and preferences',
    ],
    color: 'pink',
    link: '/features/forever-memory',
  },
  {
    icon: Lock,
    title: 'User Directives',
    description: 'Set MUST/NEVER/PREFER/AVOID rules your AI follows. Establish permanent behavioral constraints.',
    details: [
      'Persists across all sessions',
      'Automatically enforced in responses',
      'Conflict detection when rules clash',
    ],
    color: 'rose',
  },
  {
    icon: TrendingUp,
    title: 'Golden Loop Learning',
    description: 'Continuous improvement cycle: Retrieve → Apply → Measure → Learn → Capture. Your AI gets smarter every day.',
    details: [
      'Success rate tracking for patterns',
      'Automatic pattern promotion and retirement',
      'Confidence scores evolve with usage',
    ],
    color: 'amber',
  },
];

const memoryLayers = [
  { number: '1', name: 'Working Memory', desc: '24h conversation window for immediate context' },
  { number: '2', name: 'Episodic Memory', desc: 'Problem-solution pairs from past interactions' },
  { number: '3', name: 'Semantic Memory', desc: 'Compressed knowledge extracted from conversations' },
  { number: '4', name: 'Pattern Memory', desc: 'Proven templates with confidence evolution' },
  { number: '5', name: 'Procedural Memory', desc: 'Step-by-step workflows and processes' },
  { number: '6', name: 'Collective Memory', desc: 'Cross-agent learning across AI models' },
  { number: '7', name: 'Meta Memory', desc: 'System self-awareness and performance tracking' },
  { number: '8', name: 'Codebase Memory', desc: 'Code understanding and semantic search' },
  { number: '9', name: 'Directives', desc: 'User rules (MUST/NEVER/PREFER/AVOID)' },
  { number: '10', name: 'Conflicts', desc: 'When directives clash—resolution logic' },
];

const mcpTools = [
  {
    name: 'ekkOS_Search',
    desc: 'Search across all 10 memory layers for patterns, solutions, and context.',
    icon: Search,
  },
  {
    name: 'ekkOS_Forge',
    desc: 'Capture solutions that worked as reusable patterns for future use.',
    icon: Sparkles,
  },
  {
    name: 'ekkOS_Directive',
    desc: 'Set MUST/NEVER/PREFER/AVOID rules your AI follows permanently.',
    icon: FileCode,
  },
  {
    name: 'ekkOS_Recall',
    desc: 'Remember what you discussed days or weeks ago with semantic search.',
    icon: MessageSquare,
  },
  {
    name: 'ekkOS_Conflict',
    desc: 'Validate actions against your rules before executing them.',
    icon: Shield,
  },
  {
    name: 'ekkOS_Context',
    desc: 'Get relevant patterns and episodes for the current task.',
    icon: Brain,
  },
];

const integrations = [
  { name: 'Cursor', status: 'live' },
  { name: 'Claude Code', status: 'live' },
  { name: 'VS Code', status: 'live' },
  { name: 'Windsurf', status: 'live' },
  { name: 'API / CLI', status: 'live' },
];

const securityFeatures = [
  'SOC 2 Type II compliant (certification in progress)',
  'End-to-end encryption for all data',
  'Your code never leaves your control',
  'GDPR and CCPA compliant',
  'Enterprise SSO (SAML, Google, GitHub)',
  'Audit logs for compliance',
  'Self-hosted option for Enterprise',
  'Custom data residency',
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Persistent AI Memory</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Features that Make Your AI Smarter
            </span>
          </h1>

          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
            ekkOS gives your AI tools a real brain—one that learns from every fix, remembers every preference, and gets smarter with every session.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://platform.ekkos.dev/signup"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/docs"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Features</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Everything you need to give your AI persistent memory and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, i) => (
              <GlassCard
                key={feature.title}
                variant="elevated"
                hover="lift"
                delay={i * 0.05}
                className="p-6"
              >
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/50">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                {feature.link && (
                  <Link
                    href={feature.link}
                    className="inline-flex items-center gap-1 mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 10-Layer Architecture */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-500/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Industry First</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              10-Layer Memory Architecture
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Unlike flat vector databases, ekkOS uses a structured memory system inspired by human cognition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {memoryLayers.map((layer, i) => (
              <GlassCard
                key={layer.number}
                variant="elevated"
                delay={i * 0.03}
                className="p-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">{layer.number}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{layer.name}</h3>
                  <p className="text-sm text-white/50">{layer.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/docs/WHY_TEN_LAYERS"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Read the full technical breakdown <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MCP Tools */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">MCP Memory Tools</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Tools that wire your AI directly to the memory substrate via the Model Context Protocol.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mcpTools.map((tool, i) => (
              <GlassCard
                key={tool.name}
                variant="elevated"
                hover="lift"
                delay={i * 0.05}
                className="p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <tool.icon className="w-5 h-5 text-purple-400" />
                </div>
                <code className="text-sm font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded mb-3 inline-block">
                  {tool.name}
                </code>
                <p className="text-white/60 text-sm">{tool.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-500/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Works Everywhere</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              One memory substrate, all your development tools. Switch freely—your patterns follow.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, i) => (
              <GlassCard
                key={integration.name}
                variant="elevated"
                className="px-6 py-4 flex items-center gap-3"
              >
                <Terminal className="w-5 h-5 text-purple-400" />
                <span className="font-medium text-white">{integration.name}</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400">Live</span>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <GlassCard variant="prominent" glow="purple" className="p-8 inline-block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-white">ekkOS_™ Memory Substrate</div>
                  <div className="text-sm text-white/60">Central hub for all your AI tools</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Memory Gateway */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400">Memory Gateway</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              83 Models. 11 Providers. One Memory.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Use GPT-5, Claude, Grok, or Gemini—your patterns and context follow you everywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard variant="elevated" className="p-6">
              <Sparkles className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">Pattern Injection</h3>
              <p className="text-sm text-white/60">
                Your relevant patterns are automatically injected into every request, no matter which provider you use.
              </p>
            </GlassCard>
            <GlassCard variant="elevated" className="p-6">
              <Brain className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">Unified Memory</h3>
              <p className="text-sm text-white/60">
                Teach Claude something, GPT knows it. All your tools share the same memory substrate.
              </p>
            </GlassCard>
            <GlassCard variant="elevated" className="p-6">
              <Zap className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">One Endpoint</h3>
              <p className="text-sm text-white/60">
                Point any tool at <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">mcp.ekkos.dev/v1</code> and get memory-aware AI.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* For Teams */}
      <section className="py-20 px-6 bg-gradient-to-b from-amber-500/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <Users className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-400">Team Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Shared Intelligence for Teams
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              New engineer + ekkOS = instant team knowledge. Compound learning at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Shared Pattern Library', desc: "One senior forges a pattern. Everyone's AI uses it instantly." },
              { title: 'Consistent Suggestions', desc: 'AI recommendations aligned with team conventions, not random Stack Overflow.' },
              { title: 'Onboarding Acceleration', desc: 'New hires have access to years of institutional knowledge from day one.' },
              { title: 'Drift Detection', desc: 'Analytics show when patterns diverge. Consolidate before it becomes debt.' },
              { title: 'Role-Aware Memory Spaces', desc: 'Different contexts for frontend, backend, and DevOps teams.' },
              { title: 'Admin Controls', desc: 'SSO, audit logs, permissions, and custom retention policies.' },
            ].map((item, i) => (
              <GlassCard key={i} variant="elevated" className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Lock className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">Enterprise Security</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security You Can Trust
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Your code and data are protected with enterprise-grade security.
            </p>
          </div>

          <GlassCard variant="elevated" className="p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {securityFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="mt-8 text-center">
            <Link
              href="/security"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              View Security Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-500/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Give Your AI a Memory?
          </h2>
          <p className="text-lg text-white/60 mb-8">
            Start free. No credit card required. See the difference from day one.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://platform.ekkos.dev/signup"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
