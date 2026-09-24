import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function projectsAnimation(scope: HTMLElement) {
  const context = gsap.context(() => {
    const header = scope.querySelector(".projects__header");
    const cards = scope.querySelectorAll(".project-card");
    const footer = scope.querySelector(".projects__footer");
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scope,
        start: "top 75%",
        once: true,
      },
    });

    if (header) {
      timeline.from(header.children, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    if (cards.length) {
      timeline.from(
        cards,
        {
          y: 80,
          opacity: 0,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          onComplete: () => {
            gsap.set(cards, { clearProps: "transform,opacity" });
          },
        },
        "-=0.35"
      );
    }

    if (footer) {
      timeline.from(
        footer,
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.55"
      );
    }
  }, scope);

  return () => context.revert();
}
