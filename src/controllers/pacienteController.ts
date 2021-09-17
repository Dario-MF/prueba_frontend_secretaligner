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

}