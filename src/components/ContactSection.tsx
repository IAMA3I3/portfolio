import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { FadeIn } from "./FadeIn";

export default function ContactSection() {

    return (
        <section>
            <div className=" w-full p-8 rounded-xl shadow-lg border-l border-b border-border bg-linear-60 from-black/20 dark:from-white/20 via-black/10 dark:via-white/30 to-black/20 dark:to-white/20">
                <h6 className=" text-base md:text-xl text-primary font-semibold text-center md:text-left dark:text-white md:dark:text-primary">Contact Me</h6>
                <h2 className=" mb-2 text-2xl md:text-3xl text-center md:text-left">Let’s work together</h2>
                <p className=" text-muted font-semibold text-sm text-center md:text-left">Have a project or opportunity in mind? Send me a message and I’ll get back to you.</p>
                <div className=" mt-8 flex gap-8 flex-col md:flex-row *:w-full">
                    <FadeIn>
                        <div className="">
                            <ContactForm />
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="">
                            <h3 className=" text-xl mb-4">Contact Info</h3>
                            <div className=" flex flex-col gap-4 items-start">
                                <a href="mailto:abdulazeezsalami@gmail.com" target="_blank" rel="noopener noreferrer" className=" flex gap-2 items-center hover:text-primary">
                                    <span className=" w-5 aspect-square flex justify-start items-center"><IoMail /></span>
                                    <span className=" text-sm font-semibold">abdulazeezsalami19@gmail.com</span>
                                </a>
                                <a href="tel:+2348106925925" target="_blank" rel="noopener noreferrer" className=" flex gap-2 items-center hover:text-primary">
                                    <span className=" w-5 aspect-square flex justify-start items-center"><FaPhone /></span>
                                    <span className=" text-sm font-semibold">+234 810 692 5925</span>
                                </a>
                            </div>
                            <div className=" mt-8 flex gap-4 items-center text-lg">
                                <a href="https://wa.me/+2348106925925" target="_blank" rel="noopener noreferrer" className=" hover:text-primary">
                                    <FaWhatsapp />
                                </a>
                                <a href="https://www.linkedin.com/in/abdulazeezsalami19/" target="_blank" rel="noopener noreferrer" className=" hover:text-primary">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://web.facebook.com/profile.php?id=100084453611899" target="_blank" rel="noopener noreferrer" className=" hover:text-primary">
                                    <FaFacebookF />
                                </a>
                                <a href="https://www.instagram.com/_az_ziz/" target="_blank" rel="noopener noreferrer" className=" hover:text-primary">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}