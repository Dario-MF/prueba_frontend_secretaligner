import ActionsGestorPacientes from "./ActionsGestorPacientes";
import ListadoPacientes from "./ListadoPacientes";
import OrdenarPacientes from "./OrdenarPacientes";
import PaginarPacientes from "./PaginarPacientes";



const GestorPacientes = () => {




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
                    <OrdenarPacientes />
                    <ListadoPacientes />
                    <PaginarPacientes />
                </main>


            </main>
        </article>
    )
}

export default GestorPacientes;
