## 🔄 Animation Engine Update

### From:
- ❌ AnimeJS (removed due to import issues and outdated structure)

### To:
- ✅ GSAP + ScrollTrigger

### Reason:
GSAP offers advanced timeline-based scroll animations ideal for our "car gets built as you scroll" visual storytelling. Works more reliably and is highly customizable.

### Key GSAP Components:
- `gsap.to()`, `gsap.from()`, `gsap.timeline()`
- `ScrollTrigger.create()`

### Setup:
- Installed via `npm install gsap`
- Used in `CarAnimation.jsx` to target each vehicle component by `ref`
- Sections trigger specific animations tied to scroll position using `ScrollTrigger`

### Scroll Flow:
1. Scroll starts → wheels pop in
2. Scroll more → lift animates in
3. Scroll further → windows tint, lights blink on
4. All synced via a single `gsap.timeline()` chained with `ScrollTrigger` 