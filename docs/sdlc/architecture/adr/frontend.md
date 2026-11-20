<!-- sdlc:auto:start adr -->
# ADR-0002: Use React 19 for Frontend

Status: Accepted  
Date: 2026-11-20

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- React 19
- Plain HTML

## Decision Outcome

Chosen option: React 19, because Approved stack. React is the platform frontend option and easily fetches and renders the greeting on one page.

## Consequences

A static HTML file would be lighter, but React exercises the real frontend build and deploy path the pipeline is meant to test.
<!-- sdlc:auto:end adr -->