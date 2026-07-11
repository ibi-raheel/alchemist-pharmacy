"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 up to `value` when scrolled into view.
 * Falls back to the final value immediately if the user prefers reduced motion.
 */
export function CountUp({
  value,
  duration = 1400,
  className = "",
}: {
  value: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    let timer: ReturnType<typeof setInterval> | undefined;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      // A ~60fps timer-driven tween (works even when rAF is throttled).
      timer = setInterval(() => {
        const t = Math.min(1, (performance.now() - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setDisplay(Math.round(eased * value));
        if (t >= 1 && timer) clearInterval(timer);
      }, 16);
    };

    // If IntersectionObserver is unavailable, just show the final value.
    if (typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        run();
      },
      { threshold: 0.3 },
    );
    io.observe(el);

    // Safety net: if the observer never fires (e.g. suspended tab), still
    // land on the correct number rather than leaving it stuck at 0.
    const fallback = setTimeout(() => {
      if (!started.current) setDisplay(value);
    }, 2500);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
      if (timer) clearInterval(timer);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
    </span>
  );
}
