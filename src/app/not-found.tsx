import Footer from "@/components/Footer";
import { MainNavbar } from "@/components/Navbar";

export default function NotFound() {

    return (
        <div className=" h-screen w-full flex flex-col">
            <MainNavbar />
            <div className=" flex-1 flex justify-center items-center flex-col">
                <h1 className=' text-6xl md:text-9xl font-thin text-gray-500'>404</h1>
                <p className=' text-2xl text-gray-500'>Page Not Found</p>
            </div>
            <Footer />
        </div>
    )
}