import {
  ArrowLeft,
  Check,
  Download,
  ExternalLink,
  Lock,
  Printer,
  RotateCcw,
  Sparkles,
  Unlock,
} from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/common/Button.tsx'
import { Seo } from '../components/common/Seo.tsx'
import { portfolioConfig } from '../config/index.ts'

const STORAGE_KEY = 'karan_cv_custom_content_v1'
const CORRECT_PIN = 'karan2001'

export default function CvPage() {
  const { personal } = portfolioConfig
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isEditing, setIsEditing] = useState(
    () => typeof window !== 'undefined' && sessionStorage.getItem('karan_cv_authenticated') === 'true',
  )
  const [showPinModal, setShowPinModal] = useState(false)
  const [enteredPin, setEnteredPin] = useState('')
  const [pinError, setPinError] = useState(false)
  const [savedSuccess, setSavedSuccess] = useState(false)
  const [iframeHeight, setIframeHeight] = useState('1180px')

  const adjustIframe = useCallback(() => {
    try {
      const doc = iframeRef.current?.contentDocument
      if (!doc) return
      doc.body.classList.add('is-embedded')

      // Ensure inner duplicate bars are hidden inside our studio
      const innerEditBar = doc.getElementById('edit-mode-bar')
      if (innerEditBar) innerEditBar.style.display = 'none'
      const innerDock = doc.querySelector('.cv-floating-dock') as HTMLElement | null
      if (innerDock) innerDock.style.display = 'none'

      const wrapper = doc.getElementById('resume-wrapper')
      if (wrapper) {
        if (isEditing) {
          doc.body.classList.add('is-editing')
          wrapper.setAttribute('contenteditable', 'true')
        } else {
          doc.body.classList.remove('is-editing')
          wrapper.removeAttribute('contenteditable')
        }
      }

      // Compute natural scroll height so iframe has zero nested scrollbar
      const pageEl = doc.getElementById('resume-page')
      const targetHeight = Math.max(
        pageEl ? pageEl.scrollHeight : 0,
        doc.documentElement.scrollHeight,
        doc.body.scrollHeight,
        1100,
      )
      setIframeHeight(`${targetHeight + 20}px`)
    } catch {
      // Cross-origin fallback
    }
  }, [isEditing])

  useEffect(() => {
    adjustIframe()
  }, [adjustIframe])

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    if (enteredPin.trim() === CORRECT_PIN) {
      sessionStorage.setItem('karan_cv_authenticated', 'true')
      setIsEditing(true)
      setShowPinModal(false)
      setEnteredPin('')
      setPinError(false)
    } else {
      setPinError(true)
    }
  }

  const handlePrint = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.focus()
      iframeRef.current.contentWindow.print()
    } else {
      window.print()
    }
  }

  const handleDownloadHtml = () => {
    try {
      const doc = iframeRef.current?.contentDocument
      if (doc) {
        const wrapper = doc.getElementById('resume-wrapper')
        if (wrapper) {
          localStorage.setItem(STORAGE_KEY, wrapper.innerHTML)
        }

        // Clone document and strip temporary editing artifacts
        const docClone = doc.documentElement.cloneNode(true) as HTMLElement
        docClone.querySelectorAll('[contenteditable]').forEach((el) => el.removeAttribute('contenteditable'))
        const editBar = docClone.querySelector('#edit-mode-bar') as HTMLElement | null
        if (editBar) editBar.style.display = 'none'
        const bodyClone = docClone.querySelector('body')
        if (bodyClone) {
          bodyClone.classList.remove('is-editing')
          bodyClone.classList.remove('is-embedded')
        }

        const fullHtml = '<!DOCTYPE html>\n' + docClone.outerHTML
        const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'karan.html'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      } else {
        window.open('/cv/karan.html', '_blank')
      }
    } catch {
      window.open('/cv/karan.html', '_blank')
    }
  }

  const handleSaveToBrowser = () => {
    try {
      const doc = iframeRef.current?.contentDocument
      const wrapper = doc?.getElementById('resume-wrapper')
      if (wrapper) {
        localStorage.setItem(STORAGE_KEY, wrapper.innerHTML)
        setSavedSuccess(true)
        setTimeout(() => setSavedSuccess(false), 2500)
      }
    } catch {
      // Ignore
    }
  }

  const handleReset = () => {
    if (window.confirm('Reset all edits back to default original content?')) {
      localStorage.removeItem(STORAGE_KEY)
      if (iframeRef.current) {
        iframeRef.current.src = '/cv/karan.html?reset=' + Date.now()
      }
    }
  }

  const handleLock = () => {
    setIsEditing(false)
    sessionStorage.removeItem('karan_cv_authenticated')
  }

  return (
    <div className="min-h-screen bg-[#242729] flex flex-col font-sans">
      <Seo
        title={`${personal.name} - Interactive CV & Resume`}
        description={`Interactive CV of ${personal.name}, ${personal.jobTitle}. View, edit, print, and download.`}
        path="/cv"
      />

      {/* Top Header Control Bar */}
      <header className="sticky top-0 z-40 bg-[#14171a]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3 shadow-md flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
          >
            <ArrowLeft className="size-3.5" />
            Back to Portfolio
          </Link>
          <span className="hidden sm:inline text-xs font-semibold tracking-wider text-slate-400 uppercase">
            CV Studio
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isEditing && (
            <div className="flex items-center gap-2 mr-2">
              <button
                type="button"
                onClick={handleSaveToBrowser}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm"
                title="Save changes to local browser storage"
              >
                {savedSuccess ? <Check className="size-3.5" /> : null}
                {savedSuccess ? 'Saved!' : 'Save Edits'}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                title="Reset to Original"
              >
                <RotateCcw className="size-3.5" />
                Reset
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-sm"
            title="Print or Export as PDF"
          >
            <Printer className="size-3.5" />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadHtml}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 transition-colors border border-white/15"
            title="Download karan.html"
          >
            <Download className="size-3.5" />
            <span className="hidden sm:inline">Download HTML</span>
          </button>

          <a
            href="/cv/karan.html"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-colors"
            title="Open raw HTML file in new tab"
          >
            <ExternalLink className="size-3.5" />
          </a>

          {/* Edit Mode Toggle with Passcode Protection */}
          {isEditing ? (
            <button
              type="button"
              onClick={handleLock}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/40 transition-colors"
            >
              <Lock className="size-3.5" />
              Lock CV
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowPinModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-500/20 text-teal-300 hover:bg-teal-500/30 border border-teal-500/40 transition-colors"
              title="Karan's Access Only (Passcode: karan2001)"
            >
              <Unlock className="size-3.5" />
              Edit CV
            </button>
          )}
        </div>
      </header>

      {/* Edit Mode Active Banner */}
      {isEditing && (
        <div className="bg-gradient-to-r from-teal-950 via-emerald-950 to-teal-950 border-b border-teal-500/30 px-4 py-2 text-center text-xs text-teal-200 flex items-center justify-center gap-2">
          <Sparkles className="size-3.5 text-teal-400 animate-pulse" />
          <span className="font-semibold">Owner Live Edit Mode Active:</span>
          <span>Click directly on the Name, Heading, Summary, or any bullet to edit. Use "Save Edits" or "Download HTML" to export!</span>
        </div>
      )}

      {/* Main Content Area - Fully visible top name and heading with zero overlapping bars */}
      <main className="flex-1 w-full flex justify-center items-start py-6 px-3 sm:px-6">
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

      {/* Passcode Modal for Owner Edit Mode */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-[#181c20] p-6 shadow-2xl text-slate-100">
            <div className="flex items-center gap-2.5 text-teal-400 mb-2">
              <Lock className="size-5" />
              <h3 className="text-base font-semibold text-white">Unlock CV Editor</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Direct in-place editing is restricted to Karan. Enter your passcode to unlock live editing mode and download updated versions.
            </p>

            <form onSubmit={handleUnlock} className="space-y-4">
              <div>
                <label htmlFor="cv-pin" className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                  Passcode
                </label>
                <input
                  id="cv-pin"
                  type="password"
                  value={enteredPin}
                  onChange={(e) => {
                    setEnteredPin(e.target.value)
                    setPinError(false)
                  }}
                  autoFocus
                  placeholder="Enter passcode"
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-white focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all font-mono"
                />
                {pinError && (
                  <p className="mt-1 text-xs text-rose-400">
                    Incorrect passcode. Access is restricted to Karan.
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="md"
                  onClick={() => {
                    setShowPinModal(false)
                    setEnteredPin('')
                    setPinError(false)
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" size="md" className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold">
                  Unlock Editor
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
