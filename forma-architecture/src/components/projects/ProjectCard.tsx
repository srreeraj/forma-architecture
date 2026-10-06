import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border border-border bg-[#111] transition-colors duration-300 hover:border-accent/40">
      <div className="aspect-[4/3] w-full bg-[#161616]">
        <div className="flex h-full items-center justify-center">
          <span className="text-xs uppercase tracking-widest text-muted">
            {project.name}
          </span>
        </div>
      </div>

      <div className="space-y-2 p-6 md:p-7">
        <h3 className="font-serif text-xl tracking-tight text-foreground md:text-2xl">
          {project.name}
        </h3>
        <p className="text-sm text-muted">{project.location}</p>
        <p className="pt-1 text-xs uppercase tracking-widest text-muted">
          {project.type} · {project.year}
        </p>
      </div>
    </article>
  );
}