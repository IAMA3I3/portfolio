import Link from "next/link";
import { Button } from "./Button";
import { FadeIn } from "./FadeIn";

export default function Hero() {

    return (
        <div className=" w-full p-8 rounded-xl shadow-lg border-l border-b border-border bg-linear-60 from-black/20 dark:from-white/20 via-black/10 dark:via-white/30 to-black/20 dark:to-white/20">
            <div className=" flex flex-col-reverse md:flex-row gap-12 items-center text-center md:text-left">
                <div className=" flex-1">
                    <FadeIn delay={0.5}>
                        <p className="mb-4 text-sm font-medium text-primary">
                            Hi, I’m Abdulazeez 👋
                        </p>
                    </FadeIn>
                    <FadeIn delay={1}>
                        <h1 className="mb-6 text-2xl font-bold leading-tight md:text-4xl">
                            Frontend Developer building modern, scalable web apps
                        </h1>
                    </FadeIn>
                    <FadeIn delay={1.5}>
                        <p className="mb-8 max-w-xl text-muted font-semibold">
                            I build responsive, user-focused interfaces using React, Next.js,
                            TypeScript, and modern UI tools.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0}>
                        <div className=" flex flex-col sm:flex-row gap-4 sm:items-center text-center">
                            <Link href={'/projects'}>
                                <Button text="View Projects" size="large" fullWidth />
                            </Link>
                            <Link href={'/contact'}>
                                <Button text="Contact Me" size="large" outlined fullWidth />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
                <div className=" w-full max-w-80">
                    <FadeIn>
                        <img
                            src={'/assets/me.webp'}
                            alt="Abdulazeez Salami"
                            className=" w-full"
                        />
                    </FadeIn>
                </div>
            </div>
        </div>
    )
}