import { Download, FileText } from 'lucide-react'
import { portfolioConfig } from '../../config/index.ts'
import { cn } from '../../utils/cn.ts'
import { Button } from './Button.tsx'

interface ResumeActionsProps {
  size?: 'md' | 'lg'
  layout?: 'row' | 'stack'
  compact?: boolean
  className?: string
  onNavigate?: () => void
}

export function ResumeActions({
  size = 'md',
  layout = 'row',
  compact = false,
  className,
  onNavigate,
}: ResumeActionsProps) {
  const { personal, cta } = portfolioConfig
  const resumeUrl = personal.resumeUrl.trim()
  if (!resumeUrl) return null

  if (compact) {
    return (
      <a
        href={resumeUrl}
        target="_blank"
        rel="noreferrer"
        onClick={onNavigate}
        className={cn(
          'hidden min-h-11 items-center gap-1.5 rounded-xl border border-line px-3 text-sm text-muted transition-colors hover:border-secondary/40 hover:text-fg sm:inline-flex',
          className,
        )}
      >
        <FileText className="size-3.5 shrink-0" aria-hidden="true" />
        {cta.openResume}
      </a>
    )
  }

  return (
    <div
      className={cn(
        'flex gap-3',
        layout === 'stack' ? 'w-full flex-col' : 'flex-col sm:w-auto sm:flex-row',
        className,
      )}
    >
      <Button
        href={resumeUrl}
        size={size}
        variant="secondary"
        className={layout === 'stack' ? 'w-full' : 'w-full sm:w-auto'}
        target="_blank"
        rel="noreferrer"
        onClick={onNavigate}
      >
        <FileText className="size-4" aria-hidden="true" />
        {cta.openResume}
      </Button>
      <Button
        href="/resume.pdf"
        size={size}
        variant="ghost"
        className={cn(
          'border border-line',
          layout === 'stack' ? 'w-full' : 'w-full sm:w-auto',
        )}
        download="Karan_Kumar_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        onClick={onNavigate}
      >
        <Download className="size-4" aria-hidden="true" />
        {cta.downloadResume}
      </Button>
    </div>
  )
}
