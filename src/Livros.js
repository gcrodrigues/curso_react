import React, { Component } from "react";

import Header from "./Header";
import DataTabela from "./DataTabela";

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autores: [
        {
          nome: "Paulo",
          livro: "React",
          preco: "1000",
        },
        {
          nome: "Daniel",
          livro: "Java",
          preco: "99",
        },
        {
          nome: "Marcos",
          livro: "Design",
          preco: "150",
        },
        {
          nome: "Bruno",
          livro: "DevOps",
          preco: "100",
        },
      ],
      titulo: "Livros",
    };
  }

  render() {
    return (
      <>
        <Header />
        <div className="container mb-10">
          <h1>Livros</h1>
          <DataTabela
            dados={this.state.autores}
            titulo={this.state.titulo}
            colunas={["livro"]}
          />
        </div>
      </>
    );
  }
}
