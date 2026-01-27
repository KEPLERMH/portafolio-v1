import { navLinks } from "../data/navLinks"

const NavLinks = ({ direction = "row", onClick }) => {
    return (
        <ul className={`flex md:gap-10 gap-10 text-secondarytext text-2xl ${direction == "column" ? "flex-col" : "flex-row"} [&>li:hover>a]:text-acentocyan`}>
            {
                navLinks.map(link => <li key={link.label} className='text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 ease-out md:hover:bg-[length:100%_2px] xl:text-2xl'><a href={link.href} onClick={onClick}>{link.label}</a></li>)
            }
        </ul>
    )
}

export default NavLinks
