import { createContext } from "react";
import { IpacienteInitialState } from "../../interfaces/pacienteInterface";




interface IpacientesContextProps {
    pacientesState: IpacienteInitialState
};

const PacientesContext = createContext<IpacientesContextProps>({} as IpacientesContextProps);





export default PacientesContext;
