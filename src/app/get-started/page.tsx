import type { Metadata } from 'next'
import { Section } from '@/components/sections/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Callout } from '@/components/ui/Callout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'

export const metadata: Metadata = {
  title: 'Get Started',
  description: 'Set up Quorum in 30 minutes. Apache 2.0, self-hosted, no account required.',
}

const PREREQS = [
  { icon: '🐳', label: 'Docker + Docker Compose', desc: 'v20+ recommended. Used to run the graph server and gateway.' },
  { icon: '⬢', label: 'Node.js 18+', desc: 'For the MCP server and CLI tools.' },
  { icon: '✦', label: 'Claude Code', desc: 'With MCP support. The primary interface for interacting with Quorum.' },
  { icon: '⎇', label: 'GitHub account', desc: 'Authentication uses GitHub OAuth. Required for all team members.' },
]

const STEPS = [
  {
    n: '01',
    title: 'Clone and run the server',
    desc: 'Clone the Quorum repository and run the setup script. It starts a Docker stack with the graph server, gateway, and UI.',
    code: `git clone https://github.com/ayansasmal/quorum
cd quorum
./scripts/setup.sh docker`,
    note: 'The setup script creates a .env file with sensible defaults. Edit it before running in production.',
  },
  {
    n: '02',
    title: 'Create your team config',
    desc: 'Create a config file for your team. This registers your project with the graph server and defines team members and domains.',
    code: `# my-team.quorum.json
{
  "group_id": "my-team",
  "owner": "your-github-username",
  "members": ["alice", "bob", "carol"],
  "domains": ["auth", "api", "infra"],
  "gateway_url": "http://localhost:3001"
}`,
    note: 'group_id must use hyphens, not underscores. Use my-team, not my_team.',
  },
  {
    n: '03',
    title: 'Install the MCP server',
    desc: 'Install the Quorum MCP package globally. This registers Quorum as a tool Claude Code can use in any project.',
    code: `git clone https://github.com/ayansasmal/quorum-mcp
cd quorum-mcp && npm install && npm run install-mcp`,
    note: 'This adds the quorum MCP server to your Claude Code config. Restart Claude Code after installation.',
  },
  {
    n: '04',
    title: 'Verify the connection',
    desc: 'Open a new Claude Code session in your project directory and ask Claude to check for pending Quorum decisions.',
    code: `# In Claude Code:
"What pending Quorum decisions are there?"

# Expected response:
→ No pending items. Graph is connected.
   Project: my-team · 0 entries`,
    note: 'If you see auth needed, a browser tab will open. Sign in with GitHub and return to Claude Code.',
  },
]

const NEXT_STEPS = [
  {
    icon: '📝',
    title: 'Store your first decision',
    desc: 'Ask Claude to remember something your team has decided: "Remember that we use JWT tokens for Lambda services."',
    href: '/features#governed-memory',
    cta: 'See governed memory →',
  },
  {
    icon: '⚖️',
    title: 'Read the constitutional rules',
    desc: 'Ten invariants enforced in code, not convention. Understand what Quorum guarantees before relying on it.',
    href: '/governance',
    cta: 'Read governance →',
  },
  {
    icon: '📋',
    title: 'Add business requirements',
    desc: 'Store product requirements as first-class governed records. They\'ll surface automatically in every relevant agent session.',
    href: '/features#business-requirements',
    cta: 'See requirements →',
  },
  {
    icon: '🔗',
    title: 'Export your audit chain',
    desc: 'Every write is SHA-256 hash-chained. Export the full audit log for SOC 2 or compliance reviews at any time.',
    href: '/features#audit-chain',
    cta: 'See audit chain →',
  },
]

export default function GetStartedPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '64px 20px 48px', textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
        <Eyebrow style={{ marginBottom: 18, display: 'inline-block', color: 'var(--green)' }}>
          setup · ~30 minutes
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
          Running in 30 minutes.
          <br />
          <span style={{ color: 'var(--primary)' }}>No account required.</span>
        </h1>
        <p style={{ fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.55, maxWidth: 600, margin: '0 auto 28px' }}>
          Apache 2.0. Self-hosted. Four steps from zero to governed memory.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Tag variant="default">Docker</Tag>
          <Tag variant="default">Node.js 18+</Tag>
          <Tag variant="default">Claude Code</Tag>
          <Tag variant="default">GitHub OAuth</Tag>
        </div>
      </section>

      {/* §01 — Prerequisites */}
      <Section id="prerequisites" padY="lg" tint>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <Eyebrow>
            <span className="lead">SECTION 01</span> · prerequisites
          </Eyebrow>
          <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>4 things · all free</span>
        </div>

        <div style={{ display: 'grid', gap: 16 }} className="qh-2col">
          {PREREQS.map((p) => (
            <div key={p.label} style={{
              display: 'flex',
              gap: 16,
              padding: '16px 20px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-3)',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 'var(--r-2)',
                background: 'var(--surface-2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                flexShrink: 0,
                border: '1px solid var(--border)',
              }}>
                {p.icon}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4, lineHeight: 1.2 }}>{p.label}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* §02 — Setup steps */}
      <Section id="setup" padY="xl">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
          <Eyebrow>
            <span className="lead">SECTION 02</span> · setup steps
          </Eyebrow>
          <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>4 steps · ~30 minutes</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {STEPS.map((step, i) => (
            <div key={step.n} style={{
              display: 'grid',
              gridTemplateColumns: '56px 1fr',
              gap: 0,
            }}>
              {/* Step indicator column */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  color: 'var(--primary-ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--geist-mono), monospace',
                  fontSize: 13,
                  fontWeight: 700,
                  flexShrink: 0,
                  zIndex: 1,
                  position: 'relative',
                }}>
                  {step.n}
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{
                    width: 2,
                    flex: 1,
                    background: 'var(--border)',
                    marginTop: 4,
                    marginBottom: 4,
                    minHeight: 24,
                  }} />
                )}
              </div>

              {/* Content column */}
              <div style={{ paddingLeft: 16, paddingBottom: i < STEPS.length - 1 ? 36 : 0 }}>
                <h3 style={{ margin: '8px 0 10px', fontSize: 20, fontWeight: 600, lineHeight: 1.2 }}>
                  {step.title}
                </h3>
                <p style={{ margin: '0 0 16px', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>
                  {step.desc}
                </p>

                {/* Code block */}
                <div style={{
                  background: 'var(--bg-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-3)',
                  overflow: 'hidden',
                  marginBottom: 12,
                }}>
                  <div style={{
                    padding: '8px 14px',
                    borderBottom: '1px solid var(--border)',
                    background: 'var(--surface-2)',
                    display: 'flex',
                    gap: 6,
                    alignItems: 'center',
                  }}>
                    {['#c25856', '#d9a245', '#5ab955'].map((c) => (
                      <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                    ))}
                    <span className="qh-mono" style={{ fontSize: 10, color: 'var(--muted)', marginLeft: 6 }}>
                      {step.n === '02' ? 'my-team.quorum.json' : 'terminal'}
                    </span>
                  </div>
                  <pre className="qh-mono" style={{
                    margin: 0,
                    padding: '14px 16px',
                    fontSize: 12,
                    lineHeight: 1.7,
                    color: 'var(--ink)',
                    overflowX: 'auto',
                    background: 'transparent',
                  }}>
                    {step.code}
                  </pre>
                </div>

                {step.note && (
                  <div className="qh-mono" style={{
                    fontSize: 11,
                    color: 'var(--muted)',
                    padding: '6px 10px',
                    borderLeft: '2px solid var(--border-strong)',
                    lineHeight: 1.5,
                  }}>
                    ↳ {step.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* §03 — First knowledge node */}
      <Section id="first-node" padY="xl" tint>
        <Eyebrow style={{ marginBottom: 14 }}>
          <span className="lead">SECTION 03</span> · your first knowledge node
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
              Ask Claude to remember something real.
            </h2>
            <p style={{ margin: '0 0 16px', fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>
              Don&apos;t start with a synthetic test. Pick something your team actually decided —
              an architecture choice, a constraint, a requirement. Store it. Watch it come back.
            </p>
            <Callout label="Tip: start with constraints">
              Constraints — things you decided NOT to do — are the most valuable entries.
              They&apos;re also the most likely to be forgotten. Start there.
            </Callout>
          </div>

          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-4)',
            overflow: 'hidden',
          }}>
            <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}>
              <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>
                claude code · quorum session
              </span>
            </div>
            <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { who: 'you', text: 'Remember that we use JWT for Lambda services, not session tokens. Session tokens are for ECS internal services only.', color: 'var(--primary)' },
                { who: 'quorum', text: '→ auth:token-strategy stored · confidence 0.90 · DRAFT pending review', color: 'var(--green)' },
                { who: 'you', text: 'What do you know about our auth strategy?', color: 'var(--primary)' },
                { who: 'quorum', text: '↓ auth:token-strategy (ACTIVE) · JWT for Lambda, session tokens for ECS internal · authored @you · cited 0 times', color: 'var(--ink-2)' },
              ].map((e, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 8, alignItems: 'flex-start' }}>
                  <span className="qh-mono" style={{
                    fontSize: 10,
                    padding: '1px 5px',
                    borderRadius: 'var(--r-1)',
                    background: e.who === 'you' ? 'var(--primary-soft)' : 'var(--surface-2)',
                    color: e.who === 'you' ? 'var(--primary)' : 'var(--muted)',
                    border: '1px solid var(--border)',
                    whiteSpace: 'nowrap',
                  }}>
                    {e.who === 'you' ? 'you' : 'quorum'}
                  </span>
                  <div className="qh-mono" style={{ fontSize: 11, color: e.color, lineHeight: 1.55 }}>
                    {e.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* §04 — What next */}
      <Section id="what-next" padY="xl">
        <Eyebrow style={{ marginBottom: 14 }}>
          <span className="lead">SECTION 04</span> · what next
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
          Once you&apos;re running, here&apos;s where to go.
        </h2>
        <div style={{ display: 'grid', gap: 20 }} className="qh-pain-grid">
          {NEXT_STEPS.map((s) => (
            <Card key={s.title} padded hoverable>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 600, lineHeight: 1.25 }}>{s.title}</h3>
              <p style={{ margin: '0 0 14px', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.55, flex: 1 }}>{s.desc}</p>
              <a href={s.href} style={{
                fontFamily: 'var(--geist-mono), monospace',
                fontSize: 11,
                color: 'var(--primary)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}>
                {s.cta}
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* §05 — Need help */}
      <Section id="help" padY="xl" tint>
        <Eyebrow style={{ marginBottom: 14 }}>
          <span className="lead">SECTION 05</span> · need help?
        </Eyebrow>
        <div style={{ display: 'grid', gap: 24 }} className="qh-2col">
          <div style={{ maxWidth: 480 }}>
            <h2 style={{
              margin: 0,
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: 16,
            }}>
              We&apos;re responsive on GitHub.
            </h2>
            <p style={{ margin: '0 0 20px', fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>
              Open an issue for bugs or setup problems. Start a Discussion for questions
              about architecture or how to model your team&apos;s knowledge. Both are watched.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="primary" href="https://github.com/ayansasmal/quorum/issues" size="md">
                Open an issue
              </Button>
              <Button variant="secondary" href="https://github.com/ayansasmal/quorum/discussions" size="md">
                Start a discussion
              </Button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { q: 'Setup not working?', a: 'Check that Docker is running and ports 3001–3003 are free. The setup script logs clearly when a port is in conflict.' },
              { q: 'Claude Code not seeing Quorum?', a: 'Restart Claude Code after installing the MCP server. The MCP registry is read at startup.' },
              { q: 'Auth not completing?', a: 'The OAuth callback requires the gateway to be reachable at localhost:3001. Check your Docker network settings.' },
              { q: 'Enterprise setup?', a: 'The architecture supports air-gapped environments and private GitHub Enterprise. Email the maintainers for guidance.' },
            ].map((item) => (
              <div key={item.q} style={{
                padding: '14px 16px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-3)',
              }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{item.q}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
