import { useEffect, useState } from 'react'

const SkillBar = ({ label, percent }) => {
    const [width, SetWidth] = useState(0);
    useEffect(() => {
        SetWidth(percent)
    }, [percent])
    return (
        <div className='flex flex-col gap-1 md:gap-2'>
            <div className='flex items-center justify-between'>
                <h6 className='text-[16px]'>{label}</h6>
                <span className='text-[16px] text-acentocyan' >{percent}%</span>
            </div>
            <div className=' h-[10px] rounded-full bg-white/10 overflow-hidden'>
                <div className=' h-full rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 bg-blue-500 transition-all duration-1000 ease-out' style={{ width: `${width}%` }}></div>
            </div>
        </div>
    )
}

export default SkillBar
