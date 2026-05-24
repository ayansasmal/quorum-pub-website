import { Section } from './Section'
import { PullQuote } from '@/components/ui/PullQuote'

export function QuoteBreather() {
  return (
    <Section padY="md">
      <PullQuote
        cite="common in user interviews"
        style={{ maxWidth: 720, margin: '0 auto' }}
      >
        A codebase isn't a body of code. It's a body of decisions, of which the code is the most recent expression.
      </PullQuote>
    </Section>
  )
}
