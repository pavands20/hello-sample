<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-11-20

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- No database

## Decision Outcome

Chosen option: PostgreSQL 16, because Approved stack. No data is stored, but the pipeline expects a PostgreSQL layer so provisioning it validates the full standard deployment path.

## Consequences

Provisioning an unused database adds a small cost and a component the app never uses, but omitting it would not fully exercise the pipeline.
<!-- sdlc:auto:end adr -->