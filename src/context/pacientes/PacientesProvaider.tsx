import { useReducer } from "react";
import { pacientesReducer } from './pacientesReducer';
import PacientesContext from './PacientesContext';
import { Pacientes } from "../../controllers/pacienteController";
import { IpacienteInitialState, Visionado } from "../../interfaces/pacienteInterface";
import { pacientesActionTypes } from "./pacientesActionTypes";

const pacientes = new Pacientes();

const INITIAL_STATE: IpacienteInitialState = {
    pacientes: pacientes.pacientesArr,
    resultadoSearchPaciente: [],
    visionado: Visionado.lista,
    pacientesPorPagina: 6,
    modalNewPacienteIsOpen: false,
    modalFichaPacienteIsOpen: false,
    pacienteFocus: ''
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
    const openModalFichaPaciente = (isOpen: boolean) => {
        dispatch({ type: pacientesActionTypes.openModalFichaPaciente, payload: isOpen });
    }
    const closeModalFichaPaciente = (isOpen: boolean) => {
        dispatch({ type: pacientesActionTypes.closeModalFichaPaciente, payload: isOpen });
    }
    const createNewPaciente = (data: any) => {
        dispatch({ type: pacientesActionTypes.pacientesAddData, payload: data });
    }
    const searchPaciente = (data: any) => {
        dispatch({ type: pacientesActionTypes.searchPacientes, payload: data });
    }
    const focusPacienteId = (id: string) => {
        dispatch({ type: pacientesActionTypes.pacientesGet, payload: id });
    }



    return (
        <PacientesContext.Provider value={{
            pacientesState,
            selectVistaPacientes,
            selectPacientesPorPagina,
            openModalNewPaciente,
            closeModalNewPaciente,
            openModalFichaPaciente,
            closeModalFichaPaciente,
            createNewPaciente,
            searchPaciente,
            focusPacienteId
        }}>
            {children}
        </PacientesContext.Provider>
    )
}

export default PacientesProvaider;
