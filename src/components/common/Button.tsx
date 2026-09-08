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
  Omit<ComponentProps<'button'>, keyof SharedProps> & {
    href?: undefined
  }

type ButtonAsLink = SharedProps &
  Omit<ComponentProps<'a'>, keyof SharedProps> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

function isAnchorProps(props: ButtonProps): props is ButtonAsLink {
  return typeof props.href === 'string'
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-[#080d14] font-semibold hover:brightness-110 shadow-sm shadow-primary/25 active:scale-[0.99]',
  secondary:
    'bg-surface/60 backdrop-blur-sm text-fg border border-line hover:border-line/90 hover:bg-surface-secondary/60 active:scale-[0.99]',
  ghost: 'bg-transparent text-muted hover:text-fg hover:bg-surface-secondary/50 active:scale-[0.99]',
}

const sizes: Record<ButtonSize, string> = {
  md: 'h-11 min-h-11 px-4 text-sm',
  lg: 'h-12 min-h-12 px-5 text-sm sm:h-[3.25rem] sm:px-6 sm:text-[0.95rem]',
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    arrow = false,
  } = props

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight transition-[transform,background,border-color,filter,color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    props.className,
  )

  const content = (
    <>
      {props.children}
      {arrow ? (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </>
  )

  if (isAnchorProps(props)) {
    const {
      variant: _v,
      size: _s,
      arrow: _a,
      children: _c,
      className: _cn,
      ...anchorProps
    } = props
    void _v
    void _s
    void _a
    void _c
    void _cn

    return (
      <a className={cn('group', classes)} {...anchorProps}>
        {content}
      </a>
    )
  }

  const {
    variant: _v,
    size: _s,
    arrow: _a,
    children: _c,
    className: _cn,
    href: _h,
    type = 'button',
    ...buttonProps
  } = props
  void _v
  void _s
  void _a
  void _c
  void _cn
  void _h

  return (
    <button type={type} className={cn('group', classes)} {...buttonProps}>
      {content}
    </button>
  )
}
