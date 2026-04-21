# interactive-ai-profile — Claude Code Guide

## Project Overview

**Repo:** `https://github.com/HadiAbu/interactive-ai-profile`

A recruiter-facing **candidate evaluation console** for Hadi Abu Hamed. Not a blog or generic portfolio — a SaaS-dashboard-style site optimized for fast technical evaluation by recruiters, hiring managers, and technical evaluators (Israel-first, then EU).

**Core positioning:** Frontend-first systems builder with credible backend/fullstack delivery and AI automation. One coherent persona, not fragmented role titles.

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 + Vite 5 + TypeScript 5.6 (strict) + Tailwind 3.4 |
| Backend | FastAPI 0.115 + Python 3.12 |
| Database | PostgreSQL 16 (via SQLAlchemy 2 + psycopg3) |
| Infrastructure | Docker Compose |
| Content | YAML + Markdown files (`profile.yaml`, `skills.yaml`, `projects/*.md`) |

---

## Dev Commands

```bash
# Backend (hot-reload on :8000)
uvicorn app.main:app --app-dir backend --reload --host 0.0.0.0 --port 8000

# Frontend (install deps first time, then dev server on :5173)
cd frontend && npm install
cd frontend && npm run dev

# Docker (Postgres + Backend)
docker compose up -d --build
docker compose down

# Health check
curl http://localhost:8000/health
curl http://localhost:8000/health/db

# Database migrations
cd backend && alembic upgrade head
cd backend && alembic revision --autogenerate -m "description"
```

Frontend runs at `http://localhost:5173`, backend at `http://localhost:8000`.

---

## Build Phases (from Specs.md)

| Phase | Status | Description |
|---|---|---|
| 0 | Done | Repo skeleton, config files |
| 1 | Done | FastAPI shell, React shell, Docker Compose, DB connection |
| 2 | Next | Alembic migrations, content schema |
| 3 | | Content ingestion pipeline (YAML/MD → Postgres) |
| 4 | | `/projects` API + frontend dashboard wired to data |
| 5 | | Grounded AI chat ("Ask AI About Hadi", corpus-backed, 25-turn limit) |
| 6 | | Fit assessment tool (JD → rubric + evidence citations) |
| 7 | | Polish, lens refinement, production hardening |

Always build phase by phase. Each phase must be independently testable before the next begins.

---

## Product Rules (non-negotiable)

1. **Flagship-first** — Case studies grid visible immediately on landing. No scroll-through branding before real work.
2. **Evidence-over-vibes** — Every claim needs a repo link, citation, or explicit example. No empty adjectives.
3. **One coherent persona** — A single technical identity; the Capability Lens shifts emphasis, not identity.
4. **Recruiter-mode by default** — Concise, scannable, high-signal, low-noise.
5. **Safe AI** — AI features must be corpus-grounded, citation-backed, and explicitly constrained. No hallucinated claims.

---

## Design System

Defined in `frontend/tailwind.config.ts`:

| Token | Value | Use |
|---|---|---|
| `ink` | `#0f172a` | Primary text, high-contrast |
| `sand` | `#f4efe6` | Background |
| `ember` | `#d97706` | Warm accent, CTAs |
| `moss` | `#40634b` | Secondary accent |
| `slate` | `#546173` | Muted text |

- Typography: Georgia (display/headings), Segoe UI (body)
- Border radius: 32px (major containers), 24px (cards), 20px (inputs)
- Shadows: `0 18px 40px rgba(0,0,0,0.12)`

---

## Project File Structure

```
backend/app/
  main.py        # FastAPI app entry, /health and /health/db routes
  settings.py    # Settings (DATABASE_URL)
  db.py          # SQLAlchemy engine singleton

frontend/src/
  App.tsx        # Main dashboard shell
  main.tsx       # Vite entry point

content/         # Knowledge base corpus (future ingestion)
projects/        # Flagship case study markdown files
evidence/        # External proof links (links.yaml)
profile.yaml     # Profile metadata and CTAs
skills.yaml      # Capability lenses and skill signals
Specs.md         # Full 15-phase build plan (source of truth for requirements)
```

---

## Safety Rules

Do not run without explicit user approval:
- `git add`, `git commit`, `git push`, `git pull`, `git merge`, `git rebase`
- Any `gh` (GitHub CLI) command
- Any `docker` command
- Force-deletes (`rm -rf`) — forbidden entirely

Auto-allow (read-only, safe):
- `git status`, `git diff`, `git log`

Never run compound shell scripts as a single bash invocation (`bash -c "..."`) — use explicit step-by-step commands instead.

---

## Coding Conventions

- TypeScript strict mode — no `any`, no implicit types
- No comments unless the WHY is non-obvious (hidden constraint, workaround, subtle invariant)
- No half-finished implementations — complete each layer before moving on
- Backend: async FastAPI handlers, type-hinted throughout, no raw SQL (SQLAlchemy ORM)
- Frontend: functional components, Tailwind only (no inline styles, no CSS modules)
- Env vars: never hardcode secrets; always read from environment or `.env` (not committed)

---

## Environment Variables

See `.env.example` for the full list:
- `DATABASE_URL` — PostgreSQL connection string
- `OPENAI_KEY` — API key for AI features (Phase 5+)
- `FRONTEND_ORIGIN` — CORS allowed origin
- `VITE_API_BASE_URL` — Backend base URL for frontend fetch calls
