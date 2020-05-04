import React, { Component } from "react";

import Header from "../../Components/Header/Header";
import Tabela from "../../Components/Tabela/Tabela";
import ApiService from '../../Services/ApiService';
import Toast from  '../../Components/Toast/Toast';

export default class Livros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livros: [],
      mensagem: {
        open: false,
        tipo: '',
        text: ''
      }
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
      .catch(err => 
        this.setState({
          mensagem: {
            open: true, 
            tipo: 'warning', 
            text:"Erro na comunicação com a API ao listar livros"
          }
        })
      )
  }

  render() {
    const campos = [{
      titulo: 'Livros',
      dado: 'livro'
    }];

    const { open, tipo, text } = this.state.mensagem;
    return (
      <>
        <Toast
          severity={tipo}
          open={open}
          handleClose={() => {
            this.setState({
              mensagem: { open: false },
            });
          }}
        >
          {text}
        </Toast>

        <Header />
        <div className="container mb-10">
          <h1>Livros</h1>
          <Tabela
            dados={this.state.livros}
            campos={campos}
          />
        </div>
      </>
    );
  }
}
