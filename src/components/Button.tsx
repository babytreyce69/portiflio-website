import type { ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  className?: string
}

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & {
  className?: string
}

export function Button({ className = '', type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={`button ${className}`.trim()} {...props} />
}

export function ButtonLink({ className = '', ...props }: ButtonLinkProps) {
  return <a className={`button ${className}`.trim()} {...props} />
}
