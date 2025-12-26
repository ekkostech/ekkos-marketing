'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import {
  Mail, MessageCircle, BookOpen, Send, HelpCircle,
  FileText, ExternalLink, CheckCircle, AlertCircle, Loader2
} from 'lucide-react';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit support ticket');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try emailing us directly.'
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs',
      linkText: 'View Docs'
    },
    {
      icon: MessageCircle,
      title: 'GitHub Discussions',
      description: 'Join our community forum for Q&A',
      link: 'https://github.com/ekkostech/ekkos/discussions',
      linkText: 'Join Discussion',
      external: true
    },
    {
      icon: FileText,
      title: 'Status Page',
      description: 'Check system status and uptime',
      link: '/status',
      linkText: 'View Status'
    },
  ];

  const faqs = [
    {
      q: 'How do I get started with ekkOS?',
      a: 'Sign up for a free account, generate an API key from your dashboard, and add the ekkOS MCP server to your IDE configuration. Check our Quick Start guide for detailed steps.'
    },
    {
      q: 'What IDEs are supported?',
      a: 'ekkOS works with any IDE that supports the Model Context Protocol (MCP), including Cursor, Claude Code, VS Code, and Windsurf. You can also use it via API.'
    },
    {
      q: 'Is there a free tier?',
      a: 'Yes! The Echo tier is free forever and includes 100 memory searches/month, 50 patterns forged, and 1 IDE connection. Perfect for solo developers getting started.'
    },
    {
      q: 'How does the Hallucination Firewall work?',
      a: 'The check_conflict tool validates AI suggestions against your memory substrate, returning whether suggestions are SAFE (matches your history), WARNING (no prior evidence), or BLOCKED (contradicts past decisions).'
    },
    {
      q: 'Can I use ekkOS with my team?',
      a: 'Team features are coming soon in the Harmony tier, which will include shared workspaces, team patterns, and collaborative memory.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">How can we help?</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Get support, find answers, or reach out to our team
          </p>
        </div>

        {/* Resources Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <GlassCard key={resource.title} variant="elevated" className="p-6">
                <Icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-white/60 mb-4 text-sm">{resource.description}</p>
                {resource.external ? (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                  >
                    {resource.linkText}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    href={resource.link}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                  >
                    {resource.linkText}
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </GlassCard>
            );
          })}
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <GlassCard variant="elevated" glow="purple" className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Contact Support</h2>
            </div>

            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/60 mb-6">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  >
                    <option value="general">General Question</option>
                    <option value="technical">Technical Issue</option>
                    <option value="billing">Billing</option>
                    <option value="feature">Feature Request</option>
                    <option value="bug">Bug Report</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                    placeholder="Provide as much detail as possible..."
                  />
                </div>

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                      <p className="text-red-400/60 text-xs mt-1">
                        Email us directly at{' '}
                        <a href="mailto:support@ekkos.dev" className="underline hover:text-red-300">
                          support@ekkos.dev
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 text-center">
                Or email us directly at{' '}
                <a href="mailto:support@ekkos.dev" className="text-purple-400 hover:text-purple-300 transition-colors">
                  support@ekkos.dev
                </a>
              </p>
            </div>
          </GlassCard>

          {/* FAQs */}
          <div>
            <GlassCard variant="elevated" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="pb-6 border-b border-white/10 last:border-0 last:pb-0">
                    <h3 className="text-white font-medium mb-2">{faq.q}</h3>
                    <p className="text-sm text-white/60">{faq.a}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="mt-6">
              <p className="text-white/60 text-sm text-center">
                Can't find what you're looking for?{' '}
                <Link href="/docs" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Check our documentation
                </Link>
              </p>
            </div>
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
