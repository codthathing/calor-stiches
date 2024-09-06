import React from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import Home from "./pages/home";
import { OptNavProvider } from "./pages/contextpage";
import { BrowserRouter } from "react-router-dom";


const Default = () => {

  return (
    <OptNavProvider>
      <BrowserRouter>
        <Home></Home>
      </BrowserRouter>
    </OptNavProvider>
  );
}

ReactDOM.render(<Default />, document.getElementById("root"));