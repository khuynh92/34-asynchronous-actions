
const initialState = [];

export const pizzaReducer  = (state = initialState, action) => {

  let { type, payload } = action;
  console.log(type);
  switch (type) {

    case 'FETCH_ALL': return [...state, ...payload];
    default: return state;
  }
};