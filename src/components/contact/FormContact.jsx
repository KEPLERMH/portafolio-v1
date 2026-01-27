import { MessageSquareShare } from "lucide-react";
import FormFiel from "./FormFiel"
import { useForm } from "react-hook-form"

const FormContact = () => {
    const { register, handleSubmit, reset, control } = useForm();

    const SendMessage = () => {
        console.log("mensaje enviad");
        reset();
    }

    return (
        <form aria-label='Formulario de contacto' onSubmit={handleSubmit(SendMessage)} className='flex flex-col gap-6'>
            <FormFiel name='name' label='Nombre' placeholder='Tu nombre' register={register} control={control} rules={{ minLength: { value: 3, message: "Minimo 3 Caracteres" } }} />
            <FormFiel name='email' label='Email' placeholder='tu@email.com' register={register} control={control} rules={{ pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ingrese correo válido" } }} />
            <FormFiel name='message' label='Mensaje' placeholder='Cuentame...' as='textarea' register={register} control={control} rules={{ minLength: { value: 3, message: "Minimo 3 Caracteres" } }} />

            <button type='submit' className='group flex justify-center items-center gap-2 px-4 py-5 rounded-full btn-custom transition duration-400 ease-in-out hover:shadow-lg
             hover:shadow-cyan-500/50 hover:scale-105'><span className='font-bold text-xl'>Enviar Mensaje</span><MessageSquareShare className='w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 ease-out' /></button>
        </form>
    )
}

export default FormContact
