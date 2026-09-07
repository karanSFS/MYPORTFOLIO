import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.ts'
import { cn } from '../../utils/cn.ts'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const reduceMotion = usePrefersReducedMotion()
  const Component = motion[as]

  if (reduceMotion) {
    return <div className={cn('min-w-0', className)}>{children}</div>
  }

  return (
    <Component
      className={cn('min-w-0', className)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
