import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function heroScrollAnimation(scope: HTMLElement) {
  const supportsHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;

  if (!supportsHover) return () => undefined;

  const context = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scope,
        start: "top top",
        end: "bottom top",
        scrub: 0.7,
        invalidateOnRefresh: true,
      },
    });

    tl.to(
      ".hero__line-mask:nth-child(1) .hero__line",
      {
        x: () => -Math.min(window.innerWidth * 0.1, 160),
        opacity: 0.55,
        ease: "none",
      },
      0
    );

    tl.to(
      ".hero__line-mask:nth-child(3) .hero__line",
      {
        x: () => Math.min(window.innerWidth * 0.1, 160),
        opacity: 0.55,
        ease: "none",
      },
      0
    );

    tl.to(
      ".hero__statement",
      {
        y: () => -Math.min(window.innerHeight * 0.1, 90),
        opacity: 1,
        scale: 1.02,
        ease: "none",
      },
      0
    );
  }, scope);

  return () => context.revert();
}
