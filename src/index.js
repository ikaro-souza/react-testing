import ReactDOM from "react-dom";
import { App } from "./components/App";
import { Root } from "./Root";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  rootElement
);
