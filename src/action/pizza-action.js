import superagent from 'superagent';

export const fetchAll = (pizzas) => ({
  type: 'FETCH_ALL',
  payload: pizzas,
});


export const fetchAllThunk = () => {
  return dispatch => {
    superagent.get('https://khoa-14-relationship-modeling.herokuapp.com/api/v1/pizza')
      .then(pizzas => {
        return JSON.parse(pizzas.text);
      })
      .then(pizzas => {
        dispatch(fetchAll(pizzas));
      })
      .catch(err => {
        console.log(err);
      });
  };
};