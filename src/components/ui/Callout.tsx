import { ReactNode, CSSProperties } from 'react'

interface CalloutProps {
  children: ReactNode
  label?: string
  style?: CSSProperties
}

export function Callout({ children, label = 'What Quorum does', style }: CalloutProps) {
  return (
    <div style={{
      borderLeft: '2px solid var(--primary)',
      background: 'var(--primary-soft)',
      padding: '14px 16px 16px',
      borderRadius: '0 var(--r-3) var(--r-3) 0',
      ...style,
    }}>
      <div style={{
        fontFamily: 'var(--geist-mono), ui-monospace, monospace',
        fontSize: 11,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--primary)',
        fontWeight: 600,
        marginBottom: 6,
      }}>
        {label} →
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)' }}>
        {children}
      </div>
    </div>
  )
}
