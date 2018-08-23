
let getObj = {
  text: JSON.stringify([{type: 'pepperoni', toppings: 'pepperonis'}]),
};

const post = (path) => {
  post.send = (obj) => {
    console.log(obj);
  };

  return Promise.resolve(getObj);
};


export default {
  get: () => Promise.resolve(getObj),
  post: post,
  send: () => console.log
};

