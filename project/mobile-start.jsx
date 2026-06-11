// MOBILE · Get Started page.

function MCodeBlock({ lang = 'bash', children, caption }) {
  return (
    <div>
      <SketchBox h="auto" pad={0} thick={1.6} style={{ minHeight: 90, background: 'rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '6px 12px', borderBottom: '1.2px dashed rgba(0,0,0,0.18)' }}>
          <div style={{ display: 'flex', gap: 5 }}>
            {[0,1,2].map(i => <span key={i} style={{ width: 8, height: 8, border: '1.2px solid #222', borderRadius: '50%' }} />)}
          </div>
          <span className="sk-mono" style={{ marginLeft: 10, fontSize: 10, color: SK.pencil, letterSpacing: '0.04em' }}>{lang}</span>
        </div>
        <pre className="sk-mono" style={{ margin: 0, padding: '10px 12px', fontSize: 11, lineHeight: 1.65, color: SK.ink, whiteSpace: 'pre', overflowX: 'auto' }}>
{children}
        </pre>
      </SketchBox>
      {caption && (
        <div className="sk" style={{ fontSize: 12, color: SK.ink2, marginTop: 6, lineHeight: 1.5, fontStyle: 'italic' }}>
          {caption}
        </div>
      )}
    </div>
  );
}

function MStep({ n, title, children, last = false }) {
  return (
    <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '40px 1fr', gap: 14, paddingBottom: last ? 0 : 28 }}>
      {!last && (
        <div style={{ position: 'absolute', left: 17, top: 42, bottom: 0, width: 0, borderLeft: `2px dashed ${SK.accent}`, opacity: 0.45 }} />
      )}
      <div style={{ position: 'relative', width: 36, height: 36 }}>
        <svg width="36" height="36" viewBox="0 0 36 36" style={{ position: 'absolute', inset: 0 }}>
          <g filter="url(#sk-wobble)">
            <circle cx="18" cy="18" r="15" fill={SK.accent} stroke={SK.ink} strokeWidth="1.6" />
          </g>
          <text x="18" y="22" textAnchor="middle" className="sk-h" style={{ fontSize: 14, fontWeight: 700, fill: '#fff' }}>{n}</text>
        </svg>
      </div>
      <div style={{ paddingTop: 2 }}>
        <HandText size={18} as="div" style={{ marginBottom: 10, lineHeight: 1.15 }}>{title}</HandText>
        {children}
      </div>
    </div>
  );
}

// Mobile chat snippet for "first node" section.
function MChatSnippet() {
  return (
    <SketchBox h="auto" pad={14} thick={1.6} style={{ background: 'rgba(0,0,0,0.025)', minHeight: 280 }}>
      <MonoEyebrow style={{ marginBottom: 10 }}>claude code · live session</MonoEyebrow>
      <div style={{ marginBottom: 12 }}>
        <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, marginBottom: 4 }}>@you · just now</div>
        <SketchBox h="auto" pad={8} thick={1.2} style={{ background: 'rgba(255,255,255,0.6)', minHeight: 50 }}>
          <div className="sk" style={{ fontSize: 12, color: SK.ink, lineHeight: 1.5 }}>
            "let's use FalkorDB for the knowledge graph — Redis-native, low overhead."
          </div>
        </SketchBox>
      </div>
      <div>
        <div className="sk-mono" style={{ fontSize: 10, color: SK.accent, marginBottom: 4 }}>● claude code</div>
        <SketchBox h="auto" pad={8} thick={1.2} style={{ background: 'rgba(91,91,214,0.1)', borderColor: SK.accent, minHeight: 130 }}>
          <div className="sk" style={{ fontSize: 12, color: SK.ink, lineHeight: 1.5, marginBottom: 6 }}>
            Captured — recording as a Quorum decision.
          </div>
          <div className="sk-mono" style={{ fontSize: 10, color: SK.ink2, lineHeight: 1.6, background: 'rgba(0,0,0,0.05)', padding: '6px 8px', borderRadius: 3 }}>
            ↳ remember(<br/>
            &nbsp;&nbsp;topic: <span style={{ color: SK.accent }}>"infrastructure"</span>,<br/>
            &nbsp;&nbsp;key: <span style={{ color: SK.accent }}>"graph-backend"</span><br/>
            )
          </div>
          <div className="sk-mono" style={{ fontSize: 10, color: '#0a6', marginTop: 6 }}>
            ✓ D-001 stored · audit signed
          </div>
        </SketchBox>
      </div>
    </SketchBox>
  );
}

// Mobile node viz — single prominent card.
function MNodeViz() {
  return (
    <SketchBox h="auto" pad={14} thick={1.6} style={{ background: 'rgba(255,255,255,0.5)', minHeight: 220 }}>
      <MonoEyebrow style={{ marginBottom: 10 }}>quorum dashboard</MonoEyebrow>
      <SketchBox h="auto" pad={12} thick={2} style={{ background: 'rgba(91,91,214,0.08)', minHeight: 140 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span className="sk-mono" style={{ fontSize: 10, color: SK.muted }}>D-001</span>
          <span className="sk-mono" style={{ fontSize: 9, padding: '1px 6px', borderRadius: 999, background: 'rgba(0,150,80,0.08)', color: '#0a6', border: '1px solid #0a6', letterSpacing: '0.06em', fontWeight: 700 }}>ACTIVE</span>
        </div>
        <HandText size={15} as="div" style={{ marginBottom: 8, lineHeight: 1.15 }}>
          Use FalkorDB for the knowledge graph
        </HandText>
        <div className="sk-mono" style={{ fontSize: 10, color: SK.ink2, lineHeight: 1.6 }}>
          <div><span style={{ color: SK.muted }}>topic:</span> infrastructure</div>
          <div><span style={{ color: SK.muted }}>author:</span> <span style={{ color: SK.accent }}>@you</span> · 12s ago</div>
          <div><span style={{ color: SK.muted }}>confidence:</span> 0.90</div>
        </div>
      </SketchBox>
      <div className="sk-scribble" style={{ fontSize: 10, color: SK.muted, marginTop: 8, textAlign: 'right' }}>
        ↳ first node · audit chain begins
      </div>
    </SketchBox>
  );
}

function MNextStepCard({ icon, badge, title, body, link }) {
  return (
    <SketchBox h="auto" pad={16} thick={1.6} style={{ marginBottom: 12, minHeight: 160 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
        {icon}
        {badge && (
          <span className="sk-mono" style={{ fontSize: 9, padding: '2px 7px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase', color: SK.accent, border: `1px solid ${SK.accent}`, background: 'rgba(91,91,214,0.08)', fontWeight: 700 }}>{badge}</span>
        )}
      </div>
      <HandText size={17} as="div" style={{ marginBottom: 6, lineHeight: 1.15 }}>{title}</HandText>
      <div className="sk" style={{ fontSize: 12, color: SK.ink2, lineHeight: 1.5, marginBottom: 8 }}>{body}</div>
      <div className="sk-mono" style={{ fontSize: 11, color: SK.accent, fontWeight: 600 }}>
        {link} →
      </div>
    </SketchBox>
  );
}

function MobileGetStarted({ showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%' }}>
      {showAnnotations && <BreakpointBadge active="SE" />}
      <MobileStrip>QUORUM / GET STARTED</MobileStrip>
      <MobileHeader />

      <MSection padY={32} noBorder>
        <MonoEyebrow style={{ marginBottom: 12 }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: SK.accent, marginRight: 6, verticalAlign: 'middle' }}/>
          open source · self-hosted · zero config
        </MonoEyebrow>
        <HandText size={MOB.heroSize} weight={700} as="div" style={{ lineHeight: 1.04, marginBottom: 12, textWrap: 'balance' }}>
          Up and running in under <span style={{ color: SK.accent }}>10 minutes</span>.
        </HandText>
        <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.55 }}>
          One Docker command. One npm install. Your AI agents start building memory immediately.
        </div>
      </MSection>

      {/* §1 — Prerequisites */}
      <MSection>
        <MonoEyebrow style={{ marginBottom: 4 }}><span style={{ color: SK.accent }}>SECTION 01</span> · prerequisites</MonoEyebrow>
        <HandText size={20} as="div" style={{ marginBottom: 16, lineHeight: 1.1 }}>
          Everything you probably already have.
        </HandText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[
            { ic: '🐳', label: 'Docker' },
            { ic: '⬢',  label: 'Node 18+' },
            { ic: '✦',  label: 'Claude Code (MCP)' },
            { ic: '⎇',  label: 'GitHub account' },
          ].map((p) => (
            <SketchBox key={p.label} h={40} pad={0} thick={1.4} style={{ width: 'auto', display: 'inline-block' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 12px', height: '100%' }}>
                <span style={{ fontSize: 14 }}>{p.ic}</span>
                <span className="sk-h" style={{ fontSize: 13, color: SK.ink, lineHeight: 1 }}>{p.label}</span>
              </div>
            </SketchBox>
          ))}
        </div>
      </MSection>

      {/* §2 — Stepper */}
      <MSection tint>
        <MonoEyebrow style={{ marginBottom: 4 }}><span style={{ color: SK.accent }}>SECTION 02</span> · setup · ~8 min</MonoEyebrow>
        <HandText size={MOB.h2Size} as="div" style={{ marginBottom: 24, lineHeight: 1.1 }}>
          Four steps. Zero config files to hand-author.
        </HandText>
        <MStep n="1" title="Clone and start with Docker">
          <MCodeBlock lang="terminal" caption="Starts FalkorDB, Postgres, Redis, the Gateway, and Dashboard.">
{`$ git clone github.com/as-quorum/quorum
$ cd quorum
$ ./scripts/setup.sh docker`}
          </MCodeBlock>
        </MStep>
        <MStep n="2" title="Define your team">
          <MCodeBlock lang="my-team.quorum.json" caption="Save and upload.">
{`{
  "group_id": "my-team",
  "owner": "your-handle",
  "members": [
    { "role": "principal_architect" },
    { "role": "senior_engineer" }
  ]
}`}
          </MCodeBlock>
        </MStep>
        <MStep n="3" title="Install the MCP server">
          <MCodeBlock lang="terminal" caption="Registers the Quorum MCP server + Claude Code skill.">
{`$ npx @as-quorum/mcp install`}
          </MCodeBlock>
        </MStep>
        <MStep n="4" title="Ask Claude a question" last>
          <SketchBox h="auto" pad={0} thick={1.6} style={{ minHeight: 140, background: 'rgba(0,0,0,0.04)' }}>
            <div style={{ padding: '6px 12px', borderBottom: '1.2px dashed rgba(0,0,0,0.18)' }}>
              <span className="sk-mono" style={{ fontSize: 10, color: SK.pencil }}>claude code</span>
            </div>
            <div style={{ padding: '10px 12px' }}>
              <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, marginBottom: 2 }}>You:</div>
              <div className="sk" style={{ fontSize: 13, color: SK.ink, marginBottom: 10 }}>
                "What pending Quorum decisions are there?"
              </div>
              <div className="sk-mono" style={{ fontSize: 10, color: SK.accent, marginBottom: 2 }}>● Claude:</div>
              <SketchBox h="auto" pad={8} thick={1.2} style={{ background: 'rgba(91,91,214,0.1)', borderColor: SK.accent, minHeight: 30 }}>
                <div className="sk" style={{ fontSize: 12, color: SK.ink }}>
                  "No pending items — ready to start."
                </div>
              </SketchBox>
            </div>
          </SketchBox>
          <div className="sk" style={{ fontSize: 12, color: SK.ink2, marginTop: 8, lineHeight: 1.5, fontStyle: 'italic' }}>
            If Claude responds with this, Quorum is fully wired.
          </div>
        </MStep>
      </MSection>

      {/* §3 — First node */}
      <MSection>
        <MonoEyebrow style={{ marginBottom: 4 }}><span style={{ color: SK.accent }}>SECTION 03</span> · your first knowledge node</MonoEyebrow>
        <HandText size={MOB.h2Size} as="div" style={{ marginBottom: 18, lineHeight: 1.1 }}>
          Store your first decision.
        </HandText>
        <SketchBox h="auto" pad={14} double thick={2} style={{ background: 'rgba(91,91,214,0.04)', minHeight: 600 }}>
          <MonoEyebrow style={{ marginBottom: 10, color: SK.accent }}>↓ in Claude Code</MonoEyebrow>
          <MChatSnippet />
          <div style={{ height: 14 }} />
          <MonoEyebrow style={{ marginBottom: 10, color: SK.accent }}>↓ in the dashboard</MonoEyebrow>
          <MNodeViz />
        </SketchBox>
        <div className="sk" style={{ fontSize: 13, color: SK.ink2, marginTop: 14, lineHeight: 1.5, fontStyle: 'italic' }}>
          Every decision Claude helps make is a candidate. Skill handles <code style={{ fontFamily: 'monospace', color: SK.ink }}>reflect()</code> at session end — no extra commands.
        </div>
      </MSection>

      {/* §4 — Next steps */}
      <MSection>
        <MonoEyebrow style={{ marginBottom: 4 }}><span style={{ color: SK.accent }}>SECTION 04</span> · what to do next</MonoEyebrow>
        <HandText size={MOB.h2Size} as="div" style={{ marginBottom: 18, lineHeight: 1.1 }}>
          You've got memory. Now what?
        </HandText>
        <MNextStepCard icon={<SketchIcon name="brain" size={28} />} title="Onboard your team"
          body="Add roles, authority weights, import your Markdown / ADR backlog."
          link="Onboarding docs" />
        <MNextStepCard icon={<SketchIcon name="layers" size={28} />} title="Explore the dashboard"
          body="Walk through graph viewer, audit chain, conflict queue."
          link="Dashboard walkthrough" />
        <MNextStepCard icon={<SketchIcon name="briefcase" size={28} />} title="Add business requirements"
          body="Promote PM rules, compliance, feature rationale to Requirement entities."
          link="Features → Requirements" badge="NEW" />
      </MSection>

      <MSection padY={20}>
        <PullQuote cite="early adopter · staff eng">
          The whole setup took about six minutes. The first time Claude cited a prior decision back to me, I laughed out loud.
        </PullQuote>
      </MSection>

      {/* §5 — Help */}
      <MSection>
        <MonoEyebrow style={{ marginBottom: 4 }}><span style={{ color: SK.accent }}>SECTION 05</span> · need help?</MonoEyebrow>
        <HandText size={MOB.h2Size} as="div" style={{ marginBottom: 18, lineHeight: 1.1 }}>
          Honest, for now.
        </HandText>
        <SketchBox h="auto" pad={14} thick={1.6} style={{ marginBottom: 12, minHeight: 120 }}>
          <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, marginBottom: 6 }}>GITHUB · DISCUSSIONS</div>
          <HandText size={17} as="div" style={{ marginBottom: 6 }}>Ask questions, share use cases</HandText>
          <div className="sk" style={{ fontSize: 12, color: SK.ink2, lineHeight: 1.5, marginBottom: 8 }}>
            "How would I model X?" — public, searchable.
          </div>
          <div className="sk-mono" style={{ fontSize: 11, color: SK.accent, fontWeight: 600 }}>
            github.com/as-quorum/quorum/discussions →
          </div>
        </SketchBox>
        <SketchBox h="auto" pad={14} thick={1.6} style={{ minHeight: 120 }}>
          <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, marginBottom: 6 }}>GITHUB · ISSUES</div>
          <HandText size={17} as="div" style={{ marginBottom: 6 }}>Report bugs · request features</HandText>
          <div className="sk" style={{ fontSize: 12, color: SK.ink2, lineHeight: 1.5, marginBottom: 8 }}>
            Triaged weekly. Labelled by component.
          </div>
          <div className="sk-mono" style={{ fontSize: 11, color: SK.accent, fontWeight: 600 }}>
            github.com/as-quorum/quorum/issues →
          </div>
        </SketchBox>
      </MSection>

      {/* Bottom CTA */}
      <MSection padY={36}>
        <SketchBox h="auto" pad={20} double thick={2} style={{ background: 'rgba(91,91,214,0.05)', minHeight: 200 }}>
          <HandText size={24} as="div" style={{ marginBottom: 8, lineHeight: 1.1 }}>
            Start capturing your team's knowledge today.
          </HandText>
          <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.5, marginBottom: 16 }}>
            Star the repo, run setup, your agents stop forgetting. ~10 min, ~zero risk.
          </div>
          <MCTAStack primary="View on GitHub →" secondary="Read the Docs" />
        </SketchBox>
      </MSection>

      <MobileFooter />
    </div>
  );
}

window.MobileGetStarted = MobileGetStarted;
