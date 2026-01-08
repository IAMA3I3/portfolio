import Footer from "@/components/Footer"
import { MainNavbar } from "@/components/Navbar"

type MainLayoutProps = {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {

    return (
        <section className=" min-h-screen w-full flex flex-col">
            <MainNavbar />
            {children}
            <Footer />
        </section>
    )
}