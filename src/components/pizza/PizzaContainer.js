import React, { Component, Fragment } from 'react';
import PizzaItem from './pizza-item/PizzaItem';
import { connect } from 'react-redux';

import { fetchAllThunk, addOneThunk, updateOneThunk, changeEdit, deleteOneThunk } from '../../action/pizza-action.js';

import PizzaForm from './pizza-form/PizzaForm.js';

class PizzaContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllThunk();
  }

  render() {
    return (
      <Fragment>
        <h2>pizza Container</h2>
        <PizzaForm onComplete={this.props.addOneThunk}/>
        <ul>
          {this.props.pizzas.map(pizza => <PizzaItem key={pizza._id} pizza={pizza} onComplete={this.props.updateOneThunk} changeEdit={this.props.changeEdit} deleteOne={this.props.deleteOneThunk}/>)}
        </ul>
      </Fragment>
    );
  }
}

const matchStateToProps = state => ({ pizzas: state.pizzas });

const mapDispatchToProps = dispatch => ({
  fetchAllThunk: () => dispatch(fetchAllThunk()),
  addOneThunk: pizza => dispatch(addOneThunk(pizza)),
  updateOneThunk: pizza => dispatch(updateOneThunk(pizza)),
  changeEdit: pizza => dispatch(changeEdit(pizza)),
  deleteOneThunk: pizza => dispatch(deleteOneThunk(pizza)),

});
export default connect(matchStateToProps, mapDispatchToProps)(PizzaContainer);