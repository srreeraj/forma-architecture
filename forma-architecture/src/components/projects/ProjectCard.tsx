import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border border-border bg-[#111] transition-colors hover:border-accent/40">
      {/* Image placeholder */}
      <div className="aspect-[4/3] w-full bg-[#161616]">
        <div className="flex h-full items-center justify-center">
          <span className="text-xs uppercase tracking-wider text-muted">
            {project.name}
          </span>
        </div>
      </div>

      <div className="space-y-2 p-6">
        <h3 className="font-serif text-xl tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="text-sm text-muted">{project.location}</p>
        <p className="text-xs uppercase tracking-wider text-muted">
          {project.type} · {project.year}
        </p>
      </div>
    </article>
  );
}