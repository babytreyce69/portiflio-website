function TextLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
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

const outsideLinks = [
  {
    label: 'Teaches on Maven',
    href: 'https://maven.com/p/016a24/designing-for-monetization',
  },
  {
    label: 'Writes on Substack',
    href: 'https://designingforneurodiversity.substack.com',
  },
  {
    label: 'Speaks at conferences like Config',
    href: 'https://www.youtube.com/watch?v=3aH--S3r9n4',
  },
] as const

export default function BioColumn() {
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
              funny....It&rsquo;s a long story
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
