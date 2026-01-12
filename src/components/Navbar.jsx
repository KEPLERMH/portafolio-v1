import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import NavLinks from './NavLinks';
const Navbar = () => {

    const [isOpenNav, SetIsOpenNav] = useState(false);

    return (
        <header className='flex items-center justify-between absolute top-0 w-full px-3 py-3'>
            <h1 className=' 
            font-bold 
            bg-gradient-to-r
             from-cyan-500
              to-blue-500 
            bg-clip-text  
              text-transparent
              md:text-lg
              lg:text-2xl'
            >KM</h1>

            {/* Mobile nav */}
            <nav className="hidden md:flex">
                <NavLinks />
            </nav>
            <button className=" hidden px-5 py-1 mx-4 rounded-3xl btn-custom transition duration-400 ease-in-out hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 md:block md:text-lg ">Hablemos</button>

            {/* Mobile button */}
            <button
                onClick={() => { SetIsOpenNav(!isOpenNav) }}
                className='bg-border-btns btns-cta md:hidden'>
                {isOpenNav ? <X size={15} /> : <Menu size={15} />}
            </button>

            {/* Mobile nav */}
            {
                isOpenNav && (
                    <nav className="md:hidden absolute top-full inset-x-0 border-t-2 border-white/5 px-4 py-2 m-3">
                        <NavLinks direction='column' onClick={() => SetIsOpenNav(false)} />

                        <button className="px-5 py-1 rounded-3xl btn-custom transition duration-400 ease-in-out hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 mt-4 w-full">Hablemos</button>
                    </nav>
                )
            }

        </header>
    )
}

export default Navbar
