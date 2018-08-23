import React, { Component, Fragment } from 'react';
import PizzaItem from './pizza-item/PizzaItem';
import { connect } from 'react-redux';

import { fetchAllThunk, addOneThunk, updateOneThunk, changeEdit, deleteOneThunk, handleCancel} from '../../action/pizza-action.js';

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
        <h2>Make a Pizza</h2>
        <PizzaForm formId="create-form" onComplete={this.props.addOneThunk}/>
        <ul>
          {this.props.pizzas.map(pizza => <PizzaItem key={pizza._id} pizza={pizza} onComplete={this.props.updateOneThunk} changeEdit={this.props.changeEdit} deleteOne={this.props.deleteOneThunk} handleCancel={this.props.handleCancel}/>)}
        </ul>
        {this.props.pizzas.length > 0 && <p id="updateText">* To update a pizza, double click on the pizza name you want to update *</p>}
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
  handleCancel: pizza => dispatch(handleCancel(pizza)),
});

export default connect(matchStateToProps, mapDispatchToProps)(PizzaContainer);