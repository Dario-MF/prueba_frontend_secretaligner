import { useReducer } from "react";
import { pacientesReducer } from './pacientesReducer';
import PacientesContext from './PacientesContext';
import { Pacientes } from "../../controllers/pacienteController";
import { IpacienteInitialState, Visionado } from "../../interfaces/pacienteInterface";
import { pacientesActionTypes } from "./pacientesActionTypes";

const pacientes = new Pacientes();

const INITIAL_STATE: IpacienteInitialState = {
    pacientes: pacientes.pacientesArr,
    visionado: Visionado.lista,
    pacientesPorPagina: 6
}

interface Iprops {
    children: JSX.Element | JSX.Element[];
}

const PacientesProvaider = ({ children }: Iprops) => {

    const [pacientesState, dispatch] = useReducer(pacientesReducer, INITIAL_STATE);

    const selectVistaPacientes = (vista: string | number) => {
        dispatch({ type: pacientesActionTypes.listOrder, payload: vista });
    }
    const selectPacientesPorPagina = (number: number) => {
        dispatch({ type: pacientesActionTypes.pacientesPorPagina, payload: number });
    }



    return (
        <PacientesContext.Provider value={{
            pacientesState,
            selectVistaPacientes,
            selectPacientesPorPagina
        }}>
            {children}
        </PacientesContext.Provider>
    )
}

export default PacientesProvaider;
