export interface IpacienteInitialState {
    pacientes: IPaciente[];
    visionado: string | number;
    pacientesPorPagina: number;
}

export enum Visionado {
    targeta = 'targeta',
    lista = 'lista'
}

export interface IPaciente {
    datos_paciente: DatosPaciente;
    ficha_dental: FichaDental;
    id?: string;
}

export interface DatosPaciente {
    nombre: string;
    apellidos: string;
    fecha_nacimiento: string;
    sexo: Sexo;
}

export enum Sexo {
    F = "F",
    M = "M",
}

export interface FichaDental {
    acadas_tratamiento: AcadasTratamiento;
    dientes_no_mover: number[];
    estado: string;
    clinica: string;
    objetivo_tratamiento: ObjetivoTratamiento;
    otros_datos: OtrosDatos;
}

export enum AcadasTratamiento {
    Ambas = "ambas",
    Inferior = "inferior",
    Inferios = "inferios",
    Superior = "superior",
}

export enum ObjetivoTratamiento {
    Estética = "Estética",
    EstéticaYOclusión = "Estética y Oclusión",
    Oclusión = "Oclusión",
}

export interface OtrosDatos {
    recorte_alineadores: RecorteAlineadores;
    alineadores_pasivos: boolean;
    secretretainer: boolean;
}

export enum RecorteAlineadores {
    RecortarANivelDeLosCuellos = "Recortar a nivel de los cuellos",
    RecortarDejando13MmDeEncía = "Recortar dejando 1-3 mm de encía",
}
