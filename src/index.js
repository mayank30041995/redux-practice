import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

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
var store = createStore(balanceReducer, composeWithDevTools());
store.subscribe( () => {
  console.log(store.getState()); //get updated state
});

//dispatch
store.dispatch({ type: "abc"}); //dispatch: pass an action to store; it invokes the reducer automatically

store.dispatch({ type: "DEPOSIT"});

store.dispatch({ type: "DEPOSIT"});

store.dispatch({ type: "WITHDRAW"});


ReactDOM.render(<App />, document.getElementById("root"));

