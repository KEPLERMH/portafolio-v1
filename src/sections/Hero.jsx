import Navbar from "../components/Navbar"
const Hero = ({ children }) => {
    return (
        <section className=" min-h-screen px-4 grid place-content-center bg-hero-gradient text-white relative">
            {children}
        </section>
    )
}

export default Hero
