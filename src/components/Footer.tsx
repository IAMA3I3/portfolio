"use client"

import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {

    return (
        <div className=" mt-4 w-full bg-slate-700 text-white py-4">
            <div className=" container mx-auto px-6">
                <div className=" flex flex-col gap-4 md:flex-row justify-between items-center">
                    <div className=" flex gap-4 items-center text-lg">
                        <a href="https://wa.me/+2348106925925" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.linkedin.com/in/abdulazeezsalami19/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=100084453611899" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/_az_ziz/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                    <p onDoubleClick={() => window.open('/studio', '_blank')}>@aziz © {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}