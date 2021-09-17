import PacientesProvaider from "../../context/pacientes/PacientesProvaider";
import GestorPacientes from "../organims/GestorPacientes";


const Main = () => {
    return (
        <main className="main">
            <PacientesProvaider>
                <GestorPacientes />
            </PacientesProvaider>
        </main>
    )
}

export default Main;
