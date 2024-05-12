import React from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import Main from "./pages/main/pages";


const Default = () => {

  return (
    <>
      <Main></Main>
    </>
  );
}

ReactDOM.render(<Default/>, document.getElementById("root"));