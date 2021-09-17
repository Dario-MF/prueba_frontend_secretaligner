import { useReducer } from "react";
import { pacientesReducer } from './pacientesReducer';
import PacientesContext from './PacientesContext';
import { Pacientes } from "../../controllers/pacienteController";
import { IpacienteInitialState, Visionado } from "../../interfaces/pacienteInterface";


const INITIAL_STATE: IpacienteInitialState = {
    pacientes: new Pacientes().pacientesArr,
    visionado: Visionado.lista,
    pacientesPorPagina: 9
}

interface Iprops {
    children: JSX.Element | JSX.Element[];
}

const PacientesProvaider = ({ children }: Iprops) => {

    const [pacientesState, dispatch] = useReducer(pacientesReducer, INITIAL_STATE);




    return (
        <PacientesContext.Provider value={{
            pacientesState
        }}>
            {children}
        </PacientesContext.Provider>
    )
}

export default PacientesProvaider;
