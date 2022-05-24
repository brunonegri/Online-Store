import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCategories } from './services/api';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Search } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
