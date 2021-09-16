import { v4 as uuidv4 } from 'uuid';
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
    // Crud
    public get pacientesArr(): IPaciente[] {
        return this.pacientes;
    }
    public createPaciente(newPaciente: IPaciente) {
        newPaciente.id = uuidv4();
        this.pacientes.push(newPaciente);
    }
    public updatePaciente(pacienteUpdated: IPaciente) {
        this.pacientes.filter(p => p.id !== pacienteUpdated.id);
        this.pacientes.push(pacienteUpdated);
    }
    public deletePaciente(id: string) {
        this.pacientes.filter(p => p.id !== id);
    }
    // Search
    public searchPacientesByFullName(search: string): IPaciente[] {
        const resultado = this.pacientes.filter(p => {
            return (
                p.datos_paciente.nombre.includes(search) ||
                p.datos_paciente.apellidos.includes(search)
            );
        });
        return resultado;
    }
    public searchPacienteById(id: string): IPaciente | undefined {
        return this.pacientes.find(p => p.id === id)
    }



}