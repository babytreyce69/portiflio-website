const experience = [
  { company: 'Dropbox', years: '2021-2025' },
  { company: 'OpenTable', years: '2021' },
  { company: 'Life360', years: '2020' },
] as const

function Pill({
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
        className="pill"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className="pill" onClick={onClick}>
      {children}
    </button>
  )
}

function Wave() {
  return (
    <svg
      className="wave"
      viewBox="0 0 254 18"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 13L14.7017 6.53913C15.0734 6.22731 15.6153 6.2273 15.987 6.53912L23.0465 12.4609C23.4182 12.7727 23.9602 12.7727 24.3319 12.4609L31.3914 6.5391C31.7631 6.22729 32.305 6.22729 32.6767 6.5391L39.7362 12.4609C40.1079 12.7727 40.6498 12.7727 41.0216 12.4609L48.0811 6.5391C48.4528 6.22729 48.9947 6.22729 49.3664 6.5391L56.4259 12.4609C56.7976 12.7727 57.3395 12.7727 57.7112 12.4609L64.7707 6.5391C65.1425 6.22729 65.6844 6.22729 66.0561 6.5391L73.1156 12.4609C73.4873 12.7727 74.0292 12.7727 74.4009 12.4609L81.4604 6.5391C81.8321 6.22729 82.3741 6.22729 82.7458 6.5391L89.8053 12.4609C90.177 12.7727 90.7189 12.7727 91.0906 12.4609L98.1501 6.5391C98.5218 6.22729 99.0637 6.22729 99.4355 6.5391L106.495 12.4609C106.867 12.7727 107.409 12.7727 107.78 12.4609L114.84 6.5391C115.212 6.22729 115.753 6.22729 116.125 6.5391L123.185 12.4609C123.556 12.7727 124.098 12.7727 124.47 12.4609L131.53 6.5391C131.901 6.22729 132.443 6.22729 132.815 6.5391L139.874 12.4609C140.246 12.7727 140.788 12.7727 141.16 12.4609L148.219 6.5391C148.591 6.22729 149.133 6.22729 149.505 6.5391L156.564 12.4609C156.936 12.7727 157.478 12.7727 157.849 12.4609L164.909 6.5391C165.281 6.22729 165.822 6.22729 166.194 6.5391L173.254 12.4609C173.625 12.7727 174.167 12.7727 174.539 12.4609L181.599 6.5391C181.97 6.22729 182.512 6.22729 182.884 6.5391L189.943 12.4609C190.315 12.7727 190.857 12.7727 191.229 12.4609L198.288 6.5391C198.66 6.22729 199.202 6.22729 199.574 6.5391L206.633 12.4609C207.005 12.7727 207.547 12.7727 207.918 12.4609L214.978 6.5391C215.35 6.22729 215.892 6.22729 216.263 6.5391L223.323 12.4609C223.695 12.7727 224.236 12.7727 224.608 12.4609L231.668 6.5391C232.039 6.22729 232.581 6.22729 232.953 6.5391L240.012 12.4609C240.384 12.7727 240.926 12.7727 241.298 12.4609L249 6"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

type BioColumnProps = {
  onOpen: () => void
}

export default function BioColumn({ onOpen }: BioColumnProps) {
  return (
    <aside className="bio-column">
      <h1 className="bio-title">
        Treyce Is a Growth Designer <Pill onClick={onOpen}>Learn more</Pill>
      </h1>

      <div className="wave-wrap">
        <Wave />
      </div>

      <div className="bio-body flex flex-col gap-[22px]">
        <div>
          <p>You pronounce it &ldquo;Trace&rdquo;</p>
          <p>Yes his parents spelled</p>
          <p>
            it funny....It&rsquo;s a <Pill onClick={onOpen}>Long story</Pill>
          </p>
        </div>

        <p>
          Treyce has been doing growth design for 10 years Before it was even
          really a thing (but it was).
        </p>

        <p>
          Currently Treyce is a leading activation at{' '}
          <Pill href="https://mercury.com/">Mercury</Pill>
        </p>
      </div>

      <div className="wave-wrap">
        <Wave />
      </div>

      <div className="flex items-center justify-between gap-4">
        <span className="bio-body">Pervious Experience</span>
        <Pill href="https://www.linkedin.com/in/treycemeredith">See more</Pill>
      </div>

      <div className="mt-4 flex flex-col">
        {experience.map(({ company, years }) => (
          <div key={company} className="exp-row">
            <span className="bio-small">{company}</span>
            <span className="bio-small">{years}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
