# interactive-ai-profile — Project Specification & Build Plan

## 1. Project Overview

**Project name:** `interactive-ai-profile`  
**Repo:** `https://github.com/HadiAbu/interactive-ai-profile`

### Vision
Build a **dev-first, modern SaaS-dashboard style portfolio website** for **Hadi Abu Hamed**.

This is not intended to feel like a personal blog or a generic portfolio.  
It should behave more like a **candidate evaluation console**: concise, proof-oriented, recruiter-friendly, and optimized for fast technical evaluation.

### Primary Audience
- Recruiters
- Hiring managers
- Technical evaluators
- Mid/senior role screening workflows
- Israel first, then EU

### Primary CTA
- **View Projects** / **View Flagship Work**

### Secondary CTAs
- GitHub
- Contact

### Core Message
Hadi should be positioned as a:

- **frontend-first systems builder**
- with **credible backend/fullstack capability**
- backed by visible evidence of:
  - reliability
  - distributed systems patterns
  - transactional thinking
  - AI automation integrations
  - engineering discipline

---

## 2. Product Philosophy

This project follows several non-negotiable product rules.

### 2.1 Flagship-first
The landing page must immediately show the **flagship case studies grid**.  
The user should not have to scroll through vague branding or personal storytelling before seeing real work.

### 2.2 Evidence-over-vibes
Claims must be supported by:
- repository links
- citations
- explicit examples
- pattern callouts
- architecture summaries

The site must avoid empty adjectives and unsupported self-promotion.

### 2.3 One coherent persona
We are **not** building separate identities like:
- frontend developer
- backend developer
- fullstack developer

Instead, we are building one coherent technical identity, and allowing the site to shift emphasis via a **Capability Lens**.

### 2.4 Recruiter-mode by default
The default experience should be:
- concise
- scannable
- high-signal
- low-noise
- optimized for evaluation speed

### 2.5 Safe AI
Any AI feature must be:
- grounded in a curated internal corpus
- citation-backed
- explicitly constrained

If an answer is not supported, the assistant must say so and redirect appropriately.

---

## 3. Core Product Concept

The portfolio is a **dashboard-like technical profile platform** with the following main surfaces:

1. **Dashboard Landing Page**
2. **Flagship Case Study Pages**
3. **Project Index**
4. **Ask AI About Hadi**
5. **Fit Assessment Tool (Job Description → rubric + evidence)**

---

## 4. Capability Lens

A global UI control changes the ordering and emphasis of content across the site.

### Lens Options
- **UI Systems** (default)
- **Fullstack Delivery**
- **Distributed Patterns**
- **AI Automation**

### What the lens affects
- Project ordering
- Which evidence appears first
- Recommended flagship items
- Default AI prompt buttons
- Which skills/patterns are emphasized

### Important Rule
The lens changes **presentation order and emphasis**, not identity.  
The persona remains one coherent engineering profile.

---

## 5. MVP Features

## A. Dashboard (Landing Page)

The landing page should include:

### Hero
- concise positioning statement
- primary CTA: **View Flagship Work**
- global lens dropdown

### First major block
- **Flagship Case Studies Grid**
- this is the first major content block after the hero

### Proof Highlights Strip
A factual strip showing external and technical trust signals, such as:
- Upwork trust badges / testimonials
- engineering patterns
- architecture highlights
- direct evidence links

### Additional Sections
After the flagship grid:
- **Skill Evidence Matrix**
- **Selected Patterns**
  - transactions
  - pessimistic locking
  - Kafka pub/sub
  - authentication/security
  - event sourcing
- **Link to Project Index**

---

## B. Flagship Case Studies (4–6)

Each flagship project page should contain:

### Recruiter Summary
Three short bullets summarizing:
- what was built
- why it matters
- what technical signal it provides

### Main Content Sections
- Problem
- Constraints
- Architecture
- Tradeoffs
- Outcome

### Evidence Section
- GitHub links
- screenshots if available
- citations to proof

### Metadata
- tech stack tags
- systems/pattern tags

### Additional Section
- Related evidence
- Optional: what Hadi would improve next

---

## C. Project Index (Long Tail)

A broader searchable list of projects.

### Required Behaviors
- search
- filters
- tags
- patterns
- flagship projects pinned and always accessible
- default sorting influenced by current lens

### Future Option
- “Most recent” sorting can be added later

---

## D. Ask AI About Hadi (Recruiter Mode)

A constrained chat experience designed for recruiters.

### Interface
- chat UI
- evidence/citations side panel

### Rules
- AI must answer **only from curated internal portfolio corpus**
- every answer must include citations
- unsupported questions must not be guessed

### Off-scope handling
For off-scope or personal questions, respond with:
- “Better to contact Hadi directly”

### Abuse / Usage Limits
- open to anyone
- 25 turns max per browser session
- tracked in `localStorage`
- hard cap on response tokens
- backend IP rate limiting
- maximum input size for prompt

### Default Prompt Buttons
- What are Hadi’s strongest areas for a fintech frontend team?
- Show proof of backend reliability (not just CRUD).
- Which projects show ownership and end-to-end delivery?
- What are reasonable gaps/risks to probe in interview?

---

## E. Fit Assessment Tool

A job-description analysis surface that maps a JD to portfolio evidence.

### Input
- pasted job description
- no server-side persistence
- optional `localStorage` for refresh convenience

### Output
- overall score: 0–100
- 5-bucket rubric

### Rubric Buckets
1. UI Systems
2. Backend Reliability
3. Distributed Patterns
4. Data/Visualization
5. Product/Communication

### For Each Bucket
- score
- matched JD requirements
- evidence citations/links

### Additional Outputs
- risks/gaps (fair and explicit)
- suggested interview questions
- recommended flagship projects to review first

---

## 6. Evidence Backbone / Initial Content Sources

These public repositories are the initial primary evidence sources.

### Primary Evidence Projects
- **Popcorn-Palace**  
  Concurrency, transactions, pessimistic locking, E2E  
  `https://github.com/HadiAbu/Popcorn-Palace`

- **kafka-stream-store**  
  FastAPI + Postgres + Kafka + Alembic + Docker Compose  
  `https://github.com/HadiAbu/kafka-stream-store`

- **backend-auth**  
  OWASP-focused auth, sessions/JWT, Redis  
  `https://github.com/HadiAbu/backend-auth`

- **event-sourcing**  
  Immutable events + snapshots  
  `https://github.com/HadiAbu/event-sourcing`

- **global-climate-lens**  
  Data + visualization  
  `https://github.com/HadiAbu/global-climate-lens`

- **Climate-Change-Analysis**  
  Build discipline / structured spec thinking  
  `https://github.com/HadiAbu/Climate-Change-Analysis`

### Additional Long-Tail Projects
- **LifeIsMusic**  
  `https://github.com/HadiAbu/LifeIsMusic`

- **Event-Hub-Next16**  
  `https://github.com/HadiAbu/Event-Hub-Next16`

- **Green-yellow-Graph**  
  `https://github.com/HadiAbu/Green-yellow-Graph`

### External Trust Proof
- Upwork profile / badges / testimonials  
  `https://www.upwork.com/freelancers/~01bfbc696afeb116a8`

### Existing Sites for Reference Only
- `https://hadi-portfolio.vercel.app/`
- `https://www.aisimpleflow.com/`

These are references only.  
The new project must be a distinct, dev-first dashboard experience.

---

## 7. Privacy and Safety Rules for AI

The AI assistant must not disclose:
- sensitive personal details
- identity conflicts
- private life details
- unsupported assumptions

### Required AI behavior
- confident but fair
- explicit about evidence limits
- never hallucinate
- always cite internal corpus sources
- redirect personal/off-scope questions to direct contact

---

## 8. Technology Stack

## Frontend
- React
- Vite
- TypeScript
- Tailwind CSS
- component primitives / design system
- Recharts for visualization
- API requests via `fetch` or React Query  
  (prefer simple implementation early)

## Backend
- FastAPI
- Python 3.12
- Postgres
- SQLAlchemy
- Alembic

## Retrieval / RAG
### v1
- deterministic corpus ingestion
- local markdown/yaml content files
- simple retrieval:
  - chunking
  - keyword matching
  - explicit citations

### v2
- optional `pgvector` embeddings

## Local Development
- Docker Compose
- postgres + backend + frontend later
- early phases can run frontend/backend without DB until health checks pass

---

## 9. Target Project Structure

```text
repo/
├── .devcontainer/
├── backend/
├── frontend/
├── content/
├── profile.yaml
├── skills.yaml
├── projects/
│   └── *.md
├── evidence/
│   └── links.yaml
├── docker-compose.yml
├── Makefile
└── README.md
```

### Notes on structure
- `content/` holds internal knowledge base source material
- `projects/*.md` holds project content / case studies
- `profile.yaml` stores profile-level structured content
- `skills.yaml` stores skill/evidence mapping
- `evidence/links.yaml` stores external evidence links
- `backend/` serves API, ingestion, retrieval, fit scoring
- `frontend/` renders the candidate evaluation console

---

## 10. Environment Reality

Current known environment conditions:
- Devcontainer in use
- Docker required
- Python 3.12 required
- Node + npm required
- Docker Compose required
- Stable tooling and deterministic scripts are preferred
- Avoid hidden magic and unnecessary abstraction early

---

## 11. Build Discipline

This project must be built carefully.

### Rules
- build step-by-step
- verify each layer before moving on
- avoid adding DB/LLM complexity too early
- keep first 1,000–10,000 lines clean and well-structured
- favor explicit scripts over implicit framework magic
- every phase must leave the project in a runnable state

---

## 12. Implementation Phases

## Phase 0 — Environment and Tooling
Goal:
- stable dev environment
- working Docker
- working Python
- working Node
- deterministic setup

Deliverables:
- devcontainer setup
- Docker access confirmed
- toolchain verified

---

## Phase 1 — Repo Scaffolding (No DB)
Goal:
- establish clean project skeleton
- backend health endpoint
- frontend shell loads

Deliverables:
- folder structure
- `.gitignore`
- `Makefile`
- backend FastAPI app
- `/health` endpoint
- frontend Vite React TS app
- both services run

---

## Phase 2 — Docker Compose Baseline + Postgres
Goal:
- introduce containerized local infrastructure
- bring up Postgres and backend together
- establish migration baseline

Deliverables:
- backend Dockerfile
- `docker-compose.yml`
- Postgres service
- backend DB configuration
- `/health/db`
- Alembic initialized
- baseline migration works

---

## Phase 3 — Content Ingestion Foundation
Goal:
- define structured content model
- load portfolio content into DB
- expose project APIs

Deliverables:
- markdown/yaml schema
- ingestion script
- Postgres tables
- `GET /projects`
- `GET /projects/{id}`

---

## Phase 4 — UI Integration
Goal:
- connect dashboard to backend
- render real flagship content

Deliverables:
- dashboard fetching flagship projects
- flagship grid rendered from API
- project detail pages
- evidence blocks
- case study layout

---

## Phase 5 — Ask AI (Grounded Chat)
Goal:
- add safe, corpus-grounded recruiter assistant

Deliverables:
- retrieval over content chunks
- `/chat` endpoint
- structured citations
- chat UI
- citations side panel
- 25-turn browser limit
- rate limiting
- max input/output controls

---

## Phase 6 — Fit Assessment Tool
Goal:
- enable JD-to-evidence evaluation

Deliverables:
- `/fit` endpoint
- scoring logic
- rubric output
- radar chart UI
- evidence-backed fit assessment page

---

## Phase 7 — Polish and v2 Hooks
Goal:
- improve ranking, content surfacing, and future expansion

Deliverables:
- lens-based ordering refinement
- UX polish
- optional GitHub metadata sync hooks
- future embedding support hooks
- final recruiter-ready presentation quality

---

## 13. Detailed Step-by-Step Build Guide

This is the practical sequence we should follow.

## Step 1 — Prepare the development environment
Tasks:
- finalize devcontainer setup
- ensure Docker works inside devcontainer
- ensure Node, npm, Python, pip are available
- verify Docker Compose
- document environment assumptions

Verification:
- `docker ps`
- `docker compose version`
- `node -v`
- `npm -v`
- `python -V`
- `pip -V`

Why this step matters:
Without reliable environment setup, all later steps become unstable and noisy.

---

## Step 2 — Create the repository skeleton
Tasks:
- create folders:
  - `backend/`
  - `frontend/`
  - `content/`
  - `projects/`
  - `evidence/`
- create root files:
  - `.gitignore`
  - `Makefile`
  - `README.md`
  - `profile.yaml`
  - `skills.yaml`
  - `evidence/links.yaml`

Verification:
- repository tree is clean
- files exist in expected locations

Why this step matters:
A stable structure prevents rework and keeps content/model/API boundaries clear.

---

## Step 3 — Build the first backend app
Tasks:
- create minimal FastAPI app
- add `/health` endpoint
- pin basic backend dependencies
- make backend runnable locally

Verification:
- backend starts
- `curl /health` returns success

Why this step matters:
We need a live, testable backend before adding databases or retrieval.

---

## Step 4 — Add backend containerization
Tasks:
- write `backend/Dockerfile`
- build backend image
- confirm backend runs in container

Verification:
- `docker build` succeeds
- backend container serves `/health`

Why this step matters:
The backend container is the first reproducible runtime unit of the project.

---

## Step 5 — Add Docker Compose with Postgres
Tasks:
- add `docker-compose.yml`
- define `postgres` service
- define `backend` service
- wire environment variables
- ensure startup ordering with health checks

Verification:
- `docker compose up -d --build`
- Postgres is healthy
- backend is running

Why this step matters:
We need deterministic local infrastructure before DB-backed features.

---

## Step 6 — Add DB connection layer
Tasks:
- install SQLAlchemy and psycopg
- create DB config module
- add DB connectivity check
- implement `/health/db`

Verification:
- `/health/db` returns DB OK
- backend can connect to Postgres

Why this step matters:
This is the first proof that app logic can reach persistent infrastructure.

---

## Step 7 — Initialize Alembic
Tasks:
- install Alembic
- initialize migration folder
- configure `alembic.ini`
- connect Alembic to environment variables
- create and run baseline migration

Verification:
- `alembic upgrade head` succeeds
- `alembic_version` table exists

Why this step matters:
Schema evolution must be deterministic from the start.

---

## Step 8 — Define content schema
Tasks:
- decide markdown frontmatter structure
- define YAML fields for projects, profile, skills, evidence
- define DB tables for content and chunks

Verification:
- schema is explicit and documented
- sample content validates against expectations

Why this step matters:
The entire AI and content experience depends on a clean evidence model.

---

## Step 9 — Build ingestion pipeline
Tasks:
- read local markdown/yaml files
- parse frontmatter
- transform structured content
- insert into Postgres tables

Verification:
- ingestion runs end-to-end
- DB contains project rows
- project metadata and evidence links are queryable

Why this step matters:
The website should be driven by curated content, not hardcoded ad hoc UI data.

---

## Step 10 — Expose project APIs
Tasks:
- implement `GET /projects`
- implement `GET /projects/{id}`
- shape output for frontend consumption
- support flagship designation and tags

Verification:
- endpoints return structured data
- project detail retrieval works

Why this step matters:
This forms the contract between content system and UI.

---

## Step 11 — Create frontend application shell
Tasks:
- initialize Vite React TS app
- establish base layout
- define dashboard shell
- add lens selector
- create placeholder routing

Verification:
- frontend runs
- shell renders
- navigation works

Why this step matters:
The UI foundation should exist before integrating real API data.

---

## Step 12 — Render dashboard from API
Tasks:
- fetch flagship projects
- display flagship-first grid
- add hero and CTA
- add proof strip placeholders
- build skill evidence and selected patterns sections

Verification:
- landing page renders real project data
- flagship section is first and scannable

Why this step matters:
This is the first real recruiter-facing version of the site.

---

## Step 13 — Build project detail pages
Tasks:
- add route for project detail
- render recruiter summary
- render architecture/tradeoffs/outcome sections
- render evidence links
- render related evidence

Verification:
- detail page loads from API
- content is readable and evidence-rich

Why this step matters:
Flagship case study pages are the core proof engine of the site.

---

## Step 14 — Add project index
Tasks:
- build searchable/filterable project list
- support tags and patterns
- pin flagship projects
- allow lens-based relevance ordering

Verification:
- searching works
- filters work
- flagship projects remain easy to access

Why this step matters:
The long tail supports deeper evaluation without cluttering the landing page.

---

## Step 15 — Build retrieval foundation for AI
Tasks:
- chunk content
- store chunks and citations
- implement deterministic keyword retrieval
- constrain responses to corpus

Verification:
- retrieved results map back to evidence
- unsupported questions fail safely

Why this step matters:
Grounded retrieval is the safety foundation of recruiter-mode AI.

---

## Step 16 — Implement `/chat` backend endpoint
Tasks:
- define request/response schema
- fetch relevant chunks
- generate answer using only retrieved evidence
- include structured citations
- enforce max input length and output constraints

Verification:
- endpoint returns citation-backed answers
- unsupported prompts are declined correctly

Why this step matters:
This is the core trust boundary of the AI feature.

---

## Step 17 — Build Ask AI frontend
Tasks:
- create chat page
- add side citations panel
- show source references with each answer
- add preset recruiter prompts
- add browser session turn counting

Verification:
- prompts work
- citations panel updates
- turn limit enforced in `localStorage`

Why this step matters:
The AI experience must be useful, bounded, and recruiter-friendly.

---

## Step 18 — Add backend rate limiting and guardrails
Tasks:
- add IP-based rate limiting
- enforce max request size
- cap output length
- ensure off-scope questions redirect safely

Verification:
- abuse controls work
- invalid payloads are rejected
- off-scope prompts are handled correctly

Why this step matters:
Open access requires explicit operational constraints.

---

## Step 19 — Implement fit assessment backend
Tasks:
- parse job description input
- map requirements to rubric buckets
- score evidence match
- produce structured result with gaps and interview questions

Verification:
- output includes:
  - overall score
  - bucket scores
  - evidence links
  - fair gaps
  - suggested questions

Why this step matters:
This feature differentiates the portfolio as a recruiter evaluation tool.

---

## Step 20 — Build fit assessment frontend
Tasks:
- create JD input page
- render result dashboard
- add radar chart
- render cited evidence
- show recommended projects to review first

Verification:
- JD input works
- result renders clearly
- chart and citations are aligned

Why this step matters:
This turns portfolio data into decision-support.

---

## Step 21 — Implement lens-driven ordering
Tasks:
- define lens weighting logic
- reorder projects and evidence by selected lens
- alter default prompt emphasis
- keep persona coherent

Verification:
- changing lens changes ordering and surfacing
- identity remains consistent

Why this step matters:
The lens is a presentation optimizer, not a branding gimmick.

---

## Step 22 — Polish and recruiter-readiness
Tasks:
- tighten copy
- improve dashboard visual clarity
- refine typography and spacing
- ensure proof-first hierarchy
- validate mobile/tablet behavior
- improve empty/error states

Verification:
- site is scannable
- key evidence is visible quickly
- interactions are stable

Why this step matters:
The final product must feel intentional, not merely functional.

---

## 14. Working Principles for Implementation

While building, the implementation should consistently follow these principles:

### 14.1 Never jump steps
Do not add advanced systems before the lower layer is verified.

### 14.2 Every phase must be testable
No phase should end in a “half-defined” state.

### 14.3 Keep code explicit
Prefer clear file structure, typed contracts, and deterministic scripts.

### 14.4 The site is proof-first
UI should always serve evidence, not decoration.

### 14.5 AI must remain constrained
Grounded citations are mandatory. Unsupported claims are not allowed.

### 14.6 Fairness matters
The fit tool and AI assistant must surface strengths and reasonable gaps honestly.

---

## 15. Immediate Build Starting Point

The practical starting order should be:

1. Fix and finalize devcontainer + Docker access
2. Create backend Dockerfile
3. Create repo skeleton
4. Create minimal FastAPI backend
5. Add docker-compose with Postgres
6. Add DB health layer
7. Add Alembic
8. Define content schema
9. Build ingestion
10. Add project APIs
11. Start frontend shell
12. Integrate frontend with backend
13. Add grounded AI
14. Add fit assessment
15. Polish lens behavior and recruiter-mode UX

---

## 16. Final Summary

This project is not just a portfolio website.

It is a **technical evaluation interface** designed to:
- surface flagship engineering work quickly
- support recruiter decision-making
- ground claims in evidence
- present one coherent technical identity
- safely use AI as a citation-backed explainer, not as a guessing machine

The build plan should remain:
- incremental
- disciplined
- testable
- proof-first

That discipline is part of the product itself.
