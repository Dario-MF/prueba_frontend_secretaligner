
interface Iprops {
    type: "button" | "submit" | "reset" | undefined;
    className: string;
    value?: string;
    id?: string;
    icon?: string;
    action: (number: any) => void;
}

const Button = ({ className, id, value, action, type, icon }: Iprops) => {
    const handleClick = (id: any = null) => {
        action(id);
    }

    return (
        <button
            type={type}
            className={`btn ${className}`}
            onClick={() => handleClick(id)}
        >
            {icon && <i className={`bi ${icon}`}></i>}
            {" " + value}
        </button>
    )
}

export default Button;
