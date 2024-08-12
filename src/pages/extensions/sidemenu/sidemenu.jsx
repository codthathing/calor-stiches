import React, { useState } from "react";

const Sidemenu = () => {

  const [currentSideMenu, setCurrentSideMenu] = useState([
    { id: 0, menuText: "home", borderStyle: { borderBottom: "1px solid black" } },
    { id: 1, menuText: "shop", borderStyle: { borderBottom: "" } },
    { id: 2, menuText: "products", borderStyle: { borderBottom: "" } },
    { id: 3, menuText: "pages", borderStyle: { borderBottom: "" } },
    { id: 4, menuText: "blog", borderStyle: { borderBottom: "" } },
    { id: 5, menuText: "features", borderStyle: { borderBottom: "" } },
  ])

  const changeBorderStyle = (id) => {
    let presentMenu = currentSideMenu.filter(x => x.id == id)
    presentMenu.borderStyle = { borderBottom: "3px solid black" }
    setCurrentSideMenu([...currentSideMenu, presentMenu])
    console.log(currentSideMenu)
    // currentSideMenu.filter(x => x.id == id).map(x => {
    //   setCurrentSideMenu([...currentSideMenu, { id: id, borderStyle: { ...x.borderStyle, borderBottom: "2px solid black" } }])
    // })
  }

  return (
    <>
      <ul id="sidemenuList">
        {currentSideMenu.map(({ id, menuText, borderStyle }) => {
          return (
            <li key={id} className="sideMenuItem" style={borderStyle} onClick={() => changeBorderStyle(id)}>
              <p className="sideMenuText">{menuText}</p>
              <i className="fa-solid fa-chevron-down sideMenuIcon"></i>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Sidemenu;