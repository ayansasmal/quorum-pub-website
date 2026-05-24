import type { Metadata } from 'next'
import { Section } from '@/components/sections/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Callout } from '@/components/ui/Callout'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Eight capabilities that make Quorum the governed memory layer for AI-assisted engineering teams.',
}

const FEATURES = [
  {
    icon: '🧠',
    id: 'governed-memory',
    title: 'Governed Memory',
    body: 'Every write is authored, timestamped, confidence-rated, and linked to the session that triggered it. Nothing is anonymous. Nothing is ephemeral.',
    detail: [
      ['author',       '@avery · senior'],
      ['confidence',   '0.94'],
      ['triggered_by', 'claude-code session #847'],
      ['session_id',   's_a91f4b'],
    ],
  },
  {
    icon: '⚡',
    id: 'conflict-detection',
    title: 'Conflict Detection',
    body: 'Semantic embedding + LLM cross-checking flags contradictions at write time — before they land in context windows and before PRs are opened.',
    conflict: true,
  },
  {
    icon: '⚖️',
    id: 'authority-weighting',
    title: 'Authority Weighting',
    body: 'Not all knowledge carries the same weight. Principal architects outweigh agents. Product owners outweigh engineers. Trust degrades gracefully.',
    authority: true,
  },
  {
    icon: '📋',
    id: 'business-requirements',
    title: 'Business Requirements',
    badge: 'NEW',
    body: 'Engineering decisions explain how. Business requirements explain why and when. Quorum stores both — governed identically, owned independently.',
  },
  {
    icon: '🔗',
    id: 'audit-chain',
    title: 'Audit Chain',
    body: 'Every write is SHA-256 hash-chained to the previous. The chain is append-only, tamper-evident, and exportable for SOC 2.',
    chain: true,
  },
  {
    icon: '⏳',
    id: 'pending-decisions',
    title: 'Pending Decisions',
    body: 'Conflicts that need human resolution surface as HOLD states at every session start. Nothing gets buried in a queue nobody checks.',
    pending: true,
  },
  {
    icon: '🔄',
    id: 'knowledge-states',
    title: 'Knowledge States',
    body: 'Knowledge has a lifecycle: DRAFT → ACTIVE → SUPERSEDED → DEPRECATED. No hard deletes, ever. History is permanent.',
    states: true,
  },
  {
    icon: '🏗️',
    id: 'multi-project-isolation',
    title: 'Multi-Project Isolation',
    body: 'Teams share a graph instance but operate in isolated namespaces. Cross-team knowledge sharing is explicit and auditable.',
    groups: true,
  },
]

function AuthorityBars() {
  const rows = [
    { role: 'principal',        w: 100 },
    { role: 'product_owner',    w: 100 },
    { role: 'business_analyst', w: 80  },
    { role: 'staff.eng',        w: 70  },
    { role: 'senior',           w: 50  },
    { role: 'engineer',         w: 30  },
    { role: 'agent',            w: 15  },
  ]
  return (
    <div className="qh-mono" style={{ fontSize: 11, color: 'var(--ink-2)', marginTop: 14 }}>
      {rows.map(r => (
        <div key={r.role} style={{ display: 'grid', gridTemplateColumns: '110px 1fr 28px', gap: 8, alignItems: 'center', padding: '2px 0' }}>
          <span style={{ color: 'var(--muted)' }}>{r.role}</span>
          <div style={{ position: 'relative', height: 5, background: 'var(--surface-2)', borderRadius: 3, border: '1px solid var(--border)' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${r.w}%`, background: r.role === 'agent' ? 'var(--muted)' : 'var(--primary)', borderRadius: 3 }} />
          </div>
          <span style={{ textAlign: 'right', color: 'var(--ink)' }}>{r.w}</span>
        </div>
      ))}
    </div>
  )
}

function FeatureDetail({ feature }: { feature: typeof FEATURES[number] }) {
  if (feature.detail) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', rowGap: 3, columnGap: 10, marginTop: 14, fontFamily: 'var(--geist-mono), ui-monospace, monospace', fontSize: 11 }}>
        {feature.detail.map(([k, v]) => (
          <>
            <span key={k + '-k'} style={{ color: 'var(--muted)' }}>{k}</span>
            <span key={k + '-v'} style={{ color: 'var(--ink-2)' }}>{v}</span>
          </>
        ))}
      </div>
    )
  }
  if (feature.conflict) {
    return (
      <div className="qh-mono" style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', fontSize: 11 }}>
        <span style={{ padding: '4px 8px', border: '1px solid var(--border)', borderRadius: 'var(--r-1)', color: 'var(--ink-2)' }}>D-204 token bucket</span>
        <span style={{ color: 'var(--red)', fontWeight: 700 }}>⚡</span>
        <span style={{ padding: '4px 8px', border: '1px solid var(--border)', borderRadius: 'var(--r-1)', color: 'var(--ink-2)' }}>D-205 sliding window</span>
        <Tag variant="red">conflict</Tag>
      </div>
    )
  }
  if (feature.authority) {
    return <AuthorityBars />
  }
  if (feature.chain) {
    return (
      <div className="qh-mono" style={{ fontSize: 11, color: 'var(--ink-2)', lineHeight: 1.6, marginTop: 14 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--muted)' }}>sha256:</span>
          <span>a17f…3c</span>
          <span style={{ color: 'var(--muted)' }}>←</span>
          <span>b29e…7d</span>
          <span style={{ color: 'var(--muted)' }}>←</span>
          <span>c40a…1f</span>
        </div>
        <div style={{ color: 'var(--muted)', marginTop: 2 }}>chain intact · 12,488 events · last signed 14:02</div>
      </div>
    )
  }
  if (feature.pending) {
    return (
      <div className="qh-mono" style={{ fontSize: 11, color: 'var(--ink-2)', lineHeight: 1.6, marginTop: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span><span style={{ color: 'var(--muted)' }}>D-205</span> sliding window?</span>
          <span style={{ color: 'var(--amber)' }}>HOLD</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span><span style={{ color: 'var(--muted)' }}>P-091</span> error log format</span>
          <span style={{ color: 'var(--muted)' }}>queued</span>
        </div>
        <div style={{ color: 'var(--muted)', marginTop: 4 }}>↳ surfaced at next session start</div>
      </div>
    )
  }
  if (feature.states) {
    const states = ['DRAFT', 'ACTIVE', 'SUPERSEDED', 'DEPRECATED']
    return (
      <div className="qh-mono" style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontSize: 10 }}>
        {states.map((s, i) => (
          <>
            <span key={s} style={{
              padding: '2px 7px',
              border: `1px solid ${i === 1 ? 'var(--primary)' : 'var(--border-strong)'}`,
              borderRadius: 'var(--r-1)',
              color: i === 1 ? 'var(--primary)' : 'var(--ink-2)',
              background: i === 1 ? 'var(--primary-soft)' : 'transparent',
            }}>{s}</span>
            {i < states.length - 1 && <span key={s + '-arrow'} style={{ color: 'var(--muted)' }}>→</span>}
          </>
        ))}
      </div>
    )
  }
  if (feature.groups) {
    return (
      <div className="qh-mono" style={{ fontSize: 11, color: 'var(--ink-2)', marginTop: 14 }}>
        {[
          { id: 'group:platform',  count: 412, shared: false },
          { id: 'group:billing',   count: 187, shared: false },
          { id: 'group:org-adrs',  count:  46, shared: true  },
        ].map((r, i, arr) => (
          <div key={r.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', borderBottom: i < arr.length - 1 ? '1px dashed var(--border)' : 'none' }}>
            <span style={{ color: 'var(--muted)' }}>{r.id}</span>
            <span>
              {r.count} records
              {r.shared && <span style={{ color: 'var(--primary)', marginLeft: 6 }}>· cross-team</span>}
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '64px 20px 48px', textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
        <Eyebrow style={{ marginBottom: 18, display: 'inline-block' }}>features</Eyebrow>
        <h1 style={{
          margin: 0,
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 600,
          lineHeight: 1.04,
          letterSpacing: '-0.025em',
          marginBottom: 16,
          textWrap: 'balance',
        } as React.CSSProperties}>
          Eight capabilities. One governed memory layer.
        </h1>
        <p style={{ fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.55, maxWidth: 640, margin: '0 auto' }}>
          Quorum isn't a database for decisions. It's a governed graph that enforces authority, detects contradictions, and makes AI agents accountable.
        </p>
      </section>

      {/* Feature grid */}
      <Section padY="lg">
        <div style={{ display: 'grid', gap: 24 }} className="qh-feature-grid">
          {FEATURES.map((f) => (
            <Card key={f.id} padded hoverable style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 'var(--r-3)',
                  background: 'var(--surface-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  border: '1px solid var(--border)',
                  flexShrink: 0,
                }}>
                  {f.icon}
                </div>
                {f.badge && <Tag variant="primary">{f.badge}</Tag>}
              </div>
              <h2 id={f.id} style={{ margin: '0 0 10px', fontSize: 20, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.2 }}>
                {f.title}
              </h2>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55, flex: 1 }}>
                {f.body}
              </p>
              <FeatureDetail feature={f} />
            </Card>
          ))}
        </div>
      </Section>

      {/* Coming soon */}
      <Section id="coming-soon" padY="xl" tint>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <Eyebrow>Coming soon</Eyebrow>
          </div>
          <h2 style={{
            margin: 0,
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 600,
            letterSpacing: '-0.022em',
            lineHeight: 1.1,
            maxWidth: 600,
          }}>
            Federation, Conformance & Portfolio Intelligence.
          </h2>
        </div>

        <div style={{ display: 'grid', gap: 24 }} className="qh-pain-grid">

          {/* Federation */}
          <Card padded style={{ display: 'flex', flexDirection: 'column', gap: 12, opacity: 0.85 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 'var(--r-3)',
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
              }}>🌐</div>
              <Tag variant="outline">preview</Tag>
            </div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.2 }}>
              Federation
            </h3>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6, flex: 1 }}>
              Cross-project knowledge discovery via linked global catalogs. Search and recall
              transparently traverse federated knowledge — with conflict detection across project
              boundaries and config-validated cross-project references.
            </p>
            <div className="qh-mono" style={{ fontSize: 11, color: 'var(--ink-2)', marginTop: 4 }}>
              {[
                { id: 'group:platform', count: 412 },
                { id: 'global:org-adrs', count: 46 },
              ].map((r, i, arr) => (
                <div key={r.id} style={{
                  display: 'flex', justifyContent: 'space-between', padding: '3px 0',
                  borderBottom: i < arr.length - 1 ? '1px dashed var(--border)' : 'none',
                }}>
                  <span style={{ color: 'var(--muted)' }}>{r.id}</span>
                  <span>{r.count} records{i === 1 && <span style={{ color: 'var(--green)', marginLeft: 6 }}>· global</span>}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Conformance Scoring */}
          <Card padded style={{ display: 'flex', flexDirection: 'column', gap: 12, opacity: 0.85 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 'var(--r-3)',
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
              }}>📊</div>
              <Tag variant="outline">preview</Tag>
            </div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.2 }}>
              Conformance Scoring
            </h3>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6, flex: 1 }}>
              Weighted conformance scores per project against global knowledge catalogs.
              The <code style={{ fontFamily: 'var(--geist-mono)', fontSize: 11 }}>conformance()</code> MCP tool
              gives agents real-time context. UNCERTIFIED gating prevents misleading scores
              on cold-start graphs.
            </p>
            <div className="qh-mono" style={{ fontSize: 11, marginTop: 4 }}>
              {[
                { label: 'platform',  score: 94, color: 'var(--green)' },
                { label: 'billing',   score: 71, color: 'var(--amber)' },
                { label: 'mobile',    score: 43, color: 'var(--red)'   },
              ].map(r => (
                <div key={r.label} style={{ display: 'grid', gridTemplateColumns: '64px 1fr 32px', gap: 8, alignItems: 'center', padding: '2px 0' }}>
                  <span style={{ color: 'var(--muted)' }}>{r.label}</span>
                  <div style={{ position: 'relative', height: 5, background: 'var(--surface-2)', borderRadius: 3, border: '1px solid var(--border)' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${r.score}%`, background: r.color, borderRadius: 3 }} />
                  </div>
                  <span style={{ textAlign: 'right', color: r.color }}>{r.score}%</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Portfolio Intelligence */}
          <Card padded style={{ display: 'flex', flexDirection: 'column', gap: 12, opacity: 0.85 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 'var(--r-3)',
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
              }}>🏛️</div>
              <Tag variant="outline">preview</Tag>
            </div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.2 }}>
              Portfolio Intelligence
            </h3>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6, flex: 1 }}>
              Role-gated org-wide knowledge insights for principal architects and executives.
              Node-level data with weighted criticality rollup across all projects. See where
              knowledge is healthy, stale, or missing — across the entire organisation.
            </p>
            <div className="qh-mono" style={{ fontSize: 11, color: 'var(--ink-2)', marginTop: 4 }}>
              {[
                { label: 'total nodes',        value: '2,847',             accent: false, warn: false },
                { label: 'critical decisions', value: '134',               accent: true,  warn: false },
                { label: 'stale (>90d)',        value: '29',                accent: false, warn: true  },
              ].map(r => (
                <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0' }}>
                  <span style={{ color: 'var(--muted)' }}>{r.label}</span>
                  <span style={{ color: r.accent ? 'var(--primary)' : r.warn ? 'var(--amber)' : 'var(--ink)' }}>{r.value}</span>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </Section>

      {/* Business Requirements highlight */}
      <Section id="business-requirements-highlight" padY="xl" tint>
        <div style={{ display: 'grid', alignItems: 'center' }} className="qh-2col">
          <div style={{ maxWidth: 500 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 28 }}>📋</span>
              <Tag variant="primary">NEW · v0.4</Tag>
            </div>
            <h2 style={{
              margin: 0,
              fontSize: 'clamp(28px, 4vw, 38px)',
              fontWeight: 600,
              letterSpacing: '-0.022em',
              lineHeight: 1.1,
              marginBottom: 14,
            }}>
              Business Requirements are now first-class knowledge.
            </h2>
            <p style={{ margin: '0 0 16px', fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>
              Engineering decisions explain <em>how</em> things are built. Business requirements explain{' '}
              <em>why</em> they exist and <em>when</em> they apply. Quorum stores both — governed
              identically: authored, versioned, conflict-detected, authority-weighted, audited.
            </p>
            <p className="qh-mono" style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.04em' }}>
              Decision · Pattern · <span style={{ color: 'var(--primary)', fontWeight: 700 }}>Requirement</span> — three primitives, one chain.
            </p>
          </div>

          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-4)',
            overflow: 'hidden',
          }}>
            <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}>
              <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>
                # storing a business requirement
              </span>
            </div>
            <pre className="qh-mono" style={{ margin: 0, padding: '16px 18px', fontSize: 12, lineHeight: 1.8, color: 'var(--ink)', overflowX: 'auto', background: 'var(--surface)' }}>
              {`remember(\n  group_id = "product",\n  key      = "guest-checkout-requirement",\n  body     = "40% drop-off...",\n  meta = {\n    entity_type: "Requirement",\n    owner: "@ml-rodriguez",\n    authority: "product",\n    pinned: true,\n  }\n)`}
            </pre>
            <div style={{ padding: '8px 18px 12px', borderTop: '1px solid var(--border)' }}>
              <span className="qh-mono" style={{ fontSize: 11, color: 'var(--green)' }}>
                ↳ R-022 stored · audit signed · cited by 0 (yet)
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section padY="xl">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{
            margin: 0,
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 14,
          }}>
            All eight features. No per-seat fees.
          </h2>
          <p style={{ margin: '0 auto 28px', fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>
            Elastic License 2.0. Self-hosted. Bring your own infrastructure.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" href="/get-started" iconRight="→">Get Started Free</Button>
            <Button variant="secondary" size="lg" href="/governance">Read the Governance Docs</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
