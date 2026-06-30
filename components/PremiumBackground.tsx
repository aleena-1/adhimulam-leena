"use client";

import { useEffect, useRef } from "react";

export default function PremiumBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let targetScroll = 0;
    let currentScroll = 0;

    const setTargets = (event: PointerEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const setScroll = () => {
      targetScroll = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      currentScroll += (targetScroll - currentScroll) * 0.08;

      element.style.setProperty("--mx", currentX.toFixed(4));
      element.style.setProperty("--my", currentY.toFixed(4));
      element.style.setProperty("--scroll", currentScroll.toFixed(4));

      frame = window.requestAnimationFrame(animate);
    };

    setScroll();
    window.addEventListener("pointermove", setTargets, { passive: true });
    window.addEventListener("scroll", setScroll, { passive: true });
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", setTargets);
      window.removeEventListener("scroll", setScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} className="site-galaxy-backdrop" aria-hidden="true">
      <div className="bg-base-layer" />
      <div className="bg-glow-layer" />
      <div className="bg-grid-layer" />
      <div className="bg-particle-layer" />
      <div className="bg-beam-layer" />
      <div className="bg-noise-layer" />
      <div className="bg-vignette-layer" />
    </div>
  );
}
