import React from 'react'
import { CodeXml, Palette, Rocket, Sparkles } from 'lucide-react'
import aboutImg from "../assets/img/about-img.jfif";
import FeatureAboutCard from '../components/FeatureAboutCard';

const featuresAbout = [
    {
        icon: CodeXml,
        title: "Desarrollo",
        text: "Código limpio y escalable con las últimas tecnologías",
    },
    {
        icon: Palette,
        title: "Diseño",
        text: "Interfaces intuitivas y visualmente atractivas",
    },
    {
        icon: Rocket,
        title: "Optimización",
        text: "Rendimiento excepcional en todas las plataformas",
    },
    {
        icon: Sparkles,
        title: "Innovación",
        text: "Soluciones creativas a problemas complejos",
    },
];

const About = () => {
    return (
        <section className='bg-slate-900 text-secondarytext px-5 pt-16 pb-12 grid gap-9'>
            <header className='flex flex-col items-center justify-center'>
                <p className='text-[10px] text-acentocyan'>Sobre  Mi</p>
                <h2 className=' font-medium text-3xl text-center md:text-4xl'>Transformando Ideas en Realidad</h2>
            </header>

            <article className='grid gap-8 md:grid-cols-2 md:gap-16'>
                <figure className=' w-full h-72 rounded-xl overflow-hidden shadow-slate-400 shadow-sm'>
                    <img src={aboutImg} alt="about-img" className=' w-full h-full object-cover ' />
                </figure>

                <div className='flex flex-col gap-5'>
                    <p >Soy un desarrollador apasionado con más de 5 años de experiencia creando productos digitales que combinan funcionalidad y estética.</p>
                    <p className='text-sm text-trirdtext'>Mi enfoque se centra en escribir código mantenible, diseñar experiencias de usuario excepcionales y mantenerme actualizado con las últimas tendencias tecnológicas. Creo en el aprendizaje continuo y la colaboración efectiva.</p>
                    <ul className='flex gap-3 [&>li]:text-[16px] flex-wrap'>
                        <li className='about-li'>HTML</li>
                        <li className='about-li'>CSS</li>
                        <li className='about-li'>JavaScript</li>
                        <li className='about-li'>Tailwind</li>
                        <li className='about-li'>Sass</li>
                        <li className='about-li'>React</li>
                    </ul>
                </div>
            </article>

            <section className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
                {
                    featuresAbout.map(feature => <FeatureAboutCard
                        key={featuresAbout.title}
                        icon={feature.icon}
                        title={feature.title}
                        text={feature.text} />)
                }
            </section>
        </section>
    )
}

export default About
