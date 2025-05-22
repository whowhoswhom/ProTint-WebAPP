# ProTint Web App

A modern, interactive automotive service prototype for ProTintLouisville.com. Built to showcase scroll-based car customization, reduce business phone dependency, and convert visitors into bookings with engaging, animated UX. Optional account creation lets users save their vehicle builds. Hosted on Vercel, powered by Next.js, Supabase, and GSAP.

---

## Tech Stack

| Layer        | Technology                    |
|--------------|-------------------------------|
| Frontend     | Next.js, React, Tailwind CSS  |
| Animation    | GSAP + ScrollTrigger          |
| Auth & Data  | Supabase (email, Google)      |
| Backend API  | MCP Server (Node.js, Express) |
| Automation   | n8n (webhooks, Stripe)        |
| Hosting      | Vercel                        |

---

## Animation Dependencies

- [GSAP](https://gsap.com) — Primary animation engine
- [GSAP ScrollTrigger](https://gsap.com/scrolltrigger/) — Plugin for scroll-based animations

---

## Features

- Realistic animated car preview (GSAP-based timeline)
- Dynamic service visualization on scroll (tint, wheels, lift kits)
- Side panel vehicle form (year, make, model, color)
- Soft modal account prompt after customization
- Service cards auto-filtered by vehicle input
- Optional Google/email sign-in to save builds
- Booking data stored via Supabase
- No forced login — full preview without auth

---

## Local Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/whowhoswhom/ProTint-WebAPP.git
   cd ProTint-WebAPP
Install dependencies:

npm install
Configure environment:

Copy .env.local.example to .env.local and fill in your Supabase keys:


NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
Run the dev server:


npm run dev
Visit: http://localhost:3000

Vercel Deployment
Production: https://protint-webapp.vercel.app

Roadmap
 Project scaffolding & folder structure: DONE

 Supabase connection & auth: DONE

 GSAP-based car animation: DONE

 Scroll-triggered service layers with ScrollTrigger: DONE

 Vehicle form & state management: 

 Service cards with animation:

 Modal sign-up prompt:

 Booking API & Supabase writes:

 n8n automation hooks:

 Vercel deployment & public test:

MVP Features Update
Scroll-based animated vehicle build using GSAP + ScrollTrigger

As user scrolls:

Wheels animate in

Lift kit raises body

Windows tint

Headlights blink on

Each feature tied to a service section

Animation is performance-optimized and mobile-responsive

Author
Josef (whowhoswhom)