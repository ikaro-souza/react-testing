import React from "react";
import { Provider } from "react-redux";
import { createStore } from "./store";

export const StoreProvider = ({ initialState, children }) => {
  const store = createStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};
