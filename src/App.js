import './App.css';
import {PizzaPage} from './Pages/PizzaMarket';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NewComponent} from './Pages/NewComponent/NewComponent.';



function App() {

 
  return (
   <Router>
    <div className="App">
      <Switch>
        <Route path='/' exact component={PizzaPage}></Route>
        <Route path='/secondary' component={NewComponent}></Route>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
