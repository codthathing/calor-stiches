import React, { useState } from "react";

const FrontText = () => {
  const [currentDisplay, setCurrentDisplay] = useState("ONE");
  const [initialDetails, setInitialDetails] = useState({
    head: "Inspired By Nature & Crafted With Love",
    disOnePad: "0.75rem",
    disTwoPad: "0"
  });
  if (currentDisplay == "ONE") {
    setTimeout(() => {
      setCurrentDisplay("TWO");
      setInitialDetails({...initialDetails, head: "Outrageous Fashion Always For You", disOnePad: "0", disTwoPad: "0.75rem"});
    }, 2500)
  } else if (currentDisplay == "TWO") {
    setTimeout(() => {
      setCurrentDisplay("ONE");
      setInitialDetails({...initialDetails, head: "Inspired By Nature & Crafted With Love", disOnePad: "0.75rem", disTwoPad: "0"});
    }, 2500)
  };



  return (
    <div id="displayText">
      <p id="disParagraph" className="paragraphStyles">YOU CAN HAVE ANYTHING YOU WANT IF YOU DRESS FOR IT</p>
      <h1 id="disHead" className="headStyles">{initialDetails.head}</h1>
      <button id="shopBtn">SHOP NOW</button>
      <div id="disDiv">
        <span className="disShowing" style={{ paddingRight: initialDetails.disOnePad }}>01</span>
        <span className="disShowing" style={{ paddingRight: initialDetails.disTwoPad }}>02</span>
      </div>
    </div>
  );
}

export default FrontText;