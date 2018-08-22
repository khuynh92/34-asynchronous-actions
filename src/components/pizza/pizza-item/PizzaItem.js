import React, { Component } from 'react';

export default class PizzaItem extends Component {
  render() {
    return (
      <h2>{this.props.pizza.type}</h2>
    );
  }
}