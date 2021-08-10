import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { NewComponent} from './pages/NewComponent/NewComponent.';
import { PizzaPage } from './pages/PizzaMarket/PizzaMarket';
import './App.css';



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
