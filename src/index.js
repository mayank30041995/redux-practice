import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { createStore } from "redux";

//default state
var defaultState = 0;

//reducers
const balanceReducer = (state = defaultState, action) => {
  console.log("reducer invoked", action);
  switch (action.type)
  {
    case "DEPOSIT":
      return state + 100;
    case "WITHDRAW":
      return state - 100;
    default:
      return state;
  }
};

//store
var store = createStore(balanceReducer);
console.log(store.getState());

//dispatch
store.dispatch({ type: "abc"}); //dispatch: pass an action to store; it invokes the reducer automatically
console.log(store.getState()); //get updated state

store.dispatch({ type: "DEPOSIT"});
console.log(store.getState()); //100

store.dispatch({ type: "DEPOSIT"});
console.log(store.getState()); //200

store.dispatch({ type: "WITHDRAW"});
console.log(store.getState()); //100


ReactDOM.render(<App />, document.getElementById("root"));

