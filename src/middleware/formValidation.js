
export default () => next => action => {
  console.log(action);
  if(action.type === 'HANDLE_ERROR') {
    console.error(action.payload);
    if(action.payload.includes('`type` is required') && action.payload.includes('`toppings` is required')) {
      alert('Fill out Name and Toppings');
    } else  if (action.payload.includes('`type` is required')) {
      alert('Please give the pizza a name');
    } else if  (action.payload.includes('`toppings` is required')) {
      alert('Please make some toppings');
    } else {
      return next(action);
    }
  } else {
    next(action);
  }
};