import { client } from "@/lib/sanity"
import { FadeIn } from "./FadeIn"
import { Button } from "./Button"
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

async function getProjects() {
    return client.fetch(`
    *[_type == "project" && featured == true] | order(_createdAt desc) {
      title,
      description,
      "image": image.asset->url,
      techStack,
      liveUrl,
      githubUrl
    }
  `)
}

export async function ProjectSection() {
    const projects = await getProjects()

    return (
        <section>
            <h6 className=" text-base md:text-xl text-primary font-semibold text-center md:text-left">Projects</h6>
            <h2 className=" text-2xl md:text-3xl text-center md:text-left">Some of the projects I’ve worked on recently.</h2>
            <div className=" mt-8 grid gap-8 grid-cols-1 lg:grid-cols-3">
                {
                    projects.map((project: any) => (
                        <FadeIn key={project.title}>
                            <ProjectCard {...project} />
                        </FadeIn>
                    ))
                }
            </div>
            <div className=" mt-8 flex justify-center md:justify-start">
                <FadeIn>
                    <Link href={'/projects'}>
                        <Button text="View All Projects" icon={FaArrowRight} iconPosition="end" />
                    </Link>
                </FadeIn>
            </div>
        </section>
    )
}


// *[_type == "project" && featured == true] | order(_createdAt desc) // featured projects
// *[_type == "project"] | order(_createdAt desc) // all projects