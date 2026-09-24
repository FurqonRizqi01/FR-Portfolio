import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected software engineering and full-stack development projects by Muhammad Furqon Rizqi.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <main className="project-archive">
        <div className="container">
          <div className="project-archive__topline">
            <span>FR / Project Archive</span>
            <Link href="/" data-cursor="BACK">
              Back home
            </Link>
          </div>

          <header className="project-archive__header">
            <span>All Work / {projects.length.toString().padStart(2, "0")}</span>
            <h1>Project Archive</h1>
            <p>
              Selected platforms, applications, and product work across web,
              backend, and mobile engineering.
            </p>
          </header>

          <div className="project-archive__grid">
            {projects.map((project, index) => (
              <ProjectCard
                project={project}
                priority={index < 2}
                key={project.slug}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
