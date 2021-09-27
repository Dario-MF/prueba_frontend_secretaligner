import { createContext } from "react";
import { IpacienteInitialState } from '../../interfaces/pacienteInterface';




interface IpacientesContextProps {
    pacientesState: IpacienteInitialState;
    selectVistaPacientes: (vista: string) => void;
    selectPacientesPorPagina: (number: number) => void;
    openModalNewPaciente: (isOpen: boolean) => void;
    closeModalNewPaciente: (isOpen: boolean) => void;
    openModalFichaPaciente: (isOpen: boolean) => void;
    closeModalFichaPaciente: (isOpen: boolean) => void;
    createNewPaciente: (data: any) => void;
    searchPaciente: (data: any) => void;
};

const PacientesContext = createContext<IpacientesContextProps>({} as IpacientesContextProps);





export default PacientesContext;
