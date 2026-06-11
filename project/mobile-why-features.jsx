// MOBILE · Why Quorum + Features pages.

// ─────────────────────────────────────────────────────────
// WHY QUORUM — 5 problems, single-column stack
// ─────────────────────────────────────────────────────────

// Compact problem visual — terminal-style "decisions found" card.
function MWhyVis1() {
  return (
    <SketchBox h={210} pad={0} thick={1.8} style={{ background: 'rgba(0,0,0,0.04)' }}>
      <div style={{ padding: '6px 12px', borderBottom: '1.2px dashed rgba(0,0,0,0.18)' }}>
        <span className="sk-mono" style={{ fontSize: 10, color: SK.pencil }}>claude code · quorum.check</span>
      </div>
      <div className="sk-mono" style={{ padding: '10px 12px', fontSize: 10.5, lineHeight: 1.65 }}>
        <div>$ claude --task "add Redis"</div>
        <div style={{ color: SK.ink2 }}>↳ ✓ 2 historical decisions</div>
        <div style={{ paddingLeft: 12, color: SK.muted }}>D-204 @rachel · 11mo · LEFT</div>
        <div style={{ paddingLeft: 12, color: SK.muted }}>  "redis stale-user bugs"</div>
        <div style={{ paddingLeft: 12, color: SK.muted }}>  cited by 7 · reaffirmed 6w</div>
        <div style={{ color: '#b88a00' }}>⏸ paused — cite, override?</div>
      </div>
    </SketchBox>
  );
}

// Contradiction visual.
function MWhyVis2() {
  return (
    <SketchBox h={210} pad={12}>
      <MonoEyebrow style={{ marginBottom: 8, fontSize: 10 }}>2 patterns · 1 contradiction</MonoEyebrow>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
        <SketchBox h={90} pad={8} thick={1.4}>
          <div className="sk-mono" style={{ fontSize: 9, color: SK.muted }}>P-051</div>
          <HandText size={12} as="div" style={{ marginBottom: 4, lineHeight: 1.15 }}>async/await</HandText>
          <div className="sk-mono" style={{ fontSize: 9, color: SK.ink2, lineHeight: 1.45 }}>@alex · 14w<br/>conf 0.91</div>
        </SketchBox>
        <SketchBox h={90} pad={8} thick={1.4}>
          <div className="sk-mono" style={{ fontSize: 9, color: SK.muted }}>P-077</div>
          <HandText size={12} as="div" style={{ marginBottom: 4, lineHeight: 1.15 }}>.then() chains</HandText>
          <div className="sk-mono" style={{ fontSize: 9, color: SK.ink2, lineHeight: 1.45 }}>@marco · 2w<br/>conf 0.88</div>
        </SketchBox>
      </div>
      <div style={{ padding: '6px 10px', border: '1.2px solid #b34', background: 'rgba(179,52,68,0.06)', borderRadius: 3, display: 'flex', justifyContent: 'space-between' }}>
        <span className="sk-mono" style={{ fontSize: 10, color: '#b34' }}>⚠ conflict · cosine 0.84</span>
        <span className="sk-mono" style={{ fontSize: 9, color: '#b34', border: '1px solid #b34', padding: '0 5px', borderRadius: 999 }}>HOLD</span>
      </div>
    </SketchBox>
  );
}

// Onboarding visual.
function MWhyVis3() {
  return (
    <SketchBox h={210} pad={12} thick={1.8} style={{ background: 'rgba(0,0,0,0.025)' }}>
      <div className="sk-mono" style={{ fontSize: 10, color: SK.ink, marginBottom: 8 }}>
        ? @nora · day 3 · "why GraphQL?"
      </div>
      {[
        { id: 'D-014', t: 'Adopted for contract versioning', m: '@priya · 2y' },
        { id: 'D-088', t: 'Reaffirmed during v2',            m: '@kiran · 14mo' },
        { id: 'D-211', t: 'Exemption: /webhooks REST',       m: '@kiran · 6w' },
      ].map((r, i) => (
        <div key={r.id} style={{ padding: '4px 0', borderBottom: i < 2 ? '1px dashed rgba(0,0,0,0.14)' : 'none' }}>
          <div className="sk-mono" style={{ fontSize: 10 }}>
            <span style={{ color: SK.ink, fontWeight: 600 }}>{r.id}</span>{' '}
            <span style={{ color: SK.ink2 }}>{r.t}</span>
          </div>
          <div className="sk-mono" style={{ fontSize: 9, color: SK.muted }}>{r.m}</div>
        </div>
      ))}
      <div className="sk-mono" style={{ fontSize: 10, color: SK.ink2, marginTop: 8 }}>
        ↳ answered in 0.3s · ~3 days saved
      </div>
    </SketchBox>
  );
}

// Drift visual — PR intercept.
function MWhyVis4() {
  return (
    <SketchBox h={250} pad={0} thick={1.8}>
      <div style={{ padding: '8px 12px', borderBottom: '1.2px dashed rgba(0,0,0,0.18)' }}>
        <span className="sk-mono" style={{ fontSize: 10, color: SK.muted }}>PR #847 · @jamie</span>
        <HandText size={13} as="div" style={{ lineHeight: 1.1 }}>refactor auth middleware</HandText>
      </div>
      <div className="sk-mono" style={{ padding: '6px 12px', fontSize: 10, color: '#b34' }}>
        ⚠ Quorum flagged 1 contradiction
      </div>
      <div className="sk-mono" style={{ margin: '0 12px', fontSize: 10, lineHeight: 1.6, border: '1px solid rgba(0,0,0,0.18)', borderRadius: 3 }}>
        <div style={{ padding: '4px 8px', background: 'rgba(179,52,68,0.08)', color: '#b34' }}>−41 if (token.issuedAt &lt; …)</div>
        <div style={{ padding: '4px 8px', background: 'rgba(179,52,68,0.08)', color: '#b34' }}>−42   return rotate(token);</div>
      </div>
      <div style={{ margin: '8px 12px 0', padding: '8px 10px', background: 'rgba(91,91,214,0.06)', borderLeft: `2px solid ${SK.accent}` }}>
        <div className="sk-mono" style={{ fontSize: 10, lineHeight: 1.55, color: SK.ink2 }}>
          contradicts <span style={{ color: SK.ink, fontWeight: 600 }}>D-117</span> · @sara<br/>
          override: @sara OR 2 principals
        </div>
      </div>
    </SketchBox>
  );
}

// Business requirement visual.
function MWhyVis5() {
  return (
    <SketchBox h={240} pad={14} double>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span className="sk-mono" style={{ fontSize: 10, color: SK.muted }}>R-022</span>
        <span className="sk-mono" style={{ fontSize: 9, padding: '1px 6px', border: `1px solid ${SK.accent}`, color: SK.accent, background: 'rgba(91,91,214,0.08)', letterSpacing: '0.06em' }}>PINNED</span>
      </div>
      <HandText size={15} as="div" style={{ marginBottom: 10, lineHeight: 1.2 }}>
        Guest checkout must remain enabled.
      </HandText>
      <div className="sk-mono" style={{ fontSize: 10, lineHeight: 1.7, color: SK.ink2 }}>
        <div><span style={{ color: SK.muted }}>owner:</span> @ml-rodriguez · product</div>
        <div><span style={{ color: SK.muted }}>evidence:</span> 40% drop-off (n=18k)</div>
        <div><span style={{ color: SK.muted }}>cited by:</span> 11 features</div>
      </div>
      <div style={{ marginTop: 10, paddingTop: 8, borderTop: '1px dashed rgba(0,0,0,0.2)' }}>
        <div className="sk-mono" style={{ fontSize: 10, color: '#b34', fontWeight: 600 }}>
          ⛔ BLOCKED — PR #1204 removal
        </div>
      </div>
    </SketchBox>
  );
}

function MProblemSection({ n, title, lede, callout, visual }) {
  return (
    <MSection>
      <MonoEyebrow style={{ marginBottom: 10, color: '#b34' }}>
        PROBLEM · {n} / 05
      </MonoEyebrow>
      <HandText size={MOB.h2Size} as="div" style={{ marginBottom: 12, lineHeight: 1.15 }}>
        <span style={{ color: '#b34', fontSize: 20, marginRight: 6 }}>⚠</span>
        {title}
      </HandText>
      <div className="sk" style={{ fontSize: MOB.textSize, color: SK.ink2, lineHeight: 1.55, marginBottom: 14 }}>
        {lede}
      </div>
      {visual}
      <div style={{ height: 14 }} />
      <IndigoCallout>{callout}</IndigoCallout>
    </MSection>
  );
}

function MobileWhy({ showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%' }}>
      {showAnnotations && <BreakpointBadge active="SE" />}
      <MobileStrip>QUORUM / WHY · v0.4</MobileStrip>
      <MobileHeader />

      <MSection padY={32} noBorder>
        <MonoEyebrow style={{ marginBottom: 12 }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: SK.accent, marginRight: 6, verticalAlign: 'middle' }}/>
          why quorum
        </MonoEyebrow>
        <HandText size={MOB.heroSize} weight={700} as="div" style={{ lineHeight: 1.05, marginBottom: 12, textWrap: 'balance' }}>
          Five problems AI-assisted teams don't realise they <span style={{ color: SK.accent }}>have</span>.
        </HandText>
        <div className="sk-scribble" style={{ fontSize: 16, color: SK.ink2, fontStyle: 'italic' }}>
          Until they do.
        </div>
      </MSection>

      {/* directory strip */}
      <div style={{ padding: '0 20px 8px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <MonoEyebrow style={{ fontSize: 10 }}>the five ↓</MonoEyebrow>
        <div style={{ flex: 1, height: 1, borderTop: '1px dashed rgba(0,0,0,0.25)' }} />
      </div>

      <MProblemSection n="01"
        title="The Institutional Memory Problem"
        lede={<>Your senior engineer leaves. Six months later, your AI confidently proposes a caching strategy that <b style={{color:SK.ink}}>contradicts three years of decisions</b> she made.</>}
        callout={<>Every decision captured with author, rationale, signed audit chain. <b style={{color:SK.ink}}>Departed engineers still get a vote.</b></>}
        visual={<MWhyVis1 />} />

      <MProblemSection n="02"
        title="The AI Contradiction Problem"
        lede={<>Two engineers stored opposing patterns. Both reasonable. <b style={{color:SK.ink}}>Neither knew about the other.</b> Your codebase drifts.</>}
        callout={<>Semantic embedding + LLM cross-checking flags contradictions <b style={{color:SK.ink}}>at write time</b>.</>}
        visual={<MWhyVis2 />} />

      <MProblemSection n="03"
        title="The Onboarding Cost Problem"
        lede={<>New hire asks "why was it built like this?" Typically <b style={{color:SK.ink}}>2–4 weeks of senior eng time</b> on context transfer.</>}
        callout={<>Every "why" returns a provenance chain. <b style={{color:SK.ink}}>Onboarding becomes self-serve.</b></>}
        visual={<MWhyVis3 />} />

      {/* pull quote breather */}
      <MSection padY={20}>
        <PullQuote cite="user interviews">
          A codebase isn't a body of code. It's a body of decisions, of which the code is the most recent expression.
        </PullQuote>
      </MSection>

      <MProblemSection n="04"
        title="The Decision Drift Problem"
        lede={<>Your principal's hard-won decision is gone six months later — eroded one PR at a time. <b style={{color:SK.ink}}>Code review doesn't catch it.</b></>}
        callout={<>Every PR gets a Quorum pass. Override requires the original author or <b style={{color:SK.ink}}>two principals</b>.</>}
        visual={<MWhyVis4 />} />

      <MProblemSection n="05"
        title="The Buried Business Requirement Problem"
        lede={<>A dev "cleans up" what they thought was dead code. Conversion drops 8%. <b style={{color:SK.ink}}>A business knowledge failure</b>, not engineering.</>}
        callout={<>Business requirements are <b style={{color:SK.ink}}>first-class governed records</b>.</>}
        visual={<MWhyVis5 />} />

      <MSection padY={36}>
        <HandText size={32} as="div" style={{ marginBottom: 10, textWrap: 'balance' }}>Sound familiar?</HandText>
        <div className="sk" style={{ fontSize: 14, color: SK.ink2, marginBottom: 20, lineHeight: 1.5 }}>
          Open source, Apache 2.0, self-hosted. Star the repo, install the MCP server, and your agents stop forgetting.
        </div>
        <MCTAStack primary="Get Started Free →" secondary="View on GitHub" />
        <MonoEyebrow style={{ marginTop: 18 }}>v0.4 · 218 commits</MonoEyebrow>
      </MSection>

      <MobileFooter />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// FEATURES — 8 stacked cards + business requirement highlight
// ─────────────────────────────────────────────────────────

function MFeatureCard({ icon, badge, title, body, detail }) {
  return (
    <SketchBox h="auto" pad={16} thick={1.6} style={{ marginBottom: 14, minHeight: 140 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
        <SketchIcon name={icon} size={28} />
        {badge && (
          <span className="sk-mono" style={{
            fontSize: 9, padding: '2px 6px', borderRadius: 999, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: SK.accent, border: `1px solid ${SK.accent}`,
            background: 'rgba(91,91,214,0.08)', fontWeight: 700,
          }}>{badge}</span>
        )}
      </div>
      <HandText size={18} as="div" style={{ marginBottom: 6, lineHeight: 1.15 }}>{title}</HandText>
      <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.5, marginBottom: detail ? 10 : 0 }}>
        {body}
      </div>
      {detail}
    </SketchBox>
  );
}

function MBusinessHighlight() {
  return (
    <SketchBox h="auto" pad={18} double thick={2} style={{ background: 'rgba(91,91,214,0.05)', minHeight: 380 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <SketchIcon name="briefcase" size={26} />
        <span className="sk-mono" style={{ fontSize: 10, padding: '2px 7px', borderRadius: 999, letterSpacing: '0.1em', textTransform: 'uppercase', color: SK.accent, border: `1.2px solid ${SK.accent}`, background: 'rgba(91,91,214,0.1)', fontWeight: 700 }}>NEW · v0.4</span>
      </div>
      <HandText size={22} as="div" style={{ marginBottom: 12, lineHeight: 1.1 }}>
        Business Requirements are now first-class knowledge.
      </HandText>
      <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.55, marginBottom: 14 }}>
        Engineering explains <i>how</i>. Requirements explain <i>why</i>. Governed identically: authored, versioned, conflict-detected, audited.
      </div>
      <SketchBox h={180} pad={12} thick={1.4} style={{ background: 'rgba(0,0,0,0.03)' }}>
        <div className="sk-mono" style={{ fontSize: 9, color: SK.muted, marginBottom: 6 }}># storing a requirement</div>
        <pre className="sk-mono" style={{ margin: 0, fontSize: 10, lineHeight: 1.6, color: SK.ink }}>
{`remember(
  key: `}<span style={{ color: SK.accent }}>"guest-checkout"</span>{`,
  meta: {
    entity_type: `}<span style={{ color: '#0a6' }}>"Requirement"</span>{`,
    authority: `}<span style={{ color: '#0a6' }}>"product"</span>{`,
    pinned: `}<span style={{ color: '#0a6' }}>true</span>{`,
  }
)`}
        </pre>
        <div className="sk-mono" style={{ fontSize: 9, color: '#0a6', marginTop: 6 }}>
          ↳ R-022 stored · audit signed
        </div>
      </SketchBox>
    </SketchBox>
  );
}

function MobileFeatures({ showAnnotations }) {
  const cards = [
    { icon: 'brain', title: 'Governed Memory', body: <>Every write: <b style={{color:SK.ink}}>author, timestamp, confidence</b>. Append-only.</> },
    { icon: 'bolt',  title: 'Conflict Detection', body: <>Semantic + LLM flags contradictions: <b style={{color:SK.ink}}>supersede, coexist, reject</b>.</> },
    { icon: 'shield',title: 'Authority Weighting', body: <>Principals carry full authority. Agents the least. <b style={{color:SK.ink}}>Right decisions require deliberate change.</b></> },
    { icon: 'briefcase', badge: 'NEW', title: 'Business Requirements', body: <>Product rules, compliance — first-class <b style={{color:SK.accent}}>Requirement</b> entities.</> },
    { icon: 'chain', title: 'Audit Chain', body: <>SHA-256 tamper-evident log. Exportable for compliance.</> },
    { icon: 'hourglass', title: 'Pending Decisions', body: <>Conflicts surface at session start. <b style={{color:SK.ink}}>Never interrupts mid-task.</b></> },
    { icon: 'flow',  title: 'Knowledge States', body: <>DRAFT → ACTIVE → SUPERSEDED → DEPRECATED. <b style={{color:SK.ink}}>Nothing activates silently.</b></> },
    { icon: 'layers',title: 'Multi-Project Isolation', body: <>Isolated by <code style={{fontFamily:'monospace',color:SK.ink}}>group_id</code>. Cross-team promotion explicit.</> },
  ];

  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%' }}>
      {showAnnotations && <BreakpointBadge active="SE" />}
      <MobileStrip>QUORUM / FEATURES</MobileStrip>
      <MobileHeader />

      <MSection padY={32} noBorder>
        <MonoEyebrow style={{ marginBottom: 12 }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: SK.accent, marginRight: 6, verticalAlign: 'middle' }}/>
          8 primitives · 1 audit chain
        </MonoEyebrow>
        <HandText size={MOB.heroSize} weight={700} as="div" style={{ lineHeight: 1.05, marginBottom: 14, textWrap: 'balance' }}>
          Everything your team needs to trust AI-assisted development.
        </HandText>
        <div className="sk-scribble" style={{ fontSize: 15, color: SK.ink2, fontStyle: 'italic' }}>
          Eight features. Three primitives. One signed chain.
        </div>
      </MSection>

      <MSection>
        <MonoEyebrow style={{ marginBottom: 16 }}>the eight ↓</MonoEyebrow>
        {cards.map((c, i) => <MFeatureCard key={i} {...c} />)}
      </MSection>

      <MSection padY={20}>
        <PullQuote cite="quorum docs">
          Engineering decisions answer "how." Business requirements answer "why." Both deserve the same governance.
        </PullQuote>
      </MSection>

      <MSection>
        <MBusinessHighlight />
      </MSection>

      <MSection>
        <MonoEyebrow style={{ marginBottom: 14 }}>how the eight click together</MonoEyebrow>
        {[
          { t: 'On write',  d: 'Memory + Conflict Detection + States validate every record.' },
          { t: 'On query',  d: 'Authority + Audit + Isolation decide what can be cited.' },
          { t: 'On review', d: 'Pending + Requirements surface at session start.' },
        ].map((b, i) => (
          <div key={b.t} style={{ padding: '10px 0', borderBottom: i < 2 ? '1px dashed rgba(0,0,0,0.14)' : 'none' }}>
            <HandText size={17} as="div" style={{ marginBottom: 4 }}>{b.t}</HandText>
            <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.5 }}>{b.d}</div>
          </div>
        ))}
      </MSection>

      <MSection padY={36}>
        <HandText size={28} as="div" style={{ marginBottom: 10, textWrap: 'balance' }}>
          Start capturing your team's knowledge today.
        </HandText>
        <div className="sk" style={{ fontSize: 14, color: SK.ink2, marginBottom: 20, lineHeight: 1.5 }}>
          One MCP server. Eight features. Free, open source, Apache 2.0.
        </div>
        <MCTAStack primary="View on GitHub →" secondary="Read the Docs" />
      </MSection>

      <MobileFooter />
    </div>
  );
}

window.MobileWhy = MobileWhy;
window.MobileFeatures = MobileFeatures;
