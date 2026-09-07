import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeProvider.tsx'
import { PortfolioLayout } from './components/layout/PortfolioLayout.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'

const ProjectCaseStudyPage = lazy(() => import('./pages/ProjectCaseStudyPage.tsx'))

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView()
      })
      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="projects/:slug"
            element={
              <Suspense
                fallback={
                  <div className="text-muted flex min-h-[50vh] items-center justify-center text-sm">
                    Loading case study…
                  </div>
                }
              >
                <ProjectCaseStudyPage />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}
