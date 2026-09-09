import {
  ArrowLeft,
  Download,
  ExternalLink,
  FileCode,
  FileText,
  Printer,
} from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/common/Seo.tsx'
import { portfolioConfig } from '../config/index.ts'

export default function CvPage() {
  const { personal } = portfolioConfig
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState('1180px')

  const adjustIframe = useCallback(() => {
    try {
      const doc = iframeRef.current?.contentDocument
      if (!doc) return

      // Tell iframe it is embedded so internal floating dock is hidden
      doc.body.classList.add('is-embedded')

      // Auto-compute natural scroll height so there is zero nested scrollbar
      const pageEl = doc.getElementById('resume-page')
      const targetHeight = Math.max(
        pageEl ? pageEl.scrollHeight : 0,
        doc.documentElement.scrollHeight,
        doc.body.scrollHeight,
        1100,
      )
      setIframeHeight(`${targetHeight + 24}px`)
    } catch {
      // Fallback for cross-origin or restricted environments
      setIframeHeight('1280px')
    }
  }, [])

  useEffect(() => {
    adjustIframe()
    window.addEventListener('resize', adjustIframe)
    return () => window.removeEventListener('resize', adjustIframe)
  }, [adjustIframe])

  const handlePrint = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.focus()
      iframeRef.current.contentWindow.print()
    } else {
      window.print()
    }
  }

  return (
    <div className="min-h-screen bg-[#1e2225] flex flex-col font-sans">
      <Seo
        title={`${personal.name} - Curriculum Vitae`}
        description={`Official Curriculum Vitae of ${personal.name}, ${personal.jobTitle}. View in browser and download as PDF or HTML.`}
        path="/cv"
      />

      {/* Top Header Control Bar */}
      <header className="sticky top-0 z-40 bg-[#121518]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3 shadow-md flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="font-semibold tracking-wider text-slate-300 uppercase">
              HTML Resume View
            </span>
          </div>
        </div>

        {/* Action Buttons: PDF Download, Print, HTML Download, Fullscreen View */}
        <div className="flex items-center gap-2">
          {/* Primary Action: Direct PDF Download */}
          <a
            href="/resume.pdf"
            download="Karan_Kumar_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm"
            title="Download official PDF resume"
          >
            <Download className="size-3.5" />
            <span>Download PDF</span>
          </a>

          {/* Print / Save as PDF via Browser */}
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-sm"
            title="Print or export as PDF via browser print dialog"
          >
            <Printer className="size-3.5" />
            <span className="hidden sm:inline">Print</span>
          </button>

          {/* Download HTML Source */}
          <a
            href="/cv/karan.html"
            download="karan.html"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 transition-colors border border-white/15"
            title="Download standalone HTML resume file"
          >
            <FileCode className="size-3.5" />
            <span className="hidden md:inline">Download HTML</span>
          </a>

          {/* Open Raw HTML in New Tab */}
          <a
            href="/cv/karan.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Open raw HTML file in a new browser tab"
          >
            <ExternalLink className="size-3.5" />
            <span className="hidden lg:inline">Open Fullscreen</span>
          </a>
        </div>
      </header>

      {/* Notice Banner */}
      <div className="bg-[#171b1f] border-b border-white/5 px-4 py-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
        <FileText className="size-3.5 text-slate-300" />
        <span>
          Viewing HTML resume format. You can directly <strong className="text-white">Download PDF</strong> or <strong className="text-white">Download HTML</strong> using the buttons above.
        </span>
      </div>

      {/* Main Content Area - Renders the clean HTML resume with zero cut-off */}
      <main className="flex-1 w-full flex justify-center items-start py-6 px-2 sm:px-6">
        <div className="w-full max-w-[214mm] bg-white rounded-md shadow-2xl overflow-hidden border border-black/10">
          <iframe
            ref={iframeRef}
            src="/cv/karan.html"
            title="Karan Kumar CV"
            className="w-full border-none block"
            style={{ height: iframeHeight, minHeight: '1080px' }}
            onLoad={adjustIframe}
          />
        </div>
      </main>
    </div>
  )
}
