import gsap from "gsap";

type PreviewMover = {
  x: ReturnType<typeof gsap.quickTo>;
  y: ReturnType<typeof gsap.quickTo>;
};

const previewMovers = new WeakMap<HTMLElement, PreviewMover>();

function getPreviewMover(element: HTMLElement) {
  const existingMover = previewMovers.get(element);

  if (existingMover) return existingMover;

  const mover = {
    x: gsap.quickTo(element, "x", {
      duration: 0.65,
      ease: "power3.out",
    }),
    y: gsap.quickTo(element, "y", {
      duration: 0.65,
      ease: "power3.out",
    }),
  };

  previewMovers.set(element, mover);
  return mover;
}

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

  const mover = getPreviewMover(element);

  mover.x(Math.max(padding, Math.min(x, maxX)));
  mover.y(Math.max(padding, Math.min(y, maxY)));
}

export function destroyPreview(element: HTMLElement) {
  gsap.killTweensOf(element);
  previewMovers.delete(element);
}
