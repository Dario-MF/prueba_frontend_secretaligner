
interface IButton {
    type: "button" | "submit" | "reset" | undefined;
    className: string;
    id?: string;
    value: string;
    action: (id: string | undefined) => any;
}

const Button = ({ className, id, value, action, type }: IButton) => {
    const handleClick = () => {
        action(id);
    }
    return (
        <button
            type={type}
            className={`btn ${className}`}
            onClick={handleClick}
        >{value}
        </button>
    )
}

export default Button;
