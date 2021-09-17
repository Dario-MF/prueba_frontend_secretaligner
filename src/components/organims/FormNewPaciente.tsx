import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import PacientesContext from '../../context/pacientes/PacientesContext';
import { parseDataModal } from '../../libs/parseDataModal';

interface Iprops {
    modalClose: () => void;
}

const FormNewPaciente = ({ modalClose }: Iprops) => {
    const { createNewPaciente } = useContext(PacientesContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(data => {
        const paciente = parseDataModal(data);
        createNewPaciente(paciente)
        modalClose();
    });

    return (
        <form className="form__newPaciente form" onSubmit={onSubmit}>
            <div className="form__newPaciente__field ">
                <input
                    className="input_text"
                    type="text"
                    placeholder="Nombre"
                    {...register("nombre", {
                        required: '*Nombre es requerido.',
                        maxLength: 80,
                        minLength: {
                            value: 3,
                            message: "*Nombre necesita minimo 3 letras."
                        }
                    })}
                />
                {errors.nombre && <p className="form__error">{errors.nombre.message}</p>}
            </div>
            <div className="form__newPaciente__field ">
                <input
                    className="input_text"
                    type="text"
                    placeholder="Apellidos"
                    {...register("apellidos", {
                        required: '*Apellidos es necesario.',
                        maxLength: 80,
                        minLength: {
                            value: 3,
                            message: "*Apellido necesita min 3 letras"
                        }
                    })}
                />
                {errors.nombre && <p className="form__error">{errors.nombre.message}</p>}
            </div>
            <div className="form__signup__field form__field">
                <input
                    type="date"
                    placeholder="Fecha nacimiento"
                    {...register("fecha_nacimiento", {
                        required: '*Fecha nacimiento es requerido.',
                    })}
                />
                {errors.fecha_nacimiento && <p className="form__error">{errors.fecha_nacimiento.message}</p>}
            </div>
            <div className="form__signup__field form__field">
                <select {...register("sexo", {
                    required: '*Sexo es requerido.',
                })}>
                    <option value="F">Mujer</option>
                    <option value="M">Hombre</option>
                </select>
                {errors.sexo && <p className="form__error">{errors.sexo.message}</p>}
            </div>
            <div className="form__newPaciente__field ">
                <input
                    className="input_text"
                    type="text"
                    placeholder="Clinica"
                    {...register("clinica", {
                        required: '*Clinica es necesario.',
                        maxLength: 80,
                        minLength: {
                            value: 3,
                            message: "*Clinica necesita min 3 letras"
                        }
                    })}
                />
                {errors.clinica && <p className="form__error">{errors.clinica.message}</p>}
            </div>
            <div className="form__newPaciente__field ">
                <input
                    {...register('recorte_alineadores')}
                    id='recorte_alineadores_encia'
                    value='Recortar dejando 1-3 mm de encía'
                    type="radio"
                />
                <label htmlFor="recorte_alineadores_encia">Recortar dejando 1-3 mm de encía </label>
                {errors.recorte_alineadores && <p className="form__error">{errors.recorte_alineadores.message}</p>}
            </div>
            <div className="form__newPaciente__field ">
                <input
                    {...register('recorte_alineadores')}
                    id='recorte_alineadores_cuellos'
                    value='Recortar a nivel de los cuellos'
                    type="radio"
                />
                <label htmlFor="recorte_alineadores_cuellos">Recortar a nivel de los cuellos </label>
                {errors.recorte_alineadores && <p className="form__error">{errors.recorte_alineadores.message}</p>}
            </div>
            <div className="form__newPaciente__field ">
                <input
                    {...register('secretretainer')}
                    id='secretretainer'
                    value='true'
                    type="checkbox"
                />
                <label htmlFor="secretretainer">¿SecretRetainer?</label>
                {errors.secretretainer && <p className="form__error">{errors.secretretainer.message}</p>}
            </div>


            <button
                className="modal__btn__submit"
                type="submit"
            >SignUp
            </button>
        </form>
    )
}

export default FormNewPaciente;