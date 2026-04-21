# interactive-ai-profile

Proof-first portfolio platform for Hadi Abu Hamed, designed as a recruiter-facing technical evaluation console.

## Current Status

The repository is in early scaffold mode:

- backend FastAPI app with `/health`
- backend container and Postgres compose baseline
- frontend React + TypeScript shell scaffold
- starter portfolio content files for later ingestion

## Structure

```text
backend/   FastAPI API
frontend/  Vite React TypeScript shell
content/   Internal corpus notes and documentation
projects/  Project case study markdown
evidence/  External proof links
```

## Local Run Paths

Backend:

```bash
uvicorn app.main:app --app-dir backend --reload --host 0.0.0.0 --port 8000
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Docker baseline:

```bash
docker compose up -d --build
```

## Next Build Steps

1. Verify Docker and local toolchain access.
2. Add the DB connection layer and `/health/db`.
3. Initialize Alembic.
4. Load curated content into Postgres and expose project APIs.
