import { AuroraBackground } from '@/components/background/AuroraBackground';
import { ParticleField } from '@/components/background/ParticleField';
import { CursorGlow } from '@/components/effects/CursorGlow';
import { Providers } from '@/components/Providers';
import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata = {
  title: 'ekkOS - AI Memory That Gets Smarter Over Time | Persistent Memory for AI Agents',
  description: 'Give your AI a real brain. ekkOS provides persistent memory that learns, remembers, and gets smarter with every session. Works across ChatGPT, Claude, Cursor, and all MCP-compatible tools.',
  keywords: 'AI memory, persistent memory, AI agents, ChatGPT memory, Claude memory, MCP, Model Context Protocol, AI learning, pattern memory, golden loop',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/favicon-96x96.png',
  },
  openGraph: {
    title: 'ekkOS - AI Memory That Gets Smarter Over Time',
    description: 'Give your AI a real brain. Persistent memory that learns, remembers, and gets smarter with every session.',
    type: 'website',
    siteName: 'ekkOS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ekkOS - AI Memory That Gets Smarter Over Time',
    description: 'Give your AI a real brain. Persistent memory for AI agents.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full">
        <Providers>
          <AuroraBackground />
          <ParticleField />
          <CursorGlow />
          <div className="min-h-screen bg-[#0a0a0f] text-white">
            <Header />
            <main className="pt-20">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
