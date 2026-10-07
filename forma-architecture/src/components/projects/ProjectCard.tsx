"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={itemVariant}
      className="group border border-border bg-[#111] transition-colors duration-300 hover:border-accent/40"
    >
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
    </motion.article>
  );
}