"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { categories, projects } from "@/data/projects";

export default function WorksClient() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => active === "All" ? projects : projects.filter((project) => project.category === active),
    [active]
  );

  return (
    <>
      <div className="filter-row" role="group" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={active === category ? "filter active" : "filter"}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="works-grid">
        {filtered.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </div>
    </>
  );
}
