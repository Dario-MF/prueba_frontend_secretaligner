import { v4 as uuidv4 } from 'uuid';


export const parseDataModal = (data: any) => {

    const paciente = {
        datos_paciente: {
            nombre: data.nombre,
            apellidos: data.apellidos,
            fecha_nacimiento: data.fecha_nacimiento,
            sexo: data.sexo
        },
        ficha_dental: {
            acadas_tratamiento: "ambas",
            dientes_no_mover: [
                12,
                46
            ],
            estado: "planificando",
            clinica: data.clinica,
            objetivo_tratamiento: "Estética",
            otros_datos: {
                recorte_alineadores: data.recorte_alineadores,
                alineadores_pasivos: true,
                secretretainer: Boolean(data.secretretainer)
            }
        },
        id: uuidv4()
    }

    return paciente;
}