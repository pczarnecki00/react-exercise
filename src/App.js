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
import { Button } from './Components/Button/Button';
import { useEffect, useState } from 'react';



function App() {

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

  const [chosenPizza, setChosenPizza] = useState([]);

  const renderList = () => {
    let pizza = pizzas.map(item =>
      <PizzaItem key={item.name}img={item.src} name={item.name} price={item.price}><Button onClick={() => incrementPizzaCount(item)}>Add</Button></PizzaItem>
    )
    return pizza;
  }

  const incrementPizzaCount = (item) => {
    let arr = [...chosenPizza]
    arr.some(pizza => pizza.name === item.name) 
      ? arr = arr.map(pizza => pizza.name === item.name ? {...pizza, count: pizza.count +1} : pizza) 
      : arr.push({name:item.name, price: item.price, count: 1})

      setChosenPizza(arr)
  }

  const decrementPizzaCount = (item) => {
    let arr = [...chosenPizza];
    
    arr.map( pizza => pizza.name === item.name && pizza.count >= 1 && (pizza.count= pizza.count - 1))
    arr =arr.filter(it => it.count > 0 && it)
    setChosenPizza(arr)
  }

  const sumPrices = () => {
    const sum = chosenPizza.reduce((acc, currentValue) => {
      return acc + currentValue.price * currentValue.count
    }, 0)
    return sum;
  }

 useEffect(() => {sumPrices()}, [chosenPizza])

  return (
    <div className="App">
      <Container>
        <PizzaList>
          {renderList()}
        </PizzaList>
        
          <Cart total={sumPrices()}>
            {chosenPizza.map(pizza => 
              <CartItem key={pizza.price} name={pizza.name} price={pizza.price * pizza.count} count={pizza.count}><Button onClick={()=>incrementPizzaCount(pizza) } size={`btn--small`} >+</Button><Button onClick={()=> decrementPizzaCount(pizza)} size={`btn--small`}>-</Button></CartItem>
            )}
          </Cart>
        
      </Container>
    </div>
  );
}
export default App;
