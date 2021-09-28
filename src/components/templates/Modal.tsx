import { useContext } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import FormNewPaciente from "../organims/FormNewPaciente";


const Modal = () => {

    const { closeModalNewPaciente } = useContext(PacientesContext);


    const modalClose = () => {
        document.body.style.overflowY = "scroll";
        closeModalNewPaciente(false);
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
                <h2>Registrar nuevo paciente</h2>
                <FormNewPaciente modalClose={modalClose} />
            </div>
        </div>
    )
}

export default Modal;
