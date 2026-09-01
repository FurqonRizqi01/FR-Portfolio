import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function signatureAnimation(scope: HTMLElement) {
  const context = gsap.context(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scope,
        start: "top 70%",
        once: true,
      },
    });

    timeline.from(".signature__label", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    timeline.from(
      ".signature h2",
      {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.3"
    );

    timeline.from(
      [".signature__name", ".signature__role", ".signature__footer"],
      {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }, scope);

  return () => context.revert();
}
