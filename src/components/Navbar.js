import { useEffect, useState } from 'react'
import logoB from '../assets/logo-b.png'
import logoW from '../assets/logo-w.png'
import ModeBtn from './ModeBtn'

const Navbar = ({ switchMode, darkMode }) => {

    const [openNav, setOpenNav] = useState(false)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.scrollY)
        }
    }, [])

    const toggleNav = () => {
        setOpenNav(!openNav)
    }

    return (
        <div className={`${openNav && "open"} ${(offset > 0) && "pin"}  w-full fixed top-0 z-10 transition-spacing`} id="navbar">
            <div className=" container md:flex">
                <div className=" flex items-center justify-between flex-1">

                    {
                        darkMode || openNav
                            ?
                            <img className=' h-8' src={logoW} alt="" />
                            :
                            <img className=' h-8 opacity-70' src={logoB} alt="" />
                    }

                    <div className=" flex items-center gap-8">
                        <div className="" id='mode-btn'>
                            <ModeBtn switchMode={switchMode} darkMode={darkMode} />
                        </div>

                        <div className=" *:transition md:*:hidden" onClick={toggleNav} id='menu-ic'>
                            <div className=""></div>
                            <div className=""></div>
                            <div className=""></div>
                        </div>
                    </div>
                </div>

                <div className=" md:flex md:*:px-4 md:hover:*:underline transition-all duration-500 nav-links text-center *:block *:my-1 *:py-2 font-semibold">
                    <a href="/">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar