"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll — site-wide Lenis smooth-scroll provider (BUILD_SPEC §4).
 * Wraps the app body. Respects prefers-reduced-motion by skipping Lenis
 * entirely so native (instant) scrolling is used.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
