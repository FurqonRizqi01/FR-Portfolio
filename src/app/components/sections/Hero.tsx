"use client";

import { useLayoutEffect, useRef } from "react";
import { heroAnimation, heroScrollAnimation } from "@/animations";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const hero = heroRef.current;
    let cleanUpIntro: (() => void) | undefined;
    let hasStarted = false;

    const startIntro = () => {
      if (hasStarted) return;

      hasStarted = true;
      cleanUpIntro = heroAnimation(hero);
    };

    const bootAlreadyFinished =
      !document.documentElement.classList.contains("is-loading");

    if (bootAlreadyFinished) {
      startIntro();
    } else {
      window.addEventListener("fr:loaded", startIntro, { once: true });
    }

    const cleanUpScroll = heroScrollAnimation(heroRef.current);

    return () => {
      window.removeEventListener("fr:loaded", startIntro);
      cleanUpScroll();
      cleanUpIntro?.();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="container hero__container">
        <div className="hero__meta hero__meta--top">
          <span>FR / 001</span>
          <span>Indonesia</span>
        </div>

        <div className="hero__main">
          <div>
            <h1 className="hero__name">
                <span className="hero__line-mask">
                    <span className="hero__line">
                        Muhammad
                    </span>
                </span>
                <span className="hero__line-mask">
                    <span className="hero__line">
                    Furqon
                    </span>
                </span>
                <span className="hero__line-mask">
                    <span className="hero__line">
                    Rizqi
                    </span>
                </span>
            </h1>

            <div className="hero__role">
                <span className="hero__role-item">
                    Software Engineer
                </span>

                <span className="hero__role-divider">
                    /
                </span>

                <span className="hero__role-item">
                    Full-Stack Developer
                </span>
            </div>
          </div>

            <div className="hero__statement">

                <span className="hero__statement-line">
                    I build software
                </span>

                <span className="hero__statement-line">
                    for real-world
                </span>

                <span className="hero__statement-line">
                    problems.
                </span>

            </div>
        </div>

        <div className="hero__bottom">

            <span className="hero__scroll">
                Scroll to explore ↓
            </span>

            <span className="hero__year">
                2026
            </span>

        </div>
      </div>
    </section>
  );
}
