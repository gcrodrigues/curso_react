import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './Sobre';
import Autores from './Autores';
import Livros from './Livros';
import NotFound from './NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/' component={App}/>
        <Route path='/autores' component={Autores}/>
        <Route path='/livros' component={Livros}/>
        <Route path='/sobre' component={Sobre}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

