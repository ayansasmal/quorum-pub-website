'use client'

import Link from 'next/link'
import { ReactNode, CSSProperties, MouseEventHandler } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  full?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  style?: CSSProperties
  iconRight?: ReactNode
  icon?: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const SIZES = {
  sm: { height: 32, px: 12, fs: 13 },
  md: { height: 40, px: 16, fs: 14 },
  lg: { height: 48, px: 20, fs: 15 },
}

const VARIANTS: Record<string, CSSProperties> = {
  primary:   { background: 'var(--primary)', color: 'var(--primary-ink)', border: '1px solid var(--primary)' },
  secondary: { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--border-strong)' },
  ghost:     { background: 'transparent', color: 'var(--ink)', border: '1px solid transparent' },
}

export function Button({
  children, variant = 'primary', size = 'md', href, full, onClick, style, iconRight, icon, type = 'button',
}: ButtonProps) {
  const s = SIZES[size]
  const base: CSSProperties = {
    height: s.height,
    padding: `0 ${s.px}px`,
    fontSize: s.fs,
    fontWeight: 500,
    borderRadius: 'var(--r-2)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    cursor: 'pointer',
    textDecoration: 'none',
    width: full ? '100%' : undefined,
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
    letterSpacing: '-0.005em',
    transition: 'background 120ms ease, color 120ms ease, border-color 120ms ease, transform 80ms ease',
    ...VARIANTS[variant],
    ...style,
  }

  const pressHandlers = {
    onMouseDown: (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(1px)' },
    onMouseUp:   (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = '' },
    onMouseLeave:(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = '' },
  }

  if (href) {
    return (
      <Link href={href} style={base} onClick={onClick as MouseEventHandler<HTMLAnchorElement>} {...pressHandlers}>
        {icon}{children}{iconRight}
      </Link>
    )
  }

  return (
    <button type={type} style={base} onClick={onClick as MouseEventHandler<HTMLButtonElement>} {...pressHandlers}>
      {icon}{children}{iconRight}
    </button>
  )
}
