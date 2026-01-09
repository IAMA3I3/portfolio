import { FadeIn } from "./FadeIn"
import { Button } from "./Button"
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { ProjectList } from "./ProjectList";
import { Suspense } from "react";
import { Loading } from "./Loading";

export async function ProjectSection() {

    return (
        <section>
            <h6 className=" text-base md:text-xl text-primary font-semibold text-center md:text-left">Projects</h6>
            <h2 className=" mb-8 text-2xl md:text-3xl text-center md:text-left">Some of the projects I’ve worked on recently.</h2>
            <Suspense fallback={<Loading />}>
                <ProjectList featured />
            </Suspense>
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