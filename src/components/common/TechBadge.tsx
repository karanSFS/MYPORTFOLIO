import { cn } from '../../utils/cn.ts'

interface TechBadgeProps {
  label: string
  className?: string
}

export function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-muted',
        className,
      )}
    >
      {label}
    </span>
  )
}
