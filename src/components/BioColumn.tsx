import WaveLine from './WaveLine'

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

type BioColumnProps = {
  onOpen: () => void
}

export default function BioColumn({ onOpen }: BioColumnProps) {
  return (
    <aside className="bio-column">
      <h1 className="bio-title">Treyce Is a Growth Designer</h1>

      <div className="bio-body">
        {/* 1000–1279 — flowing intro, mercury on one line */}
        <div className="bio-copy bio-copy--pro">
          <p>
            You pronounce it &ldquo;Trace&rdquo; Yes his parents spelled it
            funny....It&rsquo;s a <Pill onClick={onOpen}>Long story</Pill>
          </p>
          <p className="bio-spacer" aria-hidden="true">
            &nbsp;
          </p>
          <p>
            Treyce has been doing growth design for 10 years Before it was even
            really a thing (but it was).
          </p>
          <p className="bio-spacer" aria-hidden="true">
            &nbsp;
          </p>
          <p>
            Currently Treyce is a leading activation at{' '}
            <Pill href="https://mercury.com/">Mercury</Pill>
          </p>
        </div>

        {/* MacBook Air 1280 — single intro line, split mercury (Figma 76:1812 / 77:1632) */}
        <div className="bio-copy bio-copy--air">
          <p>
            You pronounce it &ldquo;Trace&rdquo; Yes his parents spelled it
            funny....It&rsquo;s a <Pill onClick={onOpen}>Long story</Pill>
          </p>
          <p className="bio-spacer" aria-hidden="true">
            &nbsp;
          </p>
          <p>
            Treyce has been doing growth design for 10 years Before it was even
            really a thing (but it was).
          </p>
          <p className="bio-spacer" aria-hidden="true">
            &nbsp;
          </p>
          <p>Currently Treyce is a leading activation</p>
          <p>
            at <Pill href="https://mercury.com/">Mercury</Pill>
          </p>
        </div>

        {/* Desktop 1440 — comma after Trace, flowing intro */}
        <div className="bio-copy bio-copy--desktop">
          <p>
            You pronounce it &ldquo;Trace&rdquo;, Yes his parents spelled it
            funny....It&rsquo;s a <Pill onClick={onOpen}>Long story</Pill>
          </p>
          <p className="bio-spacer" aria-hidden="true">
            &nbsp;
          </p>
          <p>
            Treyce has been doing growth design for 10 years Before it was even
            really a thing (but it was).
          </p>
          <p className="bio-spacer" aria-hidden="true">
            &nbsp;
          </p>
          <p>
            Currently Treyce is a leading activation at{' '}
            <Pill href="https://mercury.com/">Mercury</Pill>
          </p>
        </div>
      </div>

      <div className="wave-wrap wave-wrap--bio">
        <WaveLine className="wave-line" />
      </div>

      <div className="bio-exp-header">
        <span>Pervious Experience</span>
        <Pill href="https://www.linkedin.com/in/treycemeredith">See more</Pill>
      </div>

      <div className="bio-exp-list">
        {experience.map(({ company, years }) => (
          <div key={company} className="exp-row">
            <span className="bio-small">{company}</span>
            <span className="bio-small bio-small--years">{years}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
