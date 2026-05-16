import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { CaseStudy } from '../data/projectCaseStudies'
import Tag from './Tag'

type Props = {
  study: CaseStudy
  onClose: () => void
}

export default function ProjectCaseStudyModal({ study, onClose }: Props) {
  useEffect(() => {
    document.documentElement.classList.add('modal-open')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.classList.remove('modal-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#f2f0e6]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <header className="sticky top-0 z-10 shrink-0 border-b border-black/10 bg-[#f2f0e6]/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[1000px] items-center justify-end px-6 py-4 sm:px-10 lg:px-10">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex w-fit items-center justify-center rounded-xl border border-black px-4 py-3 text-[12px] font-semibold text-black transition hover:bg-black hover:text-white"
          >
            Close
          </button>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <article className="mx-auto w-full max-w-[1000px] px-6 py-10 pb-16 sm:px-10 lg:px-10">
          <Tag>{study.tag}</Tag>
          <h1
            id="case-study-title"
            className="mt-4 text-[24px] font-black leading-snug text-black lg:text-[32px]"
          >
            {study.title}
          </h1>
          <p className="mt-4 max-w-[640px] text-[16px] font-semibold leading-snug text-black">
            {study.intro}
          </p>

          <div className="mt-10 flex flex-col gap-10">
            {study.blocks.map((block, i) => {
              if (block.type === 'image') {
                return (
                  <div
                    key={i}
                    className={`w-full overflow-hidden rounded-xl ${block.className ?? 'min-h-[280px] bg-[#b4b4b4]'}`}
                    role="img"
                    aria-label={block.alt}
                  />
                )
              }
              return (
                <section key={i} className="flex max-w-[640px] flex-col gap-3">
                  {block.heading ? (
                    <h2 className="text-[20px] font-black text-black">{block.heading}</h2>
                  ) : null}
                  <p className="text-[16px] font-semibold leading-snug text-black">
                    {block.body}
                  </p>
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
