const Hero = ({ children }) => {
    return (
        <section id="hero" className=" min-h-screen px-4 grid place-content-center bg-hero-gradient text-white relative">
            {children}
        </section>
    )
}

export default Hero
