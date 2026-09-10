# Portfolio

Personal portfolio for Karan Kumar (Full-Stack Developer), powered by Vite, React, TypeScript, and Tailwind CSS.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run generate-pdf # Rebuilds public/resume.pdf from public/cv/karan.html
npm run preview
```

## Configuration

1. Portfolio data is defined in `src/config/friend-one.ts`.
2. Update `email`, `resumeUrl`, `socialLinks`, project `liveUrl` / `githubUrl`, and images as needed.
3. PDF resume is located at `public/resume.pdf` with `resumeUrl: '/resume.pdf'`.
4. Add a [Web3Forms](https://web3forms.com) access key in `.env`.

```bash
cp .env.example .env
```

```
VITE_PORTFOLIO_ID=friend-one
VITE_WEB3FORMS_ACCESS_KEY=your_key
VITE_SITE_URL=https://karan.dev
```

Accent colors and branding live in `src/config/friend-one.ts`. Visitors can switch light/dark via the navbar toggle (preference is saved in `localStorage`).

## Deploy

The project is a Vite SPA. `vercel.json` rewrites client routes such as `/projects/:slug` to `index.html`. Set the same environment variables in the host.
