import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function technologiesAnimation(scope: HTMLElement) {
  const context = gsap.context(() => {
    const header = scope.querySelector(".technologies__header");
    const list = scope.querySelector(".technologies__list");

    if (header) {
      gsap.from(header.children, {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: "top 78%",
          once: true,
        },
      });
    }

    if (list) {
      gsap.from(".technology-row", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: list,
          start: "top 82%",
          once: true,
        },
      });
    }
  }, scope);

  return () => context.revert();
}
