import { ReactNode, CSSProperties } from 'react'

interface PullQuoteProps {
  children: ReactNode
  cite?: string
  style?: CSSProperties
}

export function PullQuote({ children, cite, style }: PullQuoteProps) {
  return (
    <blockquote style={{
      borderLeft: '2px solid var(--ink)',
      paddingLeft: 18,
      margin: 0,
      ...style,
    }}>
      <div style={{
        fontFamily: 'inherit',
        fontSize: 18,
        lineHeight: 1.45,
        color: 'var(--ink)',
        fontStyle: 'italic',
        fontWeight: 400,
        letterSpacing: '-0.01em',
        textWrap: 'balance',
      } as CSSProperties}>
        "{children}"
      </div>
      {cite && (
        <div className="qh-mono" style={{
          fontSize: 11,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginTop: 10,
        }}>
          — {cite}
        </div>
      )}
    </blockquote>
  )
}
