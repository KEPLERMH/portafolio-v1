import React from 'react'
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

const HeroContent = () => {
    return (
        <div className="m-3 flex flex-col justify-center items-center  mt-20">
            <h5 className="text-center text-acentocyan bg-border-btns rounded-2xl px-3 py-[4px] text-sm mb-6">🙌<span>  Hola, soy</span></h5>

            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-5xl font-bold text-gradient-custom md:text-6xl lg:text-7xl">Kepler Matos H.</h1>
                <h3 className="text-lg text-secondarytext md:text-xl lg:text-2xl">Desarrollador Full Stack & Diseñador UI/UX</h3>
                <p className="text-center text-[16px] text-trirdtext md:text-lg lg:text-xl">Creando experiencias digitales excepcionales con código limpio y diseño innovador</p>
            </div>
            <div>
                <div className="flex gap-3 mt-11">
                    <button type="button" className="px-4 py-2 rounded-3xl btn-custom transition duration-400 ease-in-out hover:shadow-xl
                            hover:shadow-cyan-500/50 hover:scale-105"><a href="#" className="text-sm lg:text-[15px]">Contactame</a></button>
                    <button type="button" className="px-4 py-2 rounded-3xl bg-border-btns hover:bg-white/30 transition duration-400 ease-in-out"><a href="#" className="text-sm lg:text-[15px]">Ver Proyectos</a></button>
                </div>
                <div className="flex mt-12 justify-center gap-6">
                    <div className="btns-cta bg-border-btns "><a href="#"><Github className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6' /></a></div>
                    <div className="btns-cta bg-border-btns"><a href="#"><Linkedin className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6' /></a></div>
                    <div className="btns-cta bg-border-btns"><a href="#"><Mail className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6' /></a></div>
                </div>
                <div className="mt-10  flex justify-center animate-float">
                    <ArrowDown size={18} color="#9CA3AF" />
                </div>
            </div>
        </div>
    )
}

export default HeroContent
