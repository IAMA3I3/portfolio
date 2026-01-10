import { Loading } from "@/components/Loading";
import PageHeader from "@/components/PageHeader";
import { ProjectList } from "@/components/ProjectList";
import { Suspense } from "react";

export default function ProjectsPage() {

    return (
        <div className=" flex-1 space-y-16">
            <div className=" container mx-auto px-6 space-y-16">
                <PageHeader title="Projects" subtitle="A collection of projects I’ve worked on, ranging from personal experiments to full applications." currentPage="Projects" />
                <Suspense fallback={<Loading />}>
                    <ProjectList allowGrid2 />
                </Suspense>
            </div>
        </div>
    )
}