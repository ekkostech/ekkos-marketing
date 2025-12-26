'use client';

import { STRIPE_CONFIG } from '@/lib/stripe-config';
import { Check, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type BillingPeriod = 'monthly' | 'yearly';

const plans = [
  {
    name: 'Free',
    tagline: 'Echo',
    monthlyPrice: 0,
    yearlyPrice: 0,
    period: '/forever',
    description: 'Start learning immediately—see the difference on day one',
    bestFor: 'Best for: learners, hobby projects, experimentation.',
    features: [
      'Cross-platform memory (Cursor, Claude Code, VS Code)',
      'Auto-forge patterns (20/day limit)',
      'Conflict checking (100 checks/month)',
      '100 memory searches / month',
      '50 patterns forged / month',
      '7-day retention',
      'Community support',
    ],
    cta: 'Start Free',
    ctaLink: '/signup',
    highlighted: false,
    tier: 'free' as const,
  },
  {
    name: 'Pro',
    tagline: 'Resonance',
    monthlyPrice: STRIPE_CONFIG.products.pro.price,
    yearlyPrice: STRIPE_CONFIG.products.pro.yearlyPrice,
    period: '/month',
    description: 'Faster learning, deeper memory—for developers who ship daily',
    bestFor: 'Best for: full-time builders and power users.',
    features: [
      'Unlimited cross-platform memory',
      'Unlimited auto-forge patterns',
      'Unlimited conflict checks',
      'ekkOS_Forever_Memory™',
      'Unlimited IDE connections',
      'Pattern insights dashboard',
      'Collective Memory access',
      'API access',
      'Priority support',
    ],
    cta: 'Coming Soon',
    ctaLink: null,
    highlighted: true,
    badge: 'MOST POPULAR',
    tier: 'pro' as const,
  },
  {
    name: 'Team',
    tagline: 'Harmony',
    monthlyPrice: STRIPE_CONFIG.products.team.price,
    yearlyPrice: STRIPE_CONFIG.products.team.yearlyPrice,
    period: '/seat/month',
    description: 'Shared intelligence across your team—compound learning at scale',
    bestFor: 'Best for: engineering teams and startups scaling workflows.',
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
    cta: 'Contact Sales',
    ctaLink: 'mailto:team@ekkos.dev',
    highlighted: false,
    tier: 'team' as const,
  },
];

const faqs = [
  {
    q: 'What is a memory search?',
    a: 'A memory search is when your AI queries the memory substrate using search_memory to find relevant patterns, episodes, and solutions.',
  },
  {
    q: 'What is forging a pattern?',
    a: 'Forging a pattern (using forge_pattern) permanently saves a learned solution. Use it when you know: "We must never lose this decision again."',
  },
  {
    q: 'How does collective memory work?',
    a: 'Pro users can access anonymized, generalized patterns learned across all ekkOS users. No raw code or proprietary data is ever shared.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes, at any time.',
  },
  {
    q: 'Which IDEs are supported?',
    a: 'Cursor, VS Code, Claude Code, Windsurf, and any MCP-compatible tool.',
  },
  {
    q: 'Can I self-host?',
    a: 'Yes — enterprise customers can deploy ekkOS privately. Contact us for details.',
  },
];

const features = [
  { name: 'Memory searches', free: '100/mo', pro: 'Unlimited', team: 'Unlimited' },
  { name: 'Patterns forged', free: '50/mo', pro: 'Unlimited', team: 'Unlimited' },
  { name: 'API requests', free: '-', pro: 'Unlimited', team: 'Unlimited' },
  { name: 'API keys', free: '-', pro: '20', team: 'Unlimited' },
  { name: 'Memory retention', free: '7 days', pro: 'Forever', team: 'Forever' },
  { name: 'Auto-forge patterns', free: '20/day', pro: 'Unlimited', team: 'Unlimited' },
  { name: 'Conflict checking', free: '100/mo', pro: 'Unlimited', team: 'Unlimited' },
  { name: 'Collective Memory', free: '-', pro: 'Check', team: 'Check' },
  { name: 'Team sharing', free: '-', pro: '-', team: 'Check' },
  { name: 'SSO', free: '-', pro: '-', team: 'Check' },
  { name: 'Support', free: 'Community', pro: 'Priority', team: 'Dedicated' },
];

function formatPrice(price: number, period: BillingPeriod): string {
  if (price === 0) return '$0';
  return `$${price}`;
}

function calculateSavings(monthly: number, yearly: number): number {
  if (monthly === 0) return 0;
  const monthlyYearTotal = monthly * 12;
  return monthlyYearTotal - yearly;
}

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');

  return (
    <div className="py-12">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Simple pricing. Start free.
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
          No credit card required. Upgrade when you're ready.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-3 p-1.5 rounded-xl bg-white/5 border border-white/10">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              billingPeriod === 'monthly'
                ? 'bg-purple-500 text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('yearly')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              billingPeriod === 'yearly'
                ? 'bg-purple-500 text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Yearly
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
              Save 17%
            </span>
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const price = billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            const savings = calculateSavings(plan.monthlyPrice, plan.yearlyPrice);

            return (
              <div
                key={plan.name}
                className={`p-8 rounded-2xl backdrop-blur-xl relative ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-purple-500/20 to-purple-500/5 border border-purple-500/30'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-purple-500 text-xs font-semibold">
                    {plan.badge}
                  </div>
                )}

                <div className={`text-sm mb-1 ${plan.highlighted ? 'text-purple-300' : 'text-white/40'}`}>
                  {plan.tagline}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-1">
                  {formatPrice(price, billingPeriod)}
                  <span className="text-lg text-white/40 font-normal">
                    {plan.monthlyPrice === 0 ? plan.period : billingPeriod === 'yearly' ? '/year' : '/month'}
                  </span>
                </div>
                {billingPeriod === 'yearly' && savings > 0 && (
                  <div className="text-sm text-emerald-400 mb-2">
                    Save ${savings}/year
                  </div>
                )}
                <p className="text-sm text-white/50 mb-2">{plan.description}</p>
                {plan.bestFor && (
                  <p className="text-xs text-white/40 mb-6 italic">{plan.bestFor}</p>
                )}

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${plan.highlighted ? 'text-white/80' : 'text-white/60'}`}>
                      <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? 'text-purple-400' : 'text-white/40'}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {!plan.ctaLink ? (
                  <button
                    disabled
                    className="block w-full py-3 text-center rounded-lg font-medium bg-purple-500/50 cursor-not-allowed"
                  >
                    {plan.cta}
                  </button>
                ) : plan.ctaLink.startsWith('mailto') ? (
                  <a
                    href={plan.ctaLink}
                    className={`block w-full py-3 text-center rounded-lg font-medium transition-colors ${
                      plan.highlighted
                        ? 'bg-purple-500 hover:bg-purple-600'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <a
                    href={plan.ctaLink}
                    className={`block w-full py-3 text-center rounded-lg font-medium transition-colors ${
                      plan.highlighted
                        ? 'bg-purple-500 hover:bg-purple-600'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold text-center mb-12">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-white/60 font-medium">Feature</th>
                <th className="text-center py-4 px-4 text-white/60 font-medium">Free</th>
                <th className="text-center py-4 px-4 text-purple-400 font-medium">Pro</th>
                <th className="text-center py-4 px-4 text-white/60 font-medium">Team</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-4 px-4 text-white/80">{f.name}</td>
                  <td className="py-4 px-4 text-center text-white/50">
                    {f.free === 'Check' ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : f.free}
                  </td>
                  <td className="py-4 px-4 text-center text-white/80">
                    {f.pro === 'Check' ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : f.pro}
                  </td>
                  <td className="py-4 px-4 text-center text-white/50">
                    {f.team === 'Check' ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : f.team}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="flex items-center gap-2 font-semibold mb-3">
                <HelpCircle className="w-5 h-5 text-purple-400" />
                {faq.q}
              </h3>
              <p className="text-white/60 pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Persistent AI memory in under two minutes.</h2>
        <p className="text-white/60 mb-8">
          Add ekkOS to your existing workflow using our MCP client. Works instantly with Cursor, VS Code, Claude Code, Windsurf, and more. The Free plan is free forever. No credit card required.
        </p>
        <Link
          href="https://platform.ekkos.dev/signup"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
        >
          Get started free
        </Link>
      </section>
    </div>
  );
}
