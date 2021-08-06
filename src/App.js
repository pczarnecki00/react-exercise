import './App.css';
import pizza1 from './assets/img/pizza1.jpg';
import pizza2 from './assets/img/pizza2.jpg';
import pizza3 from './assets/img/pizza3.jpg';
import pizza4 from './assets/img/pizza4.jpg';
import { Container } from './Pages/PizzaMarket/PizzaContainer/PizzaContainer';
import { PizzaList } from './Pages/PizzaMarket/PizzaList/PizzaList';
import { PizzaItem } from './Pages/PizzaMarket/PizzaItem/PizzaItem';
import { Cart } from './Pages/PizzaMarket/Cart/Cart';
import { CartItem } from './Pages/PizzaMarket/CartItem/CartItem';
import { useState } from 'react';


function App() {

  const [pizzas, setPizzas] = useState([
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

  ])
  return (
    <div className="App">
      <img></img>
      <Container>
        <PizzaList>
          {pizzas.map(item => 
            <PizzaItem img={item.src} name={item.name} price={item.price}><button onClick={()=> setPizzas([...pizzas.map(ite => ite.name === item.name ? {...item, count: item.count +1}: ite)])}>Add</button></PizzaItem>)}
        </PizzaList>
        {pizzas.every(item => item.count === 0) ||
          <Cart>
            {pizzas.map(pizza => pizza.count === 0 ||
              <CartItem name={pizza.name} price={pizza.price * pizza.count} count={pizza.count}></CartItem>
            )}
          </Cart>
        }
      </Container>
    </div>
  );
}

export default App;
