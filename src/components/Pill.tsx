import type { ComponentPropsWithoutRef } from 'react'

type PillProps = {
  children: React.ReactNode
  className?: string
  /** Inside a card — small-copy only, no background or border */
  onCard?: boolean
}

type PillLinkProps = ComponentPropsWithoutRef<'a'> & {
  className?: string
}

export default function Pill({
  children,
  className = '',
  onCard = false,
}: PillProps) {
  if (onCard) {
    return (
      <span className={`pill-on-card small-copy ${className}`.trim()}>{children}</span>
    )
  }

  return (
    <span className={`pill small-copy ${className}`.trim()}>{children}</span>
  )
}

export function PillLink({ className = '', ...props }: PillLinkProps) {
  return (
    <a
      className={`pill small-copy cursor-pointer ${className}`.trim()}
      {...props}
    />
  )
}
