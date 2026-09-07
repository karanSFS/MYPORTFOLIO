import { cn } from '../../utils/cn.ts'

interface ProjectFiltersProps {
  filters: string[]
  active: string
  onChange: (filter: string) => void
}

/** Wrapping chip group — no horizontal scroll on mobile. */
export function ProjectFilters({ filters, active, onChange }: ProjectFiltersProps) {
  return (
    <div role="tablist" aria-label="Filters" className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = filter === active
        return (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter)}
            className={cn(
              'inline-flex h-10 min-h-10 items-center rounded-md border px-3 text-sm transition-colors',
              isActive
                ? 'border-secondary/40 bg-surface-secondary text-fg'
                : 'border-line bg-transparent text-muted hover:border-secondary/30 hover:text-fg',
            )}
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}
