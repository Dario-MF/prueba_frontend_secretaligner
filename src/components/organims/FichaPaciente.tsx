import { useCallback, useContext, useState } from 'react';
import PacientesContext from '../../context/pacientes/PacientesContext';
import { randomColor } from '../../libs/randomColor';


const FichaPaciente = () => {
    const { pacientesState } = useContext(PacientesContext);
    const [paciente] = pacientesState.pacientes.filter(p => p.id === pacientesState.pacienteFocus);
    const { datos_paciente, ficha_dental } = paciente;
    const [height, setHeight] = useState(0);

    const maxilarRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    const createElipsis = (rx: number, ry: number, id: string, dientesSelected: number[]) => {
        const dientesArr = ['', '28', '27', '26', '25', '24', '23', '22', '21', '11', '12', '13', '14', '15', '16', '17', '18', '', '48', '47', '46', '45', '44', '43', '42', '41', '31', '32', '33', '34', '35', '36', '37', '38'];
        const maxilarHeight = height / 2;
        const circlesArray = [];
        const frags = 360 / dientesArr.length;
        for (let i = 0; i < dientesArr.length; i++) {
            const posx = Math.round(rx * (Math.cos((frags / 180) * i * Math.PI))) + 'px';
            const posy = Math.round(ry * (Math.sin((frags / 180) * i * Math.PI))) + 'px';
            const itemElipse = {
                key: dientesArr[i],
                className: `circle number ${dientesArr[i]}`,
                border: dientesSelected.includes(Number(dientesArr[i])),
                top: ((maxilarHeight) - parseInt(posy.slice(0, -2))) + 'px',
                left: ((maxilarHeight) + parseInt(posx.slice(0, -2))) + 'px',
            }
            circlesArray.push(itemElipse);
        }
        return circlesArray;
    };

    return (
        <>
            <div className="fichaPaciente__datoPersonal">
                <div className="fichaPaciente__datoPersonal__img">
                    <div className="listItemClient__dataPersonal__imgIniciales">
                        <p style={{ backgroundColor: randomColor() }}>
                            {`${datos_paciente.nombre.charAt(0)}${datos_paciente.apellidos.charAt(0)}`}
                        </p>
                    </div>
                </div>
                <div className="fichaPaciente__datoPersonal__datos">
                    <div className="fichaPaciente__datoPersonal__datos_field">
                        <p>{ficha_dental.clinica}</p>
                    </div>
                    <div className="fichaPaciente__datoPersonal__datos_field">
                        <p>{datos_paciente.nombre}</p>
                    </div>
                    <div className="fichaPaciente__datoPersonal__datos_field">
                        <p>{datos_paciente.apellidos}</p>
                    </div>
                    <div className="fichaPaciente__datoPersonal__datos_field">
                        <p>{(datos_paciente.sexo === 'M') ? 'Hombre' : 'Mujer'}</p>
                    </div>
                    <div className="fichaPaciente__datoPersonal__datos_field">
                        <p>{datos_paciente.fecha_nacimiento}</p>
                    </div>
                </div>
            </div>
            <div className="fichaPaciente__datoMedico">
                <div className="fichaPaciente__datoMedico__maxilar">
                    <div className="fichaPaciente__datoMedico__datos_field">
                        <p>Dientes No Mover</p>
                    </div>
                    <div className="fichaPaciente__datoMedico__maxilar_schema">
                        <div className="maxilar" ref={maxilarRef} id="maxilar">
                            {
                                createElipsis(140, 200, 'maxilar', ficha_dental.dientes_no_mover).map((number, i) => (
                                    <div
                                        key={number.key + i}
                                        className={number.className}
                                        style={{
                                            top: `${number.top}`,
                                            left: `${number.left}`,
                                            border: `${(number.border) ? '1px solid red' : 'none'}`
                                        }}
                                    >
                                        {number.key}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="fichaPaciente__datoMedico__datos">
                    <div className="fichaPaciente__datoMedico__datos_field">
                    </div>
                    <div className="fichaPaciente__datoMedico__datos_field">
                        <p>{ficha_dental.estado}</p>
                    </div>
                    <div className="fichaPaciente__datoMedico__datos_field">
                        <p>{ficha_dental.objetivo_tratamiento}</p>
                    </div>
                    <div className="fichaPaciente__datoMedico__datos_field">
                        <h3>RECORTE ALINEADORES</h3>
                        <p>{ficha_dental.otros_datos.recorte_alineadores}</p>
                        <h3>¿Desea alineadores pasivos?</h3>
                        <p>{(ficha_dental.otros_datos.alineadores_pasivos === true) ? 'Si' : 'No'}</p>
                        <h3>¿Desea SecretRetainer al finalizar?</h3>
                        <p>{(ficha_dental.otros_datos.secretretainer === true) ? 'Si' : 'No'}</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FichaPaciente;
