import React from 'react';

const TableHead = () => {

  return(
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>);
}

const TableBody = props => {
  const linhas = props.autores.map((linha, index) => {
    return (
      <tr key={index}>
        <td>{linha.nome}</td>
        <td>{linha.livro}</td>
        <td>{linha.preco}</td>
        <td><button onClick={() => {props.removeAutor(index)}}>Remover</button></td>
      </tr>
    );
  });

  return (
    <tbody>
      {linhas}
    </tbody>
  );
}

export default class Tabela extends React.Component {

    render(){

      const { autores, removeAutor } = this.props;
      
      return(
        <table>
          <TableHead />
          <TableBody autores = {autores} removeAutor = {removeAutor}/>
        </table>
      );
    }

}

