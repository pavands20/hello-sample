# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-STACK-001 · approved · source: requirements:version-1

Approved technology stack for the Hello Sample smoke-test app. Backend is FastAPI 0.115, cloud is AWS, database is PostgreSQL 16 (included for pipeline coverage only), and frontend is React 19.

Technology stack approved by the product owner; no substitutions permitted.
- Backend: FastAPI 0.115 — The only backend option the platform produces. A single GET /api/hello endpoint returning {"message": "Hello from Quorq"} is a few lines of Python. An earlier assumption named Node.js/Express, but Express is not a platform-supported option, so FastAPI is the closest lightweight framework and serves the same pipeline-proving purpose.
- Cloud: AWS — The only cloud option on the platform; no region or hosting constraints specified, so the platform default applies. Standard web deployment is sufficient for the smoke test.
- Database: PostgreSQL 16 — No data to store (no users, records, or persistence), so no database is functionally required. However, the platform's deployment pipeline expects a PostgreSQL layer by default; including it lets the pipeline exercise its full standard path including database provisioning, even though the Hello page will never query it.
- Frontend: React 19 — The only frontend option on the platform. One public page fetching from GET /api/hello and rendering the result is well within React's capabilities and keeps the pipeline exercising a real frontend without adding complexity.

**Related:** REQ-SCOPE-001, REQ-FEAT-001, REQ-FEAT-002

### REQ-SVC-001 · approved · source: requirements:version-1

Two in-scope services/capabilities: a backend GET /api/hello endpoint returning greeting JSON, and a public Hello page that fetches and displays the greeting.

Capabilities in scope:
- GET /api/hello endpoint returning the greeting JSON {"message": "Hello from Quorq"}.
- Public Hello page displaying the greeting fetched from the backend API endpoint.

**Related:** REQ-FEAT-001, REQ-FEAT-002

### REQ-SCOPE-001 · approved · source: requirements:version-1

Delivery scope is lightweight. The only feature is a single public Hello page and its API endpoint. No additional pages, features, authentication, database usage, or complex business logic are in scope.

Delivery scope: lightweight.
In scope:
- GET /api/hello endpoint returning {"message": "Hello from Quorq"}.
- Public Hello page that fetches and displays the greeting.

Out of scope — do not design or build:
- No additional pages or features.
- No authentication.
- No database usage (PostgreSQL is provisioned for pipeline coverage only; the app itself never queries it).
- No complex business logic beyond the single Hello page and its API endpoint.

**Related:** REQ-STACK-001, REQ-FEAT-001, REQ-FEAT-002, NFR-003

### REQ-FEAT-001 · approved · source: requirements:version-1

Hello API endpoint feature group: a public backend GET /api/hello endpoint that returns a JSON greeting with a 200 OK status, no authentication or parameters required.

Feature group: Hello API endpoint

Requirements:
- Backend greeting endpoint: The backend exposes a public GET /api/hello endpoint that returns the JSON object containing the message "Hello from Quorq" with a 200 OK status code. No authentication or parameters are required.

**Related:** REQ-STACK-001, REQ-SVC-001, REQ-SCOPE-001, NFR-001, NFR-003

### REQ-FEAT-002 · approved · source: requirements:version-1

Hello page display feature group: a public web page that fetches the greeting from the backend API and displays the text to any visitor, with no sign-in or credentials required.

Feature group: Hello page display

Requirements:
- Public greeting page: A public web page fetches the greeting from the backend API endpoint and displays the text "Hello from Quorq" to any visitor. The page requires no sign-in or credentials and the greeting remains visible after it loads.

**Related:** REQ-STACK-001, REQ-SVC-001, REQ-SCOPE-001, REQ-FEAT-001, NFR-002, NFR-003

### NFR-001 · approved · source: requirements:version-1

Compatibility NFR: the GET /api/hello endpoint must return responses with a Content-Type header indicating application/json so standard HTTP clients can correctly parse the greeting.

NFR-001 [compatibility] JSON content type for API responses: The GET /api/hello endpoint returns responses with a Content-Type header indicating application/json so that standard HTTP clients can correctly parse the greeting.

**Related:** REQ-FEAT-001

### NFR-002 · approved · source: requirements:version-1

Usability NFR: once the Hello page has fetched and displayed the greeting, the text must remain visible on the page without disappearing.

NFR-002 [usability] Greeting stays visible after loading: Once the Hello page has fetched the greeting from the backend and displayed it, the greeting text remains visible on the page without disappearing.

**Related:** REQ-FEAT-002

### NFR-003 · approved · source: requirements:version-1

Security NFR (accepted risk): the app is intentionally public with no authentication; any visitor can access the Hello page and GET /api/hello without signing in or providing credentials. This is a deliberate scope decision for a lightweight smoke test.

NFR-003 [security] (accepted risk) No authentication by design: The app is intentionally public with no authentication; any visitor can access the Hello page and the GET /api/hello endpoint without signing in or providing credentials. This was a deliberate scope decision for a lightweight smoke test.

**Related:** REQ-SCOPE-001, REQ-FEAT-001, REQ-FEAT-002
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-11-20

**Capabilities in scope:** GET /api/hello endpoint returning the greeting JSON, Public Hello page displaying the greeting from the backend

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | FastAPI | The only backend option this platform produces is FastAPI, and it fits a smoke test well: a single GET /api/hello endpoint returning {"message": "Hello from Quorq"} is a few lines of Python. The earlier assumption named Node.js/Express as a possibility, but Express is not an option the platform can build on its own, so FastAPI is the closest available lightweight framework and serves the same purpose — proving the pipeline can stand up an API endpoint. |
| cloud | AWS | AWS is the only cloud option on the platform and has no specific requirements beyond standard web deployment, which is exactly what your smoke test calls for. There are no region or hosting constraints from your description, so the platform default applies cleanly. |
| database | PostgreSQL | This app has no data to store — no users, no records, no persistence of any kind — so no database is functionally required. However, the platform's deployment pipeline expects a PostgreSQL layer by default, and your goal is to smoke-test that pipeline. Including PostgreSQL lets the pipeline exercise its full standard path including database provisioning, even though the Hello page itself will never query it. |
| frontend | React | Your smoke-test app needs one public page that calls a backend endpoint and renders a single greeting. React is the only frontend option on this platform and matches what was assumed during elicitation; it is more than enough to fetch from GET /api/hello and display the result. It keeps the pipeline exercising a real, recognizable frontend without adding complexity that a smoke test should not carry. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Public Hello Page Smoke Test

A minimal demo web app serving as a smoke test for the delivery pipeline. It exposes a public GET /api/hello backend endpoint returning {"message": "Hello from Quorq"} and a public Hello page that fetches and displays that greeting. There is no authentication, no database, and no other pages or features.

Assumptions:
- The frontend is built with React; the backend uses Node.js/Express or a similar lightweight framework. A competent engineer could choose any common stack suitable for a smoke test.
- No external services, databases, or authentication providers are needed.
- Deployment is a standard web application deployment (no specific hosting or region requirements beyond what the pipeline smoke test implies).
- No additional pages, features, authentication, database, or complex business logic are in scope for this version.

### US-001: Backend Hello API Endpoint

**Priority:** critical

> As a developer verifying the delivery pipeline, I want the backend to expose a GET /api/hello endpoint that returns the JSON {"message": "Hello from Quorq"}, so that the pipeline can confirm the backend service is deployed and responding correctly as a smoke test.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | the GET /api/hello endpoint is deployed and running | a request is made to GET /api/hello without any authentication or parameters | the response body is the JSON object {"message": "Hello from Quorq"} |
| AC-002 | the GET /api/hello endpoint is deployed and running | a request is made to GET /api/hello | the response is returned with a 200 OK status code |
| AC-003 | the GET /api/hello endpoint is deployed and running | a request is made to GET /api/hello | the response includes a Content-Type header indicating application/json |

### US-002: Public Hello Page Displaying Greeting

**Priority:** critical

> As a any visitor to the demo app, I want to see a public Hello page that displays the greeting fetched from the backend, so that I can confirm the frontend and backend are connected and the delivery pipeline produced a working application.

| ID | Given | When | Then |
|---|---|---|---|
| AC-004 | the Hello page is loaded in a browser and the GET /api/hello endpoint is available | the page fetches the greeting from GET /api/hello and receives the response | the text "Hello from Quorq" is displayed on the page |
| AC-005 | the Hello page is loaded in a browser | any visitor navigates to the Hello page URL | the page is accessible without signing in or providing credentials |
| AC-006 | the Hello page has fetched the greeting from GET /api/hello | the page has finished loading | the greeting text remains visible on the page |
<!-- sdlc:auto:end epics -->
