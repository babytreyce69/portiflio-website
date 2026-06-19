export default function FloatingNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="floating-nav"
      aria-label="Site navigation"
    >
      <button
        type="button"
        className="floating-nav__icon"
        aria-label="Jump to section"
        aria-haspopup="true"
        onClick={() => scrollTo('hero')}
      >
        <MenuIcon />
      </button>

      <span className="floating-nav__title">Treyce Meredith</span>

      <button
        type="button"
        className="floating-nav__icon floating-nav__icon--end"
        aria-label="Favorite"
      >
        <HeartIcon />
      </button>
    </nav>
  )
}

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M1 3.5h14M1 8h14M1 12.5h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 13.5S1.5 9.25 1.5 5.5a3.25 3.25 0 0 1 5.84-1.97L8 4.18l.66-.65A3.25 3.25 0 0 1 14.5 5.5C14.5 9.25 8 13.5 8 13.5Z" />
    </svg>
  )
}
