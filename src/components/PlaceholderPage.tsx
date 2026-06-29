import { PAGE_LABELS, type Page } from '../types/pages'

type PlaceholderPageProps = {
  page: Exclude<Page, 'home'>
}

export default function PlaceholderPage({ page }: PlaceholderPageProps) {
  const label = PAGE_LABELS[page]

  return (
    <section className="placeholder-page" aria-label={label}>
      <h1 className="placeholder-page__title">{label}</h1>
      <p className="placeholder-page__body">Placeholder</p>
    </section>
  )
}
