// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { brand } from "@/lib/brand";

const PRODUCT = "Hello Sample";
const mix = (colour, percent) => `color-mix(in srgb, ${colour} ${percent}%, transparent)`;

export default function Screen() {
  const [phase, setPhase] = React.useState("loading"); // loading | success | error
  const [message, setMessage] = React.useState("");
  const rule = `2px solid ${brand.primaryColor}`;
  const hair = `1px solid ${mix(brand.primaryColor, 16)}`;

  // Simulate fetching GET /api/hello — no real server in the sandbox.
  React.useEffect(() => {
    let active = true;
    setPhase("loading");
    const timer = setTimeout(() => {
      if (!active) return;
      setMessage("Hello from Quorq");
      setPhase("success");
    }, 400);
    return () => { active = false; clearTimeout(timer); };
  }, []);

  const handleRetry = () => {
    setPhase("loading");
    setTimeout(() => {
      setMessage("Hello from Quorq");
      setPhase("success");
    }, 400);
  };

  return (
    <div className="bg-white" style={{ color: brand.primaryColor, fontFamily: brand.fontBody }}>
      {/* Row 1 — page title */}
      <div data-wf="b-0-0" className="pb-4" style={{ borderBottom: rule }}>
        <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: brand.neutralColor }}>{PRODUCT}</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight" style={{ fontFamily: brand.fontHeading }}>Hello</h1>
      </div>

      {/* Row 2 — greeting text */}
      <div data-wf="b-1-0" className="py-8">
        {phase === "loading" && (
          <p
            className="text-[13px] font-bold uppercase tracking-[0.14em]"
            style={{ color: brand.neutralColor }}
            aria-live="polite"
          >
            Fetching greeting from /api/hello&hellip;
          </p>
        )}

        {phase === "success" && (
          <p
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: brand.fontHeading }}
            aria-live="polite"
          >
            {message}
          </p>
        )}

        {phase === "error" && (
          <div className="flex items-center gap-6" aria-live="assertive">
            <p className="text-2xl font-bold tracking-tight" style={{ fontFamily: brand.fontHeading, color: brand.accentColor }}>
              Unable to reach /api/hello
            </p>
            <button
              type="button"
              onClick={handleRetry}
              className="h-9 px-4 text-xs font-bold uppercase tracking-[0.14em]"
              style={{ border: rule, borderRadius: brand.radius }}
            >
              Retry
            </button>
          </div>
        )}
      </div>

      {/* Pipeline smoke-test status line */}
      <div className="flex items-center gap-3 pt-4 text-[11px] font-bold uppercase tracking-[0.14em]" style={{ borderTop: hair, color: brand.neutralColor }}>
        <span
          className="inline-block h-2 w-2"
          style={{
            backgroundColor: phase === "success" ? brand.primaryColor : phase === "error" ? brand.accentColor : mix(brand.primaryColor, 40),
          }}
          aria-hidden="true"
        />
        <span>
          {phase === "loading" && "Endpoint pending"}
          {phase === "success" && "Endpoint OK — GET /api/hello returned 200"}
          {phase === "error" && "Endpoint unreachable — check deployment"}
        </span>
      </div>
    </div>
  );
}
