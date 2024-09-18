import React, { useState } from "react";
import nigeria_flag from "../logo/nigeria-flag.png";
import america_flag from "../logo/america-flag.png";

const CurLangTemplate = () => {
  const [currency, setCurrency] = useState(false);
  const [curDetails, setCurDetails] = useState({
    preNation: "Nigeria (Naira #)",
    preCur: "(Naira #)",
    curFlag: america_flag,
    curName: "USD $"
  });

  const ChangeCurrency = () => {
    if (curDetails.preCur == "(Naira #)") {
      setCurDetails({
        preNation: "United states (USD $)",
        preCur: "(USD $)",
        curFlag: nigeria_flag,
        curName: "Naira #"
      });
    } else if (curDetails.preCur == "(USD $)") {
      setCurDetails({
        preNation: "Nigeria (Naira #)",
        preCur: "(Naira #)",
        curFlag: america_flag,
        curName: "USD $"
      });
    }
    setCurrency(false);
  }

  return (
    <div id="curLangInnerDiv">
      <p id="curLangInerText">{curDetails.preNation}</p>
      <main
        onMouseEnter={() => setCurrency(true)}
        onMouseLeave={() => setCurrency(false)}
        className="curLangMain">
        <p className="curLangText">{curDetails.preCur}</p>
        <i className="fa-solid fa-chevron-down curLangIcon" style={{ color: "#ffffff" }}></i>
      </main>
      {currency &&
        <div
          onMouseEnter={() => setCurrency(true)}
          onMouseLeave={() => setCurrency(false)}
          onClick={ChangeCurrency}
          id="displayCurrency">
          <img src={curDetails.curFlag} alt="Nigeria flag" id="curFlag" />
          <p id="curText">{curDetails.curName}</p>
        </div>
      }
    </div>
  );
}

export default CurLangTemplate;