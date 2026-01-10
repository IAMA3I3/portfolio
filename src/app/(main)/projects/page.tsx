import { Loading } from "@/components/Loading";
import PageHeader from "@/components/PageHeader";
import { ProjectList } from "@/components/ProjectList";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of frontend projects built with React, Next.js, and modern web technologies.",
}


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