import './pizzaList.css';


export const PizzaList = ({children}) => {
    return (
        <ul className={'list'}>{children}</ul>
    )
}