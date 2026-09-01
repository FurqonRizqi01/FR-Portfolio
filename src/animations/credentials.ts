import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function credentialsAnimation(scope: HTMLElement) {
  const context = gsap.context(() => {
    const grid = scope.querySelector(".credentials__grid");

    if (!grid) return;

    gsap.from(".credentials__block", {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: scope,
        start: "top 75%",
        once: true,
      },
    });

    gsap.from(".credential-item", {
      x: -40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: grid,
        start: "top 65%",
        once: true,
      },
    });
  }, scope);

  return () => context.revert();
}
