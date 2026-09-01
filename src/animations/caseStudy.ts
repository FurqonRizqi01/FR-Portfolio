import gsap from "gsap";

export function caseStudyAnimation(scope: HTMLElement) {
  const context = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { overwrite: "auto" } });

    tl.from(
      [
        ".case-study__topline",
        ".case-study h1",
        ".case-study__intro",
      ],
      {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      }
    );

    tl.from(
      ".case-study__image",
      {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.5"
    );

    tl.from(
      ".case-study__grid > article",
      {
        y: 60,
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
