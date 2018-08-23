import { pizzaReducer } from '../../../src/reducer/pizza.js';

import * as actions from '../../../src/action/pizza-action.js';


describe('reducer', () => {

  it('should fetch all (reducer)', () => {
    let state = pizzaReducer([], actions.fetchAll([]));

    expect(state.length).toBe(0);
  });

  it('should create one (reducer)', () => {

    let pizza = {
      type: 'cheese',
      toppings: 'cheese',
      _id: 1234,
      editing: false,
    };

    let state = pizzaReducer([], actions.addOne(pizza));

    expect(state.length).toBe(1);
    expect(state[0].type).toBe('cheese');
    expect(state[0].toppings).toBe('cheese');
    expect(state[0]._id).toBe(1234);
    expect(state[0].editing).toBe(false);


  });

  it('should create update one (reducer)', () => {

    let pizza = {
      type: 'cheese',
      toppings: 'cheese',
      _id: 1234,
      editing: false,
    };

    let state = pizzaReducer([], actions.addOne(pizza));

    expect(state.length).toBe(1);
  
    let newPizza = {
      type: 'vegetarian',
      toppings: 'olives, peppers, mushrooms',
      _id: 1234,
      editing: false,
    };
    state = pizzaReducer(state, actions.updateOne(newPizza));

    expect(state.length).toBe(1);
    expect(state[0].type).toBe('vegetarian');
    expect(state[0].toppings).toBe(newPizza.toppings);
    expect(state[0]._id).toBe(1234);
    expect(state[0].editing).toBe(false);
  });

  it('should delete one (reducer)', () => {

    let pizza = {
      type: 'cheese',
      toppings: 'cheese',
      _id: 1234,
      editing: false,
    };

    let state = pizzaReducer([], actions.addOne(pizza));

    expect(state.length).toBe(1);


    state = pizzaReducer(state, actions.deleteOne(pizza));

    expect(state.length).toBe(0);

  });

  it('should change editing to true (reducer)', () => {

    let pizza = {
      type: 'cheese',
      toppings: 'cheese',
      _id: 1234,
      editing: false,
    };

    let state = pizzaReducer([], actions.addOne(pizza));

    expect(state[0].editing).toBeFalsy;


    state = pizzaReducer(state, actions.changeEdit(pizza));

    expect(state[0].editing).toBeTruthy;

  });
});
