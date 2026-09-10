import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const htmlPath = path.join(rootDir, 'public', 'cv', 'karan.html')
const pdfPath = path.join(rootDir, 'public', 'resume.pdf')

if (!fs.existsSync(htmlPath)) {
  console.error(`Error: HTML resume not found at ${htmlPath}`)
  process.exit(1)
}

function findChrome() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH
  }

  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    'google-chrome',
    'google-chrome-stable',
    'chromium',
    'chromium-browser',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  ]

  for (const candidate of candidates) {
    try {
      if (candidate.startsWith('/') || candidate.includes(':\\')) {
        if (fs.existsSync(candidate)) return candidate
      } else {
        execSync(`which ${candidate}`, { stdio: 'ignore' })
        return candidate
      }
    } catch {
      // Continue to next candidate
    }
  }

  return null
}

const chromePath = findChrome()

if (!chromePath) {
  console.error('Error: Google Chrome or Chromium executable not found.')
  console.error('Please set CHROME_PATH environment variable to your Chrome/Chromium binary.')
  process.exit(1)
}

console.log(`Using Chrome binary: ${chromePath}`)
console.log(`Converting ${htmlPath} -> ${pdfPath}...`)

const htmlUrl = `file://${path.resolve(htmlPath)}`

try {
  execSync(
    `"${chromePath}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${htmlUrl}"`,
    { stdio: 'inherit' },
  )
  console.log(`Successfully generated updated resume PDF at ${pdfPath}`)
} catch (error) {
  console.error('Failed to generate PDF:', error.message)
  process.exit(1)
}
