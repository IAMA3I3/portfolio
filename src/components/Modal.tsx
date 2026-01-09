"use client"

import { ReactNode, useEffect } from "react"
import { createPortal } from "react-dom"
import { IoCloseOutline } from "react-icons/io5"

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    if (!isOpen) return null

    return createPortal(
        <div className="fixed inset-0 z-1000 flex items-center justify-center p-4">

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal content */}
            <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-background shadow-xl animate-fadeIn overflow-hidden">
                {children}
            </div>

            {/* close button */}
            <div onClick={onClose} className={` transition-all duration-500 z-50 absolute top-4 right-4 w-10 aspect-square rounded-full shadow-lg text-2xl bg-white dark:bg-black/70 text-primary flex justify-center items-center hover:bg-primary hover:text-white active:scale-95 cursor-pointer`}>
                <IoCloseOutline />
            </div>

        </div>,
        document.body
    )
}
