import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function projectsAnimation(scope: HTMLElement) {
  const context = gsap.context(() => {
    const header = scope.querySelector(".projects__header");
    const rows = scope.querySelectorAll(".project-row");
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

    if (rows.length) {
      timeline.from(
        rows,
        {
        y: 80,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(rows, { clearProps: "transform,opacity" });
        },
        },
        "-=0.35"
      );
    }
  }, scope);

  return () => context.revert();
}
