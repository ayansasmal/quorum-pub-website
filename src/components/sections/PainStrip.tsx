import { Section } from './Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

const PAIN_POINTS = [
  {
    icon: '🧠',
    title: 'Knowledge leaves with your engineers',
    desc: 'Capture every architectural decision automatically — author, rationale, signed audit chain.',
  },
  {
    icon: '⚡',
    title: 'AI agents contradict each other',
    desc: 'Conflict detection flags contradictions before they persist — at write time, not in production.',
  },
  {
    icon: '📋',
    title: 'Requirements get silently removed',
    desc: 'Requirements are first-class governed knowledge — pinned, owned, defensible.',
  },
]

export function PainStrip() {
  return (
    <Section id="pain" padY="md">
      <Eyebrow style={{ marginBottom: 18 }}>
        the three things that break AI-assisted teams
      </Eyebrow>
      <div style={{ display: 'grid', gap: 24 }} className="qh-pain-grid">
        {PAIN_POINTS.map((p) => (
          <div key={p.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 'var(--r-3)',
              background: 'var(--surface-2)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              flexShrink: 0,
              border: '1px solid var(--border)',
            }}>
              {p.icon}
            </div>
            <div>
              <div style={{
                fontSize: 16,
                fontWeight: 600,
                lineHeight: 1.3,
                marginBottom: 6,
                letterSpacing: '-0.01em',
              }}>
                {p.title}
              </div>
              <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>
                {p.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
