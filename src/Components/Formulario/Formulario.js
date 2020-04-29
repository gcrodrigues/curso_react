import React, { Component } from "react";
import FormValidator from "../../Utils/FormValidator";
import PopUp from "../../Utils/PopUp";

export default class Formulario extends Component {
  constructor(props) {
    super(props);

    this.validador = new FormValidator([
      {
        campo: "nome",
        metodo: "isEmpty",
        validoQuando: false,
        mensagem: "Digite um nome válido.",
      },
      {
        campo: "livro",
        metodo: "isEmpty",
        validoQuando: false,
        mensagem: "Digite um livro válido.",
      },
      {
        campo: "preco",
        args: [
          {
            min: 0,
            max: 9999,
          },
        ],
        metodo: "isInt",
        validoQuando: true,
        mensagem: "Digite um valor numérico.",
      },
    ]);

    this.stateInicial = {
      nome: "",
      livro: "",
      preco: "",
      validacao: this.validador.valido(),
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
    const validacao = this.validador.valida(this.state);

    if (validacao.isValid) {
      this.props.escutadorDeSubmit(this.state);
      this.setState(this.stateInicial);
    } else {
      const { nome, livro, preco } = validacao;
      const campos = [nome, livro, preco];

      const camposInvalidos = campos.filter((elem) => elem.isInvalid);

      camposInvalidos.forEach((campo) => {
        PopUp.exibeMensagem("error", campo.message);
      });
    }
  };

  render() {
    const { nome, livro, preco } = this.state;

    return (
      <form>
        <div className="row">
          <div className="input-field col s4">
            <label className="input-field active" htmlFor="nome">
              Nome
            </label>
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
            <label className="input-field active" htmlFor="livro">
              Livro
            </label>
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
            <label className="input-field active" htmlFor="preco">
              Preço
            </label>
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
        <button
          className="waves-effect waves-light indigo lighten-2 btn"
          onClick={this.submitFormulario}
          type="button"
        >
          Salvar
        </button>
      </form>
    );
  }
}
