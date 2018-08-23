'use strict';

import Pizza from '../src/models/pizza.js';
import Meal from '../src/models/meal.js';

export default (dir) => {
  const notMongo = {
    find: () => Promise.resolve([]),
    findById: () => Promise.resolve({}),
    save: data => {
      console.log('hiho');
      Promise.resolve(data);
    },
    findByIdAndDelete: () => Promise.resolve({}),
    findByIdAndUpdate: () => Promise.resolve({}),
  };

  if (typeof dir !== 'string') {return {};}
  return {
    'foo': {default: notMongo},
    'pizza': {default: Pizza},
    'meal': {default: Meal},
  };
};