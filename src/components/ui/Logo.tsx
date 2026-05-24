interface LogoProps {
  size?: number
  accent?: string
}

export function Logo({ size = 22, accent }: LogoProps) {
  const a = accent ?? 'var(--primary)'
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <line x1="6" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="6" y1="18" x2="12" y2="5"  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="18" y1="18" x2="12" y2="5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="6"  cy="18" r="2.6" fill="var(--bg)" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="18" r="2.6" fill="var(--bg)" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="5"  r="3"   fill={a} />
    </svg>
  )
}
