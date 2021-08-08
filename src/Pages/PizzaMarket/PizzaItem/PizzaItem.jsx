import './pizzaItem.css';

export const PizzaItem = ({children, img, name, price}) => {
    return(

        <li className={'pizza-item'}>
            <img className={`img`} src={img} alt={name} />
            <h2 className={`h2`}>{name}</h2>
            <span className={`span`}>${price.toFixed(2)}</span>
            {children}
        </li>
    )
}