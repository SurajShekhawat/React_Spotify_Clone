import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { StateProvider } from "./utils/StateProvider";
import reducer from "./utils/reducer";
import { initialState } from "./utils/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);