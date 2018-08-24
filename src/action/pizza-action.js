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

export const handleCancel = pizza => {
  return {
    type: 'HANDLE_CANCEL',
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
    return superagent.get(`${process.env.API_URL}/api/v1/pizza`)
      .then(pizzas => {
        return JSON.parse(pizzas.text);
      })
      .then(pizzas => {
        return dispatch(fetchAll(pizzas));
      })
      .catch(err => {
        return handleError(err);
      });
  };
};

export const addOneThunk = (pizza) => {
  return dispatch => {
    return superagent.post(`${process.env.API_URL}/api/v1/pizza`)
      .send(pizza)
      .then(response => {
        return response.body;
      })
      .then(pizza => {
        return dispatch(addOne(pizza));
      })
      .catch(err => {
        console.log(err);
        let errMsg = err.response.body.error;
        if (errMsg.includes('validation failed')) {
          return dispatch(handleError(errMsg));
        }
      });
  };
};

export const updateOneThunk = (pizza) => {
  return dispatch => {
    return superagent.put(`${process.env.API_URL}/api/v1/pizza/${pizza._id}`)
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
    return superagent.delete(`${process.env.API_URL}/api/v1/pizza/${pizza._id}`)
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