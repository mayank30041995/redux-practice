import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

//default state
var defaultState = 0;

//reducers
const balanceReducer = (state = defaultState, action) => {
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

ReactDOM.render(<App />, document.getElementById("root"));

