import { useContext } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import Button from "../atoms/Button";
import ImputSearch from "../atoms/ImputSearch";
import HeaderDescription from "../molecules/HeaderDescription"


const ActionsGestorPacientes = () => {
    const { openModalNewPaciente } = useContext(PacientesContext);

    const openModal = () => {
        openModalNewPaciente(true)
    }
    const downloadCsv = () => {

    }

    return (
        <>
            <HeaderDescription />
            <ImputSearch />
            <div>
                <Button
                    className={'btn--btnNewPaciente'}
                    type={'button'}
                    icon="bi-plus-lg"
                    value="Nuevo Paciente"
                    action={openModal}

                />
                <Button
                    className={'btn--btnDownloadCsv'}
                    type={'button'}
                    icon="bi-file-earmark-medical-fill"
                    value="Descargar CSV"
                    action={downloadCsv}
                />
            </div>
        </>
    )
}

export default ActionsGestorPacientes;
