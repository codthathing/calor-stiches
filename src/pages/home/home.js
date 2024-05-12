import React from "react";

const Home = () => {
  return (
    <main>
      <header id="header">
        <nav id="logoIcon">
          <h1 id="logo">Calor Stiches</h1>
          <ul id="navIcons">
            <li className="icons"><i className="fa-regular fa-user iconTag"></i></li>
            <li className="icons"><i className="fa-solid fa-magnifying-glass iconTag"></i></li>
            <li className="icons"><i className="fa-regular fa-heart iconTag"></i></li>
            <li className="icons"></li>
            <li className="icons"><i className="fa-solid fa-bars iconTag"></i></li>
          </ul>
        </nav>
      </header>
    </main>
  );
}

export default Home;