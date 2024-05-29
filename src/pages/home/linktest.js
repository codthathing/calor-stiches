import React from "react";

const LinkMainTemplate = () => {
  const linkMain = [
    { id: 0, linkHead: "Shop", linkTexts: ["DRESSES", "T-SHIRTS", "BLOUSES", "OUTERWEAR", "ACCESSORIES", "KNITWEAR", "PANTS"] },
    { id: 1, linkHead: "Links", linkTexts: ["ABOUT US", "STORE LOCATIONS", "SHIPPING & RETURNS", "SUSTAINABILITY", "HELP & FAQS", "CONTACTS"] },
    { id: 2, linkHead: "Help", linkTexts: ["PRIVACY POLICY", "REFUND POLICY", "ORDER STATUS", "GIFT CARDS", "SIZE GUIDE"] }
  ]

  return (
    <>
      {linkMain.map(({ id, linkHead, linkTexts }) => {
        return (
          <main key={id} className="linkMain">
            <h1 className="linkHead">{linkHead}</h1>
            <nav className="linkNav">
              {linkTexts.map((x) => {
                return <a href="" className="linkText">{x}</a>
              })}
            </nav>
          </main>
        );
      })}
    </>
  );
}

export default LinkMainTemplate;