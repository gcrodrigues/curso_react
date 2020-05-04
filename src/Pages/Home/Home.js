import React, { Component, Fragment } from "react";
import "./Home.css";
import ApiService from '../../Services/ApiService';

import Header from "../../Components/Header/Header";
import Tabela from "../../Components/Tabela/Tabela";
import Form from "../../Components/Formulario/Formulario";
import Toast from '../../Components/Toast/Toast'

export default class Home extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      autores: [],
      mensagem: {
        open: false, 
        tipo: '',
        text: ''
      }
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
          
          this.setState({
            autores: [...autoresAtualizados],
            mensagem: {
              open: true, 
              tipo: 'success', 
              text:"Autor removido com sucesso"
            }
          })
        }
      })
      .catch(err => 
        this.setState({
          mensagem: {
            open: true, 
            tipo: 'warning', 
            text:"Erro na comunicação com a API ao remover autor"
          }
        })  
      );

  };

  escutadorDeSubmit = (dados) => {
    const autor = {
      nome: dados.nome,
      livro: dados.livro,
      preco: dados.preco,
    }

    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => {
        if(res.message === 'success'){
          this.setState({
            autores: [...this.state.autores, res.data],
            mensagem: {
              open: true, 
              tipo: 'success', 
              text:"Autor adicionado com sucesso"
            }
          });
        }
      })
      .catch(err => 
        this.setState({
          mensagem: {
            open: true, 
            tipo: 'warning', 
            text:"Erro na comunicação com a API ao criar o autor"
          }
        })); 
  };
  
  componentDidMount() {
    document.title = 'Home | Casa do Código';
    
    ApiService.ListaAutores()
      .then(res => {
        if(res.message === 'success'){
          this.setState({ autores: [...this.state.autores, ...res.data] })
        }
      })
      .catch(err => 
        this.setState({
          mensagem: {
            open: true, 
            tipo: 'warning', 
            text:"Erro na comunicação com a API ao listar autores"
          }
        })  
      )     
    }

  render() {
    const campos = [
      {
        titulo: 'Autores',
        dado: 'nome'
      },
      {
        titulo: 'Livros',
        dado: 'livro'
      }, 
      {
        titulo: 'Preços',
        dado: 'preco'
      }, 
    ];
    const { open, tipo, text } = this.state.mensagem;

    return (
      <Fragment>
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
        <div className="container">
          <h1>Casa do Código</h1>
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
          <Tabela campos={campos} dados={this.state.autores} removeDados={this.removeAutor} />
        </div>
      </Fragment>
    );
  }
}
