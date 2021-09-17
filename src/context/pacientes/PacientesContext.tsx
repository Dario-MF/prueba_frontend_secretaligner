import { createContext } from "react";
import { IpacienteInitialState } from "../../interfaces/pacienteInterface";




interface IpacientesContextProps {
    pacientesState: IpacienteInitialState;
    selectVistaPacientes: (vista: string) => void;
    selectPacientesPorPagina: (number: number) => void;
};

const PacientesContext = createContext<IpacientesContextProps>({} as IpacientesContextProps);





export default PacientesContext;
