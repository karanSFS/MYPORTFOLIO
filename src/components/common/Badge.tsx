import type { ReactNode } from 'react'
import { cn } from '../../utils/cn.ts'

interface BadgeProps {
  children: ReactNode
  className?: string
  tone?: 'accent' | 'success' | 'muted'
}

export function Badge({ children, className, tone = 'accent' }: BadgeProps) {
  const tones = {
    accent: 'border-primary/20 bg-primary/10 text-primary',
    success: 'border-success/20 bg-success/10 text-success',
    muted: 'border-line bg-surface-secondary text-muted',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs font-medium tracking-wide',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
