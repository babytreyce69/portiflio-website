type CardColumnProps = {
  onOpen: () => void
}

function PlaceholderCard({
  variant,
  onOpen,
  label,
}: {
  variant: 'wide' | 'tall'
  onOpen: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`card ${variant === 'wide' ? 'card--wide' : 'card--tall'}`}
      aria-label={`Open ${label}`}
    />
  )
}

export default function CardColumn({ onOpen }: CardColumnProps) {
  return (
    <div className="card-column">
      <div className="snap-row">
        <PlaceholderCard variant="wide" onOpen={onOpen} label="project 1" />
      </div>

      <div className="snap-row card-row">
        <PlaceholderCard variant="tall" onOpen={onOpen} label="project 2" />
        <PlaceholderCard variant="tall" onOpen={onOpen} label="project 3" />
      </div>
    </div>
  )
}
