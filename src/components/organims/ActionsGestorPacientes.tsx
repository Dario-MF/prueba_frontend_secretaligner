import Button from "../atoms/Button";
import ImputSearch from "../atoms/ImputSearch";
import HeaderDescription from "../molecules/HeaderDescription"


const ActionsGestorPacientes = () => {

    const openModal = (modal: string) => {

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
                    action={() => openModal('newPaciente')}

                />
                <Button
                    className={'btn--btnDownloadCsv'}
                    type={'button'}
                    icon="bi-file-earmark-medical-fill"
                    value="Descargar CSV"
                    action={() => openModal('downloadCsv')}
                />
            </div>
        </>
    )
}

export default ActionsGestorPacientes;
