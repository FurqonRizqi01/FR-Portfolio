"use client";

import { useEffect, useState } from "react";
import { getLenis } from "@/components/providers/SmoothScroll";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const handleScrollTop = () => {
    const lenis = getLenis();
    const easeInOutCubic = (time: number) =>
      time < 0.5
        ? 4 * time * time * time
        : 1 - Math.pow(-2 * time + 2, 3) / 2;

    if (lenis) {
      lenis.scrollTo(0, {
        duration: 2.2,
        easing: easeInOutCubic,
        lock: true,
        force: true,
      });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="scroll-top"
      aria-label="Scroll to top"
      data-cursor="TOP"
      onClick={handleScrollTop}
    >
      <span aria-hidden="true">↑</span>
      <small>Top</small>
    </button>
  );
}
