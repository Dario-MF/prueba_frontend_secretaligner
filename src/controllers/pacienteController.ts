import { IPaciente } from '../interfaces/pacienteInterface';
import * as dataPacientes from "../data/pacientes.json";




export class Pacientes {
    constructor(
        private pacientes: IPaciente[] = []
    ) {
        this.getData();
    }
    private getData() {
        const data = JSON.parse(JSON.stringify(dataPacientes));

        for (let key in data.default) {
            const parsePacient = data.default[key];
            parsePacient.id = key;
            this.pacientes.push(parsePacient);
        }
    }
    public get pacientesArr(): IPaciente[] {
        return this.pacientes;
    }
    public buscarPacienteNombreApellido(busqueda: string): IPaciente[] {
        const resultadoBusqueda = this.pacientes.filter(paciente => {
            return (
                paciente.datos_paciente.nombre.toLowerCase().includes(busqueda) ||
                paciente.datos_paciente.apellidos.toLowerCase().includes(busqueda)
            )
        })
        return resultadoBusqueda;
    }

    public sortPacientesName(): IPaciente[] {
        const shortArrPacientes = this.pacientes.sort((a, b) => {
            const nombreA = `${a.datos_paciente.nombre.toLowerCase()}${a.datos_paciente.apellidos.toLowerCase().trim()}`;
            const nombreB = `${b.datos_paciente.nombre.toLowerCase()}${b.datos_paciente.apellidos.toLowerCase().trim()}`;
            if (nombreA < nombreB) {
                return -1;
            }
            if (nombreA > nombreB) {
                return 1;
            }
            return 0;
        })
        return shortArrPacientes;
    }

    public sortPacientesClinica(): IPaciente[] {
        const shortArrPacientes = this.pacientes.sort((a, b) => {
            const clinicaA = a.ficha_dental.clinica.toLowerCase();
            const clinicaB = b.ficha_dental.clinica.toLowerCase();
            if (clinicaA < clinicaB) {
                return -1;
            }
            if (clinicaA > clinicaB) {
                return 1;
            }
            return 0;
        })
        return shortArrPacientes;
    }

    public sortPacientesObjetivo(): IPaciente[] {
        const shortArrPacientes = this.pacientes.sort((a, b) => {
            const objetivoA = a.ficha_dental.objetivo_tratamiento.toLowerCase();
            const objetivoB = b.ficha_dental.objetivo_tratamiento.toLowerCase();
            if (objetivoA < objetivoB) {
                return -1;
            }
            if (objetivoA > objetivoB) {
                return 1;
            }
            return 0;
        })
        return shortArrPacientes;
    }
}