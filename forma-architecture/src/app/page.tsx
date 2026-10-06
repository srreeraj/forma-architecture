import Hero from "@/components/hero/Hero";
import IdeaSection from "@/components/story/IdeaSection";
import LineSection from "@/components/story/LineSection";
import FormSection from "@/components/story/FormSection";
import MaterialSection from "@/components/story/MaterialSection";
import SpaceSection from "@/components/story/SpaceSection";
import LightSection from "@/components/story/LightSection";
import Projects from "@/components/projects/Projects";
import Philosophy from "@/components/philosophy/Philosophy";
import FinalReveal from "@/components/final/FinalReveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IdeaSection />
      <LineSection />
      <FormSection />
      <MaterialSection />
      <SpaceSection />
      <LightSection />
      <Projects />
      <Philosophy />
      <FinalReveal />
    </>
  );
}