import './cart.css';
import emptyCart from './assets/cart.png';


export const Cart = ({children, total}) => {
    return (
        <ul className={'cart'}>
            {children.length ? children : <img className={`cart__empty`} src={emptyCart} alt= {`empty-cart`}></img>}
            {children.length ? <span className={`cart__total`}>Total: ${total.toFixed(2)}</span> : ''}
        </ul>
    )
}