function HomeIcon() {
  return (
    <svg
      className="site-header__icon"
      viewBox="0 0 12 12"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6 1.5 1.5 5v5.25h3V8.25h3v2H10.5V5L6 1.5Z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg
      className="site-header__icon"
      viewBox="0 0 12 12"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6 6a2.25 2.25 0 1 0 0-4.5A2.25 2.25 0 0 0 6 6Zm0 1.125c-2.025 0-3.75 1.012-3.75 2.25V10.5h7.5V9.375c0-1.238-1.725-2.25-3.75-2.25Z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg
      className="site-header__icon"
      viewBox="0 0 12 12"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6 10.5 1.05 5.55a2.55 2.55 0 0 1 3.6-3.6L6 3.345l1.35-1.395a2.55 2.55 0 1 1 3.6 3.6L6 10.5Z" />
    </svg>
  )
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <h2 className="site-header__title">Welcome!</h2>
      <nav className="site-header__nav" aria-label="Site">
        <a className="pill pill--filled" href="/">
          <HomeIcon />
          Home
        </a>
        <button type="button" className="pill pill--icon" aria-label="Profile">
          <UserIcon />
        </button>
        <button type="button" className="pill pill--icon" aria-label="Favorites">
          <HeartIcon />
        </button>
      </nav>
    </header>
  )
}
