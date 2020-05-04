import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import FormValidator from "../../Utils/FormValidator";
import Toast from "../Toast/Toast";

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
      mensagem: {
        open: false,
        tipo: "",
        text: "",
      },
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

      const erros = camposInvalidos.reduce(
        (texto, campo) => campo.mensagem + texto ,
        ''
      );
      this.setState({
        mensagem: {
          open: true,
          tipo: "error",
          text: erros,
        },
      });
    }
  };

  render() {
    const { nome, livro, preco } = this.state;
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

        <form>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <TextField
                id="nome"
                label="nome"
                name="nome"
                variant="outlined"
                value={nome}
                onChange={this.escutadorDeInput}
              />
            </Grid>

            <Grid item>
              <TextField
                id="livro"
                label="livro"
                name="livro"
                variant="outlined"
                value={livro}
                onChange={this.escutadorDeInput}
              />
            </Grid>

            <Grid item>
              <TextField
                id="preco"
                label="preco"
                name="preco"
                variant="outlined"
                value={preco}
                onChange={this.escutadorDeInput}
              />
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={this.submitFormulario}
                type="button"
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </form>
      </>
    );
  }
}
