import { IPaciente } from '../../interfaces/pacienteInterface';
import { randomColor } from '../../libs/randomColor';

interface Iprops {
    paciente: IPaciente;
}


const ListItem = ({ paciente }: Iprops) => {
    const { datos_paciente, ficha_dental } = paciente;


    const handleClick = (action: string): void => {
        // acciones sobre paciente
    }

    return (
        <tr className="listItemClient">
            <td>
                <div className="listItemClient__dataPersonal">
                    <div className="listItemClient__dataPersonal__imgIniciales">
                        <p style={{ backgroundColor: randomColor() }}>
                            {`${datos_paciente.nombre.charAt(0)}${datos_paciente.apellidos.charAt(0)}`}
                        </p>
                    </div>
                    <div className="listItemClient__dataPersonal__container">
                        <p className="listItemClient__dataPersonal__nombreCompleto">
                            {`${datos_paciente.nombre} ${datos_paciente.apellidos}`}
                        </p>
                        <p className="listItemClient__dataPersonal__fechaNacimiento">
                            <i className="bi bi-calendar4-event"></i>
                            {datos_paciente.fecha_nacimiento}
                        </p>
                    </div>
                </div>
            </td>
            <td>
                <p className="listItemClient__clinica">
                    {ficha_dental.clinica}
                </p>
            </td>
            <td>
                <p className="listItemClient__objetivo">
                    {ficha_dental.objetivo_tratamiento}
                </p>
            </td>
            <td>
                <p className="listItemClient__estado">
                    {ficha_dental.estado}
                </p>
            </td>
            <td>
                <select className="listItemClient__selectAction">
                    <option >Acciones</option>
                    <option onClick={() => handleClick('editar')}>Editar</option>
                    <option onClick={() => handleClick('finalizar')}>Finalizar</option>
                    <option onClick={() => handleClick('borrar')}>Borrar</option>
                </select>
            </td>
        </tr>
    )
}

export default ListItem;
