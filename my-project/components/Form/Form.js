import { useFormContext } from 'react-hook-form'
const Form = ({ placeHolder, label, type, name }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()
    return (
        <div className="form-group mb-2 min:h-18">
            <label className="text-slate-600 font-medium ">{label}:</label>
            <input
                type={type}
                {...register(name)}
                className="form-control
            block
            w-full
            px-2
            py-1
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder={placeHolder}
            />
            <div className="h-3">
                {errors[name] && (
                    <span className="text-red-600 text-sm">{errors[name].message}.</span>
                )}
            </div>
        </div>
    )
}

export default Form
