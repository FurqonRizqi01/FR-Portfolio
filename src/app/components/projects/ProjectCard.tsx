import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export default function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`project-card project-card--${project.preview}`}
      data-project-link
      data-cursor="VIEW"
    >
      <div className="project-card__media">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          priority={priority}
          sizes="(max-width: 900px) calc(100vw - 48px), 46vw"
        />

        <div className="project-card__index" aria-hidden="true">
          <span>{project.number}</span>
          <span>{project.year}</span>
        </div>
      </div>

      <div className="project-card__content">
        <span className="project-card__category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-card__stack" aria-label="Technology stack">
          {project.stack.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
