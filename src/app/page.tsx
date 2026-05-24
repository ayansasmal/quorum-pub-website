import { Hero } from '@/components/sections/Hero'
import { PainStrip } from '@/components/sections/PainStrip'
import { S01DataModel } from '@/components/sections/S01DataModel'
import { QuoteBreather } from '@/components/sections/QuoteBreather'
import { S02Editor } from '@/components/sections/S02Editor'
import { S03Trust } from '@/components/sections/S03Trust'
import { ClosingCTA } from '@/components/sections/ClosingCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainStrip />
      <S01DataModel />
      <QuoteBreather />
      <S02Editor />
      <S03Trust />
      <ClosingCTA />
    </>
  )
}
