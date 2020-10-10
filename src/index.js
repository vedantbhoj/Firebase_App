import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./reduxStrore/index";
import firebase from "./Firebase/index";

let hasAppRendered = false;

const Application = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

const renderApp = () => {
  if (!hasAppRendered) {
    ReactDOM.render(Application, document.getElementById("root"));
    hasAppRendered = true;
  }
};

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    store.dispatch({ type: "SIGNIN", payload: user });
    console.log(user)
  } else {
    // No user is signed in.
    store.dispatch({ type: "SIGNOUT" });
  }
  renderApp();
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
