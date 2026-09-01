import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function projectsAnimation(scope: HTMLElement) {
  const context = gsap.context(() => {
    const header = scope.querySelector(".projects__header");
    const rows = scope.querySelectorAll(".project-row");

    if (header) {
      gsap.from(header.children, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
        },
      });
    }

    rows.forEach((row) => {
      gsap.from(row, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
        },
        onComplete: () => {
          gsap.set(row, { clearProps: "transform,opacity" });
        },
      });
    });
  }, scope);

  return () => context.revert();
}
