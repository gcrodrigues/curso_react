import React, { Component } from "react";

import Header from "../../Components/Header/Header";
import DataTabela from "../../Components/DataTabela/DataTabela";
import ApiService from '../../Utils/ApiService';
import PopUp from '../../Utils/PopUp';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livros: [],
      titulo: "Livros",
    };
  }

  componentDidMount() {
    document.title = 'Livros | Casa do Código';
    ApiService.ListaLivros()
      .then(res => {
        if(res.message === 'success'){
          this.setState({ livros: [...this.state.livros, ...res.data] })
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao listar livros"))
  }

  render() {
    return (
      <>
        <Header />
        <div className="container mb-10">
          <h1>Livros</h1>
          <DataTabela
            dados={this.state.livros}
            titulo={this.state.titulo}
            colunas={["livro"]}
          />
        </div>
      </>
    );
  }
}
