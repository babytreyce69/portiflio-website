import type { ComponentPropsWithoutRef } from 'react'

type PillProps = {
  children: React.ReactNode
  className?: string
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
      <span className={`pill-on-card ${className}`.trim()}>{children}</span>
    )
  }

  return <span className={`pill ${className}`.trim()}>{children}</span>
}

export function PillLink({ className = '', ...props }: PillLinkProps) {
  return <a className={`pill ${className}`.trim()} {...props} />
}
