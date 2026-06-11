// CHILD PAGE · Features — wireframe. Inherits V6 vocabulary
// (editorial strip, mono eyebrows, indigo callout/highlight, sketch icons).
//
// 8 feature cards in a 2-col grid, then a full-width indigo "highlight" card
// promoting Business Requirements (the new first-class entity type), then CTA.

// ── Simple monoline sketch icons. Each ~32px, line-style.
//    Wrapped in <g filter="url(#sk-wobble)"> via the parent SVG.
function SketchIcon({ name, size = 36 }) {
  const s = size;
  const paths = {
    brain: (
      <g>
        <path d="M10 18 C 10 10, 18 8, 18 14 C 18 8, 26 10, 26 18 C 28 18, 30 22, 26 24 C 26 28, 18 28, 18 24 C 18 28, 12 28, 12 24 C 8 22, 10 18, 10 18 Z" />
        <path d="M18 14 V 24 M14 18 L 18 18 M22 18 L 18 18 M14 22 L 18 22 M22 22 L 18 22" />
      </g>
    ),
    bolt: (
      <path d="M20 6 L 12 19 L 17 19 L 14 30 L 24 16 L 19 16 L 22 6 Z" />
    ),
    shield: (
      <g>
        <path d="M18 6 L 28 10 L 27 19 C 26 24, 22 28, 18 30 C 14 28, 10 24, 9 19 L 8 10 Z" />
        <path d="M14 17 L 17 20 L 23 14" />
      </g>
    ),
    briefcase: (
      <g>
        <rect x="7" y="13" width="22" height="16" rx="1" />
        <path d="M14 13 V 9 H 22 V 13" />
        <path d="M7 19 H 29" />
        <rect x="16" y="17" width="4" height="3" />
      </g>
    ),
    chain: (
      <g>
        <rect x="6" y="14" width="13" height="8" rx="4" />
        <rect x="17" y="14" width="13" height="8" rx="4" />
        <path d="M13 18 H 23" />
      </g>
    ),
    hourglass: (
      <g>
        <path d="M10 6 H 26 M10 30 H 26" />
        <path d="M10 6 L 26 6 L 18 18 L 26 30 L 10 30 L 18 18 Z" />
        <path d="M14 10 L 22 10 L 18 16 Z" fill="currentColor" stroke="none" />
      </g>
    ),
    flow: (
      <g>
        <circle cx="9" cy="10" r="3" />
        <circle cx="9" cy="26" r="3" />
        <circle cx="27" cy="18" r="3" />
        <path d="M12 10 C 20 10, 20 18, 24 18 M12 26 C 20 26, 20 18, 24 18" />
      </g>
    ),
    layers: (
      <g>
        <path d="M18 7 L 30 13 L 18 19 L 6 13 Z" />
        <path d="M6 18 L 18 24 L 30 18" />
        <path d="M6 23 L 18 29 L 30 23" />
      </g>
    ),
  };
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none" stroke={SK.ink} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <g filter="url(#sk-wobble)">
        {paths[name] || <rect x="6" y="6" width="24" height="24" />}
      </g>
    </svg>
  );
}

// ── Feature card. Icon + title + description, optional code/inline detail.
function FeatureCard({ icon, badge, title, body, detail, h = 280 }) {
  return (
    <SketchBox h={h} pad={24} thick={1.8}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
        <SketchIcon name={icon} />
        {badge && (
          <span className="sk-mono" style={{
            fontSize: 10, padding: '3px 8px', borderRadius: 999, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: SK.accent, border: `1px solid ${SK.accent}`,
            background: 'rgba(91,91,214,0.08)', fontWeight: 700,
          }}>{badge}</span>
        )}
      </div>
      <HandText size={24} as="div" style={{ marginBottom: 10, lineHeight: 1.15 }}>{title}</HandText>
      <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.55, marginBottom: detail ? 14 : 0 }}>
        {body}
      </div>
      {detail}
    </SketchBox>
  );
}

// Tiny inline "state pill" row for the Knowledge States card.
function StatesRow() {
  const states = ['DRAFT', 'ACTIVE', 'SUPERSEDED', 'DEPRECATED'];
  return (
    <div className="sk-mono" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, flexWrap: 'wrap' }}>
      {states.map((s, i) => (
        <React.Fragment key={s}>
          <span style={{
            padding: '2px 7px', border: `1.2px solid ${i === 0 ? SK.accent : 'rgba(0,0,0,0.4)'}`,
            color: i === 0 ? SK.accent : SK.ink2, letterSpacing: '0.06em',
            background: i === 0 ? 'rgba(91,91,214,0.08)' : 'transparent',
          }}>{s}</span>
          {i < states.length - 1 && <span style={{ color: SK.muted }}>→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

// Tiny audit-hash chain visual for the Audit Chain card.
function HashChain() {
  return (
    <div className="sk-mono" style={{ fontSize: 11, color: SK.ink2, lineHeight: 1.6 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ color: SK.muted }}>sha256:</span>
        <span>a17f…3c</span>
        <span style={{ color: SK.muted }}>←</span>
        <span>b29e…7d</span>
        <span style={{ color: SK.muted }}>←</span>
        <span>c40a…1f</span>
      </div>
      <div style={{ color: SK.muted, marginTop: 2 }}>chain intact · 12,488 events · last signed 14:02</div>
    </div>
  );
}

// Multi-project isolation visual — three little stacked rows w/ group_ids.
function GroupsViz() {
  const rows = [
    { id: 'group:platform',  count: 412, shared: false },
    { id: 'group:billing',   count: 187, shared: false },
    { id: 'group:org-adrs',  count:  46, shared: true  },
  ];
  return (
    <div className="sk-mono" style={{ fontSize: 11, color: SK.ink2 }}>
      {rows.map((r, i) => (
        <div key={r.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', borderBottom: i < rows.length - 1 ? '1px dashed rgba(0,0,0,0.15)' : 'none' }}>
          <span><span style={{ color: SK.muted }}>{r.id}</span></span>
          <span>{r.count} records {r.shared && <span style={{ color: SK.accent, marginLeft: 6 }}>· cross-team</span>}</span>
        </div>
      ))}
    </div>
  );
}

// Pending-decisions queue mini-list.
function PendingQueue() {
  return (
    <div className="sk-mono" style={{ fontSize: 11, color: SK.ink2, lineHeight: 1.6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span><span style={{ color: SK.muted }}>D-205</span> sliding window?</span>
        <span style={{ color: '#b88a00' }}>HOLD</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span><span style={{ color: SK.muted }}>P-091</span> error log format</span>
        <span style={{ color: SK.muted }}>queued</span>
      </div>
      <div style={{ color: SK.muted, marginTop: 4 }}>↳ surfaced at next session start</div>
    </div>
  );
}

// Authority weighting mini visual — bar chart of weights.
function AuthorityBars() {
  const rows = [
    { role: 'principal',         w: 100 },
    { role: 'product_owner',     w: 100 },
    { role: 'business_analyst',  w: 80  },
    { role: 'staff.eng',         w: 70  },
    { role: 'senior',            w: 50  },
    { role: 'engineer',          w: 30  },
    { role: 'agent',             w: 15  },
  ];
  return (
    <div className="sk-mono" style={{ fontSize: 11, color: SK.ink2 }}>
      {rows.map((r) => (
        <div key={r.role} style={{ display: 'grid', gridTemplateColumns: '110px 1fr 32px', gap: 8, alignItems: 'center', padding: '1.5px 0' }}>
          <span style={{ color: SK.muted }}>{r.role}</span>
          <span style={{ position: 'relative', height: 6, background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.18)' }}>
            <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: r.w + '%', background: r.role === 'agent' ? 'rgba(0,0,0,0.3)' : SK.ink }} />
          </span>
          <span style={{ textAlign: 'right', color: SK.ink }}>{r.w}</span>
        </div>
      ))}
    </div>
  );
}

// Conflict-detection mini visual — two record stubs + ribbon.
function ConflictMini() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span className="sk-mono" style={{ fontSize: 11, padding: '4px 8px', border: '1.2px solid rgba(0,0,0,0.4)', color: SK.ink2 }}>D-204 token bucket</span>
      <span style={{ color: '#b34', fontWeight: 700 }}>⚡</span>
      <span className="sk-mono" style={{ fontSize: 11, padding: '4px 8px', border: '1.2px solid rgba(0,0,0,0.4)', color: SK.ink2 }}>D-205 sliding window</span>
      <span className="sk-mono" style={{ fontSize: 10, color: '#b34', textTransform: 'uppercase', letterSpacing: '0.08em', border: '1px solid #b34', padding: '1px 6px', borderRadius: 999, marginLeft: 'auto' }}>conflict</span>
    </div>
  );
}

// Governed-memory mini visual — record fields list.
function MemoryFields() {
  const fields = [
    ['author',       '@avery · senior'],
    ['timestamp',    '2024-04-18 14:02:17Z'],
    ['confidence',   '0.94'],
    ['triggered_by', 'claude-code session #847'],
    ['session_id',   's_a91f4b'],
  ];
  return (
    <div className="sk-mono" style={{ fontSize: 11, lineHeight: 1.7, color: SK.ink2 }}>
      {fields.map(([k, v]) => (
        <div key={k} style={{ display: 'grid', gridTemplateColumns: '92px 1fr', gap: 8 }}>
          <span style={{ color: SK.muted }}>{k}</span><span style={{ color: SK.ink }}>{v}</span>
        </div>
      ))}
    </div>
  );
}

// ── Business Requirements highlight (full-width indigo card) ──
function BusinessReqHighlight() {
  return (
    <div style={{ position: 'relative' }}>
      <SketchBox h={400} pad={36} double thick={2.2} style={{ background: 'rgba(91,91,214,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 48, alignItems: 'center', height: '100%' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <SketchIcon name="briefcase" size={32} />
              <span className="sk-mono" style={{ fontSize: 11, padding: '3px 9px', borderRadius: 999, letterSpacing: '0.12em', textTransform: 'uppercase', color: SK.accent, border: `1.4px solid ${SK.accent}`, background: 'rgba(91,91,214,0.1)', fontWeight: 700 }}>NEW · v0.4</span>
            </div>
            <HandText size={36} as="div" style={{ marginBottom: 14, lineHeight: 1.08, textWrap: 'balance' }}>
              Business Requirements are now first-class knowledge.
            </HandText>
            <div className="sk" style={{ fontSize: 16, color: SK.ink2, lineHeight: 1.55, marginBottom: 16 }}>
              Engineering decisions explain <i>how</i> things are built. Business requirements
              explain <i>why</i> they exist and <i>when</i> they apply. Quorum stores both —
              governed identically: authored, versioned, conflict-detected,
              authority-weighted, audited.
            </div>
            <div className="sk-mono" style={{ fontSize: 12, color: SK.muted, letterSpacing: '0.04em' }}>
              Decision · Pattern · <span style={{ color: SK.accent, fontWeight: 700 }}>Requirement</span> — three primitives, one chain.
            </div>
          </div>
          <SketchBox h={250} pad={18} thick={1.6} style={{ background: 'rgba(0,0,0,0.025)' }}>
            <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, marginBottom: 8, letterSpacing: '0.06em' }}>
              # storing a business requirement
            </div>
            <pre className="sk-mono" style={{ margin: 0, fontSize: 12, lineHeight: 1.7, color: SK.ink, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
{`remember(
  group_id = `}<span style={{ color: SK.accent }}>"product"</span>{`,
  key      = `}<span style={{ color: SK.accent }}>"guest-checkout-requirement"</span>{`,
  body     = `}<span style={{ color: SK.accent }}>"40% drop-off…"</span>{`,
  meta = `}{`{`}{`
    entity_type: `}<span style={{ color: '#0a6' }}>"Requirement"</span>{`,
    owner: `}<span style={{ color: '#0a6' }}>"@ml-rodriguez"</span>{`,
    authority: `}<span style={{ color: '#0a6' }}>"product"</span>{`,
    pinned: `}<span style={{ color: '#0a6' }}>true</span>{`,
  `}{`}`}{`
)`}
            </pre>
            <div className="sk-mono" style={{ fontSize: 11, color: '#0a6', marginTop: 10 }}>
              ↳ R-022 stored · audit signed · cited by 0 (yet)
            </div>
          </SketchBox>
        </div>
      </SketchBox>
    </div>
  );
}

// ── PAGE ──
function FeaturesPage({ showAnnotations }) {
  // 8 feature cards, in source order (matching the brief's rows).
  const cards = [
    { icon: 'brain',     title: 'Governed Memory',     body: <>Every write carries <b style={{color:SK.ink}}>author, timestamp, confidence, triggered_by, and session_id</b>. Append-only — nothing is ever hard-deleted.</>, detail: <MemoryFields /> },
    { icon: 'bolt',      title: 'Conflict Detection',  body: <>Semantic similarity + LLM analysis flags contradictions the moment a second entry is stored. You decide: <b style={{color:SK.ink}}>supersede, coexist, reject</b>.</>, detail: <ConflictMini /> },
    { icon: 'shield',    title: 'Authority Weighting', body: <>Principal architects and product owners carry full authority — agents the least. Role-weighted confidence scoring means the <b style={{color:SK.ink}}>decisions that matter most require the most deliberate action to change</b>.</>, detail: <AuthorityBars /> },
    { icon: 'briefcase', title: 'Business Requirements Extraction', badge: 'NEW', body: <>Product rules, compliance constraints, feature rationale — stored as first-class <b style={{color:SK.accent}}>Requirement</b> entities. PR analysis, Jira, and meeting notes surface business context automatically.</>, detail: null },
    { icon: 'chain',     title: 'Audit Chain',         body: <>SHA-256 tamper-evident audit log. Every state transition is traceable — who changed what, why, and when. Exportable for compliance.</>, detail: <HashChain /> },
    { icon: 'hourglass', title: 'Pending Decisions',   body: <>Quorum never interrupts mid-task. Conflicts and approvals surface at session start — one decision at a time, with full context.</>, detail: <PendingQueue /> },
    { icon: 'flow',      title: 'Knowledge States',    body: <>DRAFT → ACTIVE → SUPERSEDED → DEPRECATED. Claude's additions always enter as DRAFT. Humans approve. <b style={{color:SK.ink}}>Nothing activates silently.</b></>, detail: <StatesRow /> },
    { icon: 'layers',    title: 'Multi-Project Isolation', body: <>Each team's graph is isolated by <code style={{fontFamily:'monospace',color:SK.ink}}>group_id</code>. Shared org-wide ADRs can be promoted cross-team with explicit approval. No silent bleed.</>, detail: <GroupsViz /> },
  ];

  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%', position: 'relative' }}>
      <EditorialStrip>QUORUM / FEATURES · v0.4 · APACHE 2.0 · OPEN SOURCE</EditorialStrip>
      <Header />

      {/* HERO — narrow centered, same shape as Why Quorum */}
      <section style={{ padding: '88px 56px 56px', textAlign: 'center', maxWidth: 980, margin: '0 auto', position: 'relative' }}>
        <MonoEyebrow style={{ marginBottom: 18, display: 'inline-block' }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: SK.accent, marginRight: 8, verticalAlign: 'middle' }}/>
          features · 8 primitives · 1 audit chain
        </MonoEyebrow>
        <HandText size={56} weight={700} as="div" style={{ lineHeight: 1.05, marginBottom: 18, textWrap: 'balance' }}>
          Everything your team needs to trust AI-assisted development.
        </HandText>
        <div className="sk-scribble" style={{ fontSize: 18, color: SK.ink2, fontStyle: 'italic', maxWidth: 640, margin: '0 auto' }}>
          Eight features. Three primitives. One signed chain across humans and agents.
        </div>
        {showAnnotations && (
          <Annot x={770} y={50} w={170} rotate={3}>same hero shape as Why Quorum · consistent chrome</Annot>
        )}
      </section>

      {/* directory strip */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 56px 12px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <MonoEyebrow>the eight</MonoEyebrow>
        <div style={{ flex: 1, height: 1, borderTop: '1px dashed rgba(0,0,0,0.25)' }} />
        <MonoEyebrow>memory · conflict · authority · requirements · audit · pending · states · isolation</MonoEyebrow>
      </div>

      {/* 2-COLUMN FEATURE GRID */}
      <section style={{ padding: '32px 56px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {cards.map((c, i) => (
            <FeatureCard key={i} {...c} h={c.detail ? 300 : 240} />
          ))}
        </div>
        {showAnnotations && (
          <Annot x={56} y={28} w={170} rotate={-3}>2-col grid · 8 cards · NEW badge on new feature</Annot>
        )}
      </section>

      {/* pull-quote breather */}
      <div style={{ padding: '40px 56px 32px' }}>
        <PullQuote cite="quorum / docs · core primitives">
          Engineering decisions answer "how." Business requirements answer "why." Both deserve the same governance.
        </PullQuote>
      </div>

      {/* FULL-WIDTH BUSINESS REQUIREMENTS HIGHLIGHT (indigo) */}
      <section style={{ padding: '24px 56px 56px' }}>
        <BusinessReqHighlight />
        {showAnnotations && (
          <Annot x={56} y={48} w={180} rotate={-2}>full-width indigo highlight · promotes the NEW entity type</Annot>
        )}
      </section>

      {/* SUPPORTING DETAIL — three-up "how it all clicks together" */}
      <section style={{ padding: '48px 56px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <MonoEyebrow style={{ marginBottom: 18 }}>how the eight click together</MonoEyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }}>
          {[
            { t: 'On write',   d: 'Memory + Conflict Detection + Knowledge States validate every new record before it lands.' },
            { t: 'On query',   d: 'Authority Weighting + Audit Chain + Isolation decide what an agent (or human) is allowed to see and cite.' },
            { t: 'On review',  d: 'Pending Decisions + Requirements surface at session start — one approval at a time.' },
          ].map((b) => (
            <div key={b.t}>
              <HandText size={20} as="div" style={{ marginBottom: 6 }}>{b.t}</HandText>
              <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.5 }}>{b.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: '72px 56px 56px', textAlign: 'center', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <HandText size={42} as="div" style={{ marginBottom: 14, textWrap: 'balance', maxWidth: 720, margin: '0 auto 14px' }}>
          Start capturing your team's knowledge today.
        </HandText>
        <div className="sk" style={{ fontSize: 16, color: SK.ink2, marginBottom: 26, maxWidth: 540, margin: '0 auto 26px', lineHeight: 1.5 }}>
          One MCP server. Eight features. Free, open source, Apache 2.0.
        </div>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
          <SketchButton filled size="lg" w={200}>View on GitHub →</SketchButton>
          <SketchButton size="lg" w={170}>Read the Docs</SketchButton>
        </div>
        <MonoEyebrow style={{ marginTop: 22 }}>v0.4 · 218 commits · 31 contributors</MonoEyebrow>
      </section>

      <Footer />
    </div>
  );
}

Object.assign(window, { FeaturesPage, SketchIcon });
