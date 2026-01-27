import SkillBar from './SkillBar'

const SkillCard = ({ OnSkills }) => {
    return (
        <article className='bg-border-btns rounded-2xl p-7 flex flex-col gap-7'>
            <h4 className='font-bold text-2xl'>{OnSkills.category}</h4>
            {OnSkills.skills.map(levelItem =>
                <SkillBar key={levelItem.name} label={levelItem.name} percent={levelItem.percent} />
            )}

        </article>
    )
}

export default SkillCard
