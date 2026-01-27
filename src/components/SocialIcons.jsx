const variants = {
    hero: "text-white",
    footer: "hover:border-acentocyan/30",
};

const SocialIcons = ({ icon: Icon, label, href, variant = "hero" }) => {
    return (
        <li className={`btns-cta bg-border-btns ${variants[variant]}`}><a href={href} aria-label={label} target="_blank"><Icon className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ' /></a></li>
    )
}

export default SocialIcons
