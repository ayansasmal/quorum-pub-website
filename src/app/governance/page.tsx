import type { Metadata } from 'next'
import { Section } from '@/components/sections/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Callout } from '@/components/ui/Callout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Governance',
  description: 'Governance is architecture, not configuration. Quorum\'s constitutional rules are enforced in code — there is no setting that bypasses them.',
}

const PILLARS = [
  {
    name: 'On Write',
    tagline: 'Rules that govern every write to the graph.',
    rules: [
      { n: '01', title: 'Never hard delete',         desc: 'Always supersede with reason. History is preserved forever.' },
      { n: '03', title: 'Always require reason',     desc: 'On every state change. Enforced in code, not convention.' },
      { n: '09', title: 'Provenance on every write', desc: 'author · timestamp · session_id · agent_id · triggered_by — always.' },
    ],
  },
  {
    name: 'On Conflict',
    tagline: 'Rules that govern disagreement between authors.',
    rules: [
      { n: '02', title: 'Never silent conflict resolution', desc: 'Always notify, log, and require a human decision.' },
      { n: '04', title: 'No self-approval',                 desc: 'Conflict parties cannot resolve their own conflicts, ever.' },
      { n: '07', title: 'Dissent is preserved',             desc: 'Overruled concerns stored permanently. Never deleted.' },
    ],
  },
  {
    name: 'On Agents',
    tagline: 'Rules that bound AI authority inside the graph.',
    rules: [
      { n: '05', title: 'Human at genuine forks',    desc: 'Agents operate within known knowledge. Humans decide at ambiguity.' },
      { n: '08', title: 'Draft knowledge never used', desc: 'Claude never injects unreviewed knowledge into context.' },
    ],
  },
  {
    name: 'On Governance',
    tagline: 'Rules about the rules themselves.',
    rules: [
      { n: '06', title: 'Governance is architecture',             desc: 'Invariants are code, not config, not policy.' },
      { n: '10', title: 'Constitution changes require community', desc: 'No single person changes Layer 1 unilaterally.' },
    ],
  },
]

const ACCOUNTABILITY_LAYERS = [
  { layer: 'L1', name: 'Protocol',  tagline: 'Constitutional rules enforced in code. Non-bypassable.' },
  { layer: 'L2', name: 'Peers',     tagline: 'Distributed review. Dissent preserved permanently.' },
  { layer: 'L3', name: 'Graph',     tagline: 'Decision history audits the decision makers themselves.' },
  { layer: 'L4', name: 'Public',    tagline: 'Open source. Transparent design. Community scrutiny.' },
  { layer: 'L5', name: 'Time',      tagline: 'Outcomes are the ultimate truth. Good decisions survive scrutiny.' },
]

const AUDIENCES = [
  {
    icon: '👩‍💻',
    title: 'Engineering Teams',
    body: 'Stop re-litigating decisions. Stop losing context when people leave. Your AI agents build on what\'s already been decided.',
  },
  {
    icon: '📊',
    title: 'Product Managers',
    body: 'Your requirements are first-class governed records. Engineers cannot silently remove them. Authority is explicit and auditable.',
  },
  {
    icon: '⚖️',
    title: 'Compliance & Legal',
    body: 'Export the full audit chain for SOC 2. Pin requirements that regulatory changes mandate. Every decision has a defensible record.',
  },
  {
    icon: '🏛️',
    title: 'Engineering Leaders',
    body: 'Knowledge compounds across teams and quarters. New hires onboard faster. Senior engineers leave — their reasoning doesn\'t.',
  },
]

export default function GovernancePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '64px 20px 48px', textAlign: 'center', maxWidth: 960, margin: '0 auto' }}>
        <Eyebrow style={{ marginBottom: 18, display: 'inline-block', color: 'var(--red)' }}>
          non-negotiable
        </Eyebrow>
        <h1 style={{
          margin: 0,
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 600,
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          marginBottom: 20,
          textWrap: 'balance',
        } as React.CSSProperties}>
          Governance is{' '}
          <span style={{ color: 'var(--primary)' }}>architecture</span>. Not configuration.
        </h1>
        <p style={{
          fontSize: 18,
          color: 'var(--ink-2)',
          lineHeight: 1.55,
          maxWidth: 720,
          margin: '0 auto',
        }}>
          Most tools have governance settings you can turn off. Quorum's constitutional rules are
          enforced in code.{' '}
          <strong>There is no setting that bypasses them.</strong>
        </p>
      </section>

      {/* §01 — Constitutional rules */}
      <Section id="constitutional-rules" padY="lg">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <Eyebrow>
            <span className="lead">SECTION 01</span> · the constitutional rules
          </Eyebrow>
          <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>10 rules · enforced in code</span>
        </div>

        <div style={{ display: 'grid', gap: 24 }} className="qh-2col">
          {PILLARS.map((pillar) => (
            <Card key={pillar.name} padded style={{ borderTop: '3px solid var(--primary)' }}>
              <div style={{ paddingBottom: 14, marginBottom: 12, borderBottom: '1px solid var(--border)' }}>
                <div className="qh-mono" style={{ fontSize: 11, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 4 }}>
                  {pillar.name}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', fontStyle: 'italic', lineHeight: 1.4 }}>
                  {pillar.tagline}
                </div>
              </div>
              {pillar.rules.map((rule, i) => (
                <div key={rule.n} style={{
                  display: 'grid',
                  gridTemplateColumns: '32px 1fr',
                  gap: 12,
                  padding: '10px 0',
                  borderBottom: i < pillar.rules.length - 1 ? '1px dashed var(--border)' : 'none',
                  alignItems: 'baseline',
                }}>
                  <span className="qh-mono" style={{ fontSize: 16, color: 'var(--primary)', fontWeight: 700 }}>
                    {rule.n}
                  </span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.2, marginBottom: 4 }}>{rule.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{rule.desc}</div>
                  </div>
                </div>
              ))}
            </Card>
          ))}
        </div>
      </Section>

      {/* §02 — Accountability */}
      <Section id="accountability" padY="xl" tint>
        <Eyebrow style={{ marginBottom: 14 }}>
          <span className="lead">SECTION 02</span> · who audits the auditor?
        </Eyebrow>
        <h2 style={{
          margin: 0,
          fontSize: 'clamp(24px, 3.5vw, 36px)',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: 16,
          maxWidth: 640,
          textWrap: 'balance',
        } as React.CSSProperties}>
          Five layers of accountability, from code to community.
        </h2>
        <p style={{ margin: '0 0 32px', fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: 640 }}>
          The innermost layer is the hardest to bypass. The outermost takes the longest to settle.
          Together they make Quorum self-correcting at every timescale.
        </p>
        <div style={{ display: 'grid', gap: 16 }}>
          {ACCOUNTABILITY_LAYERS.map((l) => (
            <div key={l.layer} style={{
              display: 'grid',
              gridTemplateColumns: '56px 1fr',
              gap: 20,
              padding: '16px 20px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-3)',
              alignItems: 'center',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em' }}>{l.layer}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>{l.name}</div>
              </div>
              <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5 }}>{l.tagline}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* §03 — In practice */}
      <Section id="in-practice" padY="xl">
        <Eyebrow style={{ marginBottom: 14 }}>
          <span className="lead">SECTION 03</span> · in practice
        </Eyebrow>
        <h2 style={{
          margin: 0,
          fontSize: 'clamp(24px, 3.5vw, 36px)',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: 16,
          maxWidth: 640,
        }}>
          What the rules look like when they activate.
        </h2>
        <div style={{ display: 'grid', gap: 24 }} className="qh-2col">
          {[
            {
              n: '01 / 03',
              title: 'An agent tries to delete a record',
              body: 'The server rejects the call. No hard deletes, ever. The agent must supersede with a reason — which itself becomes an auditable record.',
              code: '→ reject: use forget(topic, key, reason) instead',
            },
            {
              n: '02 / 03',
              title: 'Two records contradict each other',
              body: 'Both are placed in HOLD. Neither is used in agent context. A human resolves the conflict — the resolution itself is hash-chained.',
              code: '→ conflict_detected · routed to @original-author',
            },
            {
              n: '03 / 03',
              title: 'A PR removes a pinned requirement',
              body: 'Quorum flags the contradiction at CI time. The PR is blocked. Override requires the requirement owner or two principals.',
              code: '→ BLOCKED · requires @owner OR 2 principals',
            },
          ].map((s) => (
            <Card key={s.n} padded>
              <div className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 12 }}>ENFORCEMENT · {s.n}</div>
              <h3 style={{ margin: '0 0 10px', fontSize: 18, fontWeight: 600, lineHeight: 1.2 }}>{s.title}</h3>
              <p style={{ margin: '0 0 14px', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>{s.body}</p>
              <div className="qh-mono" style={{ fontSize: 12, color: 'var(--primary)', padding: '8px 12px', background: 'var(--primary-soft)', borderRadius: 'var(--r-2)' }}>
                {s.code}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* §04 — Open source governance */}
      <Section id="open-source" padY="xl" tint>
        <Eyebrow style={{ marginBottom: 14 }}>
          <span className="lead">SECTION 04</span> · open source governance
        </Eyebrow>
        <div style={{ display: 'grid', alignItems: 'center' }} className="qh-2col">
          <div style={{ maxWidth: 480 }}>
            <h2 style={{
              margin: 0,
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: 16,
            }}>
              The source is the specification.
            </h2>
            <p style={{ margin: '0 0 20px', fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>
              Every constitutional rule is implemented in the open. You can read the enforcement code,
              propose changes, and run your own governance review. No trust required.
            </p>
            <Callout label="Why open source governance matters">
              Closed governance tools ask you to trust their promises. Quorum asks you to read the
              code. The enforcement layer is auditable by anyone.
            </Callout>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { label: 'Apache 2.0 license', desc: 'Use commercially, modify freely, distribute with attribution.' },
              { label: 'Constitutional rules in code', desc: 'Server-enforced, not convention. Read the source.' },
              { label: 'Community change process', desc: 'Layer 1 changes require consensus — no unilateral amendments.' },
              { label: 'Public audit exports', desc: 'Export the full hash chain. Hand it to auditors.' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  marginTop: 6,
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* §05 — Audiences */}
      <Section id="audiences" padY="xl">
        <Eyebrow style={{ marginBottom: 14 }}>
          <span className="lead">SECTION 05</span> · audiences
        </Eyebrow>
        <h2 style={{
          margin: 0,
          fontSize: 'clamp(24px, 3.5vw, 36px)',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: 32,
          maxWidth: 480,
        }}>
          Governance for everyone on the chain.
        </h2>
        <div style={{ display: 'grid', gap: 20 }} className="qh-pain-grid">
          {AUDIENCES.map((a) => (
            <Card key={a.title} padded hoverable>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{a.icon}</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 600, lineHeight: 1.2 }}>{a.title}</h3>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{a.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section padY="xl" tint>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{
            margin: 0,
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 14,
          }}>
            Governance that works because it can't be turned off.
          </h2>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
            <Button variant="primary" size="lg" href="/get-started" iconRight="→">Get Started Free</Button>
            <Button variant="secondary" size="lg" href="/features">Explore Features</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
