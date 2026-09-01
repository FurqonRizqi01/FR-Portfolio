"use client";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
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
    if (!projectsRef.current) return;

    return projectsAnimation(projectsRef.current);
  }, []);

  useEffect(() => {
    projects.forEach((project) => {
      const image = new window.Image();
      image.src = project.image;
    });
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
        style={{
          backgroundImage: activeProject
            ? `url("${activeProject.image}")`
            : "none",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
