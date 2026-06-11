// CHILD PAGE · Governance — wireframe. Inherits V6 vocabulary.
// Serious, principled trust page. Five sections + footer CTA.

// ── §01 · Pillar block — header + N rules grouped under a theme ──
function PillarRule({ n, title, desc, last = false }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '36px 1fr',
      gap: 14,
      padding: '12px 0',
      borderBottom: last ? 'none' : '1px dashed rgba(0,0,0,0.16)',
      alignItems: 'baseline',
    }}>
      <div className="sk-mono" style={{ fontSize: 16, color: SK.accent, fontWeight: 700, letterSpacing: '0.02em', lineHeight: 1 }}>
        {n}
      </div>
      <div>
        <HandText size={18} as="div" style={{ marginBottom: 4, lineHeight: 1.2 }}>{title}</HandText>
        <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.5 }}>{desc}</div>
      </div>
    </div>
  );
}

function Pillar({ name, tagline, rules }) {
  return (
    <SketchBox h="auto" pad={26} thick={1.8} style={{ minHeight: 320, borderTopWidth: 3, borderTopColor: SK.accent }}>
      <div style={{ paddingBottom: 16, marginBottom: 8, borderBottom: `2px solid ${SK.accent}` }}>
        <div className="sk-mono" style={{ fontSize: 11, color: SK.accent, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>
          {name}
        </div>
        <div className="sk-scribble" style={{ fontSize: 14, color: SK.ink2, fontStyle: 'italic', lineHeight: 1.4 }}>
          {tagline}
        </div>
      </div>
      {rules.map((r, i) => (
        <PillarRule key={r.n} n={r.n} title={r.t} desc={r.d} last={i === rules.length - 1} />
      ))}
    </SketchBox>
  );
}

// ── §02 · 5-layer accountability concentric viz ────────
function LayerViz({ w = 1080, h = 460 }) {
  // Center at (260, 230). Five concentric rings, indigo at the center fading
  // to slate outward. Labels stack on the right, with elbow connectors back
  // to the corresponding ring edge.
  const cx = 260, cy = 230;
  const radii = [56, 96, 138, 182, 228];
  // visual fills: innermost = strongest indigo, outermost = pale slate.
  const fills = [
    'rgba(91,91,214,0.55)',
    'rgba(91,91,214,0.32)',
    'rgba(91,91,214,0.18)',
    'rgba(91,91,214,0.10)',
    'rgba(91,91,214,0.05)',
  ];
  const layers = [
    { n: 1, name: 'Protocol', tagline: 'Constitutional rules enforced in code. Non-bypassable.' },
    { n: 2, name: 'Peers',    tagline: 'Distributed review. Dissent preserved permanently.' },
    { n: 3, name: 'Graph',    tagline: 'Decision history audits the decision makers themselves.' },
    { n: 4, name: 'Public',   tagline: 'Open source. Transparent design. Community scrutiny.' },
    { n: 5, name: 'Time',     tagline: 'Outcomes are the ultimate truth. Good decisions survive scrutiny.' },
  ];
  // Each label sits to the right at the y-level of the ring's top edge.
  // anchor radius for connector = corresponding ring radius
  const labelX = cx + 320;
  // Label rows stacked top-to-bottom; row y-positions:
  const labelYs = [40, 110, 200, 290, 380];

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block' }}>
      {/* concentric rings, outermost first so the innermost renders on top */}
      <g filter="url(#sk-wobble)">
        {[...radii].reverse().map((r, i) => {
          const idx = radii.length - 1 - i;
          return (
            <circle key={r} cx={cx} cy={cy} r={r}
              fill={fills[idx]} stroke={SK.ink}
              strokeWidth={idx === 0 ? 2 : 1.4}
              strokeDasharray={idx >= 3 ? '5 3' : ''} />
          );
        })}
      </g>
      {/* central "L1" label */}
      <text x={cx} y={cy - 2} textAnchor="middle"
        className="sk-h" style={{ fontSize: 18, fontWeight: 700, fill: '#fff' }}>L1</text>
      <text x={cx} y={cy + 18} textAnchor="middle"
        className="sk-mono" style={{ fontSize: 10, fill: '#fff', letterSpacing: '0.1em' }}>PROTOCOL</text>

      {/* sketched arrow at the top, pointing outward, captioned */}
      <g className="sk-mono" style={{ fontSize: 11, fill: SK.muted }}>
        <text x={cx} y={cy - radii[radii.length - 1] - 16} textAnchor="middle">↑ harder to bypass</text>
        <text x={cx} y={cy + radii[radii.length - 1] + 32} textAnchor="middle">↓ longer to settle</text>
      </g>

      {/* labels on the right */}
      {layers.map((l, i) => {
        const ly = labelYs[i];
        const ringR = radii[i];
        // connector: from ring edge (cx + ringR, cy aligned to label) to label
        const connectorX1 = cx + ringR;
        const connectorY1 = cy - ringR + 4; // top edge of ring
        return (
          <g key={l.n}>
            <line x1={connectorX1} y1={connectorY1} x2={labelX - 8} y2={ly + 10}
              stroke={SK.ink} strokeWidth="1" strokeDasharray="4 3" opacity="0.4"
              filter="url(#sk-wobble)" />
            <g transform={`translate(${labelX}, ${ly})`}>
              <text x="0" y="0" className="sk-mono" style={{ fontSize: 11, fill: SK.muted, letterSpacing: '0.1em' }}>LAYER {l.n}</text>
              <text x="0" y="22" className="sk-h" style={{ fontSize: 22, fontWeight: 700, fill: SK.ink }}>{l.name}</text>
              <text x="0" y="42" className="sk" style={{ fontSize: 13, fill: SK.ink2 }}>{l.tagline}</text>
            </g>
          </g>
        );
      })}
    </svg>
  );
}

// ── §03 · Scenario card (concrete enforcement example) ──
function ScenarioCard({ n, title, body, codeOrViz, h = 320 }) {
  return (
    <SketchBox h={h} pad={22} thick={1.8}>
      <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, letterSpacing: '0.08em', marginBottom: 12 }}>
        ENFORCEMENT · 0{n} / 03
      </div>
      <HandText size={20} as="div" style={{ marginBottom: 10, lineHeight: 1.2 }}>{title}</HandText>
      <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.55, marginBottom: 16 }}>
        {body}
      </div>
      {codeOrViz}
    </SketchBox>
  );
}

// inline code snippet (small, sketch-bordered)
function InlineCode({ children, label }) {
  return (
    <div>
      {label && <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, letterSpacing: '0.06em', marginBottom: 4 }}>{label}</div>}
      <div style={{
        padding: '10px 12px',
        background: 'rgba(0,0,0,0.05)',
        border: `1.4px solid rgba(0,0,0,0.25)`,
        borderRadius: 3,
        fontFamily: 'JetBrains Mono, ui-monospace, monospace',
        fontSize: 12,
        lineHeight: 1.55,
        color: SK.ink,
      }}>
        {children}
      </div>
    </div>
  );
}

// SHA256 chain visual — 3 linked blocks
function BigHashChain() {
  const blocks = [
    { i: 'audit[n-2]', h: '4f7a…2c9b' },
    { i: 'audit[n-1]', h: '8d1e…71a4' },
    { i: 'audit[n]',   h: 'b6c3…0fde' },
  ];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      {blocks.map((b, i) => (
        <React.Fragment key={b.i}>
          <SketchBox w={110} h={70} pad={10} thick={1.6}>
            <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, marginBottom: 4 }}>{b.i}</div>
            <div className="sk-mono" style={{ fontSize: 11, color: SK.ink, fontWeight: 600 }}>{b.h}</div>
            <div className="sk-mono" style={{ fontSize: 9, color: SK.muted, marginTop: 2 }}>prev: {i === 0 ? '…' : blocks[i - 1].h.split('…')[0] + '…'}</div>
          </SketchBox>
          {i < blocks.length - 1 && (
            <span style={{ color: SK.ink, fontSize: 16 }}>←</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ── §05 · Audience callout ──
function AudienceCard({ icon, title, body }) {
  return (
    <SketchBox h={180} pad={22} thick={1.8}>
      <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
      <HandText size={20} as="div" style={{ marginBottom: 8, lineHeight: 1.15 }}>{title}</HandText>
      <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.5 }}>{body}</div>
    </SketchBox>
  );
}

// ── PAGE ──
function GovernancePage({ showAnnotations }) {
  const pillars = [
    {
      name: 'On Write',
      tagline: 'Rules that govern every write to the graph.',
      rules: [
        { n: '01', t: 'Never hard delete',          d: 'Always supersede with reason. History is preserved forever.' },
        { n: '03', t: 'Always require reason',      d: 'On every state change. Enforced in code, not convention.' },
        { n: '09', t: 'Provenance on every write',  d: 'author · timestamp · session_id · agent_id · triggered_by — always.' },
      ],
    },
    {
      name: 'On Conflict',
      tagline: 'Rules that govern disagreement between authors.',
      rules: [
        { n: '02', t: 'Never silent conflict resolution', d: 'Always notify, log, and require a human decision.' },
        { n: '04', t: 'No self-approval',                 d: 'Conflict parties cannot resolve their own conflicts, ever.' },
        { n: '07', t: 'Dissent is preserved',             d: 'Overruled concerns stored permanently. Never deleted.' },
      ],
    },
    {
      name: 'On Agents',
      tagline: 'Rules that bound AI authority inside the graph.',
      rules: [
        { n: '05', t: 'Human at genuine forks',      d: 'Agents operate within known knowledge. Humans decide at ambiguity.' },
        { n: '08', t: 'Draft knowledge never used',  d: "Claude never injects unreviewed knowledge into context." },
      ],
    },
    {
      name: 'On Governance',
      tagline: 'Rules about the rules themselves.',
      rules: [
        { n: '06', t: 'Governance is architecture',           d: 'Invariants are code, not config, not policy.' },
        { n: '10', t: 'Constitution changes require community', d: 'No single person changes Layer 1 unilaterally.' },
      ],
    },
  ];

  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%', position: 'relative' }}>
      <EditorialStrip>QUORUM / GOVERNANCE · v0.4 · APACHE 2.0 · CONSTITUTIONAL</EditorialStrip>
      <Header />

      {/* HERO — narrow, centered, serious */}
      <section style={{ padding: '88px 56px 56px', textAlign: 'center', maxWidth: 960, margin: '0 auto', position: 'relative' }}>
        <MonoEyebrow style={{ marginBottom: 18, display: 'inline-block', color: '#b34' }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#b34', marginRight: 8, verticalAlign: 'middle' }}/>
          non-negotiable
        </MonoEyebrow>
        <HandText size={54} weight={700} as="div" style={{ lineHeight: 1.05, marginBottom: 20, textWrap: 'balance' }}>
          Governance is <span style={{ color: SK.accent }}>architecture</span>. Not configuration.
        </HandText>
        <div className="sk" style={{ fontSize: 18, color: SK.ink2, lineHeight: 1.55, maxWidth: 720, margin: '0 auto' }}>
          Most tools have governance settings you can turn off. Quorum's constitutional rules are enforced in code. <b style={{ color: SK.ink }}>There is no setting that bypasses them.</b>
        </div>
        {showAnnotations && (
          <Annot x={770} y={50} w={170} rotate={3}>serious tone · "non-negotiable" red eyebrow</Annot>
        )}
      </section>

      {/* ── §01 · THE CONSTITUTIONAL RULES ──────────── */}
      <section style={{ padding: '32px 56px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 01</span> · the constitutional rules</MonoEyebrow>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.muted }}>checked in CI · enforced in production · auditable</span>
        </div>
        <HandText size={36} as="div" style={{ marginBottom: 6, lineHeight: 1.1, textWrap: 'balance', maxWidth: 800 }}>
          Ten invariants. Four pillars. Zero exceptions.
        </HandText>
        <div className="sk" style={{ fontSize: 16, color: SK.ink2, marginBottom: 30, lineHeight: 1.5, maxWidth: 720 }}>
          The constitution has structure — not just length. These four pillars hold across every version, every PR, every contributor.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          {pillars.map((p) => (
            <Pillar key={p.name} name={p.name} tagline={p.tagline} rules={p.rules} />
          ))}
        </div>
        {showAnnotations && (
          <Annot x={56} y={28} w={180} rotate={-3}>4 pillars × 2-3 rules · constitution has structure, not just length</Annot>
        )}
      </section>

      {/* ── §02 · WHO AUDITS THE AUDITOR ─────────────── */}
      <section style={{ padding: '56px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)', background: 'rgba(0,0,0,0.025)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 02</span> · who audits the auditor?</MonoEyebrow>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.muted }}>five layers · no single point of trust</span>
        </div>
        <HandText size={36} as="div" style={{ marginBottom: 6, lineHeight: 1.1, textWrap: 'balance', maxWidth: 820 }}>
          Layered accountability.
        </HandText>
        <div className="sk" style={{ fontSize: 16, color: SK.ink2, marginBottom: 28, lineHeight: 1.5, maxWidth: 720 }}>
          The question any serious governance model must answer. Each layer protects against the failure of the layer below it.
        </div>
        <SketchBox h={500} pad={20} double>
          <LayerViz />
        </SketchBox>
        <div className="sk" style={{ fontSize: 14, color: SK.ink2, marginTop: 18, lineHeight: 1.55, fontStyle: 'italic', maxWidth: 720 }}>
          No single layer is sufficient. All five work together.
        </div>
        {showAnnotations && (
          <Annot x={66} y={48} w={180} rotate={-2}>concentric rings · L1 protocol at center · L5 time outermost</Annot>
        )}
      </section>

      {/* ── §03 · WHAT THIS MEANS IN PRACTICE ────────── */}
      <section style={{ padding: '64px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 03</span> · what this means in practice</MonoEyebrow>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.muted }}>three rules · three lines of code · zero overrides</span>
        </div>
        <HandText size={36} as="div" style={{ marginBottom: 28, lineHeight: 1.1, textWrap: 'balance' }}>
          Not theoretical. Enforced.
        </HandText>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22 }}>
          <ScenarioCard
            n={1}
            title="No hard delete, ever"
            body={<>Even a <code style={{ fontFamily: 'monospace', color: SK.ink }}>principal_architect</code> cannot delete a knowledge node. The code blocks the method. <b style={{ color: SK.ink }}>There is no admin override.</b></>}
            codeOrViz={<InlineCode label="graph/client.js">
              {`// BLOCKED_METHODS in graph/client.js`}<br/>
              {`delete(): throws unconditionally`}
            </InlineCode>}
          />
          <ScenarioCard
            n={2}
            title="Claude's additions are always DRAFT"
            body={<>When Claude Code stores knowledge, it enters as DRAFT regardless of what the prompt says. Only a human can promote it to ACTIVE. <b style={{ color: SK.ink }}>Hardcoded — not a default setting.</b></>}
            codeOrViz={<InlineCode label="memory/store.js">
              {`if (author === 'claude')`}<br/>
              {`  status = 'DRAFT';  // cannot be overridden`}
            </InlineCode>}
          />
          <ScenarioCard
            n={3}
            title="Audit chain is tamper-evident"
            body={<>Every entry in the audit log carries a SHA-256 hash of the previous entry. Any tampering breaks the chain. <b style={{ color: SK.ink }}>The gateway verifies integrity on every startup.</b></>}
            codeOrViz={<BigHashChain />}
            h={340}
          />
        </div>
        {showAnnotations && (
          <Annot x={56} y={26} w={170} rotate={-3}>3 scenarios · each shows the actual code · proof not promise</Annot>
        )}
      </section>

      {/* pull-quote breather */}
      <div style={{ padding: '16px 56px 16px' }}>
        <PullQuote cite="quorum constitution · article I, §1">
          Anything you can configure, you can also misconfigure. So we don't configure governance.
        </PullQuote>
      </div>

      {/* ── §04 · OPEN SOURCE GOVERNANCE (full-width indigo) ── */}
      <section style={{ padding: '24px 56px 56px' }}>
        <SketchBox h={300} pad={36} double thick={2.2} style={{ background: 'rgba(91,91,214,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 48, alignItems: 'center', height: '100%' }}>
            <div>
              <MonoEyebrow style={{ marginBottom: 14, color: SK.accent }}>SECTION 04 · open source governance</MonoEyebrow>
              <HandText size={32} as="div" style={{ marginBottom: 14, lineHeight: 1.08, textWrap: 'balance' }}>
                The constitution itself is governed by the community.
              </HandText>
              <div className="sk" style={{ fontSize: 15, color: SK.ink2, lineHeight: 1.55, marginBottom: 16, maxWidth: 480 }}>
                Constitutional rule changes require a <b style={{ color: SK.ink }}>30-day public RFC</b>. No single maintainer can push a constitutional change alone. A <b style={{ color: SK.ink }}>supermajority</b> is required for amendments. All constitutional changes are audited exactly like any other state change.
              </div>
              <div className="sk-mono" style={{ fontSize: 12, color: SK.accent, fontWeight: 600 }}>
                Read the contributing guide →
              </div>
            </div>
            <SketchBox h={220} pad={20} thick={1.6} style={{ background: 'rgba(255,255,255,0.5)' }}>
              <MonoEyebrow style={{ marginBottom: 12 }}>amendment lifecycle</MonoEyebrow>
              {[
                ['RFC',         'public draft · 30 days · open comments'],
                ['Discussion',  'maintainers + community · no single owner'],
                ['Vote',        'supermajority required · weighted by tenure'],
                ['Adoption',    'audit-chained · constitutional record'],
              ].map((row, i) => (
                <div key={row[0]} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 12, padding: '5px 0', borderBottom: i < 3 ? '1px dashed rgba(0,0,0,0.18)' : 'none' }}>
                  <span className="sk-mono" style={{ fontSize: 11, color: SK.accent, fontWeight: 700, letterSpacing: '0.06em' }}>{row[0]}</span>
                  <span className="sk-mono" style={{ fontSize: 11, color: SK.ink2 }}>{row[1]}</span>
                </div>
              ))}
            </SketchBox>
          </div>
        </SketchBox>
        {showAnnotations && (
          <Annot x={66} y={48} w={180} rotate={-2}>full-width indigo card · self-governing constitution</Annot>
        )}
      </section>

      {/* ── §05 · DESIGNED FOR TEAMS THAT CAN'T AFFORD TO GET THIS WRONG ── */}
      <section style={{ padding: '56px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 22 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 05</span> · designed for teams that can't afford to get this wrong</MonoEyebrow>
        </div>
        <HandText size={32} as="div" style={{ marginBottom: 28, lineHeight: 1.1, maxWidth: 880 }}>
          Three audiences. Same constitution.
        </HandText>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22 }}>
          <AudienceCard icon="🏦" title="Compliance teams"
            body="Full audit trail, exportable, tamper-evident, no hard deletes — ever." />
          <AudienceCard icon="🏗️" title="Platform engineers"
            body="Governance rules hold for every team connecting to the platform. No team-level escape hatches." />
          <AudienceCard icon="👔" title="Engineering managers"
            body="Authority-weighted decisions mean the right people's calls are protected — and overrides are visible." />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: '64px 56px 56px', textAlign: 'center', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <HandText size={36} as="div" style={{ marginBottom: 18, textWrap: 'balance', maxWidth: 720, margin: '0 auto 18px' }}>
          Read the constitution. Inspect the code. Decide for yourself.
        </HandText>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
          <SketchButton filled size="lg" w={220}>Read the architecture →</SketchButton>
          <SketchButton size="lg" w={170}>View on GitHub →</SketchButton>
        </div>
        <MonoEyebrow style={{ marginTop: 22 }}>quorum constitution · revision 12 · last amended 8 weeks ago</MonoEyebrow>
      </section>

      <Footer />
    </div>
  );
}

window.GovernancePage = GovernancePage;
