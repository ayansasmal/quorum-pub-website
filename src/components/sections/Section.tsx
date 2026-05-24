import { ReactNode, CSSProperties } from 'react'

type PadY = 'sm' | 'md' | 'lg' | 'xl'

interface SectionProps {
  children: ReactNode
  id?: string
  tint?: boolean
  dashed?: boolean
  padY?: PadY
  style?: CSSProperties
}

const PADS: Record<PadY, string> = {
  sm: '32px 20px',
  md: '48px 20px',
  lg: '64px 20px',
  xl: '80px 20px',
}

export function Section({ children, id, tint, dashed = true, padY = 'lg', style }: SectionProps) {
  return (
    <section
      id={id}
      style={{
        borderTop: dashed ? '1px dashed var(--border-strong)' : 'none',
        background: tint ? 'var(--bg-alt)' : 'transparent',
        padding: PADS[padY],
        ...style,
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        {children}
      </div>
    </section>
  )
}
