const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment")
    return {
      counter: state.counter + 1,
    };

  if (action === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const couterSubscriber = () => {
  const lastestate = store.getState();
  console.log(lastestate);
};
console.log(store.getState());
store.subscribe(couterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
