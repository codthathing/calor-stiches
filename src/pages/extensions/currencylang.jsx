import React, { useContext, useState } from "react";
import nigeria_flag from "../logo/nigeria-flag.png";
import america_flag from "../logo/america-flag.png";
import { ToggleRegister } from "../contextpage";
import { ChangeProductDollar, ChangeProductNaira } from "./conversion";

const CurLangTemplate = () => {
  const [currency, setCurrency] = useState(false);
  const [curDetails, setCurDetails] = useState({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
  const { products, setProducts, setCurSymbol } = useContext(ToggleRegister);

  const ChangeCurrency = () => {
    if (curDetails.preCur == "(Naira ₦)") {
      setCurDetails({ preNation: "United states (USD $)", preCur: "(USD $)", curFlag: nigeria_flag, curName: "Naira ₦" });
      setProducts(products.map((details) => ChangeProductDollar(details)));
      setCurSymbol("$");
    } else if (curDetails.preCur == "(USD $)") {
      setCurDetails({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
      setProducts(products.map((details) => ChangeProductNaira(details)));
      setCurSymbol("₦");
    }
    setCurrency(false);
  }

  return (
    <div id="curLangInnerDiv">
      <div onMouseEnter={() => setCurrency(true)} onMouseLeave={() => setCurrency(false)} id="curInnerDiv">
        <p id="curLangInerText">{curDetails.preNation}</p>
        <main className="curLangMain">
          <p className="curLangText">{curDetails.preCur}</p>
          <i className="fa-solid fa-chevron-down curLangIcon" style={{ color: "#ffffff" }}></i>
        </main>
        {currency &&
          <div onMouseEnter={() => setCurrency(true)} onMouseLeave={() => setCurrency(false)} onClick={ChangeCurrency} id="displayCurrency">
            <img src={curDetails.curFlag} alt="Nigeria flag" id="curFlag" />
            <p id="curText">{curDetails.curName}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default CurLangTemplate;