import { portfolioConfig } from '../../config/index.ts'
import { Container } from '../common/Container.tsx'
import { SocialLinks } from '../common/SocialLinks.tsx'

export function Footer() {
  const { footer, personal, nav } = portfolioConfig
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-8 py-10 sm:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium tracking-[0.18em] text-fg uppercase">
              {personal.initials}
            </p>
            <p className="mt-2 text-sm text-muted">
              © {year} {footer.copyright}
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              {nav.map((item) => (
                <li key={item.sectionId}>
                  <a href={item.href} className="inline-flex min-h-11 items-center hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks />
        </div>
        {footer.builtWith ? (
          <p className="text-xs text-muted">{footer.builtWith}</p>
        ) : null}
      </Container>
    </footer>
  )
}
