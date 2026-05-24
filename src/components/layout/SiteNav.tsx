'use client'

import { useState } from 'react'
import { SiteHeader } from './SiteHeader'
import { MenuPanel } from './MenuPanel'

export function SiteNav({ stars }: { stars: string }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <SiteHeader
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(o => !o)}
        stars={stars}
      />
      <MenuPanel
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  )
}
