
const ContactItem = ({ icon: Icon, label, value, href }) => {

    return (
        <li className='flex items-center gap-4 origin-left hover:scale-105 transition-transform duration-200 ease-in-out'>
            <div className='bg-gradient-to-br from-cyan-600 to-blue-600 p-[14px] rounded-xl'>
                <Icon className='h-7 w-7' />
            </div>
            <div>
                <p className='text-trirdtext text-lg'>{label}</p>
                <a href={href} className='hover:text-acentocyan text-sm'>{value}</a>
            </div>
        </li>
    )
}

export default ContactItem
