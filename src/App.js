import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import ListCategories from './pages/ListCategories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Search } />
        </Switch>
      </BrowserRouter>
      <ListCategories />
    </div>
  );
}

export default App;
