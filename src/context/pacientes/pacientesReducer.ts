import { IPaciente, IpacienteInitialState } from '../../interfaces/pacienteInterface';
import { pacientesActionTypes } from './pacientesActionTypes';



type pacientesActions = (
    { type: pacientesActionTypes.pacientesAddData, payload: IPaciente }
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

        default:
            return state;
    }
};


