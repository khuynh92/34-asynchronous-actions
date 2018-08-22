import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../lib/store.js';

import PizzaContainer from './pizza/PizzaContainer.js';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PizzaContainer />
      </Provider>
    );
  }
}


