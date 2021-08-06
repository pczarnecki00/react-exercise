import './cartItem.css';

export const CartItem = ({name, count, price}) => {
    return (
        <li className={'list-item'}>
            <div>{count} x {name}</div><div>${price}</div>
        </li>
    )
}