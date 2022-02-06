import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//default state
var defaultState = 0;

//action types
const ADD_MONEY = "ADD_MONEY";
const WITHDRAW = "WITHDRAW";

//reducers
const balanceReducer = (state = defaultState, action) => {
  console.log("reducer invoked", action);
  switch (action.type)
  {
    case ADD_MONEY:
      return state + action.payload.amount;
    case WITHDRAW:
      return state - action.payload.amount;
    default:
      return state;
  }
};

//store
var store = createStore(balanceReducer, composeWithDevTools());
store.subscribe(() => {
  console.log(store.getState()); //get updated state
});

//dispatch
//dispatch: pass an action to store; it invokes the reducer automatically

store.dispatch({ type: ADD_MONEY,
payload: { amount: 1000 }
}); //1000

store.dispatch({ type: ADD_MONEY, payload: { amount: 450 }}); //1450

store.dispatch({ type: WITHDRAW, payload: { amount: 250 }}); //1200


ReactDOM.render(<App />, document.getElementById("root"));

