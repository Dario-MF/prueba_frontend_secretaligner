import { useContext } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import { IPaciente } from "../../interfaces/pacienteInterface";
import { randomColor } from "../../libs/randomColor";
import Button from "../atoms/Button";

interface Iprops {
    paciente: IPaciente;
};

const CardPaciente = ({ paciente }: Iprops) => {
    const { datos_paciente, ficha_dental } = paciente;
    const { openModalFichaPaciente, focusPacienteId } = useContext(PacientesContext);

    const handleClick = (id: string | undefined): void => {
        // acciones sobre paciente
    };
    const openModal = () => {
        document.body.style.overflow = "hidden";
        focusPacienteId(paciente.id!);
        openModalFichaPaciente(true);
    };

    return (
        <div className="cardPaciente" onClick={openModal}>
            <div className="cardPaciente__data">
                <div className="listItemClient__dataPersonal">
                    <div className="listItemClient__dataPersonal__imgIniciales">
                        <p style={{ backgroundColor: randomColor() }}>
                            {`${datos_paciente.nombre.charAt(0)}${datos_paciente.apellidos.charAt(0)}`}
                        </p>
                    </div>
                    <div className="listItemClient__dataPersonal__container">
                        <p className="listItemClient__dataPersonal__nombreCompleto">
                            {`${datos_paciente.nombre} ${datos_paciente.apellidos}`}
                        </p>
                        <p className="listItemClient__dataPersonal__fechaNacimiento">
                            <i className="bi bi-calendar4-event"></i>
                            {datos_paciente.fecha_nacimiento}
                        </p>
                    </div>
                </div>
                <div className="cardPaciente_fichaDental">
                    <h4>Clinica:</h4>
                    <p className="listItemClient__clinica">
                        {ficha_dental.clinica}
                    </p>
                    <h4>Objetivo:</h4>
                    <p className="listItemClient__objetivo">
                        {ficha_dental.objetivo_tratamiento}
                    </p>
                    <h4>Estado:</h4>
                    <p className="listItemClient__estado">
                        {ficha_dental.estado}
                    </p>

                </div>
            </div>
            <div className="cardPaciente_actions">
                <Button
                    className="cardPaciente_actions_btn_Editar"
                    value='Editar'
                    type="button"
                    id='editar'
                    action={handleClick}
                />
                <Button
                    className="cardPaciente_actions_btn_Finalizar"
                    value='Finalizar'
                    type="button"
                    id='editar'
                    action={handleClick}
                />
                <Button
                    className="cardPaciente_actions_btn_Borrar"
                    value="Borrar"
                    type="button"
                    id='editar'
                    action={handleClick}
                />
            </div>
        </div>
    )
}

export default CardPaciente;
