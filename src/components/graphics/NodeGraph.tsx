interface NodeGraphProps {
  accent?: string
}

export function NodeGraph({ accent = 'var(--primary)' }: NodeGraphProps) {
  return (
    <svg viewBox="0 0 560 420" width="100%" height="100%" style={{ display: 'block' }} aria-hidden>
      {/* dashed connectors */}
      <g stroke="var(--border-strong)" strokeWidth="1.4" fill="none" strokeDasharray="2 5" strokeLinecap="round">
        <path d="M 280 80 L 100 320" />
        <path d="M 280 80 L 460 320" />
        <path d="M 100 320 L 460 320" />
        <path d="M 280 80 L 280 230" />
      </g>
      {/* solid signed edges */}
      <g stroke="var(--ink)" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.9">
        <path d="M 280 105 C 220 160, 130 250, 110 305" />
        <path d="M 280 105 C 340 160, 430 250, 450 305" />
        <path d="M 130 320 C 230 320, 330 320, 430 320" />
      </g>
      {/* meta tag near top */}
      <g transform="translate(296, 30)">
        <rect x="0" y="0" width="160" height="22" rx="11" fill="var(--primary-soft)" stroke="var(--primary)" strokeOpacity="0.4" />
        <text x="80" y="15" textAnchor="middle" fontFamily="var(--geist-mono), monospace" fontSize="10" fontWeight="600" letterSpacing="0.06em" fill="var(--primary)">SIGNED · CONF 0.94</text>
      </g>
      {/* primary node — Decision */}
      <g>
        <circle cx="280" cy="80" r="32" fill="var(--ink)" />
        <text x="280" y="78" textAnchor="middle" fontFamily="var(--geist-mono), monospace" fontSize="10" fontWeight="600" letterSpacing="0.08em" fill="var(--bg)">DECISION</text>
        <text x="280" y="93" textAnchor="middle" fontFamily="var(--geist-mono), monospace" fontSize="11" fill="var(--bg)" opacity="0.7">D-204</text>
      </g>
      {/* mid accent node */}
      <g>
        <circle cx="280" cy="230" r="13" fill={accent} stroke="var(--ink)" strokeWidth="1.2" />
        <text x="280" y="234" textAnchor="middle" fontFamily="var(--geist-mono), monospace" fontSize="9" fontWeight="700" fill="var(--primary-ink)">⚡</text>
      </g>
      {/* leaf — author */}
      <g>
        <circle cx="100" cy="320" r="22" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.4" />
        <text x="100" y="316" textAnchor="middle" fontFamily="var(--geist-mono), monospace" fontSize="9" fontWeight="600" letterSpacing="0.06em" fill="var(--ink-2)">AUTHOR</text>
        <text x="100" y="328" textAnchor="middle" fontFamily="var(--geist-mono), monospace" fontSize="9" fill="var(--muted)">@rachel</text>
      </g>
      {/* leaf — agent */}
      <g>
        <circle cx="460" cy="320" r="22" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.4" />
        <text x="460" y="316" textAnchor="middle" fontFamily="var(--geist-mono), monospace" fontSize="9" fontWeight="600" letterSpacing="0.06em" fill="var(--ink-2)">AGENT</text>
        <text x="460" y="328" textAnchor="middle" fontFamily="var(--geist-mono), monospace" fontSize="9" fill="var(--muted)">claude</text>
      </g>
      {/* audit chain ticks */}
      <g transform="translate(0, 380)" fontFamily="var(--geist-mono), monospace" fontSize="9" fill="var(--muted)" letterSpacing="0.06em">
        <line x1="20" y1="0" x2="540" y2="0" stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="2 4" />
        <text x="20"  y="16">AUDIT</text>
        <text x="80"  y="16">a17f…3c</text>
        <text x="180" y="16">← b29e…7d</text>
        <text x="300" y="16">← c40a…1f</text>
        <text x="420" y="16">← d51b…2a</text>
      </g>
    </svg>
  )
}
