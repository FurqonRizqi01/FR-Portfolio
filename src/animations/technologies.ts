import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function technologiesAnimation(scope: HTMLElement) {
  const context = gsap.context(() => {
    const header = scope.querySelector(".technologies__header");
    const list = scope.querySelector(".technologies__list");
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scope,
        start: "top 78%",
        once: true,
      },
    });

    if (header) {
      timeline.from(header.children, {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
    }

    if (list) {
      timeline.from(
        ".technology-row",
        {
          y: 60,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }
  }, scope);

  return () => context.revert();
}
