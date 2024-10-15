import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style.css";
import Home from "./pages/home";
import { OptNavProvider } from "./pages/contextpage";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <OptNavProvider>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </OptNavProvider>
);