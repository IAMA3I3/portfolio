// app/projects/page.tsx
import { client } from "@/lib/sanity"
import { projectsQuery } from "@/lib/queries"

export default async function ProjectsPage() {
    const projects = await client.fetch(projectsQuery)

    return (
        <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project: any) => (
                <div key={project._id} className="rounded-lg border p-4">
                    <img src={project.imageUrl} alt={project.title} />
                    <h2 className="mt-2 text-xl font-bold">{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    )
}
