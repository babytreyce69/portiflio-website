export const PAGES = ['home', 'profile', 'favorites'] as const

export type Page = (typeof PAGES)[number]

export type SlideDirection = 'left' | 'right'

export const PAGE_LABELS: Record<Page, string> = {
  home: 'Home',
  profile: 'About',
  favorites: 'Fun',
}

export function getSlideDirection(from: Page, to: Page): SlideDirection {
  return PAGES.indexOf(to) > PAGES.indexOf(from) ? 'right' : 'left'
}
