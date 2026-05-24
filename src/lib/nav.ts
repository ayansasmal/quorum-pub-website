export interface NavSub {
  label: string
  href: string
  badge?: string
}

export interface NavItem {
  id: string
  label: string
  href: string
  subs: NavSub[]
}

export const NAV_TREE: NavItem[] = [
  {
    id: 'why',
    label: 'Why Quorum',
    href: '/why-quorum',
    subs: [
      { label: 'Institutional memory',         href: '/why-quorum#institutional-memory' },
      { label: 'AI contradiction',             href: '/why-quorum#ai-contradiction' },
      { label: 'Onboarding cost',              href: '/why-quorum#onboarding-cost' },
      { label: 'Decision drift',               href: '/why-quorum#decision-drift' },
      { label: 'Buried business requirement',  href: '/why-quorum#buried-requirements' },
    ],
  },
  {
    id: 'features',
    label: 'Features',
    href: '/features',
    subs: [
      { label: 'Governed Memory',        href: '/features#governed-memory' },
      { label: 'Conflict Detection',     href: '/features#conflict-detection' },
      { label: 'Authority Weighting',    href: '/features#authority-weighting' },
      { label: 'Business Requirements',  href: '/features#business-requirements', badge: 'NEW' },
      { label: 'Audit Chain',            href: '/features#audit-chain' },
      { label: 'Pending Decisions',      href: '/features#pending-decisions' },
      { label: 'Knowledge States',       href: '/features#knowledge-states' },
      { label: 'Multi-Project Isolation',href: '/features#multi-project-isolation' },
    ],
  },
  {
    id: 'governance',
    label: 'Governance',
    href: '/governance',
    subs: [
      { label: 'Constitutional rules',    href: '/governance#constitutional-rules' },
      { label: 'Who audits the auditor?', href: '/governance#accountability' },
      { label: 'In practice',             href: '/governance#in-practice' },
      { label: 'Open source governance',  href: '/governance#open-source' },
      { label: 'Audiences',               href: '/governance#audiences' },
    ],
  },
  {
    id: 'cost',
    label: 'Cost & ROI',
    href: '/cost-roi',
    subs: [
      { label: 'Ask your team',           href: '/cost-roi#ask-your-team' },
      { label: 'The compounding effect',  href: '/cost-roi#compounding' },
      { label: 'Requirements protection', href: '/cost-roi#requirements' },
      { label: 'What Quorum costs',       href: '/cost-roi#pricing' },
      { label: 'Still evaluating?',       href: '/cost-roi#evaluating' },
    ],
  },
  {
    id: 'start',
    label: 'Get Started',
    href: '/get-started',
    subs: [
      { label: 'Prerequisites',            href: '/get-started#prerequisites' },
      { label: 'Step-by-step setup',       href: '/get-started#setup' },
      { label: 'Your first knowledge node',href: '/get-started#first-node' },
      { label: 'What to do next',          href: '/get-started#what-next' },
      { label: 'Need help?',               href: '/get-started#help' },
    ],
  },
]
