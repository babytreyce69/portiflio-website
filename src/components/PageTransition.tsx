import { useEffect, useRef, useState } from 'react'
import type { Page, SlideDirection } from '../types/pages'

type PageTransitionProps = {
  page: Page
  direction: SlideDirection
  renderPage: (page: Page) => React.ReactNode
}

export default function PageTransition({
  page,
  direction,
  renderPage,
}: PageTransitionProps) {
  const [exiting, setExiting] = useState<Page | null>(null)
  const previousPage = useRef(page)
  useEffect(() => {
    if (page === previousPage.current) return

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reduced) {
      previousPage.current = page
      setExiting(null)
      return
    }

    setExiting(previousPage.current)
    previousPage.current = page
  }, [page])

  const transitioning = exiting !== null
  const exitDirection = direction === 'right' ? 'left' : 'right'

  const clearExit = () => {
    setExiting(null)
  }

  return (
    <div
      className={`page-viewport${transitioning ? ' page-viewport--transitioning' : ''}`}
    >
      {transitioning && exiting !== null ? (
        <div
          className={`page-layer page-layer--${exiting} page-layer--exit-${exitDirection}`}
          onAnimationEnd={clearExit}
        >
          {renderPage(exiting)}
        </div>
      ) : null}

      <div
        className={`page-layer page-layer--${page}${
          transitioning ? ` page-layer--enter-${direction}` : ''
        }`}
      >
        {renderPage(page)}
      </div>
    </div>
  )
}
