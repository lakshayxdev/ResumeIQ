import Home from "../components/Home"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import About from "./About"
import FadeUp from "../components/FadeUp"
const Landing = () => {
  return (
    <>
    <Navbar />
    
    <FadeUp>
    <Home />
    </FadeUp>

    <FadeUp>
    <Features />
    </FadeUp>

    <FadeUp>
    <About />
    </FadeUp>

    <Footer />
    </>
  )
}

export default Landing