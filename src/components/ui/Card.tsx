import { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  padded?: boolean
  hoverable?: boolean
  style?: CSSProperties
}

export function Card({ children, padded = true, hoverable = false, style }: CardProps) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-4)',
      padding: padded ? 20 : 0,
      transition: hoverable ? 'border-color 160ms ease, transform 160ms ease' : undefined,
      overflow: 'hidden',
      ...style,
    }}>
      {children}
    </div>
  )
}
