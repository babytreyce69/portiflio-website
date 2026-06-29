import type { Page, SlideDirection } from '../types/pages'

type PageTransitionProps = {
  page: Page
  direction: SlideDirection
  children: React.ReactNode
}

export default function PageTransition({
  page,
  direction,
  children,
}: PageTransitionProps) {
  const layoutClass =
    page === 'home'
      ? 'page-transition page-transition--home'
      : 'page-transition page-transition--full'

  return (
    <div
      key={page}
      className={`${layoutClass} page-transition--from-${direction}`}
    >
      {children}
    </div>
  )
}
