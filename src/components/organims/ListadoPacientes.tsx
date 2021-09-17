import { useContext } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import { IPaciente } from "../../interfaces/pacienteInterface";
import ListItem from "../molecules/ListItem";


const ListadoPacientes = () => {

    const { pacientesState } = useContext(PacientesContext);

    return (
        <table className="tablaClientes">
            <thead>
                <tr>
                    <th>Nombre y Apellidos</th>
                    <th>Clinica</th>
                    <th>Objetivo</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    pacientesState.pacientes.map((paciente: IPaciente) => (
                        <ListItem
                            key={paciente.id}
                            paciente={paciente}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}

export default ListadoPacientes;
