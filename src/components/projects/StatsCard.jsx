import React from 'react'

const StatsCard = ({ OnStats }) => {
    return (
        <article className='bg-border-btns flex flex-col justify-center items-center p-8 rounded-2xl'>
            <h4 className='text-5xl text-acentocyan md:text-2xl lg:text-4xl'>{OnStats.number}+</h4>
            <p className='text-center text-lg text-trirdtext lg:text-sm'>{OnStats.description}</p>
        </article>
    )
}

export default StatsCard
