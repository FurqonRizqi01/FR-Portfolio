"use client";

import { useLayoutEffect, useRef } from "react";
import { signatureAnimation } from "@/animations";

export default function Signature() {
  const signatureRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!signatureRef.current) return;

    return signatureAnimation(signatureRef.current);
  }, []);

  return (
    <section className="signature" ref={signatureRef}>
      <div className="signature__overlay" />

      <div className="signature__content">
        <span className="signature__label">The story of</span>
        <h2>FR</h2>
        <p className="signature__name">Muhammad Furqon Rizqi</p>
        <span className="signature__role">Software Engineer</span>
      </div>

      <div className="signature__footer">For Real.</div>
    </section>
  );
}
