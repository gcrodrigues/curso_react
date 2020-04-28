import React, { Component } from "react";

import Header from "./Header";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container mb-10">
          <h1>Página não encontrada.</h1>
        </div>
      </>
    );
  }
}
