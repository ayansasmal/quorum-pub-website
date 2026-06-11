// MOBILE V6 — landing page (mobile-first).
// Single-column stack, iPhone SE 3rd gen baseline (375px portrait).

// Mini hero "graph" anchor for mobile — three connected nodes, compact.
function MHeroGraph() {
  return (
    <svg width="100%" height="200" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet">
      <g filter="url(#sk-wobble)">
        {/* edges */}
        <line x1="60"  y1="160" x2="160" y2="60"  stroke={SK.ink} strokeWidth="1.6" />
        <line x1="260" y1="160" x2="160" y2="60"  stroke={SK.ink} strokeWidth="1.6" />
        <line x1="60"  y1="160" x2="260" y2="160" stroke={SK.ink} strokeWidth="1.6" />
        <line x1="160" y1="60"  x2="160" y2="120" stroke={SK.ink} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5"/>
        {/* nodes */}
        <circle cx="160" cy="60"  r="22" fill={SK.ink} />
        <circle cx="60"  cy="160" r="18" fill={SK.paper} stroke={SK.ink} strokeWidth="1.8"/>
        <circle cx="260" cy="160" r="18" fill={SK.paper} stroke={SK.ink} strokeWidth="1.8"/>
        <circle cx="160" cy="120" r="9"  fill={SK.accent} />
      </g>
      <text x="160" y="65"  textAnchor="middle" className="sk-mono" style={{ fontSize: 9, fill: '#fff', letterSpacing: '0.08em' }}>DECISION</text>
      <text x="60"  y="164" textAnchor="middle" className="sk-mono" style={{ fontSize: 9, fill: SK.ink2 }}>author</text>
      <text x="260" y="164" textAnchor="middle" className="sk-mono" style={{ fontSize: 9, fill: SK.ink2 }}>agent</text>
      <text x="160" y="195" textAnchor="middle" className="sk-scribble" style={{ fontSize: 10, fill: SK.muted }}>signed audit chain ↓</text>
    </svg>
  );
}

// Pain item — single icon + text row.
function MPainRow({ ic, h, d }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px dashed rgba(0,0,0,0.14)' }}>
      <div style={{ fontSize: 22, lineHeight: 1 }}>{ic}</div>
      <div>
        <HandText size={16} as="div" style={{ marginBottom: 2, lineHeight: 1.2 }}>{h}</HandText>
        <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.45 }}>{d}</div>
      </div>
    </div>
  );
}

// Mini card-stack visual (governed record).
function MCardStack() {
  return (
    <div style={{ position: 'relative', height: 180 }}>
      {[2, 1, 0].map((i) => (
        <div key={i} style={{
          position: 'absolute', left: 12 + i * 8, top: 12 + i * 10, right: 12 + i * 8,
          opacity: 1 - i * 0.25,
        }}>
          <SketchBox h={i === 0 ? 140 : 130} pad={12} thick={1.6}>
            {i === 0 && (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span className="sk-mono" style={{ fontSize: 10, color: SK.muted }}>D-0{47 - i}</span>
                  <span className="sk-mono" style={{ fontSize: 9, padding: '1px 6px', border: `1px solid ${SK.accent}`, color: SK.accent, letterSpacing: '0.06em' }}>ACTIVE</span>
                </div>
                <HandText size={14} as="div" style={{ lineHeight: 1.2, marginBottom: 6 }}>
                  Use FalkorDB for graph
                </HandText>
                <div className="sk-mono" style={{ fontSize: 10, color: SK.ink2, lineHeight: 1.55 }}>
                  @rachel · sr.eng · conf 0.91<br/>
                  cited by 7 · reaffirmed 6w
                </div>
              </>
            )}
          </SketchBox>
        </div>
      ))}
    </div>
  );
}

// Mini terminal (mobile).
function MTerminal() {
  return (
    <SketchBox h={210} pad={0} thick={1.8} style={{ background: 'rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '6px 12px', borderBottom: '1.2px dashed rgba(0,0,0,0.18)' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {[0,1,2].map(i => <span key={i} style={{ width: 8, height: 8, border: '1.2px solid #222', borderRadius: '50%' }} />)}
        </div>
        <span className="sk-mono" style={{ marginLeft: 10, fontSize: 10, color: SK.pencil }}>claude code · quorum</span>
      </div>
      <div className="sk-mono" style={{ padding: '10px 12px', fontSize: 10.5, lineHeight: 1.6 }}>
        <div>$ claude --task "add caching"</div>
        <div style={{ color: SK.ink2 }}>↳ quorum.check ✓ 2 prior decisions</div>
        <div style={{ paddingLeft: 16, color: SK.muted }}>D-204 · @rachel · 11mo</div>
        <div style={{ paddingLeft: 16, color: SK.muted }}>  "redis stale-user bugs"</div>
        <div style={{ paddingLeft: 16, color: SK.muted }}>D-091 · @rachel · 18mo</div>
        <div style={{ color: '#b88a00' }}>⏸ paused — cite, override?</div>
      </div>
    </SketchBox>
  );
}

// Mini audit trail (mobile).
function MAuditTrail() {
  const rows = [
    { t: '14:02', who: '@rachel', a: 'wrote D-204', sha: 'a17f…' },
    { t: '14:03', who: 'agent',   a: 'cited D-204', sha: 'b29e…' },
    { t: '14:08', who: '@marco',  a: 'reaffirmed',  sha: 'c40a…' },
    { t: '15:21', who: 'agent',   a: 'flagged ⚡',  sha: 'd51b…' },
    { t: '15:22', who: 'system',  a: 'HOLD routed', sha: 'e62c…' },
  ];
  return (
    <div className="sk-mono" style={{ fontSize: 10.5, lineHeight: 1.7 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 50px', gap: 8, padding: '4px 0', borderBottom: i < rows.length - 1 ? '1px dashed rgba(0,0,0,0.14)' : 'none' }}>
          <span style={{ color: SK.muted }}>{r.t}</span>
          <span><span style={{ color: SK.ink }}>{r.who}</span> <span style={{ color: SK.ink2 }}>{r.a}</span></span>
          <span style={{ color: SK.muted, textAlign: 'right' }}>{r.sha}</span>
        </div>
      ))}
    </div>
  );
}

function MobileV6({ headline, showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%' }}>
      {showAnnotations && <BreakpointBadge active="SE" />}
      <MobileStrip>QUORUM · v0.4 · APACHE 2.0</MobileStrip>
      <MobileHeader />

      {/* HERO */}
      <MSection padY={32} noBorder>
        <MonoEyebrow style={{ marginBottom: 10 }}>open source · claude code · MCP</MonoEyebrow>
        <HandText size={MOB.heroSize} weight={700} as="div" style={{ lineHeight: 1.05, marginBottom: 16, textWrap: 'balance' }}>
          {headline}
        </HandText>
        <div className="sk" style={{ fontSize: 15, lineHeight: 1.5, color: SK.ink2, marginBottom: 18 }}>
          A governed memory layer for Claude Code and AI agents — engineering decisions, business requirements, and team knowledge with conflict detection and a full audit trail.
        </div>
        <PullQuote cite="platform team" style={{ marginBottom: 20 }}>
          "Our AI agents stopped contradicting each other on day three."
        </PullQuote>
        <MCard h={240} pad={12} double>
          <MHeroGraph />
        </MCard>
        <div style={{ height: 18 }} />
        <MCTAStack primary="Get Started Free →" secondary="Read the Docs" />
        <div className="sk-scribble" style={{ fontSize: 12, color: SK.muted, marginTop: 12, textAlign: 'center' }}>
          used by teams scaling AI-assisted development
        </div>
        {showAnnotations && (
          <Annot x={MOB.pad} y={6} w={150} rotate={-2}>mobile hero · stacked · CTAs full-width</Annot>
        )}
      </MSection>

      {/* PAIN STRIP */}
      <MSection>
        <MonoEyebrow style={{ marginBottom: 14 }}>three things that break AI-assisted teams</MonoEyebrow>
        <MPainRow ic="🧠" h="Knowledge leaves with engineers" d="Capture every architectural decision automatically." />
        <MPainRow ic="⚡" h="AI agents contradict each other"  d="Conflict detection flags contradictions before they persist." />
        <MPainRow ic="📋" h="Requirements silently removed"    d="Requirements are first-class governed knowledge." />
      </MSection>

      {/* §01 — DATA MODEL */}
      <MSection>
        <MSectionHead
          eyebrow="01 / 03 — the data model"
          title="Every decision is a governed record."
          sub={<>Author, rationale, confidence, parents, signed audit chain. Authority weighted — senior &gt; junior &gt; agent.</>}
        />
        <MCard h={200} pad={12}>
          <MCardStack />
        </MCard>
        <div style={{ height: 14 }} />
        <IndigoCallout>
          Records are first-class, queryable, citable. Every agent action reads from and writes to the same chain.
        </IndigoCallout>
        {showAnnotations && (
          <Annot x={MOB.pad} y={10} w={150} rotate={-2}>each §: eyebrow → title → visual → indigo callout</Annot>
        )}
      </MSection>

      {/* PULL QUOTE BREATHER */}
      <MSection padY={20}>
        <PullQuote cite="common in user interviews">
          A codebase isn't a body of code. It's a body of decisions, of which the code is the most recent expression.
        </PullQuote>
      </MSection>

      {/* §02 — IN-EDITOR */}
      <MSection tint>
        <MSectionHead
          eyebrow="02 / 03 — in your editor"
          title="Lives inside Claude Code."
          sub="One MCP server. Reads on every task, writes on every decision, intercepts conflicts before they land."
        />
        <MTerminal />
        <div style={{ height: 14 }} />
        <IndigoCallout label="What Quorum does →">
          Agents cite prior decisions automatically. Contradictions become HOLD states. Audit trail attaches itself.
        </IndigoCallout>
      </MSection>

      {/* §03 — TRUST / AUDIT */}
      <MSection>
        <MSectionHead
          eyebrow="03 / 03 — trust &amp; compliance"
          title="One audit trail. Humans and agents on the same spine."
          sub="Every write signed and hash-chained. Replay any conflict resolution. Export the chain for SOC 2."
        />
        <MCard h={240} pad={14} double>
          <MonoEyebrow style={{ marginBottom: 8 }}>audit trail · live ↓</MonoEyebrow>
          <MAuditTrail />
        </MCard>
        <div style={{ height: 14 }} />
        <IndigoCallout label="What Quorum does →">
          Authority weighting, signed chains, pinned requirements — a defensible record of every AI-assisted decision.
        </IndigoCallout>
      </MSection>

      {/* CLOSING CTA */}
      <MSection padY={36}>
        <HandText size={28} as="div" style={{ marginBottom: 12, textWrap: 'balance', lineHeight: 1.1 }}>
          Free. Open source. Self-hosted. Apache 2.0.
        </HandText>
        <div className="sk" style={{ fontSize: 14, color: SK.ink2, marginBottom: 18, lineHeight: 1.5 }}>
          Run Quorum next to your agents. Bring your own LLM key. No per-seat fees, ever.
        </div>
        <MCTAStack primary="Star on GitHub" secondary="Read the Docs" />
        <MonoEyebrow style={{ marginTop: 18 }}>v0.4 · 218 commits · 31 contributors</MonoEyebrow>
      </MSection>

      <MobileFooter />
    </div>
  );
}

window.MobileV6 = MobileV6;
