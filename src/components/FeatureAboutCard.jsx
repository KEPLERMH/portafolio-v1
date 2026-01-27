import React from 'react'
import { CodeXml, Palette, Rocket, Sparkles } from 'lucide-react'



const FeatureAboutCard = ({ icon: Icon, title, text }) => {
    return (
        <article className=' space-y-2 bg-border-btns rounded-2xl px-6 py-5 hover:bg-white/10 hover:border-acentocyan transition duration-300 ease-out'>
            <div className=' inline-block p-3  rounded-2xl md:rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 '>
                <Icon className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <div className='flex flex-col gap-2'>
                <h4 className='font-bold text-lg '>{title}</h4>
                <p className='text-sm text-trirdtext'>{text}</p>
            </div>
        </article>
    )
}

export default FeatureAboutCard
