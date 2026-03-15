---
id: kafka-stream-store
title: kafka-stream-store
flagship: true
lens_tags:
  - distributed-patterns
  - ai-automation
tech_stack:
  - FastAPI
  - PostgreSQL
  - Kafka
  - Alembic
  - Docker Compose
pattern_tags:
  - pub-sub
  - async-processing
  - migration-discipline
summary:
  - Built a service stack around FastAPI, Postgres, Kafka, and migrations.
  - Shows distributed system thinking with explicit infrastructure wiring.
  - Useful proof for backend reliability and event-driven architecture discussions.
---

## Problem

The project needed a local-first way to demonstrate reliable message-driven processing with explicit operational structure.

## Constraints

- service orchestration had to be reproducible
- persistence and messaging needed clear boundaries
- migrations had to stay deterministic

## Architecture

FastAPI coordinates application logic, Postgres stores durable state, and Kafka carries event flow between processing boundaries.

## Tradeoffs

The setup accepts more infrastructure complexity in exchange for clearer distributed patterns and repeatable local development.

## Outcome

This project provides direct evidence for event-driven reasoning, containerized development, and migration discipline.
