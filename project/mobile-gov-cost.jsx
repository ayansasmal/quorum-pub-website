// MOBILE · Governance + Cost & ROI + Get Started.

// ─────────────────────────────────────────────────────────
// GOVERNANCE
// ─────────────────────────────────────────────────────────

function MPillarRule({ n, t, d, last }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '28px 1fr', gap: 10,
      padding: '10px 0', borderBottom: last ? 'none' : '1px dashed rgba(0,0,0,0.14)',
    }}>
      <div className="sk-mono" style={{ fontSize: 13, color: SK.accent, fontWeight: 700, lineHeight: 1 }}>{n}</div>
      <div>
        <HandText size={15} as="div" style={{ marginBottom: 2, lineHeight: 1.2 }}>{t}</HandText>
        <div className="sk" style={{ fontSize: 12, color: SK.ink2, lineHeight: 1.5 }}>{d}</div>
      </div>
    </div>
  );
}

function MPillar({ name, tagline, rules }) {
  return (
    <SketchBox h="auto" pad={18} thick={1.8} style={{ marginBottom: 14, borderTopWidth: 3, minHeight: 200 }}>
      <div style={{ paddingBottom: 12, marginBottom: 4, borderBottom: `2px solid ${SK.accent}` }}>
        <div className="sk-mono" style={{ fontSize: 10, color: SK.accent, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>
          {name}
        </div>
        <div className="sk-scribble" style={{ fontSize: 12, color: SK.ink2, fontStyle: 'italic', lineHeight: 1.4 }}>
          {tagline}
        </div>
      </div>
      {rules.map((r, i) => (
        <MPillarRule key={r.n} n={r.n} t={r.t} d={r.d} last={i === rules.length - 1} />
      ))}
    </SketchBox>
  );
}

// Vertical layered accountability viz — stacked rather than concentric.
function MLayerStack() {
  const layers = [
    { n: 1, name: 'Protocol', tag: 'Constitutional rules in code. Non-bypassable.', fill: 'rgba(91,91,214,0.55)', textColor: '#fff' },
    { n: 2, name: 'Peers',    tag: 'Distributed review. Dissent preserved.',         fill: 'rgba(91,91,214,0.32)', textColor: SK.ink },
    { n: 3, name: 'Graph',    tag: 'Decision history audits the makers.',            fill: 'rgba(91,91,214,0.18)', textColor: SK.ink },
    { n: 4, name: 'Public',   tag: 'Open source. Community scrutiny.',               fill: 'rgba(91,91,214,0.10)', textColor: SK.ink },
    { n: 5, name: 'Time',     tag: 'Outcomes are the ultimate truth.',               fill: 'rgba(91,91,214,0.05)', textColor: SK.ink },
  ];
  return (
    <div>
      <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, textAlign: 'center', marginBottom: 4 }}>↑ harder to bypass</div>
      {layers.map((l, i) => (
        <div key={l.n} style={{
          padding: '12px 14px', marginBottom: 4,
          background: l.fill, border: `1.4px solid ${SK.ink}`,
          color: l.textColor,
          marginLeft: i * 6, marginRight: i * 6, position: 'relative',
        }}>
          <div className="sk-mono" style={{ fontSize: 10, letterSpacing: '0.1em', opacity: 0.7 }}>LAYER {l.n}</div>
          <HandText size={16} as="div" style={{ color: l.textColor, marginTop: 2, marginBottom: 2 }}>{l.name}</HandText>
          <div className="sk" style={{ fontSize: 11, color: l.textColor, opacity: 0.85, lineHeight: 1.4 }}>{l.tag}</div>
        </div>
      ))}
      <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, textAlign: 'center', marginTop: 4 }}>↓ longer to settle</div>
    </div>
  );
}

function MScenarioCard({ n, title, body, code }) {
  return (
    <SketchBox h="auto" pad={16} thick={1.6} style={{ marginBottom: 14, minHeight: 200 }}>
      <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, letterSpacing: '0.08em', marginBottom: 8 }}>
        ENFORCEMENT · 0{n} / 03
      </div>
      <HandText size={17} as="div" style={{ marginBottom: 8, lineHeight: 1.2 }}>{title}</HandText>
      <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.55, marginBottom: 12 }}>
        {body}
      </div>
      {code}
    </SketchBox>
  );
}

function MInlineCode({ label, children }) {
  return (
    <div>
      {label && <div className="sk-mono" style={{ fontSize: 9, color: SK.muted, marginBottom: 4 }}>{label}</div>}
      <div className="sk-mono" style={{
        padding: '8px 10px', background: 'rgba(0,0,0,0.05)',
        border: '1.4px solid rgba(0,0,0,0.25)', borderRadius: 3,
        fontSize: 11, lineHeight: 1.5, color: SK.ink,
      }}>
        {children}
      </div>
    </div>
  );
}

function MHashChain() {
  const blocks = [
    { i: 'audit[n-2]', h: '4f7a…2c9b' },
    { i: 'audit[n-1]', h: '8d1e…71a4' },
    { i: 'audit[n]',   h: 'b6c3…0fde' },
  ];
  return (
    <div>
      {blocks.map((b, i) => (
        <div key={b.i} style={{
          display: 'flex', gap: 8, alignItems: 'baseline',
          padding: '6px 8px', marginBottom: 4,
          border: '1.4px solid rgba(0,0,0,0.3)',
          background: 'rgba(0,0,0,0.025)',
        }}>
          <span className="sk-mono" style={{ fontSize: 9, color: SK.muted, width: 56 }}>{b.i}</span>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.ink, fontWeight: 600 }}>{b.h}</span>
          {i < blocks.length - 1 && <span style={{ marginLeft: 'auto', color: SK.ink }}>↓</span>}
        </div>
      ))}
    </div>
  );
}

function MAudienceCard({ icon, title, body }) {
  return (
    <SketchBox h="auto" pad={14} thick={1.6} style={{ marginBottom: 12, minHeight: 130 }}>
      <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
      <HandText size={17} as="div" style={{ marginBottom: 6, lineHeight: 1.15 }}>{title}</HandText>
      <div className="sk" style={{ fontSize: 12, color: SK.ink2, lineHeight: 1.5 }}>{body}</div>
    </SketchBox>
  );
}

function MobileGovernance({ showAnnotations }) {
  const pillars = [
    { name: 'On Write', tagline: 'Rules that govern every write.', rules: [
      { n: '01', t: 'Never hard delete',         d: 'Always supersede with reason. History forever.' },
      { n: '03', t: 'Always require reason',     d: 'On every state change. Code, not convention.' },
      { n: '09', t: 'Provenance on every write', d: 'author · timestamp · session_id — always.' },
    ]},
    { name: 'On Conflict', tagline: 'Rules for disagreement.', rules: [
      { n: '02', t: 'Never silent resolution', d: 'Always notify, log, require human decision.' },
      { n: '04', t: 'No self-approval',        d: 'Conflict parties cannot resolve their own.' },
      { n: '07', t: 'Dissent preserved',       d: 'Overruled concerns stored permanently.' },
    ]},
    { name: 'On Agents', tagline: 'Rules that bound AI authority.', rules: [
      { n: '05', t: 'Human at genuine forks',     d: 'Agents act inside known knowledge.' },
      { n: '08', t: 'Draft knowledge never used', d: 'Claude never injects unreviewed context.' },
    ]},
    { name: 'On Governance', tagline: 'Rules about the rules.', rules: [
      { n: '06', t: 'Governance is architecture',          d: 'Invariants are code, not config.' },
      { n: '10', t: 'Changes require community',           d: 'No single person changes Layer 1 alone.' },
    ]},
  ];

  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%' }}>
      {showAnnotations && <BreakpointBadge active="SE" />}
      <MobileStrip>QUORUM / GOVERNANCE · CONSTITUTIONAL</MobileStrip>
      <MobileHeader />

      <MSection padY={32} noBorder>
        <MonoEyebrow style={{ marginBottom: 12, color: '#b34' }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#b34', marginRight: 6, verticalAlign: 'middle' }}/>
          non-negotiable
        </MonoEyebrow>
        <HandText size={MOB.heroSize} weight={700} as="div" style={{ lineHeight: 1.05, marginBottom: 14, textWrap: 'balance' }}>
          Governance is <span style={{ color: SK.accent }}>architecture</span>. Not configuration.
        </HandText>
        <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.55 }}>
          Most tools have governance settings you can turn off. Quorum's rules are enforced in code. <b style={{ color: SK.ink }}>No setting bypasses them.</b>
        </div>
      </MSection>

      {/* §01 — Pillars */}
      <MSection>
        <MonoEyebrow style={{ marginBottom: 4 }}><span style={{ color: SK.accent }}>SECTION 01</span> · constitutional rules</MonoEyebrow>
        <HandText size={MOB.h2Size} as="div" style={{ marginBottom: 6, lineHeight: 1.1 }}>
          Ten invariants. Four pillars. Zero exceptions.
        </HandText>
        <div className="sk" style={{ fontSize: 13, color: SK.ink2, marginBottom: 18, lineHeight: 1.5 }}>
          These four pillars hold across every version, every PR, every contributor.
        </div>
        {pillars.map((p) => <MPillar key={p.name} {...p} />)}
      </MSection>

      {/* §02 — Layered accountability */}
      <MSection tint>
        <MonoEyebrow style={{ marginBottom: 4 }}><span style={{ color: SK.accent }}>SECTION 02</span> · who audits the auditor?</MonoEyebrow>
        <HandText size={MOB.h2Size} as="div" style={{ marginBottom: 6, lineHeight: 1.1 }}>
          Layered accountability.
        </HandText>
        <div className="sk" style={{ fontSize: 13, color: SK.ink2, marginBottom: 18, lineHeight: 1.5 }}>
          Five layers. Each protects against the failure of the layer below it.
        </div>
        <MLayerStack />
        <div className="sk" style={{ fontSize: 12, color: SK.ink2, marginTop: 14, lineHeight: 1.5, fontStyle: 'italic' }}>
          No single layer is sufficient. All five work together.
        </div>
      </MSection>

      {/* §03 — Enforcement scenarios */}
      <MSection>
        <MonoEyebrow style={{ marginBottom: 4 }}><span style={{ color: SK.accent }}>SECTION 03</span> · in practice</MonoEyebrow>
        <HandText size={MOB.h2Size} as="div" style={{ marginBottom: 18, lineHeight: 1.1 }}>
          Not theoretical. Enforced.
        </HandText>
        <MScenarioCard n={1} title="No hard delete, ever"
          body={<>Even a <code style={{fontFamily:'monospace',color:SK.ink}}>principal_architect</code> cannot delete a node. <b style={{ color: SK.ink }}>No admin override.</b></>}
          code={<MInlineCode label="graph/client.js">{`delete(): throws unconditionally`}</MInlineCode>} />
        <MScenarioCard n={2} title="Claude's writes always DRAFT"
          body={<>Stored knowledge enters as DRAFT regardless of the prompt. Only a human promotes to ACTIVE.</>}
          code={<MInlineCode label="memory/store.js">{`if (author === 'claude') status = 'DRAFT';`}</MInlineCode>} />
        <MScenarioCard n={3} title="Audit chain is tamper-evident"
          body={<>Each entry carries a SHA-256 hash of the previous. <b style={{color:SK.ink}}>Gateway verifies on startup.</b></>}
          code={<MHashChain />} />
      </MSection>

      <MSection padY={20}>
        <PullQuote cite="quorum constitution · article I">
          Anything you can configure, you can also misconfigure. So we don't configure governance.
        </PullQuote>
      </MSection>

      {/* §04 — Open source governance */}
      <MSection>
        <SketchBox h="auto" pad={18} double thick={2} style={{ background: 'rgba(91,91,214,0.06)', minHeight: 320 }}>
          <MonoEyebrow style={{ marginBottom: 10, color: SK.accent }}>SECTION 04 · open source governance</MonoEyebrow>
          <HandText size={20} as="div" style={{ marginBottom: 10, lineHeight: 1.1 }}>
            The constitution is governed by the community.
          </HandText>
          <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.5, marginBottom: 14 }}>
            Rule changes require a <b style={{color:SK.ink}}>30-day public RFC</b>. A <b style={{color:SK.ink}}>supermajority</b> required. All changes audit-chained.
          </div>
          <SketchBox h="auto" pad={12} thick={1.4} style={{ background: 'rgba(255,255,255,0.5)', minHeight: 160 }}>
            <MonoEyebrow style={{ marginBottom: 8 }}>amendment lifecycle</MonoEyebrow>
            {[
              ['RFC',        'public draft · 30 days'],
              ['Discussion', 'maintainers + community'],
              ['Vote',       'supermajority · tenure-weighted'],
              ['Adoption',   'audit-chained · permanent'],
            ].map((row, i) => (
              <div key={row[0]} style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 8, padding: '4px 0', borderBottom: i < 3 ? '1px dashed rgba(0,0,0,0.16)' : 'none' }}>
                <span className="sk-mono" style={{ fontSize: 10, color: SK.accent, fontWeight: 700 }}>{row[0]}</span>
                <span className="sk-mono" style={{ fontSize: 10, color: SK.ink2 }}>{row[1]}</span>
              </div>
            ))}
          </SketchBox>
        </SketchBox>
      </MSection>

      {/* §05 — Audiences */}
      <MSection>
        <MonoEyebrow style={{ marginBottom: 14 }}><span style={{ color: SK.accent }}>SECTION 05</span> · for teams that can't afford to get this wrong</MonoEyebrow>
        <HandText size={20} as="div" style={{ marginBottom: 18, lineHeight: 1.1 }}>
          Three audiences. Same constitution.
        </HandText>
        <MAudienceCard icon="🏦" title="Compliance teams" body="Full audit trail, tamper-evident, no hard deletes — ever." />
        <MAudienceCard icon="🏗️" title="Platform engineers" body="Rules hold for every team. No escape hatches." />
        <MAudienceCard icon="👔" title="Engineering managers" body="The right people's calls are protected — overrides visible." />
      </MSection>

      <MSection padY={36}>
        <HandText size={24} as="div" style={{ marginBottom: 14, textWrap: 'balance', lineHeight: 1.1 }}>
          Read the constitution. Inspect the code. Decide for yourself.
        </HandText>
        <MCTAStack primary="Read the architecture →" secondary="View on GitHub →" />
        <MonoEyebrow style={{ marginTop: 18 }}>constitution · revision 12</MonoEyebrow>
      </MSection>

      <MobileFooter />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// COST & ROI
// ─────────────────────────────────────────────────────────

function MQuestionCard({ n, question, sub }) {
  return (
    <SketchBox h="auto" pad={16} thick={1.6} style={{ marginBottom: 12, minHeight: 160 }}>
      <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, letterSpacing: '0.08em', marginBottom: 10 }}>
        QUESTION · 0{n} / 04
      </div>
      <HandText size={17} as="div" style={{ marginBottom: 10, lineHeight: 1.2 }}>{question}</HandText>
      <div className="sk" style={{ fontSize: 12, color: SK.ink2, lineHeight: 1.55, fontStyle: 'italic' }}>{sub}</div>
    </SketchBox>
  );
}

// Mobile compounding chart — vertical milestone list with bar.
function MCompoundingChart() {
  const rows = [
    { t: 'Week 1',   w: 8,   note: '10 nodes — lots of hand-holding' },
    { t: 'Month 1',  w: 22,  note: '100 nodes — fewer obvious questions' },
    { t: 'Month 3',  w: 45,  note: '500 nodes — pre-loads context' },
    { t: 'Month 6',  w: 72,  note: '2000 nodes — semi-autonomous' },
    { t: 'Year 1',   w: 95,  note: '5000+ nodes — agents are teammates' },
  ];
  return (
    <div>
      <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, marginBottom: 10 }}>
        knowledge depth ↑ over time →
      </div>
      {rows.map((r, i) => (
        <div key={r.t} style={{ padding: '8px 0', borderBottom: i < rows.length - 1 ? '1px dashed rgba(0,0,0,0.14)' : 'none' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
            <span className="sk-mono" style={{ fontSize: 11, color: SK.ink, fontWeight: 700, width: 60 }}>{r.t}</span>
            <span className="sk-mono" style={{ fontSize: 10, color: SK.muted, flex: 1 }}>{r.note}</span>
          </div>
          <div style={{ height: 8, background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.18)', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, width: r.w + '%', background: SK.accent }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function MScenarioOutcome({ kind, title, body, follow }) {
  const isBad = kind === 'without';
  const color = isBad ? '#b34' : SK.accent;
  return (
    <SketchBox h="auto" pad={16} thick={1.6} style={{
      marginBottom: 14,
      background: isBad ? 'rgba(179,52,68,0.04)' : 'rgba(91,91,214,0.04)',
      minHeight: 240,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <span style={{ fontSize: 18, color }}>{isBad ? '⚠' : '✓'}</span>
        <span className="sk-mono" style={{
          fontSize: 9, padding: '2px 7px', borderRadius: 999, letterSpacing: '0.1em',
          textTransform: 'uppercase', color, border: `1.2px solid ${color}`,
          background: isBad ? 'rgba(179,52,68,0.08)' : 'rgba(91,91,214,0.08)', fontWeight: 700,
        }}>{isBad ? 'WITHOUT QUORUM' : 'WITH QUORUM'}</span>
      </div>
      <HandText size={17} as="div" style={{ marginBottom: 10, lineHeight: 1.2 }}>{title}</HandText>
      <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.55, marginBottom: 10 }}>{body}</div>
      <div className="sk" style={{ fontSize: 12, color: SK.ink2, lineHeight: 1.5 }}>{follow}</div>
    </SketchBox>
  );
}

function MHonestFact({ children, sub }) {
  return (
    <div style={{ padding: '16px 0', borderBottom: '1px dashed rgba(0,0,0,0.18)' }}>
      <HandText size={22} as="div" style={{ marginBottom: sub ? 4 : 0, lineHeight: 1.15, textWrap: 'balance' }}>
        {children}
      </HandText>
      {sub && <div className="sk" style={{ fontSize: 12, color: SK.ink2, lineHeight: 1.5 }}>{sub}</div>}
    </div>
  );
}

function MobileCost({ showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%' }}>
      {showAnnotations && <BreakpointBadge active="SE" />}
      <MobileStrip>QUORUM / COST &amp; ROI</MobileStrip>
      <MobileHeader />

      <MSection padY={32} noBorder>
        <MonoEyebrow style={{ marginBottom: 12 }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: SK.accent, marginRight: 6, verticalAlign: 'middle' }}/>
          for managers · cto · platform
        </MonoEyebrow>
        <HandText size={MOB.heroSize} weight={700} as="div" style={{ lineHeight: 1.04, marginBottom: 14, textWrap: 'balance' }}>
          What does it cost your team to lose <span style={{ color: SK.accent }}>knowledge</span>?
        </HandText>
        <div className="sk-scribble" style={{ fontSize: 15, color: SK.ink2, fontStyle: 'italic' }}>
          No made-up numbers. The right questions.
        </div>
      </MSection>

      {/* §01 — Questions */}
      <MSection>
        <MonoEyebrow style={{ marginBottom: 4 }}><span style={{ color: SK.accent }}>SECTION 01</span> · ask your team</MonoEyebrow>
        <HandText size={MOB.h2Size} as="div" style={{ marginBottom: 18, lineHeight: 1.1 }}>
          Four questions. Honest answers usually surprise people.
        </HandText>
        <MQuestionCard n={1} question="How often does your team re-litigate the same decisions?"
          sub="If the same argument happens more than once a quarter, the decision was never really stored." />
        <MQuestionCard n={2} question="How long does a new engineer take to understand WHY the codebase is built this way?"
          sub="That knowledge usually lives in people, not systems." />
        <MQuestionCard n={3} question="When a senior leaves, what leaves with them?"
          sub="Their reasoning. Their constraints. Their hard-won context." />
        <MQuestionCard n={4} question="Has an AI agent ever contradicted a decision your team already made?"
          sub="If you use Claude Code at scale, the answer is almost certainly yes." />
      </MSection>

      {/* §02 — Compounding */}
      <MSection tint>
        <MonoEyebrow style={{ marginBottom: 4 }}><span style={{ color: SK.accent }}>SECTION 02</span> · the compounding effect</MonoEyebrow>
        <HandText size={MOB.h2Size} as="div" style={{ marginBottom: 4, lineHeight: 1.1 }}>
          Knowledge compounds. So does its absence.
        </HandText>
        <div className="sk" style={{ fontSize: 11, color: SK.muted, fontStyle: 'italic', marginBottom: 16, lineHeight: 1.5 }}>
          Quorum's own projections — not external benchmarks.
        </div>
        <SketchBox h="auto" pad={16} double thick={2} style={{ minHeight: 360 }}>
          <MCompoundingChart />
        </SketchBox>
        <div className="sk" style={{ fontSize: 13, color: SK.ink2, marginTop: 14, lineHeight: 1.55 }}>
          Every task makes the next easier. The network effect that makes Quorum worth the upfront effort.
        </div>
      </MSection>

      {/* §03 — Scenario */}
      <MSection>
        <MonoEyebrow style={{ marginBottom: 4 }}><span style={{ color: SK.accent }}>SECTION 03</span> · business requirements protection</MonoEyebrow>
        <HandText size={MOB.h2Size} as="div" style={{ marginBottom: 4, lineHeight: 1.1 }}>
          The "dead code" that wasn't.
        </HandText>
        <div className="sk" style={{ fontSize: 11, color: SK.muted, fontStyle: 'italic', marginBottom: 18, lineHeight: 1.5 }}>
          Illustrative · same dev, same PR, two outcomes.
        </div>
        <MScenarioOutcome kind="without"
          title="Dev cleans up what looks like dead code."
          body={<>The requirement — guest checkout is mandatory because 40% abandon when forced to register — lives in <b style={{color:SK.ink}}>nobody's working memory</b>.</>}
          follow={<>Code review sees a tidy refactor. PR merges. By the time someone connects the dots, you're <b style={{color:'#b34'}}>weeks deep in lost conversion</b>.</>}
        />
        <MScenarioOutcome kind="with"
          title="Agent reads the Requirement first."
          body={<><code style={{fontFamily:'monospace',color:SK.ink}}>R-022</code> is a pinned Requirement. The conflict surfaces with rationale attached.</>}
          follow={<><b style={{color:SK.ink}}>The human decides — not the diff.</b> Override is routed to the requirement's owner. The change becomes auditable.</>}
        />
        <div style={{ padding: '12px 14px', borderLeft: `2px solid ${SK.ink}`, background: 'rgba(0,0,0,0.025)' }}>
          <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.55, fontStyle: 'italic' }}>
            No revenue figure attached. <b style={{ color: SK.ink, fontStyle: 'normal' }}>Your team knows what a checkout regression is worth.</b>
          </div>
        </div>
      </MSection>

      {/* §04 — Pricing */}
      <MSection>
        <MonoEyebrow style={{ marginBottom: 4 }}><span style={{ color: SK.accent }}>SECTION 04</span> · what quorum costs</MonoEyebrow>
        <HandText size={MOB.h2Size} as="div" style={{ marginBottom: 14, lineHeight: 1.1 }}>
          The actual cost.
        </HandText>
        <MHonestFact sub="Apache 2.0. Self-host forever. No paid tier hiding behind a feature flag.">
          Open source. Free to self-host.
        </MHonestFact>
        <MHonestFact sub="No SaaS account. No telemetry. No data sent to third parties.">
          No per-seat pricing.
        </MHonestFact>
        <MHonestFact sub="You run the gateway. You hold the keys. You sign your audit chain.">
          Your infrastructure, your data.
        </MHonestFact>
        <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.55, marginTop: 20 }}>
          MCP installs in one command. Gateway runs in Docker. <b style={{ color: SK.ink }}>There is no sales process.</b>
        </div>
        <div style={{ marginTop: 20 }}>
          <MCTAStack primary="Get Started →" secondary="View on GitHub" />
        </div>
      </MSection>

      {/* §05 — Still evaluating */}
      <MSection>
        <MonoEyebrow style={{ marginBottom: 4 }}><span style={{ color: SK.accent }}>SECTION 05</span> · still evaluating?</MonoEyebrow>
        <HandText size={MOB.h2Size} as="div" style={{ marginBottom: 18, lineHeight: 1.1 }}>
          Two paths.
        </HandText>
        <SketchBox h="auto" pad={16} thick={1.6} style={{ marginBottom: 12, minHeight: 130 }}>
          <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, marginBottom: 6 }}>DOCS</div>
          <HandText size={18} as="div" style={{ marginBottom: 6 }}>Read the architecture docs</HandText>
          <div className="sk" style={{ fontSize: 12, color: SK.ink2, lineHeight: 1.5, marginBottom: 10 }}>
            Every design decision documented in the open.
          </div>
          <div className="sk-mono" style={{ fontSize: 11, color: SK.accent, fontWeight: 600 }}>
            quorum.dev/docs →
          </div>
        </SketchBox>
        <SketchBox h="auto" pad={16} thick={1.6} style={{ minHeight: 130 }}>
          <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, marginBottom: 6 }}>SOURCE</div>
          <HandText size={18} as="div" style={{ marginBottom: 6 }}>Browse the GitHub repo</HandText>
          <div className="sk" style={{ fontSize: 12, color: SK.ink2, lineHeight: 1.5, marginBottom: 10 }}>
            All code public. All RFCs merged in the open.
          </div>
          <div className="sk-mono" style={{ fontSize: 11, color: SK.accent, fontWeight: 600 }}>
            github.com/as-quorum/quorum →
          </div>
        </SketchBox>
      </MSection>

      <MobileFooter />
    </div>
  );
}

window.MobileGovernance = MobileGovernance;
window.MobileCost = MobileCost;
