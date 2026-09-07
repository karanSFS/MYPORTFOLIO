import { useContext } from 'react'
import { ThemeContext } from './theme-context.ts'

export function useThemeMode() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useThemeMode must be used within ThemeProvider')
  }
  return ctx
}
