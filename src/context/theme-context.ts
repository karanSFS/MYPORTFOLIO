import { createContext } from 'react'
import type { ColorMode } from './theme-types.ts'

export interface ThemeContextValue {
  mode: ColorMode
  setMode: (mode: ColorMode) => void
  toggleMode: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
