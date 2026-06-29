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

const WAVE_SMALL_PATH =
  'M0.250006 7.25001L7.95169 0.78914C8.3234 0.477311 8.86533 0.477303 9.23705 0.789121L16.2965 6.71091C16.6682 7.02272 17.2102 7.02272 17.5819 6.71091L24.6414 0.789106C25.0131 0.477295 25.555 0.477295 25.9267 0.789106L32.9862 6.71091C33.3579 7.02272 33.8998 7.02272 34.2716 6.71091L41.3311 0.789106C41.7028 0.477295 42.2447 0.477295 42.6164 0.789106L49.6759 6.71091C50.0476 7.02272 50.5895 7.02272 50.9612 6.71091L58.0207 0.789106C58.3925 0.477295 58.9344 0.477294 59.3061 0.789105L66.3656 6.71091C66.7373 7.02272 67.2792 7.02272 67.6509 6.71091L74.7104 0.789106C75.0821 0.477295 75.6241 0.477294 75.9958 0.789105L83.0553 6.71091C83.427 7.02272 83.9689 7.02272 84.3406 6.71091L91.4001 0.789106C91.7718 0.477295 92.3138 0.477294 92.6855 0.789105L99.745 6.71091C100.117 7.02272 100.659 7.02272 101.03 6.71091L108.09 0.789106C108.462 0.477295 109.003 0.477294 109.375 0.789105L116.435 6.71091C116.806 7.02272 117.348 7.02272 117.72 6.71091L124.78 0.789106C125.151 0.477295 125.693 0.477294 126.065 0.789105L133.124 6.71091C133.496 7.02272 134.038 7.02272 134.41 6.71091L141.469 0.789106C141.841 0.477295 142.383 0.477295 142.755 0.789106L149.814 6.71091C150.186 7.02272 150.728 7.02272 151.099 6.71091L158.159 0.789105C158.531 0.477294 159.073 0.477294 159.444 0.789105L166.504 6.71091C166.875 7.02272 167.417 7.02272 167.789 6.71091L174.849 0.789106C175.22 0.477295 175.762 0.477295 176.134 0.789106L183.193 6.71091C183.565 7.02272 184.107 7.02272 184.479 6.71091L191.538 0.789105C191.91 0.477294 192.452 0.477294 192.824 0.789105L199.883 6.71091C200.255 7.02272 200.797 7.02272 201.168 6.71091L208.228 0.789105C208.6 0.477294 209.142 0.477294 209.513 0.789105L216.573 6.71091C216.945 7.02272 217.486 7.02272 217.858 6.71091L224.918 0.789106C225.289 0.477295 225.831 0.477294 226.203 0.789105L233.262 6.71091C233.634 7.02272 234.176 7.02272 234.548 6.71091L242.25 0.250006'

function WaveSmall() {
  return (
    <svg
      className="wave wave--small"
      viewBox="0 0 242.5 7.5"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={WAVE_SMALL_PATH}
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
      <h1 className="bio-title">Treyce Is a Growth Designer</h1>

      <div className="bio-body">
        {/* MacBook Pro 1000 — stacked lines (Figma 76:1672) */}
        <div className="bio-copy bio-copy--pro">
          <p>You pronounce it &ldquo;Trace&rdquo;</p>
          <p>Yes his parents spelled</p>
          <p>
            it funny....It&rsquo;s a <Pill onClick={onOpen}>Long story</Pill>
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

        {/* Desktop 1440 — comma after Trace (Figma 76:1811) */}
        <div className="bio-copy bio-copy--desktop">
          <p>You pronounce it &ldquo;Trace&rdquo;, Yes his parents spelled</p>
          <p>
            it funny....It&rsquo;s a <Pill onClick={onOpen}>Long story</Pill>
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
        <WaveSmall />
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
