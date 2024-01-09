import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./screens/Home"
import lightBg from './assets/whitebg.jpg'
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {

  const [darkMode, setDarkMode] = useState(undefined)

  const switchMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true")
      window.document.documentElement.classList.add("dark")
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false")
      window.document.documentElement.classList.remove("dark")
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true")
    }
  }, [darkMode])

  return (
    <div className=" relative w-full min-h-screen bg-black/10 dark:bg-black/80">

      <img className=' w-full h-screen object-cover fixed top-0 left-0 -z-10' src={lightBg} alt="." />
      <Navbar switchMode={switchMode} darkMode={darkMode} />
      <Home darkMode={darkMode} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App