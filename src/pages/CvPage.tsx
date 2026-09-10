import { useEffect } from 'react'

export default function CvPage() {
  useEffect(() => {
    window.location.replace('/cv/karan.html')
  }, [])

  return (
    <div className="min-h-screen bg-[#383c3f] text-slate-300 flex items-center justify-center font-sans">
      <div className="text-center">
        <p className="text-sm font-medium">Opening Resume…</p>
      </div>
    </div>
  )
}
