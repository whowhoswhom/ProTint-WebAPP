## task.md — Active Development Tasks

### Phase 1: Setup & Infrastructure

**Task 1: Project Scaffolding**
- Initialize Next.js with Tailwind CSS
- Set up folder structure per `plan.md`
- Create `.env.local` and populate Supabase keys
- Output: empty functional dev environment

**Task 2: Supabase Connection**
- Configure `lib/supabase.js` with client instance
- Confirm anonymous login + schema access works
- Add Supabase to `.gitignore`

### Phase 2: Animation & Scroll Logic

**Task 3: Build CarAnimation.jsx**
- ~~Render car image or shape to `<canvas>`~~
- ~~Animate layers using Anime.js timeline~~
- ~~Expose `updateLayers(layerState)` method~~

**[REPLACED] Task 3.1: Refactor CarAnimation.jsx**
- Replace Anime.js logic with GSAP
- Animate key visual layers: tint, wheels, lift kits
- Use `useRef` to target DOM elements
- Output: Smooth GSAP-based animation synced to scroll

**[NEW] Task 4: Build scrollTriggers.js**
- ~~Track scroll depth using `IntersectionObserver`~~
- ~~Trigger tint layer reveals, wheel updates~~
- ~~Connect triggers to `CarAnimation` controls~~
- Migrate to ScrollTrigger (from GSAP)
- Use pinned sections or progress values for sequencing

### Phase 3: UI Components

**Task 5: VehicleForm.jsx**
- Inputs for year, make, model, color
- Update `vehicleState` context on input
- Button to “See Services” triggers `fetchServices()`

**Task 6: ServiceCard.jsx**
- Display filtered services by vehicle
- Animate entrance, show icons and hover states

**Task 7: ModalPrompt.jsx**
- Trigger after N scroll interactions or 20s delay
- Modal encourages signup
- Hooks into Supabase auth

### Phase 4: Backend & Automation

**Task 8: MCP API Routes**
- Create `/api/vehicles` and `/api/book`
- Write to Supabase directly or via service role key

**Task 9: n8n Webhooks**
- Trigger n8n on booking
- Send confirmation email or update Stripe

**Task 10: Deploy MVP**
- Deploy on Vercel
- Supabase deployed + schema verified
- Output tested publicly

---

### Phase 5: Animation Polish & UX

**[NEW] Task 11: Add Layer Staggering**
- Use GSAP timelines to delay visual layers (e.g. tint → wheels → lift)
- Fine-tune timing for visual clarity

**[NEW] Task 12: Add Scroll Debug UI (dev only)**
- Output scroll progress or active trigger step to screen
- Helps visualize animation sync in development

**[NEW] Task 13: Accessibility Review**
- Ensure animated content is readable or skippable
- Add motion preferences (`prefers-reduced-motion`) handling

---