import { Section } from './Section'
import { Button } from '@/components/ui/Button'

export function ClosingCTA() {
  return (
    <Section id="cta" padY="xl" tint>
      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
        <h2 style={{
          margin: 0,
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 600,
          letterSpacing: '-0.022em',
          lineHeight: 1.08,
          marginBottom: 14,
          textWrap: 'balance',
        } as React.CSSProperties}>
          Free. Open source. Self-hosted.{' '}
          <span style={{ color: 'var(--primary)' }}>Apache 2.0.</span>
        </h2>
        <p style={{
          margin: '0 auto 28px',
          maxWidth: 560,
          fontSize: 16,
          lineHeight: 1.55,
          color: 'var(--ink-2)',
        }}>
          Run Quorum next to your agents. Bring your own LLM key. No per-seat fees, ever.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="primary"
            size="lg"
            href="https://github.com/ayansasmal/quorum-pub-website"
            iconRight="→"
          >
            Star on GitHub
          </Button>
          <Button variant="secondary" size="lg" href="/get-started">
            Read the Docs
          </Button>
        </div>
        <div style={{
          marginTop: 22,
          fontFamily: 'var(--geist-mono), ui-monospace, monospace',
          fontSize: 11,
          color: 'var(--muted)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          v0.4 · 218 commits · 31 contributors
        </div>
      </div>
    </Section>
  )
}
