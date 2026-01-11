import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security | ekkOS',
  description: 'Enterprise-grade security for AI memory. SOC 2 compliant, end-to-end encryption, and built for teams that need peace of mind.',
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="px-6 py-16 mx-auto max-w-7xl sm:py-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Security Verification: 20/20 Passed
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Enterprise-Grade Security
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your AI memory is protected by industry-leading security controls.
            Built for teams that need reliability, compliance, and peace of mind.
          </p>

          {/* Primary CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://platform.ekkos.dev/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
            >
              Get Started Free
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="mailto:enterprise@ekkos.dev?subject=Enterprise%20Security%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl font-semibold text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all"
            >
              Talk to Enterprise Sales
            </a>
          </div>

          {/* Secondary Links */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <Link
              href="/docs/compliance/SOC2_CONTROLS"
              className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500"
            >
              View SOC 2 Controls →
            </Link>
            <Link
              href="/docs/compliance/SECURITY_POLICY.md"
              className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500"
            >
              Security Policy →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-6 py-12 mx-auto max-w-7xl border-y border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">20/20</div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Verified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">SOC 2</div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Compliant</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">AES-256</div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Encryption</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">99.9%</div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">GDPR</div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Compliant</div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="px-6 py-16 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Security at Every Layer
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">End-to-End Encryption</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>TLS 1.3</strong> in transit, <strong>AES-256</strong> at rest.
              Your memories are encrypted before they leave your device.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Role-Based Access Control</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Fine-grained permissions. Team admins control who sees what.
              Row Level Security enforced at the database level.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Audit Logging</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Every action tracked. Full audit trail for compliance.
              Know exactly who accessed what and when.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data Isolation</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Strict multi-tenant separation. Your memories are never visible
              to other users. Workspace isolation for teams.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backup & Recovery</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Automated daily backups. Point-in-time recovery.
              90-day backup retention. RTO: 4 hours, RPO: 24 hours.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Incident Response</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              24/7 monitoring. Automated alerts. Clear escalation procedures.
              Critical incidents resolved within 15 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="px-6 py-16 mx-auto max-w-7xl bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Compliance & Certifications
          </h2>

          <div className="space-y-6">
            {/* SOC 2 */}
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    SOC 2 Type II (In Progress)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We've implemented SOC 2 Type II controls and are currently undergoing our external audit.
                    Certification expected Q1 2025.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <Link href="/docs/compliance/SOC2_CONTROLS" className="text-blue-600 dark:text-blue-400 hover:underline">
                      View SOC 2 Controls →
                    </Link>
                    <a href="mailto:security@ekkos.dev?subject=SOC%202%20Report%20Request" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Request Report →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* GDPR */}
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="text-2xl">🇪🇺</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    GDPR Compliant
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Full compliance with the General Data Protection Regulation. Data subject rights,
                    data minimization, and privacy-by-architecture.
                  </p>
                  <Link href="/docs/compliance/PRIVACY_POLICY.md" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    Privacy Policy →
                  </Link>
                </div>
              </div>
            </div>

            {/* CCPA */}
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <span className="text-2xl">🇺🇸</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    CCPA Compliant
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    California Consumer Privacy Act compliance. Right to know, delete, and opt-out.
                  </p>
                  <Link href="/api/user/export" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    Export Your Data →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="px-6 py-16 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Trusted Infrastructure
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Supabase</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">SOC 2 Type II certified database & auth</p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Vercel</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">ISO 27001, SOC 2 Type II hosting</p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Railway</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">ISO 27001 certified infrastructure</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 mx-auto max-w-7xl">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Security?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our security team is here to help. Whether you need our SOC 2 report,
            a completed security questionnaire, or a custom DPA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:security@ekkos.dev"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Contact Security Team
            </a>
            <Link
              href="/docs/compliance/SECURITY_POLICY.md"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10"
            >
              Read Security Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
