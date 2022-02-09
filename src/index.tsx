import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./public/styles/style.scss";
import { ContextGlobalProvider } from "./contexts/context-global";
import { BrowserRouter } from "react-router-dom";

render(
  <React.StrictMode>
    <ContextGlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextGlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
