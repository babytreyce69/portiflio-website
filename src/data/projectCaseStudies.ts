export type CaseStudyBlock =
  | { type: 'text'; heading?: string; body: string }
  | { type: 'image'; alt: string; className?: string }

export type CaseStudy = {
  id: string
  tag: string
  title: string
  intro: string
  blocks: CaseStudyBlock[]
}

export const projectCaseStudies: CaseStudy[] = [
  {
    id: 'mercury',
    tag: 'Mercury',
    title: 'Mobile Onboarding Redesign',
    intro:
      'Over two years, Treyce led mobile web onboarding for Mercury — improving conversion across signup, verification, and banking application submission flows.',
    blocks: [
      {
        type: 'image',
        alt: 'Mercury mobile web onboarding screens',
        className: 'min-h-[360px] bg-placeholder-dark',
      },
      {
        type: 'text',
        heading: 'The challenge',
        body: 'Mercury needed a mobile web experience that matched the quality of native apps while moving users through high-stakes financial onboarding with clarity and trust.',
      },
      {
        type: 'text',
        heading: 'What we did',
        body: 'Treyce partnered with product, engineering, and growth to redesign key onboarding paths — simplifying steps, tightening copy, and testing layout patterns that reduced drop-off on mobile.',
      },
      {
        type: 'image',
        alt: 'Onboarding flow detail',
        className: 'min-h-[280px] bg-placeholder',
      },
      {
        type: 'text',
        heading: 'Impact',
        body: 'The work contributed to a 2× increase in banking application submissions and helped make mobile a primary growth channel for the business.',
      },
    ],
  },
  {
    id: 'dropbox',
    tag: 'Dropbox',
    title: 'Individual to Teams Upsells',
    intro:
      'Treyce designed a comprehensive upsell strategy to help individual Dropbox users discover, try, and buy team plans.',
    blocks: [
      {
        type: 'image',
        alt: 'Dropbox business upsell screens',
        className: 'min-h-[360px] bg-[#d9d9d9]',
      },
      {
        type: 'text',
        heading: 'The challenge',
        body: 'Dropbox had strong individual adoption but needed clearer paths from solo use to team plans without feeling pushy or breaking core workflows.',
      },
      {
        type: 'text',
        heading: 'What we did',
        body: 'The team mapped upsell moments across the product, prototyped messaging and UI patterns, and ran experiments to find the right balance of visibility and value.',
      },
      {
        type: 'image',
        alt: 'Upsell UI exploration',
        className: 'min-h-[280px] bg-[#b4b4b4]',
      },
      {
        type: 'text',
        heading: 'Impact',
        body: 'The strategy gave individual users clearer reasons to upgrade while supporting revenue goals for Dropbox Business and team plans.',
      },
    ],
  },
]

export function getCaseStudy(id: string): CaseStudy | undefined {
  return projectCaseStudies.find((s) => s.id === id)
}
