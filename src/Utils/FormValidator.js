import validador from "validator";

export default class FormValidator {
  constructor(validacoes) {
    this.validacoes = validacoes;
  }

  valida(state) {
    let validacao = this.valido();

    this.validacoes.forEach((regra) => {
      const campoValor = state[regra.campo.toString()];
      const args = regra.args || [];
      const metodoValor =
        typeof regra.metodo === "string"
          ? validador[regra.metodo]
          : regra.metodo;

      if (metodoValor(campoValor, ...args) !== regra.validoQuando) {
        validacao[regra.campo] = {
          isInvalid: true,
          mensagem: regra.mensagem,
        };
        return (validacao.isValid = false);
      }
    });
    return validacao;
  }

  valido() {
    const validacao = {};

    this.validacoes.map(
      (regra) => (validacao[regra.campo] = { isInvalid: false, message: "" })
    );

    return { isValid: true, ...validacao };
  }
}
