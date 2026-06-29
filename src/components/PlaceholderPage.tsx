import type { Page } from '../types/pages'

const labels: Record<Exclude<Page, 'home'>, string> = {
  profile: 'Profile',
  favorites: 'Favorites',
}

type PlaceholderPageProps = {
  page: Exclude<Page, 'home'>
}

export default function PlaceholderPage({ page }: PlaceholderPageProps) {
  return (
    <section className="placeholder-page" aria-label={labels[page]}>
      <h1 className="placeholder-page__title">{labels[page]}</h1>
      <p className="placeholder-page__body">Placeholder</p>
    </section>
  )
}
