import { useContext, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import PacientesContext from "../../context/pacientes/PacientesContext";
import Button from "../atoms/Button";
import FichaPaciente from "../organims/FichaPaciente";



const ModalFichaPaciente = () => {
    const { closeModalFichaPaciente } = useContext(PacientesContext);
    const fichaPacientefRef = useRef(null);

    const modalClose = () => {
        document.body.style.overflowY = "scroll";
        closeModalFichaPaciente(false)
    }

    const handlePrint = useReactToPrint({
        content: () => fichaPacientefRef!.current!,
    });

    const downloadPdf = () => {
        handlePrint!()
    }

    return (
        <div
            className="modalContainer animate__animated animate__fadeIn"
            onClick={() => {
                modalClose()
            }}
        >
            <div
                className="modalContainer__modal"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="fichaPaciente" ref={fichaPacientefRef}>
                    <FichaPaciente />
                </div>
                <Button
                    className={'btn--btnNewPaciente'}
                    type={'button'}
                    icon="bi-file-pdf"
                    value="Descargar PDF"
                    action={downloadPdf}

                />
            </div>
        </div>
    )
}

export default ModalFichaPaciente;
