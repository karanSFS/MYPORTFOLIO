import type { PortfolioConfig } from '../types/portfolio.ts'

/**
 * Fill email, resumeUrl, phone, and socialLinks[].href before sharing with recruiters.
 */
export const gursewakConfig: PortfolioConfig = {
  personal: {
    name: 'Gursewak Singh',
    firstName: 'Gursewak',
    lastName: 'Singh',
    initials: 'GS',
    jobTitle: 'Frontend Developer',
    tagline: 'Frontend Developer building modern, scalable web experiences.',
    profileImage: '/images/profile/avatar.jpg',
    resumeUrl: '', // e.g. '/resume.pdf' — place file in public/resume.pdf
    email: '',
    phone: '',
    location: 'Mohali, India',
    availability: 'Available for opportunities',
    yearsOfExperience: '1+',
    projectCount: '5+',
  },
  seo: {
    siteUrl: 'https://gursewak.dev',
    title:
      'Gursewak Singh | Frontend Developer – React, TypeScript & SaaS',
    description:
      'Frontend Developer specializing in React, TypeScript, modern SaaS applications, responsive UI/UX, real-time workflows, APIs, Stripe integrations, and AI-powered web experiences.',
    ogImage: '/og-image.png',
    keywords: [
      'React',
      'Next.js',
      'TypeScript',
      'SaaS',
      'Frontend Architecture',
      'Stripe',
      'AI integrations',
      'Supabase',
    ],
  },
  hero: {
    availabilityBadge: 'Open to opportunities',
    greeting: "Hi, I'm",
    description:
      'I ship production SaaS frontends — dashboards, billing flows, real-time workflows, and AI-connected interfaces — with systems that stay maintainable as the product grows.',
    primaryCta: { label: 'View selected work', href: '#projects' },
    secondaryCta: { label: 'Download Resume', href: '' },
    focusLine: 'Currently shipping production SaaS at Sunfocus',
  },
  about: {
    sectionNumber: '01',
    heading: 'Turning Ideas Into Real Products',
    description:
      'I design and build production frontend systems for SaaS platforms, operational dashboards, real-time workflows, and AI-connected interfaces. My work sits at the intersection of reusable architecture, careful UI/UX, and the APIs, payments, and data layers that make products actually run.',
    image: '/images/profile/avatar.jpg',
    valueCards: [
      {
        title: 'Systems over screens',
        description: 'Shared tables, forms, and status models that scale across product domains.',
      },
      {
        title: 'Operational honesty',
        description: 'UI that reflects real workflow states — empty, loading, failed, recovered.',
      },
      {
        title: 'Product ownership',
        description: 'Shipping against business constraints, not just ticket acceptance criteria.',
      },
      {
        title: 'Craft with restraint',
        description: 'Typography, spacing, and interaction used to clarify — never to decorate.',
      },
    ],
  },
  nav: [
    { label: 'Home', href: '/#home', sectionId: 'home' },
    { label: 'About', href: '/#about', sectionId: 'about' },
    { label: 'Projects', href: '/#projects', sectionId: 'projects' },
    { label: 'Experience', href: '/#experience', sectionId: 'experience' },
    { label: 'Skills', href: '/#skills', sectionId: 'skills' },
    { label: 'Contact', href: '/#contact', sectionId: 'contact' },
  ],
  stats: [
    { value: '1+', label: 'Years in production' },
    { value: '5', label: 'Shipped products' },
    { value: 'SaaS', label: 'Primary domain' },
  ],
  projectFilters: ['All', 'SaaS', 'AI', 'Frontend', 'Full Stack', 'Extensions'],
  projects: [
    {
      slug: 'syncro',
      title: 'SYNCRO',
      category: 'Creator Monetization & Growth Platform',
      filters: ['SaaS', 'Full Stack', 'Frontend'],
      shortDescription:
        'Creator monetization platform containing storefronts, digital products, courses, bookings, social media automation, revenue analytics, subscriptions, and AI-powered creator insights.',
      stack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Ant Design', 'Redux', 'Stripe'],
      image: '/images/projects/syncro/cover.png',
      liveUrl: 'https://syncro.net.in',
      githubUrl: '',
      featured: true,
      seoTitle: 'SYNCRO – Creator Monetization Platform | Gursewak Singh',
      seoDescription:
        'Case study of SYNCRO, a creator monetization and growth platform built with React, Next.js, TypeScript, and Stripe.',
      caseStudy: {
        overview:
          'SYNCRO is a creator-economy SaaS that lets creators sell products, run courses, take bookings, automate social posting, and understand revenue — in one operational surface.',
        role: 'Frontend Developer responsible for product UI, reusable design system pieces, Stripe-connected flows, and analytics surfaces.',
        roleTags: ['UI systems', 'Stripe flows', 'Analytics', 'Commerce modules'],
        problem:
          'Creators were stitching together storefronts, booking tools, course platforms, and analytics. The result was fragmented workflows and no single view of revenue or audience activity.',
        solution:
          'A unified Next.js application with modular product domains, a shared component system, subscription billing, and AI-assisted insights that sit on top of creator activity and sales data.',
        features: [
          'Customizable creator storefronts and digital product catalogs',
          'Course and booking workflows with operational states',
          'Social media automation hooks',
          'Revenue analytics and subscription management',
          'AI-powered creator insights',
        ],
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'Redux', 'Stripe'],
        decisions: [
          { challenge: 'Commerce and content domains duplicated UI logic', decision: 'Shared table, form, and status primitives across product types', outcome: 'Faster feature shipping without one-off screens' },
          { challenge: 'Subscription states were hard for the UI to trust', decision: 'Stripe as billing source of truth; UI mirrors checkout and subscription states', outcome: 'Fewer billing edge-case bugs in the interface' },
          { challenge: 'Analytics became noisy as datasets grew', decision: 'Composable analytics widgets with a consistent density language', outcome: 'Readable revenue views under real usage' },
        ],
        screenshots: [
          '/images/projects/syncro/cover.png',
          '/images/projects/syncro/screenshot-2.png',
        ],
        metrics: [
          { label: 'Product domains', value: '6+' },
          { label: 'Shared primitives', value: 'Tables · Forms · Status' },
          { label: 'Billing', value: 'Stripe-native' },
        ],
        pullQuote: 'A creator product fails when billing, content, and ops are treated as separate apps.',
        results: [
          'Shipped a production-ready creator platform covering storefronts, courses, bookings, and revenue in one product',
          'Reduced UI duplication across commerce surfaces through reusable system components',
        ],
        learned: [
          'Creator products fail when billing, content, and operations are treated as separate apps',
          'A disciplined component system is what makes a large SaaS frontend shippable',
        ],
      },
    },
    {
      slug: 'nrs-crm-pro',
      title: 'NRS CRM Pro',
      category: 'CRM & Field Service Management SaaS',
      filters: ['SaaS', 'Frontend', 'Full Stack'],
      shortDescription:
        'Production CRM and field-service management platform containing customer management, dispatch workflows, operational dashboards, reusable data tables, dynamic forms, and API-driven workflows.',
      stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'REST APIs'],
      image: '/images/projects/nrs-crm-pro/cover.jpg',
      liveUrl: '', // paste real app URL — Live website then appears on the card
      githubUrl: '',
      featured: true,
      seoTitle: 'NRS CRM Pro – Field Service SaaS | Gursewak Singh',
      seoDescription:
        'Case study of NRS CRM Pro, a production CRM and field-service platform built with React, Next.js, TypeScript, and REST APIs.',
      caseStudy: {
        overview:
          'NRS CRM Pro is a production CRM used for customer records, dispatch, and day-to-day field operations. The frontend had to be fast, consistent, and resilient under real operational use.',
        role: 'Frontend Developer owning reusable tables, dynamic forms, dashboards, and API-driven workflow screens.',
        roleTags: ['Data tables', 'Dynamic forms', 'Dispatch UI', 'REST workflows'],
        problem:
          'Field teams needed a single operational system for customers, jobs, and dispatch. Ad-hoc UI would not survive the volume of records, filters, and status changes involved.',
        solution:
          'A Next.js CRM with shared data-table and form primitives, dashboard modules, and REST-driven workflows that keep dispatch and customer state in sync.',
        features: [
          'Customer management with dense, filterable records',
          'Dispatch workflows and operational status handling',
          'Reusable data tables and dynamic forms',
          'API-driven dashboards for live operations',
        ],
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'REST APIs'],
        decisions: [
          { challenge: 'Large record tables were hard to use at scale', decision: 'Ant Design primitives customized into a product-specific table system', outcome: 'Dense but scannable operational records' },
          { challenge: 'Forms needed flexibility without chaos', decision: 'Dynamic form configs with shared validation language', outcome: 'One pattern for many workflow screens' },
          { challenge: 'Backend statuses drifted across screens', decision: 'Centralized API mapping for workflow state', outcome: 'Consistent status language product-wide' },
        ],
        screenshots: [
          '/images/projects/nrs-crm-pro/cover.jpg',
          '/images/projects/nrs-crm-pro/screenshot-2.jpg',
          '/images/projects/nrs-crm-pro/screenshot-3.jpg',
        ],
        metrics: [
          { label: 'Surface type', value: 'Ops CRM' },
          { label: 'Reuse pattern', value: 'Tables + forms' },
          { label: 'Integration', value: 'REST-driven' },
        ],
        pullQuote: 'Operational SaaS is won in empty states, filters, and status honesty.',
        results: [
          'Delivered production CRM screens used for real customer and dispatch operations',
          'Established reusable table/form patterns reused across multiple workflow modules',
        ],
        learned: [
          'Operational SaaS is won in the details: empty states, filters, and status honesty',
          'Reusable data interfaces matter more than one visually unique screen',
        ],
      },
    },
    {
      slug: 'codenudge',
      title: 'CodeNudge',
      category: 'AI Coding Assistant Browser Extension',
      filters: ['AI', 'Extensions', 'Frontend'],
      shortDescription:
        'AI-powered browser extension providing real-time chat, debugging support, contextual coding assistance, progressive hints, DOM extraction, multi-model streaming, authentication, and caching.',
      stack: ['React', 'TypeScript', 'Vite', 'Zustand', 'Supabase', 'OpenAI', 'Gemini', 'Groq'],
      image: '',
      liveUrl: '', // paste real app URL — Live website then appears on the card
      githubUrl: '',
      featured: false,
      seoTitle: 'CodeNudge – AI Coding Assistant | Gursewak Singh',
      seoDescription:
        'Case study of CodeNudge, an AI coding assistant browser extension with multi-model streaming, contextual assistance, and Supabase auth.',
      caseStudy: {
        overview:
          'CodeNudge is a browser extension that sits next to the page a developer is working on. It streams assistance from multiple models, extracts DOM context, and caches responses so the experience stays fast.',
        role: 'Frontend Developer for the extension UI, streaming chat experience, auth, and model-switching flows.',
        roleTags: ['Streaming UI', 'Multi-model', 'Extension UX', 'Auth + cache'],
        problem:
          'Generic chat tools lack page context. Developers needed assistance that understood the current DOM, offered progressive hints, and did not lock them to a single model provider.',
        solution:
          'A Vite + React extension with contextual extraction, streaming chat, progressive hinting, Supabase authentication, and a caching layer across OpenAI, Gemini, and Groq.',
        features: [
          'Real-time streaming chat with multiple model providers',
          'Contextual coding assistance and progressive hints',
          'DOM extraction for page-aware answers',
          'Authentication and response caching',
        ],
        technologies: ['React', 'TypeScript', 'Vite', 'Zustand', 'Supabase', 'OpenAI', 'Gemini', 'Groq'],
        decisions: [
          { challenge: 'Streaming tokens caused jank in a small surface', decision: 'Explicit stream states with progressive render', outcome: 'Responsive chat under live token load' },
          { challenge: 'DOM context payloads were noisy', decision: 'Selective extraction with payload budgets', outcome: 'Useful answers without oversized requests' },
          { challenge: 'Three model APIs fractured the UI', decision: 'Provider adapters behind one conversation model', outcome: 'One chat surface, swappable backends' },
        ],
        screenshots: [],
        metrics: [
          { label: 'Model providers', value: '3' },
          { label: 'Core UX', value: 'Live streaming' },
          { label: 'Context', value: 'DOM-aware' },
        ],
        pullQuote: 'AI product quality is as much about context selection as the model.',
        results: [
          'Shipped a working multi-model assistant with streaming, auth, and contextual hints',
          'Kept the extension UI responsive while handling live token streams',
        ],
        learned: [
          'AI product quality is as much about context selection as it is about the model',
          'Streaming UI needs explicit empty, loading, and interrupted states',
        ],
      },
    },
    {
      slug: 'velvetwave',
      title: 'VelvetWave',
      category: 'Music Streaming SaaS',
      filters: ['SaaS', 'Full Stack'],
      shortDescription:
        'Full-stack music platform containing continuous audio playback, playlist management, artist analytics, subscriptions, creator payouts, PostgreSQL, and Row Level Security.',
      stack: ['Next.js', 'Supabase', 'PostgreSQL', 'Zustand', 'Stripe Checkout', 'Stripe Connect'],
      image: '/images/projects/velvetwave/cover.jpg',
      liveUrl: '', // paste real app URL — Live website then appears on the card
      githubUrl: '',
      featured: false,
      seoTitle: 'VelvetWave – Music Streaming SaaS | Gursewak Singh',
      seoDescription:
        'Case study of VelvetWave, a music streaming SaaS with continuous playback, subscriptions, and Stripe Connect payouts.',
      caseStudy: {
        overview:
          'VelvetWave is a full-stack music platform: continuous playback, playlists, artist analytics, listener subscriptions, and creator payouts, backed by PostgreSQL and Row Level Security.',
        role: 'Frontend-focused full-stack work across playback UI, subscription checkout, and artist-facing analytics.',
        roleTags: ['Audio shell', 'Stripe Connect', 'RLS-aware UI', 'Artist analytics'],
        problem:
          'Independent artists needed a listening experience and a way to get paid. Building those as disconnected tools would break the product story.',
        solution:
          'A Next.js application with a persistent audio shell, Supabase-backed catalogs and policies, Stripe Checkout for listeners, and Stripe Connect for artist payouts.',
        features: [
          'Continuous audio playback that survives navigation',
          'Playlist management and catalog browsing',
          'Artist analytics dashboards',
          'Subscriptions and creator payouts',
        ],
        technologies: ['Next.js', 'Supabase', 'PostgreSQL', 'Zustand', 'Stripe Checkout', 'Stripe Connect'],
        decisions: [
          { challenge: 'Audio stopped on route changes', decision: 'Shell-level player outside page ownership', outcome: 'Continuous playback across navigation' },
          { challenge: 'RLS permissions leaked into confusing UI', decision: 'Permission-aware actions that hide unauthorized paths', outcome: 'Honest artist vs listener surfaces' },
          { challenge: 'Listener billing and artist payouts conflicted mentally', decision: 'Separate Checkout and Connect flows with shared account chrome', outcome: 'Clear two-sided payment story' },
        ],
        screenshots: [
          '/images/projects/velvetwave/cover.jpg',
          '/images/projects/velvetwave/screenshot-2.jpg',
          '/images/projects/velvetwave/screenshot-3.jpg',
        ],
        metrics: [
          { label: 'Playback', value: 'Route-persistent' },
          { label: 'Payments', value: 'Checkout + Connect' },
          { label: 'Data layer', value: 'Postgres + RLS' },
        ],
        pullQuote: 'Media products live or die by the player surviving everything else in the UI.',
        results: [
          'Delivered a coherent streaming product with subscriptions and payouts in the same system',
          'Used RLS as a product constraint, not only a database feature',
        ],
        learned: [
          'Media products live or die by the player surviving everything else in the UI',
          'Payments for two-sided marketplaces need separate mental models in the frontend',
        ],
      },
    },
    {
      slug: 'sahil-property',
      title: 'Sahil Property',
      category: 'Real Estate Management Platform',
      filters: ['Full Stack', 'Frontend', 'SaaS'],
      shortDescription:
        'Full-stack real estate marketplace with property listings, inquiries, Supabase authentication, media storage, SSR, and SEO optimization.',
      stack: ['React', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind'],
      image: '/images/projects/sahil-property/cover.jpg',
      liveUrl: '', // paste real app URL — Live website then appears on the card
      githubUrl: '',
      featured: false,
      seoTitle: 'Sahil Property – Real Estate Platform | Gursewak Singh',
      seoDescription:
        'Case study of Sahil Property, a real estate marketplace with listings, inquiries, Supabase auth, SSR, and SEO.',
      caseStudy: {
        overview:
          'Sahil Property is a real estate marketplace for listings, inquiries, and media-rich property pages, with authentication, storage, SSR, and search-engine-conscious rendering.',
        role: 'Frontend Developer for listing experiences, inquiry flows, auth-connected UI, and SEO-sensitive pages.',
        roleTags: ['SSR listings', 'Inquiry flows', 'Supabase auth', 'SEO pages'],
        problem:
          'Property businesses need public listing pages that rank and convert, plus authenticated tools for managing inventory and inquiries — without maintaining two disconnected sites.',
        solution:
          'A Next.js marketplace with SSR listing pages, Supabase auth and storage, PostgreSQL-backed records, and inquiry workflows that connect public visitors to operators.',
        features: [
          'Property listings with media galleries',
          'Inquiry capture and follow-up flows',
          'Supabase authentication and storage',
          'SSR and SEO-optimized public pages',
        ],
        technologies: ['React', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
        decisions: [
          { challenge: 'Media-heavy listings needed to stay crawlable', decision: 'SSR for public listing routes with structured metadata', outcome: 'Search-ready property pages' },
          { challenge: 'Anonymous inquiries vs authenticated ops', decision: 'Clear ownership path from visitor to operator inbox', outcome: 'Reliable follow-up loop' },
          { challenge: 'Public and admin listing views drifted', decision: 'Shared listing types across both surfaces', outcome: 'One source of truth for inventory' },
        ],
        screenshots: [
          '/images/projects/sahil-property/cover.jpg',
          '/images/projects/sahil-property/screenshot-2.jpg',
          '/images/projects/sahil-property/screenshot-projects.jpg',
        ],
        metrics: [
          { label: 'Public pages', value: 'SSR + SEO' },
          { label: 'Auth', value: 'Supabase' },
          { label: 'Loop', value: 'List → Inquire' },
        ],
        pullQuote: 'Marketplace SEO is a frontend architecture problem, not a late meta-tag pass.',
        results: [
          'Shipped a full listing-to-inquiry loop with authenticated management on the same codebase',
          'Built public pages with SSR and structured metadata as a first-class requirement',
        ],
        learned: [
          'Marketplace SEO is a frontend architecture problem, not a late meta-tag pass',
          'Inquiry products need a clear ownership path from visitor to operator',
        ],
      },
    },
  ],
  skills: [
    {
      id: 'frontend',
      label: 'Frontend',
      items: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'Ant Design',
        'styled-components',
        'Redux Toolkit',
        'Zustand',
      ],
    },
    {
      id: 'backend',
      label: 'Backend / Database',
      items: ['Supabase', 'Firebase', 'PostgreSQL', 'MongoDB', 'Neon DB'],
    },
    {
      id: 'integrations',
      label: 'Integrations',
      items: ['REST APIs', 'Stripe', 'OpenAI', 'Gemini', 'Groq'],
    },
    {
      id: 'tools',
      label: 'Tools',
      items: ['Git', 'GitHub', 'Vercel', 'Vite', 'VS Code', 'Cursor'],
    },
  ],
  competencies: [
    'Frontend Architecture & Reusable Systems',
    'Production CRM & SaaS Platforms',
    'Real-Time State & Data Handling',
    'AI Model Integration & Streaming',
    'Stripe Subscription & Payout Flows',
    'Responsive UI/UX',
    'Cross-Browser Development',
    'Performance Optimization',
    'Bug Resolution',
    'API Integration',
    'Agile Teamwork',
    'Strong Code Ownership',
  ],
  experience: [
    {
      company: 'Sunfocus Solutions Pvt. Ltd.',
      role: 'Frontend Developer',
      period: 'January 2025 – Present',
      location: 'Mohali, India',
      highlights: [
        'Own production frontend delivery for SaaS products including SYNCRO and NRS CRM Pro',
        'Build reusable table, form, and status systems used across multiple product domains',
        'Ship Stripe-connected, API-driven, and real-time workflows in React + TypeScript',
        'Improve performance and resolve production bugs under real business constraints',
      ],
    },
    {
      company: 'Sunfocus Solutions Pvt. Ltd.',
      role: 'Full Stack Intern',
      period: 'July 2024 – December 2024',
      location: 'Mohali, India',
      highlights: [
        'Completed a six-month development internship',
        'Built modules using React, MongoDB, and Tailwind CSS',
        'Developed interactive forms and state-management workflows',
        'Created reusable UI components',
        'Learned production development practices',
      ],
    },
  ],
  education: [
    {
      degree: 'B.E. Computer Science',
      school: 'Chandigarh University',
      period: '2020 – 2024',
      detail: 'CGPA: 8.00 / 10.0',
    },
  ],
  socialLinks: [
    { id: 'github', label: 'GitHub', href: '' },
    { id: 'linkedin', label: 'LinkedIn', href: '' },
    { id: 'email', label: 'Email', href: '' },
  ],
  contact: {
    heading: "Let's Build Something Great",
    description:
      "I'm open to interesting frontend opportunities, SaaS products, challenging development work, and collaborations.",
    form: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitLabel: 'Send Message',
      successMessage: 'Thanks — your message is on its way. I will get back to you shortly.',
      errorMessage: 'Something went wrong while sending. Please try again or email me directly.',
      missingKeyMessage:
        'The contact form is not connected yet. Add a Web3Forms key to enable sending.',
      subject: 'Portfolio contact from Gursewak Singh',
    },
  },
  footer: {
    copyright: 'Gursewak Singh',
    builtWith: 'Built with React + TypeScript',
  },
  theme: {
    mode: 'dark',
    primary: '#D4784A',
    secondary: '#C4B59A',
    background: '#12110F',
    surface: '#1C1A17',
    surfaceSecondary: '#26221C',
    textPrimary: '#F2EDE6',
    textSecondary: '#A39A8E',
    border: 'rgba(242,237,230,0.10)',
    success: '#7A9E6E',
  },
  cta: {
    letsTalk: "Let's Talk",
    viewWork: 'View My Work',
    openResume: 'Open Resume',
    downloadResume: 'Download Resume',
    viewCaseStudy: 'View case study',
    liveSite: 'Live website',
    sourceCode: 'GitHub',
  },
}
