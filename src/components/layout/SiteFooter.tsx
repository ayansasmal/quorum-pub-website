import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

const FOOTER_LINKS = [
  { label: 'GitHub',            href: 'https://github.com/ayansasmal/quorum' },
  { label: 'Docs',              href: '/get-started' },
  { label: 'License · Apache 2.0', href: 'https://github.com/ayansasmal/quorum/blob/main/LICENSE' },
  { label: 'Constitution',      href: '/governance' },
]

export function SiteFooter() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 20px 28px',
      background: 'var(--bg-alt)',
    }}>
      <div style={{
        maxWidth: 1240,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 28,
        alignItems: 'flex-start',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: 'var(--ink)' }}>
          <Logo size={18} />
          <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: '-0.01em' }}>Quorum</span>
        </Link>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginLeft: 4 }}>
          {FOOTER_LINKS.map((link) => (
            link.href.startsWith('http') ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, color: 'var(--ink-2)', textDecoration: 'none' }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                style={{ fontSize: 13, color: 'var(--ink-2)', textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 200 }}>
          <span className="qh-mono" style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            contact
          </span>
          <a
            href="mailto:ayan.m.sasmal@gmail.com"
            className="qh-mono"
            style={{ fontSize: 13, color: 'var(--ink)', textDecoration: 'none' }}
          >
            ayan.m.sasmal@gmail.com
          </a>
        </div>
      </div>

      <div style={{
        maxWidth: 1240,
        margin: '24px auto 0',
        paddingTop: 16,
        borderTop: '1px dashed var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        fontFamily: 'var(--geist-mono), ui-monospace, monospace',
        fontSize: 11,
        color: 'var(--muted)',
        letterSpacing: '0.04em',
      }}>
        <span>v0.4 · 218 commits · 31 contributors</span>
        <span>made in the open</span>
      </div>
    </footer>
  )
}
