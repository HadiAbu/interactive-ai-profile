---
id: popcorn-palace
title: Popcorn Palace
flagship: true
lens_tags:
  - fullstack-delivery
  - distributed-patterns
tech_stack:
  - React
  - Spring Boot
  - PostgreSQL
  - Docker
pattern_tags:
  - transactions
  - pessimistic-locking
  - end-to-end-delivery
summary:
  - Built a cinema booking platform with transactional seat reservation logic.
  - Demonstrates careful handling of concurrency and user-facing purchase flows.
  - Strong evidence of backend reliability beyond basic CRUD.
---

## Problem

The system needed to protect seat inventory under concurrent booking pressure while staying understandable for evaluators.

## Constraints

- inventory conflicts can happen under real user concurrency
- booking flow must remain predictable and auditable
- architecture should show end-to-end ownership

## Architecture

Frontend booking flows connect to backend reservation logic backed by PostgreSQL transactions and locking-aware service paths.

## Tradeoffs

The implementation favors correctness and explicit control over the simplest happy-path CRUD approach.

## Outcome

The project is a strong flagship candidate for demonstrating transactional thinking and reliability under contention.
