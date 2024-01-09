import pic from '../assets/pics.png'
import Skills from '../components/Skills'

const Home = ({ darkMode }) => {

    return (
        <div className=" w-full pt-28">
            <div className=" container">
                <div className="card bg-white/80 dark:bg-black/70 rounded-3xl my-4">
                    <div className=" grid gap-4 grid-cols-1 md:grid-cols-2">
                        <div className="">
                            <img className=' h-72 m-auto -mt-20' src={pic} alt="" />
                        </div>
                        <div className=" text-center md:text-left">
                            <div className=" text-2xl tracking-wider">Abdulazeez Salami</div>
                            <div className=" font-semibold text-blue-700 tracking-wider mb-2">&#60;&#62;Web Developer&#60;/&#62;</div>
                            <div className="">I am highly motivated and eager to contribute my skills and creativity, I am confident that my technical abilities, combined with my dedication to continuous learning, enables me to make a meaningful impact.</div>
                        </div>
                    </div>
                </div>
                <div className=" my-10">
                    <div className=" text-center text-3xl mb-4">Skills</div>
                    <Skills darkMode={darkMode} />
                </div>
            </div>
        </div>
    )
}

export default Home