import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./router/appRouter";
import { Provider } from "react-redux";
import storeConfig from "./store/store.config";
import httpFactory from "./agnents/http.factory";
import { checkIfUserStillConnected } from "./store/actions/auth.action";

export const store = storeConfig();
export const apiRequestHandler = new httpFactory(store.dispatch);
store.dispatch(checkIfUserStillConnected());

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
