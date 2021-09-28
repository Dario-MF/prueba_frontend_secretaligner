import { useContext } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import Button from "../atoms/Button";

interface Iprops {
    visionado: string | number;
    pacientesPorPagina: number;
};

const OrdenarPacientes = ({ visionado, pacientesPorPagina }: Iprops) => {
    const { selectVistaPacientes, selectPacientesPorPagina } = useContext(PacientesContext)

    const handleClick = (id: string | number | undefined) => {
        if (id === 'lista' || id === 'targeta') {
            selectVistaPacientes(id)
        } else if (id === '6' || id === '12' || id === '18') {
            selectPacientesPorPagina(Number(id))
        }
    };

    return (
        <div className="orderBar">
            <Button
                className={`btn--btnOrder ${(visionado === 'lista') ? 'isActive' : ''}`}
                type={'button'}
                id="lista"
                icon="bi-list-ul"
                value=""
                action={handleClick}
            />
            <Button
                className={`btn--btnOrder ${(visionado === 'targeta') ? 'isActive' : ''}`}
                type={'button'}
                id="targeta"
                icon="bi-grid-3x3"
                value=""
                action={handleClick}
            />
            <Button
                className={`btn--btnOrder ${(pacientesPorPagina === 6) ? 'isActive' : ''}`}
                type={'button'}
                id="6"
                value="6"
                action={handleClick}
            />
            <Button
                className={`btn--btnOrder ${(pacientesPorPagina === 12) ? 'isActive' : ''}`}
                type={'button'}
                id="12"
                value="12"
                action={handleClick}
            />
            <Button
                className={`btn--btnOrder ${(pacientesPorPagina === 18) ? 'isActive' : ''}`}
                type={'button'}
                id="18"
                value="18"
                action={handleClick}
            />
        </div>
    )
};

export default OrdenarPacientes;
