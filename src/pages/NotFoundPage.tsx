import { portfolioConfig } from '../config/index.ts'
import { Button } from '../components/common/Button.tsx'
import { Container } from '../components/common/Container.tsx'
import { Seo } from '../components/common/Seo.tsx'

export function NotFoundPage() {
  const { personal } = portfolioConfig

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Seo
        title={`Page not found | ${personal.name}`}
        description={`The page you requested does not exist on ${personal.name}'s portfolio.`}
        path="/404"
      />
      <p className="text-xs tracking-[0.2em] text-muted uppercase">404</p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-fg">This page is missing</h1>
      <p className="mt-3 max-w-md text-muted">
        The route does not match a portfolio page or project case study.
      </p>
      <Button href="/" className="mt-8" arrow>
        Back home
      </Button>
    </Container>
  )
}
