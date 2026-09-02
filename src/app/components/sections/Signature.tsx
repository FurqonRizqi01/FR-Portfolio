"use client";

import Image from "next/image";
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
      <Image
        className="signature__background"
        src="/images/profile/banners.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="signature__overlay" />

      <div className="signature__content">
        <span className="signature__label">The story of</span>
        <div className="signature__logo">
          <Image
            src="/images/logo/logo_fr-1.png"
            alt="FR — Muhammad Furqon Rizqi"
            width={1254}
            height={1254}
          />
        </div>
        <p className="signature__name">Muhammad Furqon Rizqi</p>
        <span className="signature__role">Software Engineer</span>
      </div>

      <div className="signature__footer">For Real.</div>
    </section>
  );
}
