import React from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import Home from "./pages/home";


const Default = () => {

  return (
    <>
      <Home></Home>
    </>
  );
}

ReactDOM.render(<Default/>, document.getElementById("root"));