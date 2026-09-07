import { Outlet } from 'react-router-dom'
import { SkipLink } from '../common/SkipLink.tsx'
import { BackToTop } from './BackToTop.tsx'
import { Footer } from './Footer.tsx'
import { Navbar } from './Navbar.tsx'
import { ScrollProgress } from './ScrollProgress.tsx'

export function PortfolioLayout() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-background text-fg">
      <div className="grain" aria-hidden="true" />
      <SkipLink />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
