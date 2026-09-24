"use client";

import { useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { getLenis } from "@/components/providers/SmoothScroll";

export default function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    const body = document.body;
    const resetScroll = () => {
      const lenis = getLenis();

      lenis?.scrollTo(0, {
        immediate: true,
        force: true,
      });
      window.scrollTo(0, 0);
    };

    resetScroll();
    const frame = requestAnimationFrame(resetScroll);

    if (document.documentElement.classList.contains("is-loading")) {
      gsap.set(body, { clearProps: "opacity" });
      return () => cancelAnimationFrame(frame);
    }

    gsap.killTweensOf(body);
    gsap.fromTo(
      body,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.55,
        ease: "power2.out",
        clearProps: "opacity",
      }
    );

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useLayoutEffect(() => {
    function handleProjectClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>("a[data-project-link]");
      const href = link?.getAttribute("href");

      if (!link || !href || link.target === "_blank") return;

      event.preventDefault();

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(href);
        return;
      }

      gsap.to(document.body, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        overwrite: "auto",
        onComplete: () => router.push(href),
      });
    }

    document.addEventListener("click", handleProjectClick);

    return () => {
      document.removeEventListener("click", handleProjectClick);
      gsap.killTweensOf(document.body);
    };
  }, [router]);

  return null;
}
