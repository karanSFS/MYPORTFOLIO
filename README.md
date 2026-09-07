# Portfolio

Config-driven personal portfolio for a frontend developer. Swap the active profile to reuse the same UI for another person.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Configure a person

1. Edit `src/config/gursewak.ts` (or copy `friend-one.ts` / `friend-two.ts`).
2. Fill `email`, `resumeUrl`, `socialLinks`, project `liveUrl` / `githubUrl`, and images.
3. Place your PDF at `public/resume.pdf` and set `resumeUrl: '/resume.pdf'` (enables Open + Download).
4. Add a [Web3Forms](https://web3forms.com) access key.

```bash
cp .env.example .env
```

```
VITE_PORTFOLIO_ID=gursewak
VITE_WEB3FORMS_ACCESS_KEY=your_key
VITE_SITE_URL=https://your-domain.com
```

Switch profiles with `VITE_PORTFOLIO_ID=friend-one` or `friend-two`. Accent colors live in each config file. Visitors can switch light/dark via the navbar toggle (preference is saved in `localStorage`).

## Deploy

The project is a Vite SPA. `vercel.json` rewrites client routes such as `/projects/:slug` to `index.html`. Set the same environment variables in the host.
