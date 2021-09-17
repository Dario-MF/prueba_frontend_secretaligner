import { useReducer } from "react";
import { pacientesReducer } from './pacientesReducer';
import PacientesContext from './PacientesContext';
import { Pacientes } from "../../controllers/pacienteController";
import { IPaciente, IpacienteInitialState, Visionado } from "../../interfaces/pacienteInterface";
import { pacientesActionTypes } from "./pacientesActionTypes";

const pacientes = new Pacientes();

const INITIAL_STATE: IpacienteInitialState = {
    pacientes: pacientes.pacientesArr,
    visionado: Visionado.lista,
    pacientesPorPagina: 6,
    modalNewPacienteIsOpen: false
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
    const openModalNewPaciente = (isOpen: boolean) => {
        dispatch({ type: pacientesActionTypes.openModalNewPaciente, payload: isOpen });
    }
    const closeModalNewPaciente = (isOpen: boolean) => {
        dispatch({ type: pacientesActionTypes.closeModalNewPaciente, payload: isOpen });
    }
    const createNewPaciente = (data: any) => {
        dispatch({ type: pacientesActionTypes.pacientesAddData, payload: data });
    }



    return (
        <PacientesContext.Provider value={{
            pacientesState,
            selectVistaPacientes,
            selectPacientesPorPagina,
            openModalNewPaciente,
            closeModalNewPaciente,
            createNewPaciente
        }}>
            {children}
        </PacientesContext.Provider>
    )
}

export default PacientesProvaider;
