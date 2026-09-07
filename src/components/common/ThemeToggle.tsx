import { Moon, Sun } from 'lucide-react'
import { useThemeMode } from '../../context/useThemeMode.ts'
import { cn } from '../../utils/cn.ts'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { mode, toggleMode } = useThemeMode()
  const isDark = mode === 'dark'

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={cn(
        'inline-flex size-11 min-h-11 min-w-11 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-secondary/40 hover:text-fg',
        className,
      )}
    >
      {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
    </button>
  )
}
