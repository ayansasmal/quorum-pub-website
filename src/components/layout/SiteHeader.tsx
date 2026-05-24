import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Tag } from '@/components/ui/Tag'
import { Button } from '@/components/ui/Button'
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'
import { NAV_TREE } from '@/lib/nav'

interface SiteHeaderProps {
  menuOpen: boolean
  onMenuToggle: () => void
}

function HamburgerIcon({ open }: { open: boolean }) {
  const top = open ? 'rotate(45deg) translate(0px, 5px)'  : 'rotate(0deg) translate(0px, 0px)'
  const mid = open ? 'scaleX(0)' : 'scaleX(1)'
  const bot = open ? 'rotate(-45deg) translate(0px, -5px)' : 'rotate(0deg) translate(0px, 0px)'
  const ln = (transform: string, opacity = 1) => ({
    transform,
    opacity,
    transformOrigin: 'center' as const,
    transition: 'transform 220ms cubic-bezier(0.4, 0.2, 0.2, 1.0), opacity 200ms ease',
  })
  return (
    <svg width="18" height="14" viewBox="0 0 20 14" aria-hidden>
      <line x1="2" y1="2"  x2="18" y2="2"  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" style={ln(top)} />
      <line x1="2" y1="7"  x2="18" y2="7"  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" style={ln(mid, open ? 0 : 1)} />
      <line x1="2" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" style={ln(bot)} />
    </svg>
  )
}

export function SiteHeader({ menuOpen, onMenuToggle }: SiteHeaderProps) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 70,
      background: 'color-mix(in oklab, var(--bg) 94%, transparent)',
      backdropFilter: 'saturate(140%) blur(10px)',
      WebkitBackdropFilter: 'saturate(140%) blur(10px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 1240,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        gap: 14,
        height: 56,
        boxSizing: 'border-box',
      }}>
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: 'var(--ink)',
            textDecoration: 'none',
          }}
        >
          <Logo size={22} />
          <span style={{ fontWeight: 600, fontSize: 17, letterSpacing: '-0.012em' }}>Quorum</span>
          <Tag style={{ marginLeft: 4 }}>v0.4</Tag>
        </Link>

        {/* Inline nav (desktop ≥1024px) */}
        <nav className="qh-nav-inline" style={{ marginLeft: 22, gap: 22, alignItems: 'center' }}>
          {NAV_TREE.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              style={{
                fontSize: 14,
                color: 'var(--ink-2)',
                textDecoration: 'none',
                letterSpacing: '-0.005em',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ flex: 1 }} />

        {/* GitHub star count (≥720px) */}
        <a
          href="https://github.com/ayansasmal/quorum-pub-website"
          target="_blank"
          rel="noopener noreferrer"
          className="qh-stars"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 13,
            color: 'var(--ink-2)',
            textDecoration: 'none',
            padding: '6px 10px',
            borderRadius: 'var(--r-2)',
            border: '1px solid var(--border)',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden>
            <polygon points="8,1 10,5.7 15,6.4 11.5,10 12.4,15 8,12.7 3.6,15 4.5,10 1,6.4 6,5.7" fill="currentColor" />
          </svg>
          <span>1.2k</span>
        </a>

        {/* CTA (desktop ≥1024px) */}
        <span className="qh-cta-desktop">
          <Button variant="primary" size="sm" href="/get-started">Get Started</Button>
        </span>

        {/* Theme switcher (always visible) */}
        <ThemeSwitcher />

        {/* Hamburger (mobile/tablet) */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={onMenuToggle}
          className="qh-hamburger"
          style={{
            width: 36,
            height: 36,
            padding: 0,
            background: menuOpen ? 'var(--primary-soft)' : 'transparent',
            border: `1px solid ${menuOpen ? 'var(--primary)' : 'var(--border)'}`,
            borderRadius: 'var(--r-2)',
            cursor: 'pointer',
            color: menuOpen ? 'var(--primary)' : 'var(--ink)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 180ms ease',
          }}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>
    </header>
  )
}
