import type { Metadata } from 'next'
import { Section } from '@/components/sections/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Callout } from '@/components/ui/Callout'
import { PullQuote } from '@/components/ui/PullQuote'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'

export const metadata: Metadata = {
  title: 'Why Quorum',
  description: 'Five problems AI-assisted teams don\'t realise they have. Until they do.',
}

const PROBLEMS = [
  {
    id: 'institutional-memory',
    n: '01 / 05',
    title: 'The Institutional Memory Problem',
    lede: 'Your senior engineer leaves. Six months later, your AI assistant confidently proposes a caching strategy that contradicts three years of decisions she made — for reasons nobody on the current team remembers.',
    callout: 'Every decision is captured with author, rationale, and a signed audit chain. Departed engineers still get a vote. Their reasoning outlives their tenure.',
    terminal: {
      chrome: 'claude code · quorum.check',
      lines: [
        { prefix: '$',  text: 'claude code --task "add Redis caching to /api/users"', color: 'var(--ink)' },
        { prefix: '↳',  text: 'quorum.check ✓ 2 historical decisions found', color: 'var(--ink-2)' },
        { prefix: ' ',  text: 'D-204 · @rachel · 11mo · sr.eng · left team 4mo ago', color: 'var(--ink-2)' },
        { prefix: ' ',  text: '  "tried Redis here last year — stale-user bugs."', color: 'var(--muted)' },
        { prefix: ' ',  text: '  cited by 7 · reaffirmed 6w ago', color: 'var(--ink-2)' },
        { prefix: '⏸', text: 'claude code paused — cite, override, or rebut.', color: 'var(--amber)' },
      ],
    },
    flip: false,
  },
  {
    id: 'ai-contradiction',
    n: '02 / 05',
    title: 'The AI Contradiction Problem',
    lede: 'Two engineers, three months apart, stored opposing patterns. Both reasonable. Neither knew about the other. Your AI agent cheerfully synthesises both, and the codebase quietly drifts into incoherence.',
    callout: 'Semantic embedding + LLM cross-checking flags contradictions at write time. Conflicts are held until a human resolves them — never silently land in production.',
    conflict: true,
    flip: true,
  },
  {
    id: 'onboarding-cost',
    n: '03 / 05',
    title: 'The Onboarding Cost Problem',
    lede: 'A new hire asks "why was it built like this?" — gets half-answers in Slack, or worse, builds the wrong thing. That\'s typically 2–4 weeks of senior engineer time spent on context transfer that should have been written down years ago.',
    callout: 'Every "why" returns a provenance chain — original decision, all reaffirmations, known exemptions, current owner. Onboarding becomes self-serve.',
    onboarding: true,
    flip: false,
  },
  {
    id: 'decision-drift',
    n: '04 / 05',
    title: 'The Decision Drift Problem',
    lede: "Your principal's hard-won decision is functionally gone six months later — eroded one tiny change at a time across 12 PRs by people who didn't know it existed. Code review doesn't catch it.",
    callout: 'Every PR gets a Quorum pass. Contradictions show on the diff with the author and rationale cited. Override is allowed — but requires the original author or two principals, and is itself auditable.',
    drift: true,
    flip: true,
  },
  {
    id: 'buried-requirements',
    n: '05 / 05',
    title: 'The Buried Business Requirement Problem',
    lede: 'Your PM fought for guest checkout three years ago, backed by 40% abandonment data. Last month, a dev "cleaned up" what they thought was dead code. Conversion dropped 8% before anyone connected the dots. This is a business knowledge failure, not an engineering one.',
    callout: 'Business requirements are first-class governed records. PMs, compliance, and legal own pinned requirements that engineering changes cannot silently weaken.',
    req: true,
    flip: false,
  },
]

function ConflictVisual() {
  return (
    <Card padded style={{ padding: 20 }}>
      <div className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 14, letterSpacing: '0.06em' }}>
        quorum.detect · 2 patterns, 1 contradiction
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        {[
          { id: 'P-051', title: 'Prefer async/await', meta: '@alex · staff.eng · 14w · conf 0.91' },
          { id: 'P-077', title: 'Prefer .then() chains', meta: '@marco · senior · 2w · conf 0.88' },
        ].map(p => (
          <div key={p.id} style={{
            padding: 12,
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-3)',
            background: 'var(--surface-2)',
          }}>
            <div className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>{p.id}</div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, lineHeight: 1.2 }}>{p.title}</div>
            <div className="qh-mono" style={{ fontSize: 11, color: 'var(--ink-2)', lineHeight: 1.5 }}>{p.meta}</div>
          </div>
        ))}
      </div>
      <div style={{
        padding: '8px 12px',
        border: '1px solid var(--red)',
        background: 'var(--red-soft)',
        borderRadius: 'var(--r-2)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span className="qh-mono" style={{ fontSize: 12, color: 'var(--red)' }}>
          ⚠ semantic conflict · cosine 0.84 · llm-judge confirmed
        </span>
        <Tag variant="red">HOLD</Tag>
      </div>
      <div className="qh-mono" style={{ fontSize: 12, color: 'var(--ink-2)', marginTop: 8, lineHeight: 1.55 }}>
        → routed to @alex + @marco · resolution becomes citable
      </div>
    </Card>
  )
}

function OnboardingVisual() {
  return (
    <Card padded={false} style={{ overflow: 'hidden' }}>
      <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}>
        <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>quorum.search · onboarding query</span>
      </div>
      <div style={{ padding: '16px 16px 12px' }}>
        <div className="qh-mono" style={{ fontSize: 13, marginBottom: 12 }}>
          <span style={{ color: 'var(--muted)' }}>?</span>{' '}
          <span>@nora · day 3 · "why GraphQL over REST?"</span>
        </div>
        {[
          { id: 'D-014', text: 'Adopted for FE/BE contract versioning', meta: '@priya · architect · 2y ago' },
          { id: 'D-088', text: 'Reaffirmed during v2 redesign',          meta: '@kiran · staff.eng · 14mo' },
          { id: 'D-211', text: 'Exemption: /webhooks stays REST',        meta: '@kiran · 6w ago' },
        ].map((r, i, arr) => (
          <div key={r.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 8,
            padding: '6px 0',
            borderBottom: i < arr.length - 1 ? '1px dashed var(--border)' : 'none',
          }} className="qh-mono">
            <span>
              <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{r.id}</span>{' '}
              <span style={{ color: 'var(--ink-2)', fontSize: 12 }}>{r.text}</span>
            </span>
            <span style={{ color: 'var(--muted)', fontSize: 11, flexShrink: 0 }}>{r.meta}</span>
          </div>
        ))}
        <div className="qh-mono" style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--ink-2)', fontSize: 11, marginTop: 10 }}>
          <span>answered in 0.3s</span>
          <span style={{ color: 'var(--green)' }}>saved ~3 days of senior eng time</span>
        </div>
      </div>
    </Card>
  )
}

function DriftVisual() {
  return (
    <Card padded={false} style={{ overflow: 'hidden' }}>
      <div style={{ padding: '10px 16px', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>PR #847</span>
        <span style={{ fontSize: 14, fontWeight: 500 }}>refactor auth middleware</span>
        <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)', marginLeft: 'auto' }}>@jamie · open</span>
      </div>
      <div style={{ padding: '10px 16px 4px' }} className="qh-mono">
        <span style={{ fontSize: 12, color: 'var(--red)' }}>⚠ Quorum flagged 1 contradiction · review required</span>
      </div>
      <div style={{ margin: '8px 16px 14px', padding: '12px 14px', background: 'var(--primary-soft)', borderLeft: '2px solid var(--primary)', borderRadius: '0 var(--r-2) var(--r-2) 0' }}>
        <div className="qh-mono" style={{ fontSize: 12, lineHeight: 1.65, color: 'var(--ink-2)' }}>
          <div>contradicts <strong style={{ color: 'var(--ink)' }}>D-117</strong> · @sara · principal · 6mo ago</div>
          <div>"JWT rotation every 90d is mandatory."</div>
          <div>reaffirmed in 3 PRs · cited by 11 decisions</div>
          <div style={{ marginTop: 6, paddingTop: 6, borderTop: '1px dashed var(--border)' }}>
            override requires: <strong style={{ color: 'var(--primary)' }}>@sara</strong> OR 2 principals
          </div>
        </div>
      </div>
    </Card>
  )
}

function RequirementVisual() {
  return (
    <Card padded style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>R-022</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <Tag variant="primary">requirement</Tag>
          <Tag variant="outline">pinned</Tag>
        </div>
      </div>
      <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.25, marginBottom: 14 }}>
        Guest checkout must remain enabled across all surfaces.
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'auto 1fr',
        rowGap: 4, columnGap: 12,
        fontFamily: 'var(--geist-mono), ui-monospace, monospace',
        fontSize: 12, lineHeight: 1.65, marginBottom: 14,
      }}>
        <span style={{ color: 'var(--muted)' }}>owner</span>     <span style={{ color: 'var(--primary)', fontWeight: 600 }}>@ml-rodriguez · product</span>
        <span style={{ color: 'var(--muted)' }}>authority</span> <span style={{ color: 'var(--ink-2)' }}>product · cannot be weakened by engineering</span>
        <span style={{ color: 'var(--muted)' }}>evidence</span>  <span style={{ color: 'var(--ink-2)' }}>40% drop-off on signup-walled flow (n=18k)</span>
        <span style={{ color: 'var(--muted)' }}>cited by</span>  <span style={{ color: 'var(--ink-2)' }}>11 features · 4 active experiments</span>
      </div>
      <div style={{ paddingTop: 12, borderTop: '1px dashed var(--border-strong)' }} className="qh-mono">
        <div style={{ fontSize: 12, color: 'var(--ink-2)', marginBottom: 4 }}>
          PR #1204 attempted removal · @dev-quentin · 2h ago
        </div>
        <div style={{ fontSize: 13, color: 'var(--red)', fontWeight: 600 }}>
          ⛔ BLOCKED — routed to{' '}
          <span style={{ color: 'var(--primary)' }}>@ml-rodriguez</span>
        </div>
      </div>
    </Card>
  )
}

const VISUALS: Record<string, React.ReactNode> = {
  ai_contradiction: <ConflictVisual />,
  onboarding_cost: <OnboardingVisual />,
  decision_drift: <DriftVisual />,
  buried_requirements: <RequirementVisual />,
}

export default function WhyQuorumPage() {
  return (
    <>
      {/* Page hero */}
      <section style={{ padding: '64px 20px 48px', textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
        <Eyebrow style={{ marginBottom: 18, display: 'inline-block' }}>why quorum</Eyebrow>
        <h1 style={{
          margin: 0,
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 600,
          lineHeight: 1.04,
          letterSpacing: '-0.025em',
          marginBottom: 16,
          textWrap: 'balance',
        } as React.CSSProperties}>
          Five problems AI-assisted teams don't realise they{' '}
          <span style={{ color: 'var(--primary)' }}>have</span>.
        </h1>
        <p style={{
          fontSize: 18,
          color: 'var(--ink-2)',
          fontStyle: 'italic',
          margin: 0,
        }}>
          Until they do.
        </p>
      </section>

      {/* Directory strip */}
      <Section dashed padY="sm">
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Eyebrow>the five</Eyebrow>
          <div style={{ flex: 1, height: 1, borderTop: '1px dashed var(--border-strong)', minWidth: 20 }} />
          <Eyebrow>memory · contradiction · onboarding · drift · business</Eyebrow>
          <div style={{ flex: 1, height: 1, borderTop: '1px dashed var(--border-strong)', minWidth: 20 }} />
          <Eyebrow>↓</Eyebrow>
        </div>
      </Section>

      {/* Problem sections */}
      {PROBLEMS.map((p) => {
        const visualKey = p.conflict ? 'ai_contradiction'
          : p.onboarding ? 'onboarding_cost'
          : p.drift ? 'decision_drift'
          : p.req ? 'buried_requirements'
          : null

        return (
          <Section key={p.id} id={p.id} padY="xl">
            <div style={{ display: 'grid', alignItems: 'center' }} className="qh-2col">
              <div style={{ order: p.flip ? 2 : 1, maxWidth: 500 }}>
                <Eyebrow style={{ marginBottom: 14, color: 'var(--red)' }}>
                  <span style={{ color: 'var(--red)' }}>PROBLEM</span> · {p.n}
                </Eyebrow>
                <h2 style={{
                  margin: 0,
                  fontSize: 'clamp(24px, 3.5vw, 34px)',
                  fontWeight: 600,
                  lineHeight: 1.12,
                  letterSpacing: '-0.02em',
                  marginBottom: 14,
                  textWrap: 'balance',
                } as React.CSSProperties}>
                  {p.title}
                </h2>
                <p style={{ margin: '0 0 20px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                  {p.lede}
                </p>
                <Callout>{p.callout}</Callout>
              </div>

              <div style={{ order: p.flip ? 1 : 2 }}>
                {visualKey ? (
                  VISUALS[visualKey]
                ) : (
                  /* §01 uses terminal block */
                  <Card padded={false} style={{ overflow: 'hidden' }}>
                    <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        {['#ed6a5e', '#f5bf4f', '#62c554'].map((c, i) => (
                          <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.85 }} />
                        ))}
                      </div>
                      <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>claude code · quorum.check</span>
                    </div>
                    <pre className="qh-mono" style={{ margin: 0, padding: '16px 18px', fontSize: 12, lineHeight: 1.7, color: 'var(--ink)', overflowX: 'auto', whiteSpace: 'pre' }}>
                      <span>{'$ claude code --task "add Redis caching to /api/users"\n'}</span>
                      <span style={{ color: 'var(--ink-2)' }}>
                        {'↳ quorum.check ✓ 2 historical decisions found\n'}
                        {'   D-204 · @rachel · 11mo · left team 4mo ago\n'}
                        {'     "tried Redis here last year — stale-user bugs."\n'}
                        {'     cited by 7 · reaffirmed 6w ago\n\n'}
                      </span>
                      <span style={{ color: 'var(--amber)' }}>{'⏸ claude code paused — cite, override, or rebut.'}</span>
                    </pre>
                  </Card>
                )}
              </div>
            </div>
          </Section>
        )
      })}

      {/* Mid-page pull quote */}
      <Section padY="md">
        <PullQuote cite="common in user interviews" style={{ maxWidth: 720, margin: '0 auto' }}>
          A codebase isn't a body of code. It's a body of decisions, of which the code is the most recent expression.
        </PullQuote>
      </Section>

      {/* CTA */}
      <Section id="cta" padY="xl" tint>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{
            margin: 0,
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 600,
            letterSpacing: '-0.022em',
            lineHeight: 1.08,
            marginBottom: 14,
          }}>
            Sound familiar?
          </h2>
          <p style={{ margin: '0 auto 28px', fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>
            Quorum is open source, Apache 2.0, self-hosted. Star the repo, install the MCP server, and your agents stop forgetting.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" href="/get-started" iconRight="→">Get Started Free</Button>
            <Button variant="secondary" size="lg" href="https://github.com/ayansasmal/quorum-pub-website">View on GitHub</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
