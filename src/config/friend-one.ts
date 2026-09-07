import type { PortfolioConfig } from '../types/portfolio.ts'

export const friendOneConfig: PortfolioConfig = {
  personal: {
    name: 'Karan Kumar',
    firstName: 'Karan',
    lastName: 'Kumar',
    initials: 'KK',
    jobTitle: 'Full-Stack Developer',
    tagline: 'Full-Stack Developer building production SaaS platforms, AI integrations & scalable cloud architectures.',
    profileImage: '/images/profile/karan.png',
    resumeUrl: '/resume.pdf',
    email: 'karanjangral60@gmail.com',
    phone: '+91-7340795241',
    location: 'Punjab, India',
    availability: 'Available for opportunities',
    yearsOfExperience: '1+',
    projectCount: '5+',
  },
  seo: {
    siteUrl: 'https://karan.dev',
    title: 'Karan Kumar | Full-Stack Developer – Next.js, React, TypeScript, PostgreSQL & AI',
    description:
      'Full-Stack Developer with a proven record of architecting and shipping production-grade SaaS platforms, AI-powered web applications, PostgreSQL/Supabase multi-tenant systems, Stripe billing, and web crawling engines.',
    ogImage: '/og-image.png',
    keywords: [
      'Karan Kumar',
      'Full-Stack Developer',
      'Next.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Supabase',
      'AI Integration',
      'SaaS Architecture',
      'Stripe Billing',
      'Web Crawling',
      'OpenRouter AI',
      'Crawlee',
      'Firecrawl',
    ],
  },
  hero: {
    availabilityBadge: 'Open to opportunities',
    greeting: "Hi, I'm",
    description:
      'I architect and ship production-grade SaaS platforms and AI-powered web applications — combining secure Next.js server actions, multi-tenant PostgreSQL/Supabase backends, Stripe billing, and reactive React frontends.',
    primaryCta: { label: 'View selected work', href: '#projects' },
    secondaryCta: { label: 'Download Resume', href: '/resume.pdf' },
    focusLine: 'Currently shipping production SaaS at Sunfocus Solutions',
  },
  about: {
    sectionNumber: '01',
    heading: 'Architecting Scalable SaaS & AI-Powered Web Platforms',
    description:
      'I am a Full-Stack Developer specialized in end-to-end Next.js architecture, server-side APIs, Server Actions, and Route Handlers combined with responsive React/TypeScript user interfaces. My core focus spans multi-tenant database systems, Row Level Security (RLS), Stripe subscription pipelines, automated web crawling engines, and integrating modern AI models into real-world applications.',
    image: '/images/profile/karan.png',
    valueCards: [
      {
        title: 'Full-Stack SaaS Architecture',
        description: 'Designing resilient full-stack systems from schema design and server actions to reactive interfaces.',
      },
      {
        title: 'Multi-Tenant Security & RLS',
        description: 'Enforcing bulletproof data isolation with PostgreSQL Row Level Security and RBAC middleware.',
      },
      {
        title: 'AI & Data Crawling Engines',
        description: 'Automating web scraping with Crawlee & Firecrawl, connected with multi-model LLM generation.',
      },
      {
        title: 'Operational Discipline & Speed',
        description: 'Fast execution, robust caching, error boundary resilience, and clean production delivery.',
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
    { value: '5+', label: 'Shipped SaaS products' },
    { value: 'Full-Stack', label: 'Core focus' },
  ],
  projectFilters: ['All', 'SaaS', 'AI', 'Mobile', 'Full Stack', 'Frontend'],
  projects: [
    {
      slug: 'syncro',
      title: 'SYNCRO',
      category: 'Creator Monetization & Growth Platform',
      filters: ['SaaS', 'Full Stack', 'Frontend'],
      shortDescription:
        'Creator monetization platform containing storefronts, digital products, courses, bookings, lead capture, social media automation, and subscription monetization with Stripe checkout flows.',
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'Redux Toolkit', 'Stripe', 'AI Integrations', 'REST APIs'],
      image: '/images/projects/syncro/cover.png',
      liveUrl: 'https://syncro.net.in',
      githubUrl: '',
      featured: true,
      seoTitle: 'SYNCRO – Creator Monetization Platform | Karan Kumar',
      seoDescription:
        'Case study of SYNCRO, a creator monetization and growth platform built with Next.js, React, TypeScript, Stripe, and AI integrations.',
      caseStudy: {
        overview:
          'SYNCRO is a creator monetization & growth SaaS platform that lets creators sell digital products, run courses, take bookings, capture leads, automate social publishing, and analyze revenue in one unified surface.',
        role: 'Full-Stack Developer responsible for creator dashboards, workflows, storefronts, Stripe checkout flows, social media automation, and AI growth analytics.',
        roleTags: ['Full-Stack Architecture', 'Stripe Billing', 'AI Integrations', 'Creator Dashboards'],
        problem:
          'Creators were stitching together disjointed tools for storefronts, booking schedules, course hosting, and social media posting, resulting in fragmented revenue tracking and poor audience conversions.',
        solution:
          'Architected a unified Next.js SaaS platform with modular digital storefronts, cross-platform social media automation, AI-powered creator insights and content recommendations, and integrated Stripe subscription checkout.',
        features: [
          'Customizable creator storefronts and digital product catalogs',
          'Interactive course hosting and booking scheduling workflows',
          'Cross-platform social media automation & content publishing pipelines',
          'Stripe subscription checkout, revenue analytics, and billing management',
          'AI-powered creator insights and content recommendation tools',
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'Redux Toolkit', 'Stripe', 'AI Integrations', 'REST APIs'],
        decisions: [
          {
            challenge: 'Commerce, courses, and booking domains duplicated UI logic and API contracts',
            decision: 'Created unified domain primitives and reusable component systems across storefronts, courses, and bookings',
            outcome: 'Consistent user experience, lower maintenance overhead, and rapid feature shipping',
          },
          {
            challenge: 'Complex multi-tier subscription states and webhook synchronization',
            decision: 'Implemented resilient Stripe webhook listeners with database-level sync as single source of truth',
            outcome: 'Zero payment state discrepancies and seamless entitlement checks across all creator tiers',
          },
          {
            challenge: 'Multi-channel social scheduling latency impacting creator workflow',
            decision: 'Modular API handlers with background queue processing and optimistic UI feedback',
            outcome: 'Reliable cross-platform content delivery without client-side lag',
          },
        ],
        screenshots: [
          '/images/projects/syncro/cover.png',
          '/images/projects/syncro/screenshot-2.png',
        ],
        metrics: [
          { label: 'Architecture', value: 'Full-Stack Next.js' },
          { label: 'Monetization', value: 'Stripe Subscriptions' },
          { label: 'Workflows', value: 'Automated Publishing' },
        ],
        pullQuote: 'Unifying creator commerce, social automation, and AI insights unlocks true creator leverage.',
        results: [
          'Architected and shipped an end-to-end creator monetization platform with courses, storefronts, bookings, and revenue tracking',
          'Integrated AI-driven insights and multi-platform automation that streamline daily creator workflows',
        ],
        learned: [
          'Creator SaaS succeeds when payment reliability, media delivery, and analytics work in unison',
          'Building cohesive domain-driven components significantly accelerates full-stack feature delivery',
        ],
      },
    },
    {
      slug: 'sossrank',
      title: 'SossRank',
      category: 'AI SEO & Local Business Optimization',
      filters: ['SaaS', 'AI', 'Full Stack'],
      shortDescription:
        'AI-powered SEO and local business optimization platform with automated crawling pipelines, multi-model AI audit generation via OpenRouter, Brevo email alerts, and recurring Stripe billing.',
      stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Stripe', 'OpenRouter AI', 'Crawlee', 'Cheerio', 'Firecrawl', 'DataForSEO', 'Brevo', 'Tailwind CSS'],
      image: '/images/projects/sossrank/cover.png',
      liveUrl: 'https://app.sossrank.com/',
      githubUrl: '',
      featured: true,
      seoTitle: 'SossRank – AI SEO Platform | Karan Kumar',
      seoDescription:
        'Case study of SossRank, an AI SEO and local business optimization platform built with Next.js, PostgreSQL, Supabase, OpenRouter AI, and automated web crawlers.',
      caseStudy: {
        overview:
          'SossRank is an automated AI SEO & business optimization SaaS platform that analyzes websites, runs multi-model AI audits via OpenRouter, crawls web structures with Crawlee & Firecrawl, and generates tiered SEO reporting.',
        role: 'Full-Stack Developer who independently architected the database schema, Next.js server-side APIs, automated web crawling engines, and AI evaluation pipelines.',
        roleTags: ['AI Workflows', 'Web Crawling', 'Database Architecture', 'Stripe Billing'],
        problem:
          'Local businesses and digital marketing agencies lack fast, automated tools to audit technical SEO, scrape competitor footprints, and generate actionable AI-driven optimization strategies.',
        solution:
          'Developed a high-throughput crawling and indexing engine using Crawlee, Cheerio, and Firecrawl integrated with OpenRouter multi-model LLMs, Supabase PostgreSQL with RLS, and automated Brevo reporting.',
        features: [
          'Automated web crawling engine using Crawlee, Cheerio, and Firecrawl',
          'Multi-model AI SEO audit generation powered by OpenRouter AI',
          'DataForSEO API integration for keyword rankings and local SERP metrics',
          'Recurring Stripe subscription billing for tiered audit plans',
          'Automated email alerts and executive PDF/HTML report delivery via Brevo',
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Stripe', 'OpenRouter AI', 'Crawlee', 'Cheerio', 'Firecrawl', 'DataForSEO', 'Brevo', 'Tailwind CSS'],
        decisions: [
          {
            challenge: 'Heavy web scraping operations blocking API request cycles',
            decision: 'Decoupled crawling into resilient asynchronous background pipelines',
            outcome: 'Fast API response times and robust fault tolerance during site crawls',
          },
          {
            challenge: 'Managing diverse LLM models with varying token costs and rate limits',
            decision: 'Integrated OpenRouter unified API with dynamic model selection and fallback rules',
            outcome: 'Optimized cost-per-audit and 99.9% uptime for AI evaluations',
          },
          {
            challenge: 'Securing multi-tenant audit records and client reports',
            decision: 'Implemented strict Supabase PostgreSQL Row Level Security (RLS) policies',
            outcome: 'Total tenant data isolation across all audit and billing entities',
          },
        ],
        screenshots: [
          '/images/projects/sossrank/cover.png',
          '/images/projects/sossrank/screenshot-2.png',
        ],
        metrics: [
          { label: 'Crawl Engine', value: 'Crawlee + Firecrawl' },
          { label: 'AI Engine', value: 'OpenRouter Multi-Model' },
          { label: 'Database', value: 'PostgreSQL + RLS' },
        ],
        pullQuote: 'Automated crawling paired with multi-model AI transforms raw web data into actionable SEO intelligence.',
        results: [
          'Independently built and deployed the full SaaS architecture from database to AI pipelines',
          'Enabled automated end-to-end SEO audits with real-time scraping and automated client report delivery',
        ],
        learned: [
          'Asynchronous queue-based architectures are vital when orchestrating deep crawling with LLM analysis',
          'PostgreSQL RLS provides enterprise-grade multi-tenant security right out of the box',
        ],
      },
    },
    {
      slug: 'market-ember',
      title: 'Market Ember',
      category: 'Multi-Tenant Business Administration',
      filters: ['Mobile', 'SaaS', 'Full Stack', 'Frontend'],
      shortDescription:
        'Multi-tenant admin portal with Next.js Middleware RBAC, Supabase Auth, territory management workflows, Recharts analytics dashboards, and Firebase Cloud Messaging notifications.',
      stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Redux Toolkit', 'Redux Persist', 'Firebase (FCM)', 'Recharts', 'Ant Design', 'Tailwind CSS'],
      image: '/images/projects/market-ember/cover.png',
      liveUrl: 'https://apps.apple.com/sg/app/market-ember/id6758372054',
      githubUrl: '',
      featured: true,
      seoTitle: 'Market Ember – Multi-Tenant Admin Platform | Karan Kumar',
      seoDescription:
        'Case study of Market Ember, a multi-tenant business administration portal built with Next.js, Supabase, PostgreSQL, Redux Toolkit, and Firebase Cloud Messaging.',
      caseStudy: {
        overview:
          'Market Ember is a central multi-tenant admin portal that manages mobile app operations, real-time territory workflows, role-based resource permissions, analytics visualization, and push notifications.',
        role: 'Full-Stack Developer responsible for RBAC middleware, Supabase auth integration, territory management workflows, real-time data sync, and Recharts analytics dashboards.',
        roleTags: ['Multi-Tenant RBAC', 'Real-Time Sync', 'Analytics Dashboards', 'FCM Push'],
        problem:
          'Field operations and administrative teams required synchronized real-time territory data, granular role-based permissions, and live push notifications without compromising system speed.',
        solution:
          'Built a secure Next.js portal utilizing Edge Middleware for RBAC, Supabase PostgreSQL for real-time synchronization, Redux Persist for state durability, and Firebase Cloud Messaging for instant mobile alerts.',
        features: [
          'Role-Based Access Control (RBAC) via Next.js Middleware and Supabase Auth',
          'Interactive territory management and live field operations workflows',
          'Dynamic Recharts analytics dashboards tracking business metrics and territory performance',
          'Real-time push notification dispatch via Firebase Cloud Messaging (FCM)',
          'Persistent offline-resilient client state powered by Redux Toolkit & Redux Persist',
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Redux Toolkit', 'Redux Persist', 'Firebase (FCM)', 'Recharts', 'Ant Design', 'Tailwind CSS'],
        decisions: [
          {
            challenge: 'Complex role hierarchies across administrative tiers',
            decision: 'Enforced server-side Next.js Middleware and database-level RLS policies',
            outcome: 'Guaranteed role isolation and eliminated privilege escalation risks',
          },
          {
            challenge: 'State loss during high-frequency admin navigation',
            decision: 'Configured Redux Persist with selective blacklist/whitelist stores',
            outcome: 'Smooth transitions and cached operational views with zero state resets',
          },
          {
            challenge: 'High volume real-time updates from mobile devices',
            decision: 'Optimized PostgreSQL subscription channels and batched dashboard updates',
            outcome: 'Sub-second dashboard latency without overloading database connections',
          },
        ],
        screenshots: [
          '/images/projects/market-ember/cover.png',
          '/images/projects/market-ember/screen-5.jpg',
          '/images/projects/market-ember/screen-2.jpg',
          '/images/projects/market-ember/screen-3.jpg',
        ],
        metrics: [
          { label: 'Auth & Security', value: 'RBAC Middleware + RLS' },
          { label: 'Notifications', value: 'Firebase FCM' },
          { label: 'State Sync', value: 'Redux Persist + Real-time' },
        ],
        pullQuote: 'Scalable multi-tenant administration demands zero compromise on permission enforcement and real-time reliability.',
        results: [
          'Delivered a robust multi-tenant admin platform powering mobile operations and territory management',
          'Implemented performant real-time analytics dashboards and cross-platform push notifications',
        ],
        learned: [
          'Middleware-level auth checks coupled with database RLS provide bulletproof multi-tenant security',
          'Carefully tuning state persistence prevents frontend bloat in high-velocity operational dashboards',
        ],
      },
    },
    {
      slug: 'docbot-one',
      title: 'DocBot.One',
      category: 'AI Conversational SaaS Platform',
      filters: ['SaaS', 'AI', 'Full Stack'],
      shortDescription:
        'AI conversational SaaS platform featuring prompt editing, response regeneration, multi-tenant team management, token tracking dashboards, 2FA auth flows, and Stripe billing.',
      stack: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'Redux Persist', 'Styled Components', 'Ant Design', 'Framer Motion', 'Stripe'],
      image: '/images/projects/docbot-one/cover.png',
      liveUrl: 'https://www.docbot.one/',
      githubUrl: '',
      featured: false,
      seoTitle: 'DocBot.One – AI Conversational Platform | Karan Kumar',
      seoDescription:
        'Case study of DocBot.One, an enterprise AI conversational SaaS platform with document querying, token tracking, and 2FA auth.',
      caseStudy: {
        overview:
          'DocBot.One is an enterprise AI conversational platform enabling high-volume document querying, multi-tenant workspace collaboration, token tracking, 2FA authentication, and tiered Stripe billing.',
        role: 'Full-Stack Developer responsible for AI chat interface engineering, token tracking dashboards, 2FA auth flows, Framer Motion micro-interactions, and Stripe billing integration.',
        roleTags: ['AI Chat UX', 'Token Consumption Tracking', '2FA Auth', 'Framer Motion'],
        problem:
          'Enterprise users querying complex documents needed a fluid chat interface with prompt revision capabilities, strict token usage transparency, and team-level access control.',
        solution:
          'Engineered an interactive conversational interface with instant prompt branching, response regeneration, real-time client token counters, secure 2FA authentication, and Stripe subscriptions.',
        features: [
          'Interactive AI chat with in-line prompt editing and response regeneration',
          'High-volume enterprise document querying and context inspection',
          'Live token consumption tracking and organization-level usage dashboards',
          'Secure two-factor authentication (2FA) and multi-tenant team access controls',
          'Tiered Stripe subscription billing and usage-based overage management',
          'Smooth Framer Motion micro-interactions and collapsible responsive sidebars',
        ],
        technologies: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'Redux Persist', 'Styled Components', 'Ant Design', 'Framer Motion', 'Stripe'],
        decisions: [
          {
            challenge: 'Token consumption needed real-time visibility before limits hit',
            decision: 'Built a client-side token tracker synchronized with backend metering',
            outcome: 'Accurate live feedback on document query costs for users and admins',
          },
          {
            challenge: 'Chat streaming caused layout shifts and stutter in deep threads',
            decision: 'Optimized rendering with virtualized chat lists and fluid Framer Motion transitions',
            outcome: 'Butter-smooth conversation scrolling even across hundreds of messages',
          },
          {
            challenge: 'Enforcing multi-tenant team boundaries across shared documents',
            decision: 'Strict tenant scoping in session state and API authorization headers',
            outcome: 'Safe enterprise document querying and isolated workspace boundaries',
          },
        ],
        screenshots: [
          '/images/projects/docbot-one/cover.png',
          '/images/projects/docbot-one/login.png',
          '/images/projects/docbot-one/full.png',
        ],
        metrics: [
          { label: 'Interface', value: 'Framer Motion + AntD' },
          { label: 'Authentication', value: '2FA + Multi-Tenant' },
          { label: 'Billing Engine', value: 'Stripe Subscriptions' },
        ],
        pullQuote: 'Conversational AI requires meticulous token accounting and fluid micro-interactions to feel enterprise-ready.',
        results: [
          'Engineered a production-ready conversational SaaS with multi-tenant team collaboration and 2FA',
          'Implemented real-time token tracking and Stripe subscription flows for enterprise scale',
        ],
        learned: [
          'Micro-interactions and optimistic UI updates are crucial for keeping AI interactions snappy',
          'Client-side token transparency builds user trust in consumption-based SaaS products',
        ],
      },
    },
    {
      slug: 'vora',
      title: 'Vora',
      category: 'AI Fashion & Style Analysis Platform',
      filters: ['Mobile', 'AI', 'Full Stack', 'Frontend'],
      shortDescription:
        'AI fashion app using Google Gemini vision models for image-based outfit analysis, personalized styling recommendations, wardrobe breakdown tagging, and match scoring.',
      stack: ['Next.js', 'React', 'TypeScript', 'Google Gemini AI', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/projects/vora/cover.png',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.vora.app',
      githubUrl: '',
      featured: false,
      seoTitle: 'Vora – AI Fashion & Style Analysis | Karan Kumar',
      seoDescription:
        'Case study of Vora, an AI fashion and style analysis platform utilizing Google Gemini vision models and RTK Query caching.',
      caseStudy: {
        overview:
          'Vora is an AI-powered styling and fashion platform utilizing Google Gemini multimodal vision models to analyze uploaded outfit photos, generate wardrobe breakdowns, and offer personalized style advice.',
        role: 'Full-Stack Developer designing the complete application, integrating Gemini vision APIs, building RTK Query caching layers, and implementing smooth Framer Motion animations.',
        roleTags: ['Gemini Vision AI', 'Image Analysis', 'RTK Query', 'Framer Motion'],
        problem:
          'Users want objective, tailored feedback on their clothing combinations and wardrobe choices without having to book expensive personal stylist consultations.',
        solution:
          'Built a mobile-first Next.js web application integrating Google Gemini vision models for intelligent image breakdown, outfit match scoring algorithms, and cached style lookbooks.',
        features: [
          'Multimodal image-based outfit analysis using Google Gemini vision models',
          'Automated wardrobe breakdown tagging and clothing category classification',
          'Intelligent outfit match scoring algorithms and personalized recommendations',
          'OAuth authentication and persistent user lookbooks',
          'RTK Query data caching and optimized media upload compression for mobile',
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Google Gemini AI', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'Framer Motion'],
        decisions: [
          {
            challenge: 'High latency when sending large uncompressed photos to Vision APIs',
            decision: 'Client-side image compression pipeline before API dispatch',
            outcome: 'Reduced upload times by 70% and lower API bandwidth costs',
          },
          {
            challenge: 'Structuring unstructured vision LLM output into UI-ready cards',
            decision: 'Strict JSON schema prompting with fallback parse validators',
            outcome: 'Deterministic styling tags, scores, and recommendations every time',
          },
          {
            challenge: 'Repetitive network calls on repeated lookbook navigation',
            decision: 'Leveraged RTK Query automated cache invalidation and prefetching',
            outcome: 'Instant page transitions across wardrobe catalogs',
          },
        ],
        screenshots: [
          '/images/projects/vora/cover.png',
          '/images/projects/vora/screen-3.png',
          '/images/projects/vora/screen-extra-1.png',
          '/images/projects/vora/screen-extra-2.png',
        ],
        metrics: [
          { label: 'Vision AI', value: 'Google Gemini' },
          { label: 'Data Layer', value: 'RTK Query Cache' },
          { label: 'UX', value: 'Mobile-First + Motion' },
        ],
        pullQuote: 'Multimodal AI turns everyday smartphone photos into structured, actionable styling insights.',
        results: [
          'Created an AI vision-based fashion styling platform with intelligent outfit scoring and recommendations',
          'Optimized mobile media pipeline for swift uploads and responsive styling lookbooks',
        ],
        learned: [
          'Prompt engineering for structured JSON output is essential for reliable multimodal UI experiences',
          'Client-side compression drastically enhances responsiveness on mobile web applications',
        ],
      },
    },
  ],
  skills: [
    {
      id: 'languages',
      label: 'Core Languages',
      items: ['TypeScript', 'JavaScript (ES6+)', 'SQL', 'HTML5/CSS3'],
    },
    {
      id: 'frontend',
      label: 'Frontend',
      items: [
        'Next.js (App Router)',
        'React.js',
        'Redux Toolkit',
        'RTK Query',
        'Redux Persist',
        'Tailwind CSS',
        'Ant Design',
        'Styled Components',
        'Framer Motion',
        'Recharts',
        'Vite',
      ],
    },
    {
      id: 'backend',
      label: 'Backend & Server-Side',
      items: [
        'Next.js Server APIs',
        'Server Actions',
        'Route Handlers',
        'RESTful APIs',
        'Crawlee',
        'Cheerio',
        'Firecrawl',
      ],
    },
    {
      id: 'database',
      label: 'Databases & Auth',
      items: [
        'PostgreSQL',
        'Supabase (Auth / RLS)',
        'Neon DB',
        'MongoDB',
        'OAuth 2.0',
        '2FA/JWT',
      ],
    },
    {
      id: 'cloud',
      label: 'Cloud & Integrations',
      items: [
        'Stripe Billing',
        'OpenRouter AI',
        'Google Gemini AI',
        'Firebase (FCM)',
        'DataForSEO',
        'Brevo',
        'Vercel',
        'Git/GitHub',
      ],
    },
    {
      id: 'tools',
      label: 'Tools & AI Assistants',
      items: ['Claude Code', 'Cursor', 'Antigravity', 'Replit', 'Lovable', 'VS Code'],
    },
  ],
  competencies: [
    'Full-Stack SaaS Product Architecture',
    'Multi-Tenant System Design',
    'PostgreSQL Row Level Security (RLS)',
    'Stripe Subscription & Billing Flows',
    'AI Model Integration & Pipelines',
    'Automated Web Crawling Engines',
    'State Management & Performance Tuning',
    'Role-Based Access Control (RBAC)',
    'Next.js Server Actions & Route Handlers',
    'Firebase Cloud Messaging (FCM)',
    'Real-Time Data Sync & Webhooks',
    'Production Deployment on Vercel & Supabase',
  ],
  experience: [
    {
      company: 'Sunfocus Solutions Pvt. Ltd.',
      role: 'Full-Stack Developer',
      period: 'January 2025 – Present',
      location: 'Punjab, India',
      highlights: [
        'Architect and build production-grade SaaS platforms and admin portals using Next.js, React, TypeScript, PostgreSQL, and Supabase end-to-end from design to deployment.',
        'Design secure Server Actions, Route Handlers, database schemas, and Row Level Security (RLS) policies; integrate Stripe billing, AI pipelines, and Firebase Cloud Messaging.',
        'Own full deployment pipelines on Vercel and Supabase optimizing data fetching, caching strategies, and resolving critical production issues under tight deadlines.',
      ],
    },
    {
      company: 'Sunfocus Solutions Pvt. Ltd.',
      role: 'Full-Stack Developer Intern',
      period: 'July 2024 – December 2024',
      location: 'Punjab, India',
      highlights: [
        'Built full-stack features using Next.js, React, TypeScript, and MongoDB; developed server-side API routes for authentication, session management, and data persistence.',
        'Engineered reusable component libraries and implemented responsive UI layouts adhering to design system standards and performance best practices.',
      ],
    },
  ],
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'Guru Nanak Dev University, Amritsar',
      period: '2021 – 2024',
      detail: 'CGPA: 8.09 / 10.0',
    },
    {
      degree: 'BSc Computer Science',
      school: 'Baring Union Christian College, Batala',
      period: '2018 – 2021',
      detail: 'Score: 67%',
    },
  ],
  socialLinks: [
    { id: 'github', label: 'GitHub', href: 'https://github.com/karan2001' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/karan2001' },
    { id: 'email', label: 'Email', href: 'mailto:karanjangral60@gmail.com' },
  ],
  contact: {
    heading: "Let's Build Something Exceptional",
    description:
      "I'm open to full-stack engineering roles, SaaS opportunities, AI integration challenges, and collaborative high-impact products.",
    form: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitLabel: 'Send Message',
      successMessage: 'Thanks — your message is on its way. I will get back to you shortly.',
      errorMessage: 'Something went wrong while sending. Please try again or email me directly.',
      missingKeyMessage:
        'The contact form is not connected yet. Add a Web3Forms key to enable sending.',
      subject: 'Portfolio contact from Karan Kumar',
    },
  },
  footer: {
    copyright: 'Karan Kumar',
    builtWith: 'Built with React + TypeScript',
  },
  theme: {
    mode: 'dark',
    primary: '#38BDF8', // Cyan / Sky blue
    secondary: '#94A3B8', // Slate
    background: '#0B0F17', // Deep slate navy
    surface: '#111827', // Slate 900
    surfaceSecondary: '#1E293B', // Slate 800
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    border: 'rgba(248,250,252,0.08)',
    success: '#34D399',
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
