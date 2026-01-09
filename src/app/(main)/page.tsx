import { AboutSection } from "@/components/AboutSection";
import Hero from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className=" flex-1 space-y-16">
      <div className=" container mx-auto px-6 space-y-16">
        <Hero />
        <ProjectSection />
      </div>
      <div className=" py-8 bg-slate-200 dark:bg-slate-600">
        <div className=" container mx-auto px-6 space-y-16">
          <AboutSection />
        </div>
      </div>
    </div>
  );
}
