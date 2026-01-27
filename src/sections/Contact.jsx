import React from 'react'
import { Mail, Phone, MapPin, MessageSquareShare } from 'lucide-react'
import ContactItem from '../components/contact/ContactItem';
import FormFiel from '../components/contact/FormFiel';
import FormContact from '../components/contact/FormContact';

export const contactData = [
    {
        label: "Email",
        value: "keplermatosh@gmail.com",
        href: "mailto:keplermatosh@gmail.com",
        icon: Mail,
    },
    {
        label: "Teléfono",
        value: "+51 995153680",
        href: "tel:+51995153680",
        icon: Phone,
    },
    {
        label: "Ubicación",
        value: "Lima, Perú",
        icon: MapPin,
    },
];
const Contact = () => {
    return (
        <section id="contact" className='px-6 py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-secondarytext grid gap-y-14 md:grid-cols-2 md:gap-x-16 xl:px-36'>
            <header className='flex flex-col items-center justify-center gap-2 col-span-full'>
                <p className='text-acentocyan text-xl'>Contacto</p>
                <h2 className='text-5xl font-medium md:text-6xl lg:text-7xl'>Trabajemos Juntos</h2>
                <p className='text-xl text-trirdtext md:text-[15px] lg:text-lg'>¿Tienes un proyecto en mente? Me encantaría escucharlo</p>
            </header>

            <div className='mt-6 flex flex-col gap-5'>
                <h3 className='font-medium text-4xl lg:text-3xl'>Información de Contacto</h3>
                <p className='text-trirdtext text-xl'>Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar sobre tecnología y diseño.</p>
                <ul className='flex flex-col gap-8'>
                    {contactData.map(item =>
                        <ContactItem key={item.label} {...item} />
                    )}
                </ul>
            </div>

            <FormContact />
        </section>
    )
}

export default Contact
