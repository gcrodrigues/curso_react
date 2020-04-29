import React, { Component } from "react";

import Header from "../../Components/Header/Header";
import DataTabela from "../../Components/DataTabela/DataTabela";
import ApiService from '../../Utils/ApiService';
import PopUp from '../../Utils/PopUp';

export default class NotFound extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomes: [],
      titulo: "Autores",
    };
  }

  componentDidMount() {
    document.title = 'Autores | Casa do Código';
    ApiService.ListaNomes()
    .then(res => {
      if(res.message === 'success'){
        this.setState({ nomes: [...this.state.nomes, ...res.data] })
      }
    })
    .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao listar nomes"))
  }

  render() {
    return (
      <>
        <Header />
        <div className="container mb-10">
          <h1>Autores</h1>
          <DataTabela
            dados={this.state.nomes}
            titulo={this.state.titulo}
            colunas={["nome"]}
          />
        </div>
      </>
    );
  }
}
