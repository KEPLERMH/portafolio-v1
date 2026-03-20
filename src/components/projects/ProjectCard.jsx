import React from 'react'
import { Github, Redo2 } from 'lucide-react'


const ProjectCard = ({ img, title, desc, techs, github, demo }) => {
    return (
        <article className='group w-full max-w-xl  rounded-xl overflow-hidden bg-border-btns hover:bg-white/10 hover:border-acentocyan transition-border duration-500 ease-out'>

            <figure className=' w-full h-56 overflow-hidden'>
                <img src={img} alt="nose-img" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out' />
            </figure>

            <div className='p-5 flex flex-col gap-2'>
                <h3 className='text-white text-xl font-semibold group-hover:text-acentocyan transition-colors duration-500 ease-out'>{title}</h3>
                <p className='text-trirdtext text-[15px] mb-1 '>{desc}</p>
                <ul className='flex gap-2 mb-2 flex-wrap'>
                    {techs.map(items => <li className='tech-tag' key={items}>{items}</li>)}
                </ul>
                <div className='flex gap-3 [&>a:hover]:text-acentocyan'>
                    <a href={github} className='flex items-center gap-1' target='_blank'><Github className='w-4 h-4' /><span className='text-sm'>Codigo</span></a>
                    {demo !== "" && (
                        <a href={demo} className='flex items-center gap-1' target='_blank'><Redo2 className='w-4 h-4' /><span className='text-sm'>Demo</span></a>

                    )}
                </div>
            </div>

        </article>
    )
}

export default ProjectCard
