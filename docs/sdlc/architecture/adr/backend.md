<!-- sdlc:auto:start adr -->
# ADR-0001: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-11-20

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- FastAPI 0.115
- Flask

## Decision Outcome

Chosen option: FastAPI 0.115, because Approved stack. A single GET /api/hello endpoint returning a JSON greeting is a few lines of FastAPI and matches the platform's standard backend path.

## Consequences

FastAPI is slightly heavier than the absolute minimum for one endpoint, but it is the platform default and keeps the pipeline consistent.
<!-- sdlc:auto:end adr -->