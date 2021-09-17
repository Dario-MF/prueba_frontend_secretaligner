import { IPaciente, IpacienteInitialState } from '../../interfaces/pacienteInterface';
import { pacientesActionTypes } from './pacientesActionTypes';



type pacientesActions = (
    { type: pacientesActionTypes.pacientesAddData, payload: IPaciente } |
    { type: pacientesActionTypes.listOrder, payload: string | number } |
    { type: pacientesActionTypes.pacientesPorPagina, payload: number }
)



export const pacientesReducer = (
    state: IpacienteInitialState,
    action: pacientesActions
): IpacienteInitialState => {

    switch (action.type) {
        case pacientesActionTypes.pacientesAddData:
            return {
                ...state,
                pacientes: [...state.pacientes, action.payload]
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

        default:
            return state;
    }
};


