import { AboutSection } from "@/components/AboutSection";
import Hero from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className=" flex-1">
      <div className=" container mx-auto px-6 space-y-8">
        <Hero />
        <ProjectSection />
        <AboutSection />
      </div>
    </div>
  );
}
