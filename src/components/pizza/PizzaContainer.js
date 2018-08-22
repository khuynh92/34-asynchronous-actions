import React, { Component, Fragment } from 'react';
import PizzaItem from './pizza-item/PizzaItem';
import { connect } from 'react-redux';

import { fetchAllThunk } from '../../action/pizza-action.js';

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
        <ul>
          {this.props.pizzas.map(pizza => <PizzaItem key={pizza._id} pizza={pizza} />)}
        </ul>
      </Fragment>
    );
  }
}

const matchStateToProps = state => ({ pizzas: state.pizzas });

const mapDispatchToProps = dispatch => ({
  fetchAllThunk: () => dispatch(fetchAllThunk()),
});
export default connect(matchStateToProps, mapDispatchToProps)(PizzaContainer);