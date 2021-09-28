import { IPaciente } from "../../interfaces/pacienteInterface";
import ListItem from "../molecules/ListItem";


const ListadoPacientes = ({ pacientes }: any) => {

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
                    pacientes.map((paciente: IPaciente) => (
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
