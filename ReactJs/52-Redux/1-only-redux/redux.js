const redux = require("redux");

const INTIAL_VALUE = {
  counter: 0,
};

const reducer = (state = INTIAL_VALUE, action) => {
  if (action.type === "INCREAMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const currState = store.getState();
  console.log(currState);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREAMENT" });
