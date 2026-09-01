import gsap from "gsap";

export function showPreview(element: HTMLElement) {
  gsap.to(element, {
    autoAlpha: 1,
    scale: 1,
    duration: 0.5,
    ease: "power3.out",
    overwrite: "auto",
  });
}

export function hidePreview(element: HTMLElement) {
  gsap.to(element, {
    autoAlpha: 0,
    scale: 0.8,
    duration: 0.4,
    ease: "power3.inOut",
    overwrite: "auto",
  });
}

export function movePreview(
  element: HTMLElement,
  x: number,
  y: number
) {
  const padding = 16;
  const maxX = window.innerWidth - element.offsetWidth - padding;
  const maxY = window.innerHeight - element.offsetHeight - padding;

  gsap.to(element, {
    x: Math.max(padding, Math.min(x, maxX)),
    y: Math.max(padding, Math.min(y, maxY)),
    duration: 0.8,
    ease: "power3.out",
    overwrite: "auto",
  });
}
