import React, { Component } from "react";

export default class Formulario extends Component {
  constructor(props) {
    super(props);

    this.stateInicial = {
      nome: "",
      livro: "",
      preco: "",
    };

    this.state = this.stateInicial;
  }

  escutadorDeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value, //colchete em objs: criar props a partir dos valores de var
    });
  };

  submitFormulario = () => {
    this.props.escutadorDeSubmit(this.state);
    this.setState(this.stateInicial);
  };

  render() {
    const { nome, livro, preco } = this.state;

    return (
      <form>
        <div className="row">

          <div className="input-field col s4">
            <label className="input-field active" htmlFor="nome">Nome</label>
            <input
              className="validate"
              id="nome"
              type="text"
              name="nome"
              value={nome}
              onChange={this.escutadorDeInput}
            />
          </div>
          
          <div className="input-field col s4">
            <label className="input-field active" htmlFor="livro">Livro</label>
            <input
              className="validate"
              id="livro"
              type="text"
              name="livro"
              value={livro}
              onChange={this.escutadorDeInput}
            />
          </div>
          
          <div className="input-field col s4">
            <label className="input-field active" htmlFor="preco">Preço</label>
            <input
              className="validate"
              id="preco"
              type="text"
              name="preco"
              value={preco}
              onChange={this.escutadorDeInput}
            />
          </div>

        </div>
        <button className="waves-effect waves-light indigo lighten-2 btn" onClick={this.submitFormulario} type="button">Salvar</button>
      </form>
    );
  }
}
