import { Container } from './PizzaContainer/PizzaContainer';
import { PizzaList } from './PizzaList/PizzaList';
import { PizzaItem } from './PizzaItem/PizzaItem';
import { Cart } from './Cart/Cart';
import { CartItem } from './CartItem/CartItem';
import { Button } from 'Components/Button/Button';
import pizza1 from 'assets/img/pizza1.jpg';
import pizza2 from 'assets/img/pizza2.jpg';
import pizza3 from 'assets/img/pizza3.jpg';
import pizza4 from 'assets/img/pizza4.jpg';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';


const pizzas = [
    {
        name: 'margerita',
        price: 10,
        src: pizza1,
        count: 0,
    },
    {
        name: 'regina',
        price: 14,
        src: pizza2,
        count: 0,
    },
    {
        name: 'peperona',
        price: 19,
        src: pizza3,
        count: 0,
    },
    {
        name: 'mozzarella',
        price: 21,
        src: pizza4,
        count: 0,
    },

]


export const PizzaPage = () => {
    const [chosenPizza, setChosenPizza] = useState([]);

    const incrementPizzaCount = (item) => {
        let arr = [...chosenPizza]
        arr.some(pizza => pizza.name === item.name)
            ? arr = arr.map(pizza => pizza.name === item.name ? { ...pizza, count: pizza.count + 1 } : pizza)
            : arr.push({ name: item.name, price: item.price, count: 1 })

        setChosenPizza(arr)
    }

    const decrementPizzaCount = (item) => {
        let arr = [...chosenPizza];

        arr.map(pizza => pizza.name === item.name && pizza.count >= 1 && (pizza.count = pizza.count - 1))
        arr = arr.filter(it => it.count > 0 && it)
        setChosenPizza(arr)
    }
 
    const sum = useMemo(() => chosenPizza.reduce((acc, prev) => acc + prev.price * prev.count, 0), [chosenPizza]);

    return (
        <Container>

            <PizzaList>
                {pizzas.map(item =>
                    <PizzaItem key={item.name} img={item.src} name={item.name} price={item.price}><Button onClick={() => incrementPizzaCount(item)}>Add</Button></PizzaItem>
                )}
            </PizzaList>

            <Cart total={sum}>
                {chosenPizza.map(pizza =>
                    <CartItem key={pizza.price} name={pizza.name} price={pizza.price * pizza.count} count={pizza.count}><Button onClick={() => incrementPizzaCount(pizza)} size={`btn--small`} >+</Button><Button onClick={() => decrementPizzaCount(pizza)} size={`btn--small`}>-</Button></CartItem>
                )}
                
            </Cart>
            <Link to='/secondary'>Next Page</Link>
        </Container>
    )
}