import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Sobre from './Pages/Sobre/Sobre';
import Autores from './Pages/Autores/Autores';
import Livros from './Pages/Livros/Livros';
import NotFound from './Pages/NotFound/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/autores' component={Autores}/>
        <Route path='/livros' component={Livros}/>
        <Route path='/sobre' component={Sobre}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

