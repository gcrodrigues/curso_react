import React, { Component } from "react";

import Header from "../../Components/Header/Header";

export default class NotFound extends Component {
  componentDidMount() {
    document.title = 'Sobre | Casa do Código'
  }
  render() {
    return (
      <>
        <Header />
        <div className="container mb-10">
          <h1>Sobre</h1>
        </div>
      </>
    );
  }
}
