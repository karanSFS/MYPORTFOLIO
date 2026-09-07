import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { portfolioConfig } from '../config/index.ts'
import { ThemeContext } from './theme-context.ts'
import { THEME_STORAGE_KEY, type ColorMode } from './theme-types.ts'

const lightSurfaces = {
  background: '#F7F4EF',
  surface: '#FFFFFF',
  surfaceSecondary: '#F0EBE3',
  textPrimary: '#1A1714',
  textSecondary: '#6B635A',
  border: 'rgba(26,23,20,0.10)',
}

function readStoredMode(): ColorMode | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    if (value === 'light' || value === 'dark') return value
  } catch {
    /* ignore */
  }
  return null
}

function applyThemeVars(mode: ColorMode) {
  const theme = portfolioConfig.theme
  const surfaces =
    mode === 'light'
      ? lightSurfaces
      : {
          background: theme.background,
          surface: theme.surface,
          surfaceSecondary: theme.surfaceSecondary,
          textPrimary: theme.textPrimary,
          textSecondary: theme.textSecondary,
          border: theme.border,
        }

  const root = document.documentElement
  root.dataset.theme = mode
  root.style.colorScheme = mode
  root.style.setProperty('--portfolio-bg', surfaces.background)
  root.style.setProperty('--portfolio-surface', surfaces.surface)
  root.style.setProperty('--portfolio-surface-2', surfaces.surfaceSecondary)
  root.style.setProperty('--portfolio-primary', theme.primary)
  root.style.setProperty('--portfolio-secondary', theme.secondary)
  root.style.setProperty('--portfolio-fg', surfaces.textPrimary)
  root.style.setProperty('--portfolio-muted', surfaces.textSecondary)
  root.style.setProperty('--portfolio-line', surfaces.border)
  root.style.setProperty('--portfolio-success', theme.success)

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', surfaces.background)
}

function getInitialMode(): ColorMode {
  return readStoredMode() ?? portfolioConfig.theme.mode
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ColorMode>(getInitialMode)

  useLayoutEffect(() => {
    applyThemeVars(mode)
  }, [mode])

  const setMode = useCallback((next: ColorMode) => {
    setModeState(next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleMode = useCallback(() => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }, [mode, setMode])

  const value = useMemo(
    () => ({ mode, setMode, toggleMode }),
    [mode, setMode, toggleMode],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
