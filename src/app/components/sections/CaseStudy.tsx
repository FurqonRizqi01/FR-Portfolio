"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { caseStudyAnimation } from "@/animations";
import type { Project } from "@/data/projects";

type CaseStudyProps = {
  project: Project;
};

export default function CaseStudy({ project }: CaseStudyProps) {
  const caseStudyRef = useRef<HTMLElement>(null);
  const isMobile = project.preview === "mobile";

  useLayoutEffect(() => {
    if (!caseStudyRef.current) return;

    return caseStudyAnimation(caseStudyRef.current);
  }, []);

  return (
    <main className="case-study" ref={caseStudyRef}>
      <section className="case-study__hero">
        <div className="container case-study__hero-inner">
          <div className="case-study__topline">
            <span>{project.number} / Project</span>
            <Link href="/#projects">Back to projects</Link>
          </div>

          <h1>{project.title}</h1>

          <div className="case-study__intro">
            <div>
              <p>{project.description}</p>

              {(project.githubUrl || project.liveUrl) && (
                <div className="case-study__links" aria-label="Project links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="OPEN"
                    >
                      <span>Live project</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="OPEN"
                    >
                      <span>GitHub</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="case-study__facts">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container case-study__media-section">
        <div
          className={`case-study__image${isMobile ? " case-study__image--mobile" : ""}`}
        >
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            width={isMobile ? 720 : 1920}
            height={isMobile ? 1600 : 1080}
            sizes={
              isMobile
                ? "(max-width: 640px) 80vw, 440px"
                : "(max-width: 900px) 100vw, 1360px"
            }
          />
        </div>
      </section>

      <section className="container case-study__grid">
        <article>
          <span>01 / Problem</span>
          <p>{project.problem}</p>
        </article>

        <article>
          <span>02 / Solution</span>
          <p>{project.solution}</p>
        </article>
      </section>

      <section className="container case-study__stack">
        <span>03 / Technology</span>

        <div>
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
