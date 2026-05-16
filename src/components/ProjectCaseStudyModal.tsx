import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { CaseStudy } from '../data/projectCaseStudies'
import { Button } from './Button'
import Pill from './Pill'

type Props = {
  study: CaseStudy
  onClose: () => void
}

export default function ProjectCaseStudyModal({ study, onClose }: Props) {
  const [closing, setClosing] = useState(false)

  const requestClose = useCallback(() => {
    if (closing) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onClose()
      return
    }
    setClosing(true)
  }, [closing, onClose])

  useEffect(() => {
    document.documentElement.classList.add('modal-open')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') requestClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.classList.remove('modal-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [requestClose])

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (closing && e.animationName === 'case-study-modal-slide-down') {
      onClose()
    }
  }

  return createPortal(
    <div
      className={`case-study-modal canvas fixed inset-0 z-[100] flex flex-col ${closing ? 'case-study-modal--closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onAnimationEnd={handleAnimationEnd}
    >
      <header className="sticky top-0 z-10 shrink-0 border-b border-black/10 bg-[color-mix(in_srgb,var(--color-canvas)_95%,transparent)] backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[1000px] items-center justify-end px-6 py-4 sm:px-10 lg:px-10">
          <Button onClick={requestClose}>Close</Button>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <article className="mx-auto w-full max-w-[1000px] px-6 py-10 pb-16 sm:px-10 lg:px-10">
          <Pill>{study.tag}</Pill>
          <h1 id="case-study-title" className="headline mt-4 lg:text-[32px]">
            {study.title}
          </h1>
          <p className="body-copy mt-4 max-w-[640px]">{study.intro}</p>

          <div className="mt-10 flex flex-col gap-10">
            {study.blocks.map((block, i) => {
              if (block.type === 'image') {
                return (
                  <div
                    key={i}
                    className={`w-full overflow-hidden rounded-xl ${block.className ?? 'min-h-[280px] bg-placeholder-dark'}`}
                    role="img"
                    aria-label={block.alt}
                  />
                )
              }
              return (
                <section key={i} className="flex max-w-[640px] flex-col gap-3">
                  {block.heading ? (
                    <h2 className="headline">{block.heading}</h2>
                  ) : null}
                  <p className="body-copy">{block.body}</p>
                </section>
              )
            })}
          </div>
        </article>
      </div>
    </div>,
    document.body,
  )
}
