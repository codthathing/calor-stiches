import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../src/style.css";
import Home from "./pages/home";
import { OptNavProvider } from "./pages/contextpage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <OptNavProvider>
    <BrowserRouter>
      <StrictMode>
        <Home />
      </StrictMode>
    </BrowserRouter>
  </OptNavProvider>
);