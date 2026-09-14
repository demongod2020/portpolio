import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      href={`/works/${project.slug}`}
      className="project-card reveal"
      style={{ ["--delay" as string]: `${Math.min(index * 70, 280)}ms` }}
    >
      <div className="project-card-top">
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <div className="project-visual" aria-hidden="true">
        <span>{project.accent ?? "WORK"}</span>
      </div>
      <div className="project-card-content">
        <p className="eyebrow">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.tech.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
      <span className="project-arrow">↗</span>
    </Link>
  );
}
