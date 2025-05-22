# Product Requirements Document (PRD) — ProTint Web Prototype

## Overview
**Project Name**: ProTint Automotive Service Prototype

**Purpose**: Build a modern, interactive prototype of ProTintLouisville.com, designed to:
- Showcase scroll-based automotive visual customization
- Reduce business dependency on phone calls
- Convert visitors into bookings via engaging, animated UX
- Encourage optional account creation to save vehicle configurations

**Audience**: Same as the original — vehicle owners seeking services like tint, lifts, wheels, lighting, audio, and remote starters.

**Deliverable**: A hosted MVP using modern tech stack, presented as a production-ready proof of concept that can replace the existing site.

---

## Feature Overview

### Core Interactions
- **Realistic Animated Car Preview** (GSAP + ScrollTrigger driven)
- **Dynamic Service Visualization on Scroll** (tint layers → wheels → lift kits)
- **Side Panel Vehicle Form** (year, make, model, color)
- **Soft Modal Account Prompt** after user customizes vehicle
- **Service Cards** (auto-filtered by vehicle input)

### MVP Requirements
- No forced login — full preview functionality without auth
- Optional Google/email sign-in to save builds
- Booking data stored via Supabase

---

## Tech Stack

| Layer        | Technology                  |
|--------------|-----------------------------|
| Frontend     | React.js + Tailwind CSS     |
| Animation    | GSAP + ScrollTrigger        |
| Auth & Data  | Supabase (email + Google auth) |
| Workflows    | n8n (booking notifications, Stripe hooks) |
| Backend API  | MCP Server (Node.js + Express) |
| Hosting      | Vercel (frontend) + TBD backend |
| IDE          | Cursor (AI+Dev)             |

---

## The setup script codex.setup.sh was executed successfully. All dependencies were installed with npm install, and it concluded with the message:

✅ Dependencies installed. Ready for offline development.
This indicates the environment is now prepared for offline development.