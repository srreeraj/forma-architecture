import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-wider text-muted">07</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            SELECTED WORK
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}