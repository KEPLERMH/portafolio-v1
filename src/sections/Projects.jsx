
import { Redo2 } from 'lucide-react'
import ProjectCard from '../components/projects/ProjectCard'
import SkillCard from '../components/projects/SkillCard'
import StatsCard from '../components/projects/StatsCard'

import { projects } from '../data/projects'
import { skillData, statsData } from '../data/skills'
import { socialLiks } from '../data/socialLinks'


const Projects = () => {
    return (
        <section id="projects" className='scroll-mt-16 relative px-5 pt-14 text-secondarytext bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden xl:px-36 '>
            <div className='pointer-events-none border-2 absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-3xl '></div>
            <header className='flex flex-col justify-center items-center gap-4 mb-11'>
                <p className='text-acentocyan text-sm'>Mi Trabajo</p>
                <h2 className='font-medium text-center text-4xl md:text-5xl'>Proyectos Destacados</h2>
                <p className='text-trirdtext text-center text-[16px] md:text-lg'>Una selección de mis proyectos más recientes y desafiantes</p>
            </header>

            <div className='flex flex-col '>
                {/* projects */}
                <div className=' grid gap-10   place-items-center [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]'>
                    {projects.map(project =>
                        <ProjectCard
                            key={project.title}
                            img={project.image}
                            title={project.title}
                            desc={project.description}
                            techs={project.techs}
                            github={project.github}
                            demo={project.demo}
                        />
                    )}
                </div>

                <button className='flex justify-center items-center mt-8 group col-span-2'>
                    <a target='_blank' href={socialLiks[0].href} className='flex items-center gap-2 bg-border-btns px-8 py-3  rounded-full hover:bg-white/10 transition-bg duration-300 ease-out'>
                        <span className='text-lg'>Ver todo los proyectos</span>
                        <Redo2 className='w-5 h-5 group-hover:translate-x-1 transition-translate duration-300 ease-out' />
                    </a>
                </button>
            </div>

            {/* skills */}
            <section className='mt-20'>
                <header className='flex flex-col items-center justify-center mb-12'>
                    <p className='text-sm text-acentocyan'>Habilidades</p>
                    <h3 className='text-4xl font-medium text-center md:text-5xl' >Tecnologías & Herramientas</h3>
                </header>
                <div className='grid gap-7 md:grid-cols-3'>
                    {skillData.map(skill => <SkillCard key={skill.category} OnSkills={skill} />)}
                </div>
            </section>

            {/*stats*/}
            <section className='mt-14 grid grid-cols-2 gap-6 md:grid-cols-4'>
                {statsData.map(stat => <StatsCard key={stat.description} OnStats={stat} />)}

            </section>
        </section>
    )
}

export default Projects
