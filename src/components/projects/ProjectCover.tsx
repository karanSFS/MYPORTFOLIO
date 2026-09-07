interface ProjectCoverProps {
  title: string
  category: string
  slug: string
  className?: string
}

function hashSlug(slug: string) {
  return slug.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)
}

export function ProjectCover({ title, category, slug, className }: ProjectCoverProps) {
  const variant = hashSlug(slug) % 3

  return (
    <div
      className={`relative overflow-hidden bg-surface-secondary ${className ?? ''}`}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`${slug}-wash`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--portfolio-primary)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--portfolio-secondary)" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect width="800" height="500" fill={`url(#${slug}-wash)`} />
        {variant === 0 ? (
          <>
            <rect x="480" y="40" width="280" height="180" fill="none" stroke="var(--portfolio-secondary)" strokeOpacity="0.35" />
            <rect x="40" y="280" width="220" height="160" fill="var(--portfolio-primary)" fillOpacity="0.12" />
          </>
        ) : null}
        {variant === 1 ? (
          <>
            <line x1="0" y1="160" x2="800" y2="160" stroke="var(--portfolio-secondary)" strokeOpacity="0.25" />
            <line x1="0" y1="320" x2="800" y2="320" stroke="var(--portfolio-secondary)" strokeOpacity="0.18" />
            <circle cx="620" cy="240" r="90" fill="none" stroke="var(--portfolio-primary)" strokeOpacity="0.4" />
          </>
        ) : null}
        {variant === 2 ? (
          <>
            <polygon points="800,0 520,0 800,260" fill="var(--portfolio-primary)" fillOpacity="0.14" />
            <rect x="60" y="80" width="160" height="340" fill="none" stroke="var(--portfolio-secondary)" strokeOpacity="0.3" />
          </>
        ) : null}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="text-[11px] tracking-[0.16em] text-secondary uppercase">{category}</p>
        <p className="mt-1 text-xl font-medium tracking-tight text-fg">{title}</p>
      </div>
    </div>
  )
}
