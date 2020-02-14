import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import battleReducer from "./reducers/battle.reducer";
import UIReducer from "./reducers/UI.reducer";
import authReducer from "./reducers/auth.reducer";
import timerReducer from "./reducers/timer.reducer";

const composeEnhacers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      battle: battleReducer,
      UI: UIReducer,
      auth: authReducer,
      Timer: timerReducer
    }),
    composeEnhacers(applyMiddleware(thunk))
  );
  return store;
};
