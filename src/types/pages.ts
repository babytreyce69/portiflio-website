export const PAGES = ['home', 'profile', 'favorites'] as const

export type Page = (typeof PAGES)[number]

export type SlideDirection = 'left' | 'right'

export function getSlideDirection(from: Page, to: Page): SlideDirection {
  return PAGES.indexOf(to) > PAGES.indexOf(from) ? 'right' : 'left'
}
