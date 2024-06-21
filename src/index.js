import React from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import Home from "./pages/home";
import { OptNavProvider } from "./pages/contextpage";


const Default = () => {

  return (
    <OptNavProvider>
      <Home></Home>
    </OptNavProvider>
  );
}

ReactDOM.render(<Default/>, document.getElementById("root"));