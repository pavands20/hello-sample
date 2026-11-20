<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-11-20

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- Other clouds

## Decision Outcome

Chosen option: AWS, because Approved stack. AWS provides the standard web deployment primitives needed for a static SPA and a containerized API.

## Consequences

No AWS-specific features are required beyond basic static hosting and container runtime.
<!-- sdlc:auto:end adr -->