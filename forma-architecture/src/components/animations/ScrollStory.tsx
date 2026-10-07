"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollStoryProps {
  children: (progress: number) => React.ReactNode;
}

export default function ScrollStory({ children }: ScrollStoryProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#story-scroll",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2, // smooth scrubbing
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return <>{children(progress)}</>;
}