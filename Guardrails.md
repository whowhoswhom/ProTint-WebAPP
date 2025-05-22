## 🎛️ Animation Guardrails

- All animations must use GSAP + ScrollTrigger
- Avoid using AnimeJS or CSS transitions for main service visuals
- Use `useEffect` and `ref` targeting to ensure animations only run on mount
- Keep animations under 500ms unless part of a scroll timeline
- Timeline transitions must be frame-synced using `requestAnimationFrame`
- Ensure all animated elements are accessible (e.g. don't interfere with tab focus or readability) 