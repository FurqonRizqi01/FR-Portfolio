"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const activeTargetRef = useRef<HTMLElement | null>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!cursor || !finePointer.matches) return;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      autoAlpha: 0,
    });

    const moveX = gsap.quickTo(cursor, "x", {
      duration: 0.4,
      ease: "power3.out",
    });
    const moveY = gsap.quickTo(cursor, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    function handlePointerMove(event: PointerEvent) {
      moveX(event.clientX);
      moveY(event.clientY);
      gsap.to(cursor, {
        autoAlpha: 1,
        duration: 0.2,
        overwrite: "auto",
      });
    }

    function handlePointerOver(event: PointerEvent) {
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-cursor], a, button"
      );

      if (!target || target === activeTargetRef.current) return;

      activeTargetRef.current = target;
      setText(target.dataset.cursor ?? "OPEN");
    }

    function handlePointerOut(event: PointerEvent) {
      const activeTarget = activeTargetRef.current;

      if (!activeTarget) return;

      const nextTarget = event.relatedTarget as Node | null;

      if (nextTarget && activeTarget.contains(nextTarget)) return;

      activeTargetRef.current = null;
      setText("");
    }

    function hideCursor() {
      gsap.to(cursor, {
        autoAlpha: 0,
        duration: 0.2,
        overwrite: "auto",
      });
    }

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    document.documentElement.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
      gsap.killTweensOf(cursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor${text ? " cursor--active" : ""}`}
      aria-hidden="true"
    >
      {text}
    </div>
  );
}
