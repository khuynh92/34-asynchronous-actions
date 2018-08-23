import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { pizzaReducer as pizzas } from '../reducer/pizza.js';

import logger from '../middleware/logger.js';
import formValidation from '../middleware/formValidation.js';

const appReducer = combineReducers({
  pizzas,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnhancers(applyMiddleware(formValidation, thunk, logger,)));

