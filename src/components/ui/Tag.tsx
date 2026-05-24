import { ReactNode, CSSProperties } from 'react'

interface TagProps {
  children: ReactNode
  variant?: 'default' | 'primary' | 'red' | 'green' | 'outline'
  style?: CSSProperties
}

const VARIANTS: Record<string, { bg: string; fg: string; border: string }> = {
  default: { bg: 'var(--bg-alt)',      fg: 'var(--ink-2)',   border: 'var(--border)' },
  primary: { bg: 'var(--primary-soft)',fg: 'var(--primary)', border: 'transparent' },
  red:     { bg: 'var(--red-soft)',    fg: 'var(--red)',     border: 'transparent' },
  green:   { bg: 'var(--green-soft)',  fg: 'var(--green)',   border: 'transparent' },
  outline: { bg: 'transparent',        fg: 'var(--ink-2)',   border: 'var(--border-strong)' },
}

export function Tag({ children, variant = 'default', style }: TagProps) {
  const v = VARIANTS[variant]
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 9px',
      borderRadius: 999,
      fontFamily: 'var(--geist-mono), ui-monospace, monospace',
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      fontWeight: 600,
      background: v.bg,
      color: v.fg,
      border: `1px solid ${v.border}`,
      ...style,
    }}>
      {children}
    </span>
  )
}
