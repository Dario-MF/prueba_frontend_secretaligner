import { CSVLink } from 'react-csv';
import { useContext } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import Button from "../atoms/Button";
import ImputSearch from "../atoms/ImputSearch";
import HeaderDescription from "../molecules/HeaderDescription"
import { convertToCSV } from '../../libs/convertToCsv';


const ActionsGestorPacientes = ({ onSearch }: any) => {
    const { openModalNewPaciente, pacientesState } = useContext(PacientesContext);

    const openModal = () => {
        openModalNewPaciente(true)
    }

    const data = convertToCSV(pacientesState.pacientes)

    return (
        <>
            <HeaderDescription />
            <ImputSearch onSearch={onSearch} />
            <div>
                <Button
                    className={'btn--btnNewPaciente'}
                    type={'button'}
                    icon="bi-plus-lg"
                    value="Nuevo Paciente"
                    action={openModal}

                />
                <CSVLink
                    data={data}
                    filename={"pacientes.csv"}
                    className="btn btn--btnDownloadCsv"
                    target="_blank"
                >
                    <i className={`bi bi-file-earmark-medical-fill`}></i>
                    Descargar CSV
                </CSVLink>
            </div>
        </>
    )
}

export default ActionsGestorPacientes;
