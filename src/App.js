import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListCategories from './pages/ListCategories';
import Search from './pages/Search';
import Carrinho from './pages/Carrinho';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route path="/carrinho" component={ Carrinho } />
        </Switch>
      </BrowserRouter>
      <ListCategories />
    </div>
  );
}

export default App;
