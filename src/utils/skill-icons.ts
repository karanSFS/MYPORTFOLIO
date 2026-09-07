import {
  BarChart3,
  Bot,
  Box,
  Braces,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Flame,
  GitBranch,
  Globe,
  KeyRound,
  Layout,
  Leaf,
  Mail,
  Network,
  Palette,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  SquareCode,
  Terminal,
  Wallet,
  Webhook,
  Wind,
  type LucideIcon,
} from 'lucide-react'
import { GitHubIcon } from '../components/common/BrandIcons.tsx'
import type { ComponentType, SVGProps } from 'react'

type Icon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>

const icons: Record<string, Icon> = {
  // Languages
  TypeScript: FileCode2,
  JavaScript: Braces,
  'JavaScript (ES6+)': Braces,
  SQL: Database,
  HTML: Globe,
  CSS: Palette,
  'HTML5/CSS3': Palette,

  // Frontend
  React: Code2,
  'React.js': Code2,
  'Next.js': SquareCode,
  'Next.js (App Router)': SquareCode,
  'Redux Toolkit': Box,
  Redux: Box,
  'RTK Query': Network,
  'Redux Persist': Database,
  'Tailwind CSS': Wind,
  Tailwind: Wind,
  'Ant Design': Layout,
  'styled-components': Palette,
  'Styled Components': Palette,
  'Framer Motion': Sparkles,
  Recharts: BarChart3,
  Vite: Wind,
  Zustand: Box,

  // Backend & Server-Side
  'Next.js Server APIs': Server,
  'Server Actions': Webhook,
  'Route Handlers': Network,
  'REST APIs': Server,
  'RESTful APIs': Server,
  Crawlee: Search,
  Cheerio: Search,
  Firecrawl: Flame,

  // Databases & Auth
  PostgreSQL: Database,
  Supabase: Database,
  'Supabase (Auth / RLS)': Database,
  'Neon DB': Database,
  MongoDB: Leaf,
  'OAuth 2.0': KeyRound,
  '2FA/JWT': ShieldCheck,

  // Cloud & Integrations
  Stripe: Wallet,
  'Stripe Billing': Wallet,
  'OpenRouter AI': Bot,
  'Google Gemini AI': Sparkles,
  Gemini: Sparkles,
  OpenAI: Sparkles,
  Groq: Cpu,
  Firebase: Flame,
  'Firebase (FCM)': Flame,
  DataForSEO: Search,
  Brevo: Mail,
  Vercel: Globe,
  Git: GitBranch,
  GitHub: GitHubIcon,

  // Tools & AI Assistants
  'Claude Code': Bot,
  Cursor: Terminal,
  Antigravity: Sparkles,
  Replit: SquareCode,
  Lovable: Sparkles,
  'VS Code': Terminal,
  Figma: Palette,
  Storybook: Layout,
}

export function skillIcon(name: string): Icon {
  return icons[name] ?? Code2
}

