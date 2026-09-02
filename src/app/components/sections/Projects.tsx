"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useLayoutEffect, useRef, useState } from "react";
import {
  destroyPreview,
  hidePreview,
  movePreview,
  projectsAnimation,
  showPreview,
} from "@/animations";

export default function Projects() {
  const projectsRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<
    (typeof projects)[number] | null
  >(null);

  useLayoutEffect(() => {
    const projectsElement = projectsRef.current;
    const previewElement = previewRef.current;

    if (!projectsElement) return;

    const cleanUpAnimation = projectsAnimation(projectsElement);

    return () => {
      cleanUpAnimation();
      if (previewElement) destroyPreview(previewElement);
    };
  }, []);

  return (
    <section
      className="projects"
      id="projects"
      ref={projectsRef}
      onMouseMove={(event) => {
        if (previewRef.current) {
          movePreview(
            previewRef.current,
            event.clientX + 50,
            event.clientY + 80
          );
        }
      }}
    >
      <div className="container">
        <div className="projects__header">
          <span className="projects__label">Selected Work / 02</span>

          <h2>
            Selected
            <br />
            Projects
          </h2>

          <span className="projects__count">
            {projects.length.toString().padStart(2, "0")} Projects
          </span>
        </div>

        <div className="projects__list">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              className="project-row"
              key={project.number}
              data-project={project.number}
              data-cursor="VIEW"
              onMouseEnter={() => {
                setActiveProject(project);

                if (previewRef.current) {
                  showPreview(previewRef.current);
                }
              }}
              onMouseLeave={() => {
                if (previewRef.current) {
                  hidePreview(previewRef.current);
                }
              }}
            >
              <div className="project-row__top">
                <span className="project-row__number">
                  {project.number}
                </span>

                <h3>{project.title}</h3>

                <span className="project-row__year">
                  {project.year}
                </span>
              </div>

              <div className="project-row__bottom">
                <span>{project.category}</span>

                <div className="project-row__stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div
        ref={previewRef}
        className={`project-preview project-preview--${
          activeProject?.preview ?? "desktop"
        }`}
        aria-hidden="true"
      >
        {activeProject && (
          <Image
            key={activeProject.slug}
            src={activeProject.image}
            alt=""
            fill
            sizes={activeProject.preview === "mobile" ? "200px" : "360px"}
          />
        )}
      </div>
    </section>
  );
}
