import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
