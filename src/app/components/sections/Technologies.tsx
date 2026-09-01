"use client";

import { useLayoutEffect, useRef } from "react";
import { technologiesAnimation } from "@/animations";
import { technologies } from "@/data/technologies";

export default function Technologies() {
  const technologiesRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!technologiesRef.current) return;

    return technologiesAnimation(technologiesRef.current);
  }, []);

  return (
    <section className="technologies" ref={technologiesRef}>
      <div className="container">
        <div className="technologies__header">
          <span>04 / Stack</span>

          <h2>
          Tools I Build With.
          </h2>
        </div>

        <div className="technologies__list">
          {technologies.map((group, index) => (
            <div className="technology-row" key={group.category}>
              <span className="technology-row__number">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <h3>{group.category}</h3>

              <div className="technology-row__items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
