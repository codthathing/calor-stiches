import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidemenu = () => {

  const [currentSideMenu, setCurrentSideMenu] = useState([
    { id: 0, menuText: "home", link: "/", path: false, borderStyle: { borderBottom: "" } },
    { id: 1, menuText: "shop", link: "", path: "/shop", borderStyle: { borderBottom: "" } },
    { id: 2, menuText: "products", link: "", path: "/product", borderStyle: { borderBottom: "" } },
    { id: 3, menuText: "pages", link: "", path: "/page", borderStyle: { borderBottom: "" } },
    { id: 4, menuText: "blog", link: "", path: "/blog", borderStyle: { borderBottom: "" } },
    { id: 5, menuText: "features", link: "", path: "/feature", borderStyle: { borderBottom: "" } },
  ])


  useEffect(() => {
    const pathLink = window.location.pathname;
    const presentPath = currentSideMenu.map((path) => {
      if (!path.path && pathLink == "/") {
        return { ...path, borderStyle: { borderBottom: "1px solid black" } };
      } else if (pathLink.includes(path.path)) {
        return { ...path, borderStyle: { borderBottom: "1px solid black" } }
      } else {
        return path;
      }
    });
    setCurrentSideMenu(presentPath);
  }, [])

  return (
    <>
      <ul id="sidemenuList">
        {currentSideMenu.map(({ id, link, menuText, borderStyle }) => {
          return (
            <Link to={link} className="sidemenuLink">
              <li key={id} className="sideMenuItem" style={borderStyle}>
                <p className="sideMenuText">{menuText}</p>
                <i className="fa-solid fa-chevron-down sideMenuIcon"></i>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default Sidemenu;