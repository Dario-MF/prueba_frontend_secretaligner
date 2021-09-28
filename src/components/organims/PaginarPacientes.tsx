import { useContext } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import Button from "../atoms/Button";


interface Iprops {
    nextPage: () => void;
    prevPage: () => void;
    toPage: (number: number) => void;
    pacientes: any;
}

const PaginarPacientes = ({ nextPage, prevPage, toPage, pacientes }: Iprops) => {
    const { pacientesState } = useContext(PacientesContext);
    const { pacientesPorPagina } = pacientesState;

    const btnPages = () => {
        let arrBtns = [];
        for (let i = 0; i <= pacientes.length;) {
            arrBtns.push({
                value: i
            })
            i = i + pacientesPorPagina
        }
        return arrBtns;
    };

    return (
        <div className="paginacion">
            <Button
                className={'btn--btnPrevPage'}
                type={'button'}
                value={'Prev'}
                action={prevPage}
            />
            {
                btnPages().map((btn, i) => (
                    <Button
                        key={btn.value}
                        className={`btn--btnToPage`}
                        id={String(btn.value)}
                        type={'button'}
                        value={String(i + 1)}
                        action={toPage}

                    />
                ))
            }
            <Button
                className={'btn--btnNextPage'}
                type={'button'}
                value={'Next'}
                action={nextPage}
            />
        </div>
    )
}

export default PaginarPacientes;
