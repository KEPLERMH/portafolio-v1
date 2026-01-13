import React from 'react'
import { CodeXml, Palette, Rocket, Sparkles } from 'lucide-react'



const FeatureAboutCard = ({ icon: Icon, title, text }) => {
    return (
        <article className='bg-border-btns rounded-lg px-5 py-3 hover:bg-white/10 hover:border-acentocyan transition duration-300 ease-out'>
            <div className=' inline-block p-1 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 '>
                <Icon className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div className='flex flex-col gap-1'>
                <h4 className='font-bold md:text-lg'>{title}</h4>
                <p className='text-[10px] text-trirdtext md:text-sm'>{text}</p>
            </div>
        </article>
    )
}

export default FeatureAboutCard
