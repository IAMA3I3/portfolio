import { FadeIn } from "./FadeIn";

const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git & GitHub",
    "REST APIs",
    "PHP",
    "MySQL"
]

export function AboutSection() {
    return (
        <section>
            <h6 className=" text-base md:text-xl text-primary font-semibold text-center md:text-left">About Me</h6>
            <div className=" mt-4 grid gap-12 grid-cols-1 md:grid-cols-2">
                <FadeIn>
                    <div className="">
                        <p className="mb-4 text-muted">
                            I’m a frontend developer who enjoys building clean, scalable, and
                            user-focused web applications. I work mostly with React and Next.js,
                            and I care deeply about performance, accessibility, and good UI/UX.
                        </p>
                        <p className="text-muted">
                            I enjoy turning designs into functional products and collaborating
                            with teams to ship high-quality features.
                        </p>
                    </div>
                </FadeIn>
                <FadeIn>
                    <h3 className=" mb-4 text-xl font-semibold text-center md:text-left">Skills</h3>
                    <div className=" flex gap-4 whitespace-nowrap flex-wrap justify-center md:justify-start">
                        {
                            skills.map(skill => (
                                <div className=" rounded text-sm bg-muted shadow hover:shadow-lg text-white dark:text-gray-700 py-1 px-3" key={skill}>{skill}</div>
                            ))
                        }
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
