import './cart.css';


export const Cart = ({children}) => {
    return (
        <ul className={'cart'}>{children}</ul>
    )
}