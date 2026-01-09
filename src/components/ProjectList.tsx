import { client } from "@/lib/sanity"
import { FadeIn } from "./FadeIn"
import ProjectCard from "./ProjectCard";

type ProjectListProps = {
    featured?: boolean
}

async function getFeaturedProjects() {
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

async function getAllProjects() {
    return client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      title,
      description,
      "image": image.asset->url,
      techStack,
      liveUrl,
      githubUrl
    }
  `)
}

export async function ProjectList({ featured = false }: ProjectListProps) {

    const projects = featured ? await getFeaturedProjects() : await getAllProjects()

    return (
        <div className={` grid gap-8 grid-cols-1 lg:grid-cols-3`}>
            {
                projects.map((project: any) => (
                    <FadeIn key={project.title}>
                        <ProjectCard {...project} />
                    </FadeIn>
                ))
            }
        </div>
    )
}


// *[_type == "project" && featured == true] | order(_createdAt desc) // featured projects
// *[_type == "project"] | order(_createdAt desc) // all projects