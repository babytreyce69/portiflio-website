type PillProps = {
  children: React.ReactNode
  className?: string
  /** Inside a card — small-copy only, no background or border */
  onCard?: boolean
}

export default function Pill({ children, className = '', onCard = false }: PillProps) {
  if (onCard) {
    return (
      <span className={`pill-on-card small-copy ${className}`.trim()}>{children}</span>
    )
  }

  return (
    <span className={`pill small-copy ${className}`.trim()}>{children}</span>
  )
}
