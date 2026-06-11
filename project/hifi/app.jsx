// HI-FI APP — root component + tweaks (palette + mode).

// Mini app instance — the full page once. We render this twice on the
// design canvas: once as the live responsive site, and once inside the
// iPhone SE frame for the menu proof.
function QuorumSite({ menuOpen, setMenuOpen, defaultExpanded, compact = false }) {
  return (
    <div className="qh-site" style={{ background: 'var(--bg)', color: 'var(--ink)', minHeight: '100%' }}>
      <EditorialStrip />
      <SiteHeader
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        compact={compact}
      />

      <MenuPanel
        open={menuOpen}
        defaultExpanded={defaultExpanded || 'why'}
        onClose={() => setMenuOpen(false)}
      />

      <main>
        <Hero />
        <PainStrip />
        <S01DataModel />
        <QuoteBreather />
        <S02Editor />
        <S03Trust />
        <ClosingCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

// Section-titled artboards inside the design canvas.
function App() {
  const [tweaks, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "palette": "library-slate",
    "mode": "light",
    "menuOpenAll": false,
    "deviceExpanded": "features"
  }/*EDITMODE-END*/);

  // Live menu state for the responsive showcase.
  const [liveMenuOpen, setLiveMenuOpen] = React.useState(false);

  // Re-inject theme whenever palette / mode changes.
  React.useEffect(() => {
    injectTheme(tweaks.palette, tweaks.mode);
  }, [tweaks.palette, tweaks.mode]);

  // Force a re-render of device frames when palette/mode flips so SVG
  // viewbox bits using currentColor catch up.
  const themeKey = `${tweaks.palette}/${tweaks.mode}`;

  return (
    <React.Fragment>
      <DesignCanvas style={{ background: 'var(--bg-alt)' }}>
        <DCSection
          id="palettes"
          title="Palettes · 4 directions × light/dark"
          subtitle="each pair shows swatches + a mini live preview using that theme"
        >
          <DCArtboard id="gallery" label="All palettes · light + dark" width={1280} height={3000}>
            <PaletteGallery />
          </DCArtboard>
        </DCSection>

        <DCSection
          id="responsive"
          title="Quorum · landing page"
          subtitle="responsive · mobile-first · resize the artboard or open it fullscreen to test breakpoints"
        >
          <DCArtboard id="mbp" label="MacBook 15&quot;" width={1440} height={2600}>
            <div key={themeKey + '-mbp'}>
              <QuorumSite
                menuOpen={liveMenuOpen}
                setMenuOpen={setLiveMenuOpen}
              />
            </div>
          </DCArtboard>
          <DCArtboard id="ipad-land" label="iPad Air 11&quot; · landscape" width={1180} height={2700}>
            <div key={themeKey + '-ipadl'}>
              <QuorumSite
                menuOpen={liveMenuOpen}
                setMenuOpen={setLiveMenuOpen}
              />
            </div>
          </DCArtboard>
          <DCArtboard id="ipad" label="iPad Air 11&quot; · portrait" width={820} height={3200}>
            <div key={themeKey + '-ipad'}>
              <QuorumSite
                menuOpen={liveMenuOpen}
                setMenuOpen={setLiveMenuOpen}
              />
            </div>
          </DCArtboard>
          <DCArtboard id="mobile" label="iPhone SE (375 portrait)" width={375} height={3600}>
            <div key={themeKey + '-se'}>
              <QuorumSite
                menuOpen={liveMenuOpen}
                setMenuOpen={setLiveMenuOpen}
                compact
              />
            </div>
          </DCArtboard>
        </DCSection>

        <DCSection
          id="device"
          title="Menu · on iPhone SE 3rd gen"
          subtitle="exact 375×667 viewport · worst case (Features · 8 sub-items) fits without scroll"
        >
          <DCArtboard id="dev-why"      label="Why Quorum expanded" width={460} height={820}>
            <div key={themeKey + '-dev-why'} style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
              <IPhoneSE label="state · default" caption="375 × 667 · iPhone SE 3rd gen">
                <DeviceMenu defaultExpanded="why" />
              </IPhoneSE>
            </div>
          </DCArtboard>
          <DCArtboard id="dev-features" label="Features expanded (worst case)" width={460} height={820}>
            <div key={themeKey + '-dev-features'} style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
              <IPhoneSE label="state · features (8 subs)" caption="densest sub-list — still fits">
                <DeviceMenu defaultExpanded="features" />
              </IPhoneSE>
            </div>
          </DCArtboard>
          <DCArtboard id="dev-gov" label="Governance expanded" width={460} height={820}>
            <div key={themeKey + '-dev-gov'} style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
              <IPhoneSE label="state · governance" caption="auto-collapses Why on switch">
                <DeviceMenu defaultExpanded="governance" />
              </IPhoneSE>
            </div>
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakSelect
          label="Theme"
          value={tweaks.palette}
          options={PALETTE_KEYS.map(k => ({ value: k, label: PALETTES[k].label }))}
          onChange={(v) => setTweak('palette', v)}
        />
        <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.55)', marginTop: -4, lineHeight: 1.4, fontStyle: 'italic' }}>
          {PALETTES[tweaks.palette]?.sub}
        </div>
        <TweakRadio
          label="Mode"
          value={tweaks.mode}
          options={[
            { label: 'Light', value: 'light' },
            { label: 'Dark',  value: 'dark'  },
          ]}
          onChange={(v) => setTweak('mode', v)}
        />
        <TweakSection label="Menu proof" />
        <TweakSelect
          label="On-device state"
          value={tweaks.deviceExpanded}
          options={[
            { value: 'why',        label: 'Why Quorum' },
            { value: 'features',   label: 'Features (worst case)' },
            { value: 'governance', label: 'Governance' },
            { value: 'cost',       label: 'Cost & ROI' },
            { value: 'start',      label: 'Get Started' },
          ]}
          onChange={(v) => setTweak('deviceExpanded', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

// DeviceMenu — renders the full site chrome with menu pre-open inside the SE.
function DeviceMenu({ defaultExpanded = 'why' }) {
  return (
    <div className="qh-site" style={{
      background: 'var(--bg)', color: 'var(--ink)',
      flex: 1, display: 'flex', flexDirection: 'column',
      position: 'relative',
    }}>
      <div style={{
        padding: '6px 14px',
        borderBottom: '1px solid var(--border)',
        fontFamily: 'var(--font-mono)', fontSize: 10,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'var(--muted)',
        display: 'flex', justifyContent: 'space-between',
      }}>
        <span>Quorum · v0.4</span>
        <span>open source</span>
      </div>
      <SiteHeader menuOpen={true} onMenuToggle={() => {}} compact />
      <MenuPanel open={true} defaultExpanded={defaultExpanded} onClose={() => {}} headerHeight={80} />
      {/* faint page peek (hero teaser) for context. The menu/scrim covers it. */}
      <div style={{
        flex: 1, padding: '24px 18px 16px', overflow: 'hidden',
      }}>
        <div className="qh-mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
          open source · claude code · MCP
        </div>
        <div style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.08, letterSpacing: '-0.022em', color: 'var(--ink)' }}>
          Your AI agents should remember what your team decided.
        </div>
      </div>
    </div>
  );
}

// Initial theme inject before mount so first paint matches.
injectTheme('library-slate', 'light');

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
