import Button from "../atoms/Button";

const OrdenarPacientes = () => {
    const handleClick = (id: string | undefined) => {
        console.log(id)
    }

    return (
        <div className="orderBar">
            <Button
                className={'btn--btnOrder'}
                type={'button'}
                id="list"
                icon="bi-list-ul"
                value=""
                action={handleClick}
            />
            <Button
                className={'btn--btnOrder'}
                type={'button'}
                id="card"
                icon="bi-grid-3x3"
                value=""
                action={handleClick}
            />
            <Button
                className={'btn--btnOrder'}
                type={'button'}
                id="6"
                value="6"
                action={handleClick}
            />
            <Button
                className={'btn--btnOrder'}
                type={'button'}
                id="12"
                value="12"
                action={handleClick}
            />
            <Button
                className={'btn--btnOrder'}
                type={'button'}
                id="18"
                value="18"
                action={handleClick}
            />
        </div>
    )
}

export default OrdenarPacientes;
