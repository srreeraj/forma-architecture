"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-end section-padding"
    >
      {/* Soft architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 arch-grid opacity-60"
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl"
        variants={prefersReducedMotion ? undefined : container}
        initial={prefersReducedMotion ? false : "hidden"}
        animate={prefersReducedMotion ? false : "visible"}
      >
        <motion.p
          variants={prefersReducedMotion ? undefined : item}
          className="mb-8 text-xs uppercase tracking-widest text-muted"
        >
          FORMA ARCHITECTURE STUDIO
        </motion.p>

        <motion.h1
          variants={prefersReducedMotion ? undefined : item}
          className="max-w-5xl font-serif text-display-xl text-foreground"
        >
          Architecture shaped by ideas.
        </motion.h1>

        <motion.p
          variants={prefersReducedMotion ? undefined : item}
          className="mt-10 max-w-md text-base leading-relaxed text-muted md:text-lg"
        >
          We create spaces where structure, light and human experience become
          one.
        </motion.p>

        <motion.div
          variants={prefersReducedMotion ? undefined : item}
          className="mt-14"
        >
          <Link
            href="#idea"
            className="group inline-flex items-center gap-4 text-xs uppercase tracking-widest text-foreground"
          >
            <span className="transition-opacity group-hover:opacity-70">
              Enter the story
            </span>
            <span
              aria-hidden="true"
              className="text-muted transition-transform group-hover:translate-y-1"
            >
              ↓
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}