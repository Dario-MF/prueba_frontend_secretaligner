import { useContext, useEffect } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import { IPaciente } from "../../interfaces/pacienteInterface";
import ListItem from "../molecules/ListItem";


const ListadoPacientes = () => {

    const { pacientesState } = useContext(PacientesContext);

    const pacientes = pacientesState.pacientes;


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
                    (pacientesState.resultadoSearchPaciente.length > 0)
                        ? pacientesState.resultadoSearchPaciente.map((paciente: IPaciente) => (
                            <ListItem
                                key={paciente.id}
                                paciente={paciente}
                            />
                        ))
                        : pacientes.map((paciente: IPaciente) => (
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
