type WorkCard = {
  id: string
  label: string
  src: string
  tone: 'blue' | 'purple' | 'green' | 'peach' | 'pink'
  wide?: boolean
  media?: 'image' | 'video'
  poster?: string
}

const asset = (name: string) =>
  `${import.meta.env.BASE_URL}assets/work/${name}`

const workCards: WorkCard[] = [
  {
    id: 'mercury',
    label: 'Mercury Plus',
    src: asset('mercury-plus.mp4'),
    poster: asset('mercury-plus-poster.jpg'),
    tone: 'blue',
    wide: true,
    media: 'video',
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

export default function CardColumn() {
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
          <div
            key={card.id}
            className={`work-card work-card--${card.tone}${
              card.wide ? ' work-card--wide' : ''
            }`}
          >
            {card.media === 'video' ? (
              <video
                className="work-card__media work-card__video"
                src={card.src}
                poster={card.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label={card.label}
              />
            ) : (
              <img
                src={card.src}
                alt={card.label}
                className="work-card__media"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
