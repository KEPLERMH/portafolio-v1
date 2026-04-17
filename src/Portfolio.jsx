import Navbar from './components/Navbar'
import HeroContent from './components/HeroContent'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'

const Portfolio = () => {
    return (
        <main>
            <Hero>
                <Navbar />
                <HeroContent />
            </Hero>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}

export default Portfolio
