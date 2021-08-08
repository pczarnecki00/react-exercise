import './Button.css';

export const Button = ({ children, onClick, size }) => {
    return (
        <button
        onClick = {onClick}
        className={`btn btn--increment ${size}`}
        >{children}</button>
    )
}