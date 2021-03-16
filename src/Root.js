import React from "react";
import { StoreProvider } from "./redux/Provider";

export const Root = (props) => {
  return (
    <React.StrictMode>
      <StoreProvider>{props.children}</StoreProvider>
    </React.StrictMode>
  );
};
