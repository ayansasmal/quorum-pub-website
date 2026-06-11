// MOBILE APP — Design Canvas wrapper for mobile-first wireframes.

const M_PAGE_W = 375; // iPhone SE 3rd gen portrait width

const M_HEADLINES = {
  'A — original': 'Your AI agents should remember what your team decided.',
  'B — punchier': "Stop letting AI forget what your team already decided.",
  'C — outcome':  'Governance, audit trails, and memory for AI-assisted engineering.',
};

function MobileApp() {
  const [t, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "showAnnotations": true,
    "headlineKey": "A \u2014 original",
    "paperTint": "warm"
  }/*EDITMODE-END*/);

  const headline = M_HEADLINES[t.headlineKey] || M_HEADLINES['A — original'];

  const paperBg =
    t.paperTint === 'cool'  ? '#eaedee' :
    t.paperTint === 'plain' ? '#f3f3f0' :
    /* warm */ '#f0eee9';

  // Heights tuned to mobile content — generous so nothing clips.
  return (
    <React.Fragment>
      <DesignCanvas style={{ background: paperBg }}>
        <DCSection id="mobile-landing" title="Quorum · mobile-first wireframes"
          subtitle="iPhone SE 3rd gen (375 portrait) baseline · iPad Air 11&quot; (820) · MacBook 15&quot; (1440)">

          <DCArtboard id="m-v6" label="V6 · Landing (mobile)" width={M_PAGE_W} height={3500}>
            <MobileV6 headline={headline} showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="m-why" label="Why Quorum (mobile)" width={M_PAGE_W} height={3700}>
            <MobileWhy showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="m-features" label="Features (mobile)" width={M_PAGE_W} height={3700}>
            <MobileFeatures showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="m-gov" label="Governance (mobile)" width={M_PAGE_W} height={4600}>
            <MobileGovernance showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="m-cost" label="Cost & ROI (mobile)" width={M_PAGE_W} height={3700}>
            <MobileCost showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="m-start" label="Get Started (mobile)" width={M_PAGE_W} height={4100}>
            <MobileGetStarted showAnnotations={t.showAnnotations} />
          </DCArtboard>

        </DCSection>

        <DCSection id="menu" title="Menu · final"
          subtitle="slide-down panel · accordion · one item open at a time · auto-collapses on switch">
          <DCArtboard id="menu-why" label="Why Quorum expanded" width={M_PAGE_W} height={1100}>
            <MobileNavFinal expandedKey="01" showAnnotations={t.showAnnotations}
              captionAnnot="L1 labels only · chevron ▾ collapsed / ▴ expanded" />
          </DCArtboard>
          <DCArtboard id="menu-features" label="After tap: Features (Why auto-collapsed)" width={M_PAGE_W} height={1100}>
            <MobileNavFinal expandedKey="02" showAnnotations={t.showAnnotations}
              captionAnnot="tap Features → Why collapses · only one open at a time" />
          </DCArtboard>
          <DCArtboard id="menu-gov" label="After tap: Governance" width={M_PAGE_W} height={1000}>
            <MobileNavFinal expandedKey="03" showAnnotations={t.showAnnotations} />
          </DCArtboard>
        </DCSection>

        <DCSection id="menu-device" title="Menu · on iPhone SE 3rd gen"
          subtitle="actual 375×667 viewport · tightest case (Features · 8 sub-items) fits without scroll">
          <DCArtboard id="dev-why"      label="Why Quorum expanded · 5 subs" width={460} height={820}>
            <IPhoneSEFrame label="state · default">
              <MobileNavFinal expandedKey="01" showAnnotations={false} deviceMode />
            </IPhoneSEFrame>
          </DCArtboard>
          <DCArtboard id="dev-features" label="Features expanded · 8 subs (densest)" width={460} height={820}>
            <IPhoneSEFrame label="state · features (worst case)">
              <MobileNavFinal expandedKey="02" showAnnotations={false} deviceMode />
            </IPhoneSEFrame>
          </DCArtboard>
          <DCArtboard id="dev-gov"      label="Governance expanded · 5 subs" width={460} height={820}>
            <IPhoneSEFrame label="state · governance">
              <MobileNavFinal expandedKey="03" showAnnotations={false} deviceMode />
            </IPhoneSEFrame>
          </DCArtboard>
        </DCSection>

        <DCSection id="bp-notes" title="Breakpoint plan"
          subtitle="how each mobile layout scales up · single source of truth">
          <DCArtboard id="bp-overview" label="Breakpoint progression · SE → iPad → MacBook" width={780} height={600}>
            <BreakpointPlan />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="View" />
        <TweakToggle label="Show annotations" value={t.showAnnotations}
          onChange={(v) => setTweak('showAnnotations', v)} />
        <TweakRadio label="Paper" value={t.paperTint}
          options={[
            { label: 'Warm',  value: 'warm' },
            { label: 'Plain', value: 'plain' },
            { label: 'Cool',  value: 'cool' },
          ]}
          onChange={(v) => setTweak('paperTint', v)} />
        <TweakSection label="Headline copy" />
        <TweakSelect label="Variant" value={t.headlineKey}
          options={Object.keys(M_HEADLINES)}
          onChange={(v) => setTweak('headlineKey', v)} />
        <div style={{ fontSize: 11, color: 'rgba(41,38,27,.6)', marginTop: -4, lineHeight: 1.4, fontStyle: 'italic' }}>
          “{headline}”
        </div>
      </TweaksPanel>
    </React.Fragment>
  );
}

// ─── Breakpoint plan artboard — one canvas that shows how each section
//     reflows from 375 → 820 → 1440 ─────────────────────────────────
function BreakpointPlan() {
  const bps = [
    { name: 'iPhone SE',     w: 375,  cols: 1, type: 34, pad: 20, nav: 'hamburger' },
    { name: 'iPad Air 11"',  w: 820,  cols: 2, type: 44, pad: 36, nav: 'condensed' },
    { name: 'MacBook 15"',   w: 1440, cols: 3, type: 56, pad: 56, nav: 'full' },
  ];
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%', padding: 32 }}>
      <MonoEyebrow style={{ marginBottom: 12 }}>breakpoint progression</MonoEyebrow>
      <HandText size={32} as="div" style={{ marginBottom: 6, lineHeight: 1.1 }}>
        Mobile-first. Three breakpoints. One vocabulary.
      </HandText>
      <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.5, marginBottom: 24, maxWidth: 620 }}>
        Layouts scale up cleanly: hero stacks become split, single-col card lists become 2- and 3-col grids, hamburger expands into the full editorial nav. Indigo callouts, mono eyebrows, pull-quotes, and the audit-chain visual stay identical across all three.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        {bps.map((b, i) => (
          <SketchBox key={b.name} h="auto" pad={16} thick={1.8} double={i === 0} style={{ minHeight: 320, background: i === 0 ? 'rgba(91,91,214,0.05)' : 'transparent' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
              <MonoEyebrow style={{ color: i === 0 ? SK.accent : SK.pencil }}>BP-0{i + 1}</MonoEyebrow>
              {i === 0 && (
                <span className="sk-mono" style={{ fontSize: 9, padding: '1px 6px', borderRadius: 999, border: `1px solid ${SK.accent}`, color: SK.accent, letterSpacing: '0.06em', fontWeight: 700 }}>BASE</span>
              )}
            </div>
            <HandText size={20} as="div" style={{ marginBottom: 4, lineHeight: 1.1 }}>{b.name}</HandText>
            <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, marginBottom: 14 }}>{b.w}px wide · portrait</div>
            <div className="sk-mono" style={{ fontSize: 11, lineHeight: 1.85, color: SK.ink2 }}>
              <div><span style={{ color: SK.muted }}>nav:</span> {b.nav}</div>
              <div><span style={{ color: SK.muted }}>cols:</span> {b.cols}</div>
              <div><span style={{ color: SK.muted }}>type max:</span> {b.type}px</div>
              <div><span style={{ color: SK.muted }}>gutter:</span> {b.pad}px</div>
            </div>
            <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px dashed rgba(0,0,0,0.2)' }}>
              <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, marginBottom: 6, letterSpacing: '0.06em' }}>HERO LAYOUT</div>
              <svg width="100%" height="60" viewBox={`0 0 100 60`} preserveAspectRatio="none">
                <g filter="url(#sk-wobble)">
                  {/* always: top text block */}
                  <rect x="6" y="6"  width={i === 0 ? 88 : 50} height="20" fill="rgba(91,91,214,0.18)" stroke={SK.ink} strokeWidth="1.2" />
                  {/* hero visual: stacked on SE, side-by-side on iPad+ */}
                  {i === 0 ? (
                    <rect x="6" y="30" width="88" height="22" fill="none" stroke={SK.ink} strokeWidth="1.2" strokeDasharray="3 3" />
                  ) : (
                    <rect x={i === 1 ? 60 : 60} y="6" width={i === 1 ? 34 : 34} height="46" fill="none" stroke={SK.ink} strokeWidth="1.2" strokeDasharray="3 3" />
                  )}
                </g>
              </svg>
            </div>
          </SketchBox>
        ))}
      </div>
      <div style={{ marginTop: 24 }}>
        <IndigoCallout label="Reflow rules →">
          <div style={{ fontSize: 13, lineHeight: 1.55 }}>
            • <b>Hero</b>: stacked on SE → split 1:1 on iPad → split 1:1 with larger graph on MBP.<br/>
            • <b>Feature/problem cards</b>: 1-col SE → 2-col iPad → 2-col with wider gutter on MBP.<br/>
            • <b>Stepper</b>: 1-col vertical on SE → vertical with narrower text column on iPad → horizontal 4-up option on MBP.<br/>
            • <b>Pillars / audience cards</b>: 1-col SE → 2-col iPad → 3-col MBP (or 4 for audiences).<br/>
            • <b>Layer accountability</b>: vertical stack (SE) → concentric rings (iPad &amp; MBP).
          </div>
        </IndigoCallout>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MobileApp />);
