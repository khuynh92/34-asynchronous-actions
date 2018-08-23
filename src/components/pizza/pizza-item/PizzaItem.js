import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import PizzaForm from '../pizza-form/PizzaForm.js';

import './PizzaItem.scss';
export default class PizzaItem extends Component {


  render() {
    let editing = this.props.pizza.editing ? 'editing-list' : 'content-list'; 
    return (
      <Fragment>
        <li className={editing}>
          <button id="delete-btn" onClick={() => this.props.deleteOne(this.props.pizza)}>x</button>
          <Link to={`/pizza/${this.props.pizza._id}`} onDoubleClick={() => this.props.changeEdit(this.props.pizza)}>{this.props.pizza.type}</Link>
          <br />
          <Route path={`/pizza/${this.props.pizza._id}`} component={(props) => <PizzaContent {...props} editing={this.props.pizza.editing} pizza={this.props.pizza} onComplete={this.props.onComplete} handleCancel={this.props.handleCancel}/>} />
        </li>
      </Fragment>
    );
  }
}

const PizzaContent = (props) => {
  return (
    <Fragment>
      {props.editing ? <PizzaForm formId="update-form" pizza={props.pizza} onComplete={props.onComplete} /> : <p>{props.pizza.toppings}</p>}
      {props.editing && <button id="cancel-btn" onClick={() => props.handleCancel(props.pizza)}>cancel</button>}
    </Fragment>
  );
};