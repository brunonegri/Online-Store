import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Carrinho from './pages/Carrinho';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route path="/products/:id" component={ ProductDetails } />
          <Route path="/carrinho" component={ Carrinho } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
