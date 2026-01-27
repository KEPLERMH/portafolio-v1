import { useFormState } from "react-hook-form";

const FormFiel = ({ as = 'input', name, label, type = 'text', id, placeholder, register, control, rules = {} }) => {
    const { errors } = useFormState({ control, name })
    // console.log(errors);
    const validationRules = {
        required: `El ${label} es requerido`,
        ...rules,
    };

    const Component = as;
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={name} className='font-medium text-xl '>{label}</label>
            <Component
                type={type}
                id={name}
                {...register(name, validationRules)}
                placeholder={placeholder}
                className={`px-5 text-xl   rounded-xl ml-1 bg-border-btns outline-none focus:border-acentocyan ${as === 'textarea' ? ' pt-3 pb-28 resize-none overflow-hidden' : 'py-4'}`}
            />
            <p className=" text-start px-6 text-red-600">
                {errors[name] && errors[name].message}
            </p>
        </div>
    )
}

export default FormFiel
