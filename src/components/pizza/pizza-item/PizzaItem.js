import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import PizzaForm from '../pizza-form/PizzaForm.js';

export default class PizzaItem extends Component {


  render() {
    return (
      <Fragment>
        <button onClick={()=> this.props.deleteOne(this.props.pizza)}>x</button>
        <Link to={`/pizza/${this.props.pizza._id}`} onDoubleClick={() => this.props.changeEdit(this.props.pizza)}>{this.props.pizza.type}</Link>
        <br />
        <Route path={`/pizza/${this.props.pizza._id}`} component={(props) => <PizzaContent {...props} editing={this.props.pizza.editing} pizza={this.props.pizza} onComplete={this.props.onComplete} />} />
      </Fragment>
    );
  }
}

const PizzaContent = (props) => {
  return (
    <Fragment>
      {props.editing ? <PizzaForm pizza={props.pizza} onComplete={props.onComplete} /> : <p>{props.pizza.toppings}</p>}
      <br />
    </Fragment>
  );
};