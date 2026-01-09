import Footer from "@/components/Footer";
import { MainNavbar } from "@/components/Navbar";
import { CircularProgress } from "@mui/material";

export default function Loading() {

    return (
        <div className=" h-screen w-full flex flex-col">
            <MainNavbar />
            <div className=" flex-1 flex justify-center items-center flex-col">
                <CircularProgress />
            </div>
            <Footer />
        </div>
    )
}