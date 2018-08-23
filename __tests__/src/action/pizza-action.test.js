import * as actions from '../../../src/action/pizza-action.js';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('superagent');


describe('async actions', () => {

  it('should fetch all (thunk)', () => {

    const store = mockStore([]);

    return store.dispatch(actions.fetchAllThunk()).then(() => {
      expect(store.getActions()[0].type).toBe('FETCH_ALL');
      expect(store.getActions()[0].payload).toBeDefined();

    });
  });

  // it('should add one (thunk)', () => {

  //   const store = mockStore([]);

  //   return store.dispatch(actions.addOneThunk()).then(() => {
  //     console.log(store.getActions());
  //     expect(store.getActions()[0].type).toBe('FETCH_ALL');
  //     expect(store.getActions()[0].payload).toBeDefined();

  //   });
  // });

});