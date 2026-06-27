const base = import.meta.env.BASE_URL

const experience = [
  { company: 'Dropbox', years: '2021-2025' },
  { company: 'OpenTable', years: '2021' },
  { company: 'Life360', years: '2020' },
] as const

function Pill({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button type="button" className="pill" onClick={onClick}>
      {children}
    </button>
  )
}

function Wave() {
  return (
    <img
      src={`${base}assets/wave-divider.svg`}
      alt=""
      aria-hidden="true"
      className="wave"
    />
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

      <div className="my-5">
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
          <Pill onClick={onOpen}>Mercury</Pill>
        </p>
      </div>

      <div className="my-5">
        <Wave />
      </div>

      <div className="flex items-center justify-between gap-4">
        <span className="bio-body">Pervious Experience</span>
        <Pill onClick={onOpen}>See more</Pill>
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
