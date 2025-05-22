# ProTint Web App

A modern, interactive automotive service prototype for ProTintLouisville.com. Built to showcase scroll-based car customization, reduce business phone dependency, and convert visitors into bookings with engaging, animated UX. Optional account creation lets users save their vehicle builds. Hosted on Vercel, powered by Next.js, Supabase, and Anime.js.

---

## 🛠️ Tech Stack

| Layer        | Technology                |
|--------------|---------------------------|
| Frontend     | Next.js, React, Tailwind CSS |
| Animation    | Anime.js, Canvas API      |
| Auth & Data  | Supabase (email, Google)  |
| Backend API  | MCP Server (Node.js, Express) |
| Automation   | n8n (webhooks, Stripe)    |
| Hosting      | Vercel                    |

---

## ✨ Features
- Realistic animated car preview (Anime.js + canvas)
- Dynamic service visualization on scroll (tint, wheels, lift kits)
- Side panel vehicle form (year, make, model, color)
- Soft modal account prompt after customization
- Service cards auto-filtered by vehicle input
- Optional Google/email sign-in to save builds
- Booking data stored via Supabase
- No forced login — full preview without auth

---

## 🚀 Local Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/whowhoswhom/ProTint-WebAPP.git
   cd ProTint-WebAPP
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment:**
   - Copy `.env.local.example` to `.env.local` and fill in your Supabase keys:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   ```
4. **Run the dev server:**
   ```bash
   npm run dev
   ```
5. **Visit:** [http://localhost:3000](http://localhost:3000)

---

## 🌐 Vercel Deployment

Production: [https://protint-webapp.vercel.app](https://protint-webapp.vercel.app)

---

## 🗺️ Roadmap
- [x] Project scaffolding & folder structure
- [x] Supabase connection & auth
- [x] Canvas-based car animation
- [x] Scroll-triggered service layers
- [ ] Vehicle form & state management
- [ ] Service cards with animation
- [ ] Modal sign-up prompt
- [ ] Booking API & Supabase writes
- [ ] n8n automation hooks
- [ ] Vercel deployment & public test

---

## 👤 Author
- Josef (whowhoswhom)