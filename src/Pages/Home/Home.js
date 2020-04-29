import React, { Component, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./Home.css";
import ApiService from '../../Utils/ApiService';

import Header from "../../Components/Header/Header";
import Tabela from "../../Components/Tabela/Tabela";
import Form from "../../Components/Formulario/Formulario";
import PopUp from "../../Utils/PopUp";

export default class Home extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      autores: [],
    };
  }


  removeAutor = id => {
    const { autores } = this.state;

    const autoresAtualizados = autores.filter(autor => {
      return autor.id !== id;
    });

    ApiService.RemoveAutor(id)
      .then(res => {
        if(res.message === 'deleted'){
          PopUp.exibeMensagem("success", " Autor removido com sucesso");
          this.setState({autores: [...autoresAtualizados]})
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao remover autor"));

  };

  escutadorDeSubmit = (autor) => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => {
        if(res.message === 'success'){
          PopUp.exibeMensagem("success", "Autor adicionado com sucesso!");
          this.setState({autores: [...this.state.autores, res.data]});
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao adicionar o autor ")); 
  };
  
  componentDidMount() {
    document.title = 'Home | Casa do Código';
    
    ApiService.ListaAutores()
      .then(res => {
        if(res.message === 'success'){
          this.setState({ autores: [...this.state.autores, ...res.data] })
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao listar autores "))
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Casa do Código</h1>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}
