import React from "react";

const CurLangTemplate = () => {
  const curTexts = [
    { id: 0, curLangText: "(USD $)" }
  ]

  return (
    <>
      {curTexts.map(({ id, curLangText }) => {
        return (
          <main key={id} className="curLangMain">
            <p className="curLangText">{curLangText}</p>
            <i className="fa-solid fa-chevron-down curLangIcon" style={{ color: "#ffffff" }}></i>
          </main>
        );
      })}
    </>
  );
}

export default CurLangTemplate;