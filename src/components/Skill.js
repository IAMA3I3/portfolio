const Skill = ({ item, darkMode }) => {

    return (
        <div className=" text-center">
            <div className=" mb-2 transition">
                {
                    darkMode ?
                        <img className=" h-20 md:h-28" src={item.imgW} alt="" />
                        :
                        <img className=" opacity-80 h-20 md:h-28" src={item.imgB} alt="" />
                }
            </div>
            <div className=" font-semibold">{item.title}</div>
        </div>
    )
}

export default Skill