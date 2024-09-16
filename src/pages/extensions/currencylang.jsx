import React, { useContext } from "react";
import { ToggleRegister } from "../contextpage";

const CurLangTemplate = () => {
  const curTexts = [
    { id: 0, curLangText: "(USD $)" }
  ]
  const { setCurrency } = useContext(ToggleRegister);

  return (
    <>
      {curTexts.map(({ id, curLangText }) => {
        return (
          <main key={id} onMouseEnter={() => setCurrency(true)} onMouseLeave={() => setCurrency(false)} className="curLangMain">
            <p className="curLangText">{curLangText}</p>
            <i className="fa-solid fa-chevron-down curLangIcon" style={{ color: "#ffffff" }}></i>
          </main>
        );
      })}
    </>
  );
}

export default CurLangTemplate;