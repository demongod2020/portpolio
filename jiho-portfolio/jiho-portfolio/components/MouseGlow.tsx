"use client";

import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div className="mouse-glow" aria-hidden="true" />;
}
