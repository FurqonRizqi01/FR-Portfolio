"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const loader = loaderRef.current;
    const number = numberRef.current;
    const line = lineRef.current;

    if (!loader || !number || !line) return;

    const root = document.documentElement;
    const progress = { value: 0 };
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    root.classList.add("is-loading");

    const context = gsap.context(() => {
      gsap.set(loader, { force3D: true });

      const timeline = gsap.timeline({
        onComplete: () => {
          root.classList.remove("is-loading");
          gsap.set(loader, { display: "none" });
        },
      });

      timeline.to(".preloader__brand", {
        y: 0,
        opacity: 1,
        duration: reducedMotion ? 0.2 : 0.8,
        ease: "power3.out",
        force3D: true,
      });

      timeline.to(
        progress,
        {
          value: 100,
          duration: reducedMotion ? 0.8 : 3,
          ease: "none",
          onUpdate: () => {
            number.textContent = Math.round(progress.value).toString();
          },
        },
        reducedMotion ? 0.05 : 0.2
      );

      timeline.to(
        line,
        {
          scaleX: 1,
          duration: reducedMotion ? 0.8 : 3,
          ease: "none",
          force3D: true,
        },
        reducedMotion ? 0.05 : 0.2
      );

      timeline.call(() => {
        window.dispatchEvent(new Event("fr:loaded"));
      });

      timeline.to(
        loader,
        {
          yPercent: -100,
          duration: reducedMotion ? 0.35 : 1.2,
          ease: "power4.inOut",
          force3D: true,
        },
        reducedMotion ? "+=0.1" : "+=0.6"
      );
    }, loader);

    return () => {
      context.revert();
      root.classList.remove("is-loading");
    };
  }, []);

  return (
    <div ref={loaderRef} className="preloader" aria-hidden="true">
      <div className="preloader__brand">
        FR<sup>®</sup>
      </div>

      <div className="preloader__progress">
        <span>Loading</span>

        <div className="preloader__line">
          <span ref={lineRef} />
        </div>

        <span>
          <span ref={numberRef} className="preloader__number">0</span>%
        </span>
      </div>
    </div>
  );
}
