import superagent from 'superagent';

//action creators
export const fetchAll = (pizzas) => ({
  type: 'FETCH_ALL',
  payload: pizzas,
});

export const addOne = (pizza) => ({
  type: 'PIZZA_CREATE',
  payload: pizza,
});

export const updateOne = (pizza) => ({
  type: 'PIZZA_UPDATE',
  payload: pizza,
});

export const deleteOne = pizza => {
  return {
    type: 'PIZZA_DELETE',
    payload: pizza,
  };
};

export const changeEdit = pizza => {
  return {
    type: 'CHANGE_EDIT',
    payload: pizza,
  };
};

//error handler
export const handleError = error => {
  return {
    type: 'HANDLE_ERROR',
    payload: error,
  };
};

//thunk
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
        handleError(err);
      });
  };
};

export const addOneThunk = (pizza) => {
  return dispatch => {
    return superagent.post('https://khoa-14-relationship-modeling.herokuapp.com/api/v1/pizza')
      .send(pizza)
      .then(response => {
        return response.body;
      })
      .then(pizza => {
        dispatch(addOne(pizza));
      })
      .catch(err => {
        let errMsg = err.response.body.error;
        if (errMsg.includes('validation failed')) {
          dispatch(handleError(errMsg));
        }
      });
  };
};

export const updateOneThunk = (pizza) => {
  return dispatch => {
    superagent.put(`https://khoa-14-relationship-modeling.herokuapp.com/api/v1/pizza/${pizza._id}`)
      .send(pizza)
      .then(response => {
        return response.body;
      })
      .then(pizza => {
        dispatch(updateOne(pizza));
      })
      .catch(err => {
        handleError(err);
      });
  };
};

export const deleteOneThunk = (pizza) => {
  return dispatch => {
    superagent.delete(`https://khoa-14-relationship-modeling.herokuapp.com/api/v1/pizza/${pizza._id}`)
      .then(response => {
        return response.text;
      })
      .then(() => {
        dispatch(deleteOne(pizza));
      })
      .catch(err => {
        handleError(err);
      });
  };
};