import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import NavLinks from './NavLinks';
const Navbar = () => {

    const [isOpenNav, SetIsOpenNav] = useState(false);
    const [scrolled, SetScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            SetScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("acroll", handleScroll)
    }, [])


    return (
        <header className={`flex flex-col gap-4 fixed top-0 w-full z-50 px-6 py-5 transition-colors duration-300 ${scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"}`}>

            <div className='flex justify-between items-center w-full'>
                <h1 className='
                font-semibold
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                text-3xl
                  bg-clip-text
                  text-transparent
                  lg:text-4xl
                  '
                >KM</h1>

                {/* Mobile nav */}
                <nav className="hidden md:flex">
                    <NavLinks />
                </nav>
                <a href='#contact' className=" hidden px-5 py-2 mx-4 xl:py-3 xl:px-8 rounded-full btn-custom transition duration-400 ease-in-out hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 md:block md:text-xl lg:text-2xl">Hablemos</a>

                {/* Mobile button */}
                <button
                    onClick={() => { SetIsOpenNav(!isOpenNav) }}
                    className='bg-border-btns btns-cta md:hidden'
                >
                    {isOpenNav ? <X size={25} /> : <Menu size={25} />}
                </button>
            </div>



            {/* Mobile nav */}
            {
                isOpenNav && (
                    <nav className=" border-t-2 border-white/20 py-3 ">
                        <NavLinks direction='column' onClick={() => SetIsOpenNav(false)} />

                        <button className=" text-xl px-5 py-3 rounded-3xl btn-custom transition duration-400 ease-in-out hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 mt-6 w-full">Hablemos</button>
                    </nav>
                )
            }



        </header>
    )
}

export default Navbar
