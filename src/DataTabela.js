import React from "react";

const DataTabela = (props) => {
  const linhas = props.dados.map((item, index) => (
    <tr key={index}>
      {props.colunas.map((coluna) => (
        <td key={index}>{item[coluna]}</td>
      ))}
    </tr>
  ));

  return (
    <table className="highlight centered">
      <thead>
        <tr>
          <th>{props.titulo}</th>
        </tr>
      </thead>
      <tbody>{linhas}</tbody>
    </table>
  );
};

export default DataTabela;
