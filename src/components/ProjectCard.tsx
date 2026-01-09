"use client"

import { useState } from "react";
import { FaLink, FaGithub, FaExpand } from "react-icons/fa6";
import { Modal } from "./Modal";

type ProjectCardProps = {
    title: string
    description: string
    image: string
    techStack: string[]
    liveUrl?: string
    githubUrl?: string
}

export default function ProjectCard({ title, description, image, techStack, liveUrl, githubUrl }: ProjectCardProps) {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className=" group rounded-xl shadow hover:shadow-xl dark:shadow-black/60 overflow-hidden border-l border-b border-border bg-linear-60 from-black/20 dark:from-white/20 via-black/10 dark:via-white/30 to-black/20 dark:to-white/20">
                <div className=" w-full h-40 overflow-hidden bg-black">
                    <img src={image} alt={title} onClick={() => setOpen(true)} className=" w-full h-full object-cover object-top group-hover:scale-110 transition cursor-pointer" />
                </div>
                <div className=" p-4">
                    <h3 className=" text-lg font-semibold">{title}</h3>
                    <p className=" mt-2 text-sm line-clamp-4">{description}</p>
                    <div className=" mt-4 flex flex-wrap gap-2">
                        {
                            techStack.map(tech => (
                                <div className=" py-1 px-3 text-xs font-semibold bg-muted rounded text-white dark:text-gray-700" key={tech}>{tech}</div>
                            ))
                        }
                    </div>
                    <div className=" mt-4 flex flex-wrap gap-4">
                        <button onClick={() => setOpen(true)} className=" text-primary hover:scale-125 transition cursor-pointer">
                            <FaExpand />
                        </button>
                        {
                            liveUrl && (
                                <a href={liveUrl} target="_blank" className=" text-primary text-sm font-semibold flex gap-1 items-center hover:text-purple-500">
                                    <span className=" leading-none">Live</span>
                                    <span><FaLink /></span>
                                </a>
                            )
                        }
                        {
                            githubUrl && (
                                <a href={githubUrl} target="_blank" className=" text-primary text-sm font-semibold flex gap-1 items-center hover:text-purple-500">
                                    <span className=" leading-none">GitHub</span>
                                    <span><FaGithub /></span>
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <div className=" flex flex-col lg:flex-row *:w-full">
                    <div className=" h-40 lg:h-auto lg:min-h-40 bg-gray-800">
                        <img src={image} alt={title} className=" w-full h-full object-contain" />
                    </div>
                    <div className=" p-4">
                        <h3 className=" text-lg font-semibold">{title}</h3>
                        <p className=" mt-2 text-sm">{description}</p>
                        <div className=" mt-4 flex flex-wrap gap-2">
                            {
                                techStack.map(tech => (
                                    <div className=" py-1 px-3 text-xs font-semibold bg-muted rounded text-white dark:text-gray-700" key={tech}>{tech}</div>
                                ))
                            }
                        </div>
                        <div className=" mt-4 flex flex-wrap gap-4">
                            {
                                liveUrl && (
                                    <a href={liveUrl} target="_blank" className=" text-primary text-sm font-semibold flex gap-1 items-center hover:text-purple-500">
                                        <span className=" leading-none">Live</span>
                                        <span><FaLink /></span>
                                    </a>
                                )
                            }
                            {
                                githubUrl && (
                                    <a href={githubUrl} target="_blank" className=" text-primary text-sm font-semibold flex gap-1 items-center hover:text-purple-500">
                                        <span className=" leading-none">GitHub</span>
                                        <span><FaGithub /></span>
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}