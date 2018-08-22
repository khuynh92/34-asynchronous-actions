import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../lib/store.js';

import PizzaContainer from './pizza/PizzaContainer.js';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Route path='/' component={PizzaContainer} />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
