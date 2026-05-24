import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { EditorialStrip } from '@/components/layout/EditorialStrip'
import { SiteNav } from '@/components/layout/SiteNav'
import { SiteFooter } from '@/components/layout/SiteFooter'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <div className="site-root">
          <EditorialStrip />
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
