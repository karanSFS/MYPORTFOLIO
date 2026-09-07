import { Mail, Globe } from 'lucide-react'
import { portfolioConfig } from '../../config/index.ts'
import { cn } from '../../utils/cn.ts'
import { GitHubIcon, LinkedInIcon } from './BrandIcons.tsx'

const icons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
  twitter: Globe,
  website: Globe,
}

interface SocialLinksProps {
  className?: string
  iconClassName?: string
  density?: 'default' | 'compact'
}

export function SocialLinks({
  className,
  iconClassName,
  density = 'default',
}: SocialLinksProps) {
  const links = portfolioConfig.socialLinks.filter((link) => link.href)

  if (links.length === 0) return null

  return (
    <ul className={cn('flex items-center gap-1', className)}>
      {links.map((link) => {
        const Icon = icons[link.id]
        const href =
          link.id === 'email' && !link.href.startsWith('mailto:')
            ? `mailto:${link.href}`
            : link.href

        return (
          <li key={link.id}>
            <a
              href={href}
              target={link.id === 'email' ? undefined : '_blank'}
              rel={link.id === 'email' ? undefined : 'noreferrer'}
              aria-label={link.label}
              className={cn(
                'inline-flex items-center justify-center rounded-lg text-muted transition-colors hover:bg-fg/[0.05] hover:text-fg',
                density === 'compact'
                  ? 'size-11 min-h-11 min-w-11'
                  : 'size-11 min-h-11 min-w-11 rounded-xl',
              )}
            >
              <Icon className={cn('size-4', iconClassName)} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
