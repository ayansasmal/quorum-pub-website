// V1 — Classic split hero + knowledge graph metaphor.
// Right side is the "knowledge graph" visualization sketched as nodes & edges.

function GraphMetaphor({ w = 540, h = 420 }) {
  // Hand-positioned nodes; labels read as Decision/Pattern/Requirement.
  const nodes = [
    { x: 120, y: 80,  r: 28, label: 'Decision',     kind: 'D' },
    { x: 280, y: 60,  r: 22, label: 'Pattern',      kind: 'P' },
    { x: 420, y: 140, r: 30, label: 'Requirement',  kind: 'R' },
    { x: 80,  y: 230, r: 22, label: 'Pattern',      kind: 'P' },
    { x: 230, y: 220, r: 36, label: 'Decision',     kind: 'D' },
    { x: 380, y: 290, r: 24, label: 'Requirement',  kind: 'R' },
    { x: 150, y: 350, r: 20, label: 'Pattern',      kind: 'P' },
    { x: 320, y: 380, r: 26, label: 'Decision',     kind: 'D' },
  ];
  const edges = [
    [0,1],[0,4],[1,2],[2,4],[3,4],[4,5],[4,7],[3,6],[6,7],[5,7],[1,4],
  ];
  const fillFor = (k) => k === 'D' ? SK.ink : k === 'R' ? '#fff' : 'rgba(0,0,0,0.15)';
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block' }}>
      <g filter="url(#sk-wobble)">
        {edges.map(([a,b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
            stroke={SK.ink} strokeWidth="1.4" opacity="0.55" strokeDasharray={i % 3 === 0 ? '5 3' : ''}/>
        ))}
      </g>
      {nodes.map((n, i) => (
        <g key={i}>
          <g filter="url(#sk-wobble)">
            <circle cx={n.x} cy={n.y} r={n.r} fill={fillFor(n.kind)} stroke={SK.ink} strokeWidth="1.8"/>
          </g>
          <text x={n.x} y={n.y + n.r + 14} textAnchor="middle"
            className="sk-h" style={{ fontSize: 14, fill: SK.ink2 }}>{n.label}</text>
          <text x={n.x} y={n.y + 4} textAnchor="middle"
            className="sk-h" style={{ fontSize: 16, fontWeight: 700, fill: n.kind === 'D' ? '#fff' : SK.ink }}>{n.kind}</text>
        </g>
      ))}
      {/* legend */}
      <g transform={`translate(${w - 150}, ${h - 70})`}>
        <text x="0" y="0" className="sk-scribble" style={{ fontSize: 11, fill: SK.pencil }}>legend ↓</text>
        {['Decision','Pattern','Requirement'].map((l, i) => (
          <g key={l} transform={`translate(0, ${10 + i * 16})`}>
            <circle cx="6" cy="6" r="5" fill={fillFor(l[0])} stroke={SK.ink} strokeWidth="1.4"/>
            <text x="18" y="10" className="sk-h" style={{ fontSize: 12, fill: SK.ink2 }}>{l}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function V1ClassicSplit({ headline, showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%', position: 'relative' }}>
      <Header />

      {/* HERO — split */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, padding: '64px 56px 48px', alignItems: 'center', position: 'relative' }}>
        <div>
          <div className="sk-tag" style={{ marginBottom: 22 }}>Open Source · Claude Code · MCP</div>
          <HandText size={56} weight={700} as="div" style={{ lineHeight: 1.05, marginBottom: 24, textWrap: 'balance' }}>
            {headline}
          </HandText>
          <div className="sk" style={{ fontSize: 18, lineHeight: 1.45, marginBottom: 28, color: SK.ink2, maxWidth: 480 }}>
            Quorum is a governed memory layer for Claude Code and AI agents — stores engineering decisions, business requirements, and team knowledge with conflict detection, authority weighting, and a full audit trail.
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <SketchButton filled size="lg" w={200}>Get Started Free →</SketchButton>
            <SketchButton size="lg" w={170}>Read the Docs</SketchButton>
          </div>
          <div className="sk-scribble" style={{ marginTop: 22, fontSize: 13, color: SK.muted }}>
            Used by engineering teams scaling AI-assisted development
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <SketchBox w={540} h={420} double style={{ background: 'rgba(255,255,255,0.6)' }}>
            <GraphMetaphor />
          </SketchBox>
          {showAnnotations && (
            <Annot x={-30} y={-32} w={170} rotate={-3}>nodes pulse softly · 3 entity types · cluster by topic</Annot>
          )}
        </div>
        {showAnnotations && (
          <Annot x={56} y={36} w={140} rotate={-4}>eyebrow tag — small caps style</Annot>
        )}
      </section>

      <Squiggle w="100%" />

      {/* PAIN POINTS */}
      <section style={{ padding: '56px 56px 40px', position: 'relative' }}>
        <HandText size={28} as="div" style={{ marginBottom: 26 }}>The problem ↓</HandText>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }}>
          {[
            { ic: '🧠', h: 'Knowledge leaves with your engineers', d: 'Capture every architectural decision automatically.' },
            { ic: '⚡', h: 'AI agents contradict each other',      d: 'Conflict detection flags contradictions before they persist.' },
            { ic: '📋', h: 'Business requirements get silently removed', d: 'Requirements are first-class governed knowledge.' },
          ].map((p, i) => (
            <SketchBox key={i} h={200} pad={20} dashed>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{p.ic}</div>
              <HandText size={22} as="div" style={{ marginBottom: 8, lineHeight: 1.15 }}>{p.h}</HandText>
              <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.4 }}>{p.d}</div>
            </SketchBox>
          ))}
        </div>
        {showAnnotations && <Annot x={520} y={20} w={160} rotate={2}>icon + headline + 1-line desc</Annot>}
      </section>

      {/* FEATURES */}
      <section style={{ padding: '40px 56px 56px', background: 'rgba(0,0,0,0.025)', borderTop: '1.5px dashed rgba(0,0,0,0.2)', borderBottom: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <HandText size={28} as="div" style={{ marginBottom: 6 }}>How Quorum works</HandText>
        <div className="sk" style={{ fontSize: 15, color: SK.ink2, marginBottom: 26 }}>Three primitives. One audit chain. Zero contradictions.</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }}>
          {[
            { t: 'Governed Memory', d: 'Every decision stored with author, rationale, confidence, audit chain.', m: ['author', 'rationale', 'confidence', '+ audit'] },
            { t: 'Conflict Detection', d: 'Semantic + LLM analysis surfaces contradictions instantly.', m: ['semantic', 'llm-check', 'auto-flag'] },
            { t: 'Business Requirements', d: 'Product rules, compliance constraints, feature rationale — all protected.', m: ['rules', 'compliance', 'rationale'] },
          ].map((f, i) => (
            <SketchBox key={i} h={260} pad={20}>
              <HandText size={24} as="div" style={{ marginBottom: 10 }}>{f.t}</HandText>
              <div className="sk" style={{ fontSize: 14, color: SK.ink2, marginBottom: 14, lineHeight: 1.4 }}>{f.d}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {f.m.map((k) => <span key={k} className="sk-tag" style={{ fontSize: 11, padding: '2px 7px' }}>{k}</span>)}
              </div>
              <div style={{ marginTop: 16 }}>
                <ImageBox h={70} label="diagram"/>
              </div>
            </SketchBox>
          ))}
        </div>
      </section>

      {/* COST & ROI mini-strip */}
      <section style={{ padding: '48px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'center' }}>
          <div>
            <HandText size={32} as="div" style={{ marginBottom: 10 }}>Free, open source, self-hosted.</HandText>
            <div className="sk" style={{ fontSize: 15, color: SK.ink2, lineHeight: 1.5, marginBottom: 16 }}>
              Apache 2.0. Run it next to your agents. Bring your own LLM key. Zero per-seat fees.
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <SketchButton filled>Star on GitHub</SketchButton>
              <SketchButton>npm install quorum</SketchButton>
            </div>
          </div>
          <SketchBox h={170} pad={18} hatch>
            <div className="sk-scribble" style={{ fontSize: 12, color: SK.pencil, marginBottom: 8 }}>cost vs typical SaaS ↓</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, height: 90, marginTop: 6 }}>
              <div style={{ width: 60, height: '85%', background: SK.ink, borderRadius: '2px 4px 2px 4px' }} />
              <div style={{ width: 60, height: '25%', background: 'rgba(0,0,0,0.25)', border: `1.5px solid ${SK.ink}` }} />
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 6, fontSize: 12 }} className="sk-scribble">
              <span style={{ width: 60, textAlign: 'center' }}>SaaS</span>
              <span style={{ width: 60, textAlign: 'center' }}>Quorum</span>
            </div>
          </SketchBox>
        </div>
      </section>

      <Footer />
    </div>
  );
}

window.V1ClassicSplit = V1ClassicSplit;
