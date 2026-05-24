'use client'

import { useState } from 'react'
import { SiteHeader } from './SiteHeader'
import { MenuPanel } from './MenuPanel'

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <SiteHeader
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(o => !o)}
      />
      <MenuPanel
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  )
}
