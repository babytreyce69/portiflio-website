import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  onClose: () => void
}

export default function PlaceholderModal({ onClose }: Props) {
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
    if (closing && e.animationName === 'app-modal-slide-down') {
      onClose()
    }
  }

  return createPortal(
    <div
      className={`app-modal fixed inset-0 z-[100] flex flex-col ${
        closing ? 'app-modal--closing' : ''
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Placeholder"
      onAnimationEnd={handleAnimationEnd}
    >
      <header className="shrink-0">
        <div className="mx-auto flex w-full max-w-[808px] items-center justify-end px-6 py-5">
          <button
            type="button"
            onClick={requestClose}
            className="app-modal__close"
          >
            Close
          </button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1 items-center justify-center px-6 pb-16">
        <p className="text-[16px] font-normal text-[color:var(--color-ink)] opacity-60">
          Placeholder
        </p>
      </div>
    </div>,
    document.body,
  )
}
