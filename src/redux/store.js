import {
  applyMiddleware,
  compose,
  createStore as createReduxStore,
} from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createStore = (initialState = {}) =>
  createReduxStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
