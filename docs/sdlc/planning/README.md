# Planning

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### EPIC-001 · approved · source: planning:epics

A minimal demo web app serving as a smoke test for the delivery pipeline, exposing a public GET /api/hello backend endpoint and a public Hello page that fetches and displays the greeting. No authentication, database, or other pages/features are in scope.

EPIC EPIC-001: Public Hello Page Smoke Test
A minimal demo web app serving as a smoke test for the delivery pipeline. It exposes a public GET /api/hello backend endpoint returning {"message": "Hello from Quorq"} and a public Hello page that fetches and displays that greeting. There is no authentication, no database, and no other pages or features.

Assumptions:
- The frontend is built with React; the backend uses Node.js/Express or a similar lightweight framework. A competent engineer could choose any common stack suitable for a smoke test.
- No external services, databases, or authentication providers are needed.
- Deployment is a standard web application deployment (no specific hosting or region requirements beyond what the pipeline smoke test implies).
- No additional pages, features, authentication, database, or complex business logic are in scope for this version.

  - US-001 [critical] Backend Hello API Endpoint: As a developer verifying the delivery pipeline, I want the backend to expose a GET /api/hello endpoint that returns the JSON {"message": "Hello from Quorq"}, so that the pipeline can confirm the backend service is deployed and responding correctly as a smoke test
      AC AC-001: Given the GET /api/hello endpoint is deployed and running, when a request is made to GET /api/hello without any authentication or parameters, then the response body is the JSON object {"message": "Hello from Quorq"}
      AC AC-002: Given the GET /api/hello endpoint is deployed and running, when a request is made to GET /api/hello, then the response is returned with a 200 OK status code
      AC AC-003: Given the GET /api/hello endpoint is deployed and running, when a request is made to GET /api/hello, then the response includes a Content-Type header indicating application/json
  - US-002 [critical] Public Hello Page Displaying Greeting: As a any visitor to the demo app, I want to see a public Hello page that displays the greeting fetched from the backend, so that I can confirm the frontend and backend are connected and the delivery pipeline produced a working application
      AC AC-004: Given the Hello page is loaded in a browser and the GET /api/hello endpoint is available, when the page fetches the greeting from GET /api/hello and receives the response, then the text "Hello from Quorq" is displayed on the page
      AC AC-005: Given the Hello page is loaded in a browser, when any visitor navigates to the Hello page URL, then the page is accessible without signing in or providing credentials
      AC AC-006: Given the Hello page has fetched the greeting from GET /api/hello, when the page has finished loading, then the greeting text remains visible on the page

**Related:** US-001, US-002

### SPRINT-1 · approved · source: planning:plan

Sprint 1 (approved plan version 1) aims to deliver the end-to-end smoke test: a working GET /api/hello backend endpoint and a React Hello page that fetches and displays the greeting. Capacity is 20, with US-001 assigned to backend-agent (2 pts) and US-002 assigned to frontend-agent (2 pts).

Plan status: approved, version 1

Sprint 1: goal=Deliver the end-to-end smoke test: a working GET /api/hello backend endpoint and a React Hello page that fetches and displays the greeting., capacity=20
  Item EPIC-001 [epic]: Public Hello Page Smoke Test (points=None, role=(unassigned))
  Item US-001 [story]: Backend Hello API Endpoint (points=2, role=backend-agent)
  Item US-002 [story]: Public Hello Page Displaying Greeting (points=2, role=frontend-agent)

**Related:** EPIC-001, US-001, US-002
<!-- sdlc:auto:end narrative -->
