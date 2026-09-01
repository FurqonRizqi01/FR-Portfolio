import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function heroScrollAnimation(scope: HTMLElement) {
  const context = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scope,
        start: "top top",
        end: "+=800",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".hero__line-mask:nth-child(1) .hero__line", {
      xPercent: -25,
      ease: "none",
    });

    tl.to(
      ".hero__line-mask:nth-child(3) .hero__line",
      {
        xPercent: 25,
        ease: "none",
      },
      "<"
    );

    tl.to(
      ".hero__statement",
      {
        yPercent: -30,
        opacity: 1,
        ease: "none",
      },
      "<"
    );
  }, scope);

  return () => context.revert();
}
