# Muscle Prime 2121

Muscle Prime 2121, Trimurti Park, Kalyan East ke liye responsive Next.js website.

## Local setup

```bash
npm install
npm run dev
```

Browser mein `http://localhost:3000` open karein.

## Vercel par deploy

### GitHub se

1. ZIP extract karein.
2. Saari files ko ek new GitHub repository mein upload/push karein.
3. Vercel dashboard mein **Add New → Project** choose karein.
4. GitHub repository import karein.
5. Framework **Next.js** auto-detect hoga; default settings ke saath **Deploy** karein.

### Vercel CLI se

```bash
npm install
npm run build
npx vercel
```

Koi environment variable ya database required nahi hai.

## Important files

- `app/page.tsx` — website content
- `app/globals.css` — complete styling and responsive layout
- `app/layout.tsx` — metadata and fonts
- `public/favicon.svg` — site icon

Official deployment guide: https://nextjs.org/docs/app/getting-started/deploying
