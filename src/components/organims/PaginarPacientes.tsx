import { useContext } from "react";
import PacientesContext from "../../context/pacientes/PacientesContext";
import Button from "../atoms/Button";


interface Iprops {
    nextPage: () => void;
    prevPage: () => void;
    toPage: (number: number) => void;
    pacientesLength: number;
}

const PaginarPacientes = ({ nextPage, prevPage, toPage, pacientesLength }: Iprops) => {
    const { pacientesState } = useContext(PacientesContext);
    const { pacientesPorPagina } = pacientesState;

    const btnPages = () => {
        let arrBtns = []
        for (let i = 0; i <= pacientesLength;) {
            arrBtns.push({
                value: i,
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
                        className={'btn--btnToPage'}
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
