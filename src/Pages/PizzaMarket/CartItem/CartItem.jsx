import './cartItem.css';

export const CartItem = ({children,name, count, price, onClick}) => {
    return (
        <li onClick={onClick} className={'cart-item'}>
            <span className={'cart-item__name'}>{count} x {name}</span><div className={`cart-item__btn-wrapper`}><span className={`cart-item__price`}>${price.toFixed(2)}</span>{children}</div>
            
        </li>
    )
}