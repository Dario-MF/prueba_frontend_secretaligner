import { FieldError, UseFormRegister } from 'react-hook-form';

type TypesInputForm = {
    error: FieldError | undefined;
    register: UseFormRegister<any>;
    name: any | string;
    type: React.HTMLInputTypeAttribute | undefined;
};

const InputForm = ({ error, register, name, type }: TypesInputForm) => {
    return (
        <div className="form__field">
            <input
                type={type}
                id={name}
                placeholder={name.charAt(0).toUpperCase()}
                {...register(name)}
            />
            {error && <p className="form__error">{error.message}</p>}
        </div>
    )
};

export default InputForm;
