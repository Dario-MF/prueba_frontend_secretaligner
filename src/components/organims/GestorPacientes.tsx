import { useContext, useState } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import Modal from "../templates/Modal";
import ActionsGestorPacientes from "./ActionsGestorPacientes";
import ListadoPacientes from "./ListadoPacientes";
import OrdenarPacientes from "./OrdenarPacientes";
import PaginarPacientes from "./PaginarPacientes";
import TargetasPacientes from "./TargetasPacientes";



const GestorPacientes = () => {
    const { pacientesState } = useContext(PacientesContext);
    const { pacientes, pacientesPorPagina } = pacientesState;

    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');


    const pacientesFiltered = () => {
        if (search.length > 0) {
            const filtered = pacientes.filter(paciente => {
                return (
                    paciente.datos_paciente.nombre.toLowerCase().includes(search.toLowerCase()) ||
                    paciente.datos_paciente.apellidos.toLowerCase().includes(search.toLowerCase())
                )
            });
            return filtered;
        } else {
            return pacientes;
        }
    }

    const paginacion = () => {
        if (search.length > 0) {
            return pacientesFiltered().slice(currentPage, currentPage + pacientesPorPagina);
        } else {
            return pacientes.slice(currentPage, currentPage + pacientesPorPagina);
        }
    }

    const nextPage = () => {
        if (currentPage + pacientesPorPagina < pacientesFiltered().length) {
            setCurrentPage(currentPage + pacientesPorPagina);
        }
    };
    const prevPage = () => {
        if (currentPage !== 0) {
            setCurrentPage(currentPage - pacientesPorPagina);
        }
    };
    const toPage = (toIndex: number) => {
        setCurrentPage(Number(toIndex));
        console.log(toIndex)
    };

    const onSearch = (event: any) => {
        setCurrentPage(0);
        setSearch(event.target.value);
    }


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
                    <ActionsGestorPacientes onSearch={onSearch} />
                </header>
                <main className="gestor_pacientes__list">
                    <OrdenarPacientes
                        visionado={pacientesState.visionado}
                        pacientesPorPagina={pacientesState.pacientesPorPagina}
                    />
                    {
                        (pacientesState.visionado === 'lista')
                            ? <ListadoPacientes pacientes={paginacion()} />
                            : <TargetasPacientes pacientes={paginacion()} />
                    }
                    <PaginarPacientes
                        nextPage={nextPage}
                        prevPage={prevPage}
                        toPage={toPage}
                        pacientesLength={pacientesFiltered().length}
                    />
                </main>
            </main>
            {
                pacientesState.modalNewPacienteIsOpen && <Modal />
            }

        </article>
    )
}

export default GestorPacientes;
