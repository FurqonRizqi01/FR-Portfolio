import gsap from "gsap";

export function heroAnimation(scope: HTMLElement) {
  const context = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { overwrite: "auto" } });

    tl.from(".hero__meta--top", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power3.out",
    });

    tl.from(
      ".hero__line",
      {
        yPercent: 100,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      },
      "-=0.4"
    );

    tl.from(
      ".hero__role-item",
      {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
      },
      "-=0.6"
    );

    tl.from(
      ".hero__statement-line",
      {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
      },
      "-=0.5"
    );

    tl.from(
      ".hero__bottom",
      {
        opacity: 0,
        duration: 0.8,
      },
      "-=0.3"
    );
  }, scope);

  return () => context.revert();
}
