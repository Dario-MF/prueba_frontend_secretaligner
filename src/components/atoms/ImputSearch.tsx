import { useContext, useEffect, useState } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import { Pacientes } from '../../controllers/pacienteController';

const pacientes = new Pacientes();

const ImputSearch = () => {
    const { searchPaciente } = useContext(PacientesContext);
    const [search, setSearch] = useState('');

    const handleSearch = (e: any) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        if (search.length > 0) {
            const resultadoBusqueda = pacientes.buscarPacienteNombreApellido(search.toLowerCase());
            searchPaciente(resultadoBusqueda)
        }
    }, [search]);

    return (
        <div className="search__field">
            <i className="bi bi-search"></i>
            <input
                type="text"
                className="search__field__input"
                placeholder="Buscar..."
                onChange={e => handleSearch(e)}
            />
        </div>
    )
}

export default ImputSearch
