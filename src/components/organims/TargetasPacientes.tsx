import { useContext } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import { IPaciente } from "../../interfaces/pacienteInterface";
import CardPaciente from "../molecules/CardPaciente";



const TargetasPacientes = ({ pacientes }: any) => {
    //const { pacientesState } = useContext(PacientesContext);
    return (
        <div className="cardsContainer">
            {
                pacientes.map((paciente: IPaciente) => (
                    <CardPaciente
                        key={paciente.id}
                        paciente={paciente}
                    />
                ))
            }

        </div>
    )
}

export default TargetasPacientes;
