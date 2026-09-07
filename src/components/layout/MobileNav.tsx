import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { portfolioConfig } from '../../config/index.ts'
import { Button } from '../common/Button.tsx'
import { ResumeActions } from '../common/ResumeActions.tsx'
import { SocialLinks } from '../common/SocialLinks.tsx'
import { ThemeToggle } from '../common/ThemeToggle.tsx'

interface MobileNavProps {
  open: boolean
  onClose: () => void
  activeId: string
}

export function MobileNav({ open, onClose, activeId }: MobileNavProps) {
  const { nav, cta, personal } = portfolioConfig
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement
    document.body.style.overflow = 'hidden'

    const panel = panelRef.current
    const focusable = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
      : []
    focusable[0]?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.nav
            ref={panelRef}
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col border-l border-line bg-surface px-6 pt-20 pb-8"
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <p className="text-xs tracking-[0.2em] text-muted uppercase">
                {personal.initials}
              </p>
              <ThemeToggle />
            </div>
            <ul className="flex flex-col gap-1">
              {nav.map((item) => {
                const isActive = activeId === item.sectionId
                return (
                  <li key={item.sectionId}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      className={`flex min-h-11 items-center rounded-xl px-3 text-base ${
                        isActive ? 'bg-fg/[0.05] text-fg' : 'text-muted hover:text-fg'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
            <Button href="/#contact" className="mt-8 w-full" onClick={onClose} arrow>
              {cta.letsTalk}
            </Button>
            <ResumeActions className="mt-3" layout="stack" onNavigate={onClose} />
            <div className="mt-auto border-t border-line pt-6">
              <SocialLinks />
            </div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
