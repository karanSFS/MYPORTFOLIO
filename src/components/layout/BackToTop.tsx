import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '../../utils/cn.ts'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed right-4 bottom-4 z-50 inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-fg shadow-lg transition-opacity sm:right-6 sm:bottom-6',
        visible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <ArrowUp className="size-4" />
    </button>
  )
}
