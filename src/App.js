import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import StoreNavbar from './components/StoreNavbar';
import Products from './components/Product';
import Cart from './components/Cart';
import { store, persistor } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <div className="App">
        <BrowserRouter>   
          <StoreNavbar />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
          </Switch>         
        </BrowserRouter>        
      </div>      
    </Provider>
  );
}

export default App;
