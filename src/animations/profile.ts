import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function profileAnimation(scope: HTMLElement) {
  const isMobile = window.matchMedia("(max-width: 900px)").matches;

  const context = gsap.context(() => {
    const content = scope.querySelector(".profile__hero");

    if (!content) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: "top 72%",
        once: true,
      },
    });

    timeline.from([".section-number", ".profile__title-line"], {
      yPercent: 110,
      opacity: 0,
      stagger: 0.12,
      duration: 1.2,
      ease: "power3.out",
    });

    timeline.from(
      [
        ".profile__role > span",
        ".profile__description",
        ".profile__signature",
        ".profile__details > div",
      ],
      {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.5"
    );

    timeline.from(
      ".profile__photo img",
      {
        x: isMobile ? 0 : 80,
        y: isMobile ? 32 : 0,
        opacity: 0,
        scale: isMobile ? 1.02 : 1.04,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8"
    );

    timeline.from(
      ".profile__background-text",
      {
        opacity: 0,
        xPercent: -8,
        duration: 1,
        ease: "power2.out",
      },
      0
    );
  }, scope);

  return () => context.revert();
}
