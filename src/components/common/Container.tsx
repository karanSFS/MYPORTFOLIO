import type { ReactNode } from 'react'
import { cn } from '../../utils/cn.ts'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'nav'
  id?: string
}

export function Container({ children, className, as: Tag = 'div', id }: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8', className)}
    >
      {children}
    </Tag>
  )
}
