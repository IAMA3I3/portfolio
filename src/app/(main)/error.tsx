"use client"

export default function ErrorBoundary({ error }: { error: Error }) {

    return (
        <div className=" flex-1 flex justify-center items-center flex-col">
            <h1 className=' text-xl md:text-3xl font-thin text-red-500'>{error.message}</h1>
        </div>
    )
}