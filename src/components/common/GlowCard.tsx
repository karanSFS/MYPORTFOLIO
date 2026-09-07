import type { ReactNode } from 'react'
import { cn } from '../../utils/cn.ts'

interface SurfaceProps {
  children: ReactNode
  className?: string
  interactive?: boolean
}

/** Editorial surface — hard edge, no glow, no glass. */
export function Surface({ children, className, interactive = false }: SurfaceProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-line bg-surface',
        interactive &&
          'transition-[border-color,transform,background-color] duration-300 hover:-translate-y-0.5 hover:border-secondary/35 hover:bg-surface-secondary',
        className,
      )}
    >
      {children}
    </div>
  )
}

/** @deprecated Prefer Surface — kept as alias for gradual migration */
export function GlowCard({ children, className }: { children: ReactNode; className?: string }) {
  return <Surface className={className}>{children}</Surface>
}
