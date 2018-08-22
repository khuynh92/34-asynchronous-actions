
const initialState = [];

export const pizzaReducer  = (state = initialState, action) => {

  let { type, payload } = action;
  switch (type) {

    case 'FETCH_ALL': return [...state, ...payload];

    case 'PIZZA_CREATE': return [...state, payload];

    case 'PIZZA_UPDATE': return state.map(pizza => pizza._id === payload._id ? payload : pizza);

    case 'PIZZA_DELETE': return state.filter(pizza => pizza._id !== payload._id);

    case 'CHANGE_EDIT': return state.map(pizza => pizza._id === payload._id ? {...pizza, editing: true} : {...pizza, editing:false});


    default: return state;
  }
};