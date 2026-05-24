import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { DevBanner } from '@/components/layout/DevBanner'
import { EditorialStrip } from '@/components/layout/EditorialStrip'
import { SiteNav } from '@/components/layout/SiteNav'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { ThemeProvider } from '@/context/ThemeContext'

async function getQuorumStars(): Promise<string> {
  try {
    const res = await fetch('https://api.github.com/repos/ayansasmal/quorum', {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return '★'
    const data = await res.json() as { stargazers_count: number }
    const n = data.stargazers_count
    return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n)
  } catch {
    return '★'
  }
}

const geist = Geist({
  subsets: ['latin'],
  variable: '--geist',
  weight: ['300', '400', '500', '600', '700'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--geist-mono',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Quorum — Governed Memory for AI Agents',
    template: '%s · Quorum',
  },
  description:
    'A governed memory layer for Claude Code and AI agents. Stores engineering decisions, business requirements, and team knowledge with conflict detection, authority weighting, and a full audit trail.',
  keywords: ['AI agents', 'Claude Code', 'MCP', 'knowledge management', 'engineering decisions', 'open source'],
  openGraph: {
    title: 'Quorum — Governed Memory for AI Agents',
    description: 'Your AI agents should remember what your team decided.',
    type: 'website',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const stars = await getQuorumStars()

  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        {/* Runs before page is interactive — prevents flash of wrong theme */}
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        <ThemeProvider>
          <div className="site-root">
            <DevBanner />
            <EditorialStrip />
            <SiteNav stars={stars} />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
