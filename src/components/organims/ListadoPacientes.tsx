import { useContext } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import { IPaciente } from "../../interfaces/pacienteInterface";


const ListadoPacientes = () => {

    const { pacientesState } = useContext(PacientesContext);

    return (
        <ul>
            {
                pacientesState.pacientes.map((paciente: IPaciente) => (
                    <li >{paciente.id}</li>

                ))
            }

        </ul>
    )
}

export default ListadoPacientes;
