# DreamSpace IT — Next.js Agency Website

A fast, responsive and SEO-ready agency website for **dreamspaceit.com**. It is built as a custom DreamSpace IT product, inspired by the general agency/e-commerce information flow requested for the project—not by copying another company's brand assets, copy or source code.

## Included

- Next.js App Router + TypeScript + Tailwind CSS
- Mobile-first responsive layout
- Bilingual interface
  - Visitors detected in Bangladesh see Bangla by default
  - Visitors outside Bangladesh see English by default
  - A manual Bangla / English switch is always available
  - On Vercel, `x-vercel-ip-country` handles country detection server-side
  - On other hosts, the Asia/Dhaka browser timezone is used as a fallback on first visit
- Official DreamSpace IT logo asset included in the header and footer
- Pages: Home, Services, Service details, Projects, Pricing, Blog, Blog details, About, Contact, Privacy, Terms
- Floating WhatsApp CTA connected to `01317768213`
- Contact form that saves inquiries to MongoDB
- Protected admin area
  - Admin login with secure HTTP-only cookie session
  - Dashboard
  - Add/delete projects
  - Add/delete blog posts
  - View contact inquiries
- SEO essentials
  - Metadata, canonical base, Open Graph defaults
  - JSON-LD professional-service schema
  - `sitemap.xml` and `robots.txt`
  - Semantic page hierarchy
- Performance choices
  - Server-rendered content where possible
  - No heavy slider library or third-party chat widget
  - Optimized icon imports
  - Responsive CSS and minimal client-only UI

## Tech stack

- Next.js 16 + React 19
- TypeScript
- Tailwind CSS 4
- MongoDB + Mongoose
- JWT session using `jose`
- bcrypt password hashing
- Zod validation

## Run locally

### 1. Install packages

```bash
npm install
```

### 2. Create environment variables

Copy the example file:

```bash
cp .env.example .env.local
```

Set the following values in `.env.local`:

```env
MONGODB_URI=your_mongodb_connection_string
ADMIN_EMAIL=dreamspaceit.official@gmail.com
ADMIN_PASSWORD_HASH=your_bcrypt_hash
AUTH_SECRET=a-long-random-secret-with-at-least-32-characters
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Generate an admin password hash

Choose your own strong password, then run:

```bash
npm run create:admin -- YourStrongPasswordHere
```

Copy the resulting `ADMIN_PASSWORD_HASH=...` into `.env.local`.

### 4. Start the website

```bash
npm run dev
```

Open `http://localhost:3000`.

## Admin access

1. Visit `/admin/login`
2. Use the `ADMIN_EMAIL` and the original password used to generate `ADMIN_PASSWORD_HASH`
3. Add real portfolio projects, blog articles and review website inquiries

The public site uses starter project/blog cards until MongoDB is connected. After database setup, the dashboard becomes the source for published projects and posts.

## Deployment to Vercel

1. Upload this folder to a new GitHub repository.
2. Import the repository in Vercel.
3. Add the same values from `.env.local` under **Project Settings → Environment Variables**.
4. Set `NEXT_PUBLIC_SITE_URL=https://dreamspaceit.com`.
5. Add your domain in **Vercel → Settings → Domains**.
6. Update DNS records at your domain provider as instructed by Vercel.

## Before publishing

- Add your real portfolio projects and screenshots from `/admin/projects`.
- Add 3–5 original blog articles from `/admin/posts`.
- Add Google Analytics, Search Console verification, Facebook Pixel, payment gateway, courier API, or SMTP email delivery only after their account credentials are available.
- Review package prices, service wording, legal policy wording and business claims before publishing.

## Important security notes

- Never commit `.env.local`, database credentials, password hashes or `AUTH_SECRET` to GitHub.
- Use a unique random `AUTH_SECRET` in production.
- Use a strong admin password.
- Enable a MongoDB network access rule that is appropriate for Vercel/serverless deployment.

## Latest design update included

- Public pages now use the supplied black, orange, blue and technical-grid visual direction.
- Header and footer use the supplied official DreamSpace IT logo from `public/images/dreamspace-logo.jpg`.
- The homepage uses the supplied DreamSpace IT web-development poster from `public/images/dreamspace-web-development-poster.png`.
- Each service now has a full bilingual article-style detail page with ideal clients, deliverables, process, detailed sections and a WhatsApp CTA.
- Every visible **বিস্তারিত দেখুন / Read full article** link opens its own full detail route:

  - Services: `/services/[slug]`
  - Blog articles: `/blog/[slug]`
