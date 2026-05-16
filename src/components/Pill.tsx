export default function Pill({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={`pill small-copy ${className}`.trim()}>{children}</span>
  )
}
