"use client";

import Script from "next/script";
import { useRef } from "react";

/**
 * Loads GSAP, ScrollTrigger, and Lenis from the same CDNs the original
 * static pages used, then dispatches a "vendor-scripts:ready" event on
 * window once all three have actually finished loading.
 *
 * Why this exists: main.js (loaded afterInteractive) previously just
 * assumed these three beforeInteractive scripts were already available
 * by the time it ran. That's usually true, but not guaranteed — a slow
 * network, a flaky CDN, or dev-mode timing can make main.js run before
 * `gsap` exists on window. When that happened, the entire GSAP-dependent
 * block (including the door-opening animation) silently skipped itself,
 * and only the 3.5s fail-safe kicked in — hiding the loader instantly
 * with no animation at all. Dispatching an explicit "ready" event lets
 * main.js wait for the real thing instead of guessing.
 */
export default function VendorScripts() {
  const loadedCount = useRef(0);
  const totalScripts = 3;

  function markLoaded() {
    loadedCount.current += 1;
    if (loadedCount.current === totalScripts) {
      window.dispatchEvent(new Event("vendor-scripts:ready"));
    }
  }

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="beforeInteractive"
        onReady={markLoaded}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        strategy="beforeInteractive"
        onReady={markLoaded}
      />
      <Script
        src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js"
        strategy="beforeInteractive"
        onReady={markLoaded}
      />

      {/* Shared interaction layer — waits for the event above before
          touching gsap (see public/main.js) */}
      <Script src="/main.js" strategy="afterInteractive" />
    </>
  );
}
