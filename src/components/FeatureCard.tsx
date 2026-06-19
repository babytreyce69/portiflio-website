import Pill from './Pill'

type FeatureCardProps = {
  label: string
  title: string
  action: string
  onAction?: () => void
  href?: string
}

export default function FeatureCard({
  label,
  title,
  action,
  onAction,
  href,
}: FeatureCardProps) {
  const actionClass = 'text-link'

  return (
    <article className="feature-card">
      <Pill>{label}</Pill>
      <div className="feature-card__footer">
        <h3 className="header">{title}</h3>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={actionClass}
          >
            {action}
          </a>
        ) : (
          <button type="button" onClick={onAction} className={actionClass}>
            {action}
          </button>
        )}
      </div>
    </article>
  )
}
