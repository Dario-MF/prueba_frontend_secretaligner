import { IPaciente, IpacienteInitialState } from '../../interfaces/pacienteInterface';
import { pacientesActionTypes } from './pacientesActionTypes';



type pacientesActions = (
    { type: pacientesActionTypes.pacientesAddData, payload: any } |
    { type: pacientesActionTypes.listOrder, payload: string | number } |
    { type: pacientesActionTypes.pacientesPorPagina, payload: number } |
    { type: pacientesActionTypes.openModalNewPaciente, payload: boolean } |
    { type: pacientesActionTypes.closeModalNewPaciente, payload: boolean }
)



export const pacientesReducer = (
    state: IpacienteInitialState,
    action: pacientesActions
): IpacienteInitialState => {

    switch (action.type) {
        case pacientesActionTypes.pacientesAddData:
            return {
                ...state,
                pacientes: [action.payload, ...state.pacientes]
            }
        case pacientesActionTypes.listOrder:
            return {
                ...state,
                visionado: action.payload,
            }
        case pacientesActionTypes.pacientesPorPagina:
            return {
                ...state,
                pacientesPorPagina: action.payload,
            }
        case pacientesActionTypes.openModalNewPaciente:
            return {
                ...state,
                modalNewPacienteIsOpen: action.payload,
            }
        case pacientesActionTypes.closeModalNewPaciente:
            return {
                ...state,
                modalNewPacienteIsOpen: action.payload,
            }

        default:
            return state;
    }
};


