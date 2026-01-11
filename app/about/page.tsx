import Link from 'next/link';
import { Brain, Sparkles, Zap, Search, Lock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About - EKKOS',
  description: 'The story behind EKKOS. Memory that echoes back.',
};

export default function AboutPage() {
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Why EKKOS?
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-white/70 leading-relaxed">
            It started with a simple frustration.
          </p>

          <p className="text-white/60 leading-relaxed">
            My AI kept forgetting everything. Every day, same questions.
            Same mistakes. No learning. No memory.
          </p>

          <p className="text-white/60 leading-relaxed">
            I'd explain my architecture on Monday. Explain it again on Tuesday.
            And again on Wednesday. The AI was powerful, but it had no memory.
            Every session started from zero.
          </p>

          <p className="text-white/60 leading-relaxed">
            So I built a memory system.
          </p>

          <p className="text-white/60 leading-relaxed">
            Called it Echo—because that's what memory does.
            It echoes back when you need it.
          </p>

          <p className="text-white/70 leading-relaxed font-medium">
            Echo became EKKOS. A unique brand. A platform. A mission.
          </p>

          <p className="text-white/60 leading-relaxed">
            Now "ekko" isn't just a name. It's what your AI does when it remembers.
          </p>
        </div>
      </section>

      {/* The Name */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
          <h2 className="text-3xl font-bold mb-8 text-center">The Name</h2>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              EKKOS = Echoes
            </p>

            <p className="text-xl text-white/70 mb-6">
              When you ask your AI a question, it searches the memory substrate.
            </p>

            <p className="text-white/60">
              Patterns, learnings, experiences—they all echo back.
            </p>

            <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10 text-left">
              <p className="text-white/70 font-mono text-sm">
                <span className="text-purple-400">→</span> search_memory("auth race condition")
              </p>
              <p className="text-white/50 font-mono text-sm mt-2">
                <span className="text-emerald-400">←</span> Found: Solution from 3 months ago...
              </p>
            </div>

            <p className="text-white/50 mt-8 text-sm">
              Your AI remembers. Your solutions echo back.
            </p>
          </div>
        </div>
      </section>

      {/* The Tools */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold mb-4 text-center">Core Memory Tools</h2>
        <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Each tool name reflects what it does. Search, forge, validate, recall, and track.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              icon: Search,
              name: 'ekkOS_Search',
              meaning: 'Your knowledge echoes back',
              color: 'purple',
            },
            {
              icon: Sparkles,
              name: 'ekkOS_Forge',
              meaning: 'Learning solidifies permanently',
              color: 'amber',
            },
            {
              icon: Zap,
              name: 'ekkOS_Directive',
              meaning: 'Your rules, enforced automatically',
              color: 'blue',
            },
            {
              icon: Brain,
              name: 'ekkOS_Recall',
              meaning: 'Remember what you discussed',
              color: 'emerald',
            },
            {
              icon: Lock,
              name: 'ekkOS_Conflict',
              meaning: 'Validate before executing',
              color: 'rose',
            },
          ].map((tool, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-${tool.color}-500/20 flex items-center justify-center`}>
                <tool.icon className={`w-6 h-6 text-${tool.color}-400`} />
              </div>
              <div className="font-mono font-semibold mb-2">{tool.name}</div>
              <p className="text-xs text-white/50">{tool.meaning}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 mt-8 text-sm">
          The product is the memory. When your AI needs to remember, it searches.
        </p>
      </section>

      {/* The Vision */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold mb-8">The Vision</h2>

        <div className="space-y-6 text-white/60 leading-relaxed">
          <p>
            We're building the <span className="text-white font-medium">memory substrate for AI</span>.
          </p>

          <p>
            Starting with the tools developers use every day.
            Cursor. VS Code. Claude Code. Windsurf.
          </p>

          <p>
            Your AI should remember. Learn. Improve.
            Not start from zero every session.
          </p>

          <p>
            We believe AI assistants should compound their knowledge over time.
            The more you work with them, the better they should understand
            your patterns, your preferences, your architecture.
          </p>

          <p>
            That's the future we're building.
          </p>

          <p className="text-2xl font-semibold text-white pt-4">
            That's EKKOS.
          </p>

          <p className="text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-medium">
            Memory that echoes back.
          </p>
        </div>
      </section>

      {/* Built For */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="p-12 rounded-3xl bg-white/5 border border-white/10">
          <h2 className="text-3xl font-bold mb-8 text-center">Built for engineers who ship.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold mb-3 text-lg">For the flow-state shipper</h3>
              <p className="text-white/60 text-sm">
                You're in the zone. Ideas flowing. Code flying.
                Your AI should keep up, not slow you down with repeated context.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-lg">For the careful architect</h3>
              <p className="text-white/60 text-sm">
                You've made decisions for good reasons.
                Your AI should respect them, remember them, enforce them.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-lg">For the solo builder</h3>
              <p className="text-white/60 text-sm">
                You wear all the hats. Your patterns span frontend, backend, infra.
                Your AI should know all of them.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-lg">For the growing team</h3>
              <p className="text-white/60 text-sm">
                Institutional knowledge shouldn't live in one person's head.
                Make it available to every AI interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to give your AI memory?
        </h2>
        <p className="text-white/60 mb-8">
          Join developers who ship faster because their AI remembers.
        </p>
        <Link
          href="https://platform.ekkos.dev/signup"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
        >
          Get Started Free
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
