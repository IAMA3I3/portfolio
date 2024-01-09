import { FaImage, FaVideo, FaExternalLinkAlt } from "react-icons/fa";
import Modal from "../Modal";
import { useState } from "react";

const Project = ({ item, projectList, index }) => {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }

    return (
        <>
            <div className=" overflow-hidden rounded-md shadow-md border-4 border-white/0 bg-white/50 dark:bg-white/20">
                <div onClick={openModal} className=" overflow-hidden rounded-md">
                    {
                        item.isVid ?
                            <video autoPlay muted loop className=" w-full h-full object-cover hover:scale-105 transition cursor-pointer" src={item.vid}></video>
                            :
                            <img className=" w-full h-full object-cover hover:scale-105 transition cursor-pointer" src={item.img} alt="" />
                    }
                </div>
                <div className=" py-1 px-4 flex items-center gap-2">
                    {
                        item.isVid ?
                            <FaVideo />
                            :
                            <FaImage />
                    }
                    <div className=" flex-1 truncate">{item.title}</div>
                    {item.hasLink && <a href={item.link} target="__blank" title="View site in new tab"><FaExternalLinkAlt /></a>}
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} projectList={projectList} index={index} />}
        </>
    )
}

export default Project