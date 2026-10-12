type WorkCard = {
  id: string
  label: string
  src: string
  tone: 'blue' | 'purple' | 'green' | 'peach' | 'pink'
  wide?: boolean
}

const asset = (name: string) =>
  `${import.meta.env.BASE_URL}assets/work/${name}`

const workCards: WorkCard[] = [
  {
    id: 'mercury',
    label: 'Mercury Plus',
    src: asset('mercury.gif'),
    tone: 'blue',
    wide: true,
  },
  {
    id: 'phones',
    label: 'Activation flow',
    src: asset('phones.png'),
    tone: 'purple',
    wide: true,
  },
  {
    id: 'account',
    label: 'Account upgrade',
    src: asset('account.png'),
    tone: 'green',
  },
  {
    id: 'trial',
    label: 'Free trial',
    src: asset('trial.png'),
    tone: 'peach',
  },
  {
    id: 'dropbox',
    label: 'Dropbox Business',
    src: asset('dropbox.png'),
    tone: 'pink',
    wide: true,
  },
]

type CardColumnProps = {
  onOpen: () => void
}

export default function CardColumn({ onOpen }: CardColumnProps) {
  return (
    <section className="work-column">
      <div className="work-header">
        <h2 className="work-title">Recent work</h2>
        <p className="work-subtitle">
          For a more in depth case studies of my work, feel free to reach out
        </p>
      </div>

      <div className="work-grid">
        {workCards.map((card) => (
          <button
            key={card.id}
            type="button"
            className={`work-card work-card--${card.tone}${
              card.wide ? ' work-card--wide' : ''
            }`}
            aria-label={`Open ${card.label}`}
            onClick={onOpen}
          >
            <img src={card.src} alt="" className="work-card__image" />
          </button>
        ))}
      </div>
    </section>
  )
}
