import { ArrowRight } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../../utils/cn.ts'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'md' | 'lg'

interface SharedProps {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  arrow?: boolean
}

type ButtonAsButton = SharedProps &
  ComponentProps<'button'> & {
    href?: undefined
  }

type ButtonAsLink = SharedProps &
  ComponentProps<'a'> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-[#1a120e] hover:brightness-110',
  secondary:
    'bg-transparent text-fg border border-line hover:border-secondary/50 hover:bg-fg/[0.03]',
  ghost: 'bg-transparent text-muted hover:text-fg',
}

const sizes: Record<ButtonSize, string> = {
  md: 'h-11 min-h-11 px-4 text-sm',
  lg: 'h-12 min-h-12 px-5 text-sm sm:h-[3.25rem] sm:px-6',
}

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = 'primary',
    size = 'md',
    arrow = false,
    ...rest
  } = props

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-tight transition-[transform,background,border-color,filter,color] duration-200',
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  )

  const content = (
    <>
      {children}
      {arrow ? (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </>
  )

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest
    return (
      <a href={href} className={cn('group', classes)} {...anchorRest}>
        {content}
      </a>
    )
  }

  const buttonRest = rest as ComponentProps<'button'>
  return (
    <button type={buttonRest.type ?? 'button'} className={cn('group', classes)} {...buttonRest}>
      {content}
    </button>
  )
}
