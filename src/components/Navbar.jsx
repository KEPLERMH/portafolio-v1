import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import NavLinks from './NavLinks';
const Navbar = () => {

    const [isOpenNav, SetIsOpenNav] = useState(false);
    const [scrolled, SetScrolled] = useState(false);
    console.log(isOpenNav);

    useEffect(() => {
        const handleScroll = () => {
            SetScrolled(window.scrollY > 10);
        }

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                SetIsOpenNav(false);
            }
        }

        window.addEventListener("resize", handleResize);



        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
            && window.removeEventListener("resize", handleResize);
    }, [])


    return (
        <header className={` rounded-b-3xl flex flex-col gap-4 fixed top-0 w-full z-50 px-6 py-3 transition-colors duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"} lg:px-32`}>

            <div className='flex justify-between items-center w-full'>
                <h1 className='
                font-semibold
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                text-xl
                  bg-clip-text
                  text-transparent
                  md:text-2xl
                  '
                >KM</h1>

                {/* Desktop nav */}
                <nav className="hidden md:flex">
                    <NavLinks />
                </nav>
                <a href='#contact' className=" hidden px-5 py-2 mx-4 rounded-full btn-custom transition duration-400 ease-in-out hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 md:block md:text-lg">Hablemos</a>

                {/* Mobile button */}
                <button
                    onClick={() => { SetIsOpenNav(!isOpenNav) }}
                    className='bg-border-btns btns-cta md:hidden'
                >
                    {isOpenNav ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>



            {/* Mobile nav */}
            {
                isOpenNav && (
                    <nav className=" border-t-2 border-white/20 py-3  ">
                        <NavLinks direction='column' onClick={() => SetIsOpenNav(false)} />

                        <button className=" text-[16px] px-4 py-2 rounded-3xl btn-custom transition duration-400 ease-in-out hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 mt-6 w-full">Hablemos</button>
                    </nav>
                )
            }



        </header>
    )
}

export default Navbar
