type BioColumnProps = {
  onOpen: () => void
}

function TextLink({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode
  href?: string
  onClick?: () => void
}) {
  if (href) {
    return (
      <a
        className="text-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className="text-link" onClick={onClick}>
      {children}
    </button>
  )
}

const outsideLinks = [
  { label: 'Teaches on Maven', href: 'https://maven.com/' },
  { label: 'Writes on Substack', href: 'https://substack.com/' },
  {
    label: 'Speaks at conferences like Config',
    href: 'https://config.figma.com/',
  },
] as const

export default function BioColumn({ onOpen }: BioColumnProps) {
  const avatarSrc = `${import.meta.env.BASE_URL}assets/avatar.png`

  return (
    <aside className="bio-column">
      <section className="panel">
        <img
          className="bio-avatar"
          src={avatarSrc}
          alt="Illustration of Treyce Meredith"
          width={115}
          height={115}
        />

        <div className="bio-intro">
          <h1 className="bio-title">Treyce Is a Growth Designer</h1>
          <div className="bio-body">
            <p>
              You pronounce it &ldquo;Trace&rdquo;, Yes his parents spelled it
              funny....It&rsquo;s a{' '}
              <TextLink onClick={onOpen}>long story</TextLink>
            </p>
            <p className="bio-spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              Treyce has been growth designing for 10 years. He has worked
              across the full customer lifecycle like Acquisition, Activation
              and Monetization.
            </p>
            <p className="bio-spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              Currently Treyce is a leading activation at{' '}
              <TextLink href="https://mercury.com/">Mercury</TextLink>, and hes
              pretty happy doing it.
            </p>
          </div>
        </div>
      </section>

      <section className="panel">
        <h2 className="bio-title">Outside of his 9-5 Treyce</h2>
        <ul className="outside-list">
          {outsideLinks.map(({ label, href }) => (
            <li key={label}>
              <TextLink href={href}>{label}</TextLink>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
