import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react"
import SocialIcons from '../components/SocialIcons';
import { navLinks } from '../data/navLinks';

import { socialLiks } from '../data/socialLinks';
const Footer = () => {
    return (
        <footer className='bg-slate-950 text-secondarytext pt-12'>
            <div className='flex flex-col items-center gap-7 justify-center mb-9 md:flex-row md:justify-evenly'>
                <div className=' space-y-1'>
                    <h3 className='text-center font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-2xl md:text-start'>Kepler Matos H.</h3>
                    <p className='text-center text-trirdtext text-lg'>Desarrollador Fronted Junior & Diseñador UI/UX</p>
                </div>
                <ul className='flex gap-4'>
                    {
                        socialLiks.map(link => <SocialIcons key={link.label}{...link} variant='footer' />)
                    }
                </ul>
                <small className='text-[16px] text-trirdtext'>
                    © 2026 Hecho con <span className='text-red-600'>❤</span> por Kepler Matos
                </small>
            </div>
            <nav aria-label='footer navegation0' className='border-t-2 border-white/10 h-24 mx-5 text-trirdtext'>
                <ul className='flex items-center justify-center h-full gap-4 [&>li>a:hover]:text-acentocyan '>
                    {
                        navLinks.map(nav => <li key={nav.label}><a href={nav.href}>{nav.label}</a></li>)
                    }
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
