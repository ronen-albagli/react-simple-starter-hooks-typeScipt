import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import battleReducer from "./reduceres/battle.reducer";
const composeEnhacers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      battle: battleReducer
    }),
    composeEnhacers(applyMiddleware(thunk))
  );
  return store;
};
