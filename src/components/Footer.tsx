export default function Footer() {

    return (
        <div className=" mt-4 w-full bg-slate-700 text-white py-2">
            <div className=" container mx-auto px-6">
                <p>@aziz © {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}