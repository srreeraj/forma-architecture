import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export default function Projects() {
  return (
    <section id="projects" className="arch-rule section-padding">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-widest text-muted">07</p>
          <h2 className="mt-5 font-serif text-display-md text-foreground">
            SELECTED WORK
          </h2>
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}