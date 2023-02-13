import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CategoryProvide from "./components/context/categoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CategoryProvide>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CategoryProvide>
  </React.StrictMode>
);
