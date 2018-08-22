import React, { Component } from 'react';

export default class PizzaForm extends Component {

  state = {
    type: this.props.pizza && this.props.pizza.type || '',
    toppings: this.props.pizza && this.props.pizza.toppings || '',
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.pizza) {
      let newPizza = { ...this.state, _id: this.props.pizza._id, editing: false };
      this.props.onComplete(newPizza);
    } else {
      this.props.onComplete(this.state);
    }
    this.setState({
      type: '',
      toppings: '',
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.type} name="type" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Toppings:
          <input type="text" value={this.state.toppings} name="toppings" onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" />
      </form>
    );
  }
}