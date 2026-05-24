import { ReactNode, CSSProperties } from 'react'

interface EyebrowProps {
  children: ReactNode
  style?: CSSProperties
}

export function Eyebrow({ children, style }: EyebrowProps) {
  return (
    <div className="qh-eyebrow" style={style}>
      {children}
    </div>
  )
}
