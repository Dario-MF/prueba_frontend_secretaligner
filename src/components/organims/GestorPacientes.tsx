import { useContext } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import Modal from "../templates/Modal";
import ActionsGestorPacientes from "./ActionsGestorPacientes";
import ListadoPacientes from "./ListadoPacientes";
import OrdenarPacientes from "./OrdenarPacientes";
import PaginarPacientes from "./PaginarPacientes";
import TargetasPacientes from "./TargetasPacientes";



const GestorPacientes = () => {
    const { pacientesState } = useContext(PacientesContext);


    return (
        <article className="pacientes_component">
            <header className="pacientes_component__header">
                <h2
                    className="pacientes_component__header__title"
                >Listado de pacientes
                </h2>
            </header>
            <main className="gestor_pacientes">
                <header className="gestor_pacientes__header">
                    <ActionsGestorPacientes />
                </header>
                <main className="gestor_pacientes__list">
                    <OrdenarPacientes
                        visionado={pacientesState.visionado}
                        pacientesPorPagina={pacientesState.pacientesPorPagina}
                    />
                    {
                        (pacientesState.visionado === 'lista')
                            ? <ListadoPacientes />
                            : <TargetasPacientes />
                    }

                    <PaginarPacientes />
                </main>


            </main>
            {
                pacientesState.modalNewPacienteIsOpen && <Modal />
            }

        </article>
    )
}

export default GestorPacientes;
