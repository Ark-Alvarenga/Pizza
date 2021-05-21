import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import './Styles/App.css';

//COMPONENTS
import Checkout from "./Components/Checkout";
import Header from './Components/Header';
import Home from './Components/Home';
import Ingredientes from "./Components/Ingredientes";
import Obrigado from "./Components/Obrigado";
import Sizes from "./Components/Sizes";
import Massas from "./Components/Massas";



function App() {
  return (
    <Provider store={store}>
    <Router>
   
      <Switch>

        

        <Route path='/tamanho'>
          <Header />
          <h1 className="title">Escolha o tamanho de sua pizza</h1>
          <Sizes/>
        </Route >

        <Route path='/massa'>
          <Header />
          <h1 className="title">Escolha o tipo de massa de sua pizza</h1>
          <Massas />
        </Route>

        <Route path='/ingredientes'>
          <Header />
          <h1 className='title'>Escolha os ingredientes de sua pizza</h1>
          <Ingredientes />
        </Route>

        <Route path ='/finalizar'>
          <Header />
          <Checkout />
        </Route>

        <Route path='/obrigado'>
          <Header />
          <Obrigado />
        </Route>

        <Route path='/'>
          <Header />
          <Home />
        </Route>

      </Switch>
    
    </Router>
    </Provider>
  );
}

export default App;
