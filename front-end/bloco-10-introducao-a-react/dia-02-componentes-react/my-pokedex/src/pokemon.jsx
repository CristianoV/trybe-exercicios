import React, { Component } from "react";
import './App.css';

export default class Pokemon extends Component {
  render() {
    return (
      <section>
        <p>{ this.props.nome }</p>
        <p>{ this.props.tipo }</p>
        <p>{ this.props.imc }</p>
        <img src={ this.props.img } alt={ this.props.nome }></img>
      </section>
    );
  }
}
