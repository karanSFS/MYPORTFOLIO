import { Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { portfolioConfig } from '../../config/index.ts'
import { useActiveSection } from '../../hooks/useActiveSection.ts'
import { cn } from '../../utils/cn.ts'
import { Button } from '../common/Button.tsx'
import { ResumeActions } from '../common/ResumeActions.tsx'
import { SocialLinks } from '../common/SocialLinks.tsx'
import { ThemeToggle } from '../common/ThemeToggle.tsx'
import { MobileNav } from './MobileNav.tsx'

export function Navbar() {
  const { personal, nav, cta } = portfolioConfig
  const location = useLocation()
  const sectionIds = useMemo(() => nav.map((item) => item.sectionId), [nav])
  const activeId = useActiveSection(sectionIds)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuPath, setMenuPath] = useState(location.pathname)

  if (menuPath !== location.pathname) {
    setMenuPath(location.pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 h-[var(--header-height)] transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled
          ? 'border-b border-line bg-background/72 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-3 px-5 sm:px-6 lg:px-8">
        <a
          href="/#home"
          className="flex min-h-11 shrink-0 items-center gap-2.5 text-sm font-medium text-fg"
        >
          <span className="bg-primary/15 text-primary inline-flex size-8 items-center justify-center rounded-lg text-[11px] tracking-[0.14em]">
            {personal.initials}
          </span>
          <span className="hidden sm:inline">{personal.firstName}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const isActive =
                location.pathname === '/' && activeId === item.sectionId
              return (
                <li key={item.sectionId}>
                  <a
                    href={item.href}
                    className={cn(
                      'relative inline-flex min-h-11 items-center px-3 text-sm transition-colors',
                      isActive ? 'text-fg' : 'text-muted hover:text-fg',
                    )}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'bg-primary absolute inset-x-3 bottom-2 h-px origin-left transition-transform duration-200',
                        isActive ? 'scale-x-100' : 'scale-x-0',
                      )}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <SocialLinks density="compact" className="hidden lg:flex" />
          <ResumeActions compact />
          <ThemeToggle />
          <Button href="/#contact" size="md" className="hidden sm:inline-flex" arrow>
            {cta.letsTalk}
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-line text-fg lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} activeId={activeId} />
    </header>
  )
}
