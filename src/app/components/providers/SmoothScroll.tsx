"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let activeLenis: Lenis | null = null;

export function getLenis() {
  return activeLenis;
}

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      respectReducedMotion: false,
      anchors: {
        duration: 1.6,
        easing: (time) =>
          time < 0.5
            ? 4 * time * time * time
            : 1 - Math.pow(-2 * time + 2, 3) / 2,
        lock: true,
      },
    });

    activeLenis = lenis;

    const updateScrollTrigger = () => ScrollTrigger.update();
    lenis.on("scroll", updateScrollTrigger);

    let frameId = 0;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(frameId);
      if (activeLenis === lenis) activeLenis = null;
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
    };
  }, []);

  return null;
}
