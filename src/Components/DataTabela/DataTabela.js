import React from "react";

const DataTabela = (props) => {
  const linhas = props.dados.map((item) => (
    <tr key={item.id}>
      {props.colunas.map((coluna) => (
        <td key={`${item.id}${item[coluna]}`}>{item[coluna]}</td>
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
