import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";

const ModalComponent = ({ setShowModal, projectList, index }) => {

    const [position, setPosition] = useState(index)

    const goLeft = () => {
        let newPosition = position - 1
        if (newPosition < 0) {
            newPosition = projectList.length - 1
        }
        setPosition(newPosition)
    }

    const goRight = () => {
        let newPosition = position + 1
        if (newPosition === projectList.length) {
            newPosition = 0
        }
        setPosition(newPosition)
    }

    return (
        <div className=" fixed z-50 top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-sm flex justify-center items-center">
            <div className=" h-screen md:h-[80vh] w-full md:w-[80vw]">
                {
                    projectList[position].isVid ?
                        <video className=" w-full h-full object-contain" src={projectList[position].vid} controls></video>
                        :
                        <img className=" w-full h-full object-contain" src={projectList[position].img} alt="" />
                }
            </div>
            <div className=" absolute bottom-10 bg-white/80 text-gray-700 py-1 px-4 rounded-lg text-lg tracking-wide">
                {projectList[position].title}
            </div>
            <div onClick={goLeft} className=" absolute text-4xl text-white/60 hover:text-white cursor-pointer left-0 md:left-4 bg-[radial-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.3),rgb(0,0,0,0),rgb(0,0,0,0))] rounded-full p-4">
                <FaChevronLeft />
            </div>
            <div onClick={goRight} className=" absolute text-4xl text-white/60 hover:text-white cursor-pointer right-0 md:right-4 bg-[radial-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.3),rgb(0,0,0,0),rgb(0,0,0,0))] rounded-full p-4">
                <FaChevronRight />
            </div>
            <div onClick={() => setShowModal(false)} className=" absolute top-8 right-8 text-4xl text-white/60 hover:text-white cursor-pointer">
                <IoClose />
            </div>
        </div>
    )
}

export default ModalComponent