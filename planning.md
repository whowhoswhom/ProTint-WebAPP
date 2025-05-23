## plan.md — Structured Execution Plan

### Folder Structure
```bash
/src
├── components/
│   ├── CarAnimation.jsx        # GSAP-based build-up logic tied to scroll
│   ├── VehicleForm.jsx         # Side panel form
│   ├── ServiceCard.jsx         # Service icons with hover effects
│   └── ModalPrompt.jsx         # Sign-up CTA
├── pages/
│   ├── index.jsx               # Landing page
│   └── dashboard.jsx           # (future) Admin mock
├── lib/
│   ├── supabase.js             # Client instance
│   ├── api.js                  # MCP fetchers
│   └── scrollTriggers.js       # GSAP ScrollTrigger logic for tint/lift/wheels
/public/
└── car-assets/                 # Visuals for tires, tints, etc.
