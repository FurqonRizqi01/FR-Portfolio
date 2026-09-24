"use client";
import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { projectsAnimation } from "@/animations";

const DAILY_PROJECT_LIMIT = 4;

function getDailyProjects(date: Date) {
  const [primaryProject, ...rotatingProjects] = projects;
  const dayKey = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
  let seed = Number(dayKey.replaceAll("-", ""));

  for (let index = rotatingProjects.length - 1; index > 0; index -= 1) {
    seed = (seed * 9301 + 49297) % 233280;
    const target = Math.floor((seed / 233280) * (index + 1));
    [rotatingProjects[index], rotatingProjects[target]] = [
      rotatingProjects[target],
      rotatingProjects[index],
    ];
  }

  return [primaryProject, ...rotatingProjects].slice(0, DAILY_PROJECT_LIMIT);
}

export default function Projects() {
  const projectsRef = useRef<HTMLElement>(null);
  const [selectedProjects, setSelectedProjects] = useState(() =>
    projects.slice(0, DAILY_PROJECT_LIMIT)
  );

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setSelectedProjects(getDailyProjects(new Date()));
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useLayoutEffect(() => {
    const projectsElement = projectsRef.current;

    if (!projectsElement) return;

    return projectsAnimation(projectsElement);
  }, []);

  return (
    <section className="projects" id="projects" ref={projectsRef}>
      <div className="container">
        <div className="projects__header">
          <span className="projects__label">Selected Work / 02</span>

          <h2>Selected Projects</h2>

          <span className="projects__count">
            Daily Edit / {DAILY_PROJECT_LIMIT.toString().padStart(2, "0")}
          </span>
        </div>

        <div className="projects__grid">
          {selectedProjects.map((project, index) => (
            <ProjectCard
              project={project}
              priority={index < 2}
              key={project.slug}
            />
          ))}

        </div>

        <div className="projects__footer">
          <p>
            A rotating edit of product, platform, and mobile work. The selection
            refreshes every day.
          </p>

          <div className="projects__footer-actions">
            <span className="projects__footer-note">Updated daily / WIB</span>

            <Link
              href="/projects"
              className="projects__explore"
              data-cursor="OPEN"
            >
              <span>Explore all projects</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
