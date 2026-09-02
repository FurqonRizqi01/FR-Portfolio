import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function credentialsAnimation(scope: HTMLElement) {
  const context = gsap.context(() => {
    const grid = scope.querySelector(".credentials__grid");

    if (!grid) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scope,
        start: "top 75%",
        once: true,
      },
    });

    timeline.from(".credentials__block", {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    timeline.from(
      ".credential-item",
      {
        x: -40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.45"
    );
  }, scope);

  return () => context.revert();
}
