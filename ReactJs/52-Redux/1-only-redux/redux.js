const redux = require("redux");

const INTIAL_VALUE = {
  counter: 0,
};

const reducer = (state = INTIAL_VALUE, action) => {
  let newstate = state;
  if (action.type === "INCREAMENT") {
    newstate = { counter: state.counter + 1 };
  } else if (action.type === "DECREAMENT") {
    newstate = { counter: state.counter - 1 };
  } else if (action.type === "ADDITION") {
    newstate = { counter: state.counter + action.payload.number };
  }
  return newstate;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const currState = store.getState();
  console.log(currState);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREAMENT" });
store.dispatch({ type: "DECREAMENT" });
store.dispatch({ type: "INCREAMENT" });
store.dispatch({ type: "ADDITION", payload: { number: 7 } });
store.dispatch({ type: "DECREAMENT" });
