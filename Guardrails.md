# Guardrails (Cursor + Dev Workflow)

### General
- All logic modules ≤ 500 lines
- Use `README.md`, `plan.md`, `task.md`, `/logs/debug.log`
- Modular architecture w/ clear interfaces

### AI Guidance Constraints (Cursor)
- Always read `plan.md` before generating new features
- On error: write full context to `logs/debug.log`
- Pause output generation if unknown input encountered
- Request `task clarification` if expected inputs/outputs mismatch
- Do not suggest Anime.js or similar unless explicitly requested
- Default all scroll-based animation to GSAP + ScrollTrigger

### Automation (n8n)
- Webhook triggers:
  - Booking created
  - New vehicle added
- Actions:
  - Send confirmation email
  - Update dashboard counters

---

## Supabase Schema

### `vehicles`
| Field     | Type     |
|-----------|----------|
| id        | uuid     |
| user_id   | uuid     |
| year      | integer  |
| make      | text     |
| model     | text     |
| color     | text     |

### `services`
| Field     | Type     |
|-----------|----------|
| id        | uuid     |
| type      | text     |
| name      | text     |
| description | text  |
| price     | decimal  |
| available_for | json |

### `bookings`
| Field     | Type     |
|-----------|----------|
| id        | uuid     |
| user_id   | uuid     |
| vehicle_id| uuid     |
| service_id| uuid     |
| status    | text     |
| date      | timestamptz |

---

## MVP Acceptance Criteria
- [ ] GSAP-based canvas animation loads correctly
- [ ] ScrollTrigger animates tinted layers → wheels → lift
- [ ] Form works and updates state
- [ ] Service cards animate in with relevance
- [ ] Modal triggers after activity
- [ ] Supabase write works for vehicle + booking
- [ ] MVP hosted on Vercel + live

---
