import React, { Component } from "react";

import Header from "../../Components/Header/Header";
import Tabela from "../../Components/Tabela/Tabela";
import ApiService from '../../Services/ApiService';
import Toast from  '../../Components/Toast/Toast';

export default class Autores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomes: [],
      mensagem: {
        open: false,
        tipo: '',
        text: ''
      }
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
    .catch(err => 
      this.setState({
        mensagem: {
          open: true, 
          tipo: 'warning', 
          text:"Erro na comunicação com a API ao listar nomes"
        }
      })  
    )
  }

  render() {
    const campos =[{
      titulo: 'Autores',
      dado: 'nome'
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
          <h1>Autores</h1>
          <Tabela
            dados={this.state.nomes}        
            campos={campos}
          />
        </div>
      </>
    );
  }
}
