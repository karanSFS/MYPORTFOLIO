import { cn } from '../../utils/cn.ts'

interface SectionHeaderProps {
  number?: string
  label: string
  heading: string
  description?: string
  headingLevel?: 'h1' | 'h2'
  className?: string
}

export function SectionHeader({
  number,
  label,
  heading,
  description,
  headingLevel = 'h2',
  className,
}: SectionHeaderProps) {
  const Heading = headingLevel

  return (
    <div className={cn('max-w-3xl', className)}>
      <p className="mb-4 flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-muted uppercase">
        {number ? <span className="text-primary">{number}</span> : null}
        {number ? <span className="h-px w-8 bg-line" aria-hidden="true" /> : null}
        {label}
      </p>
      <Heading className="text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.15] font-medium tracking-tight text-fg">
        {heading}
      </Heading>
      {description ? (
        <p className="mt-5 max-w-2xl text-[1.05rem] leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  )
}
