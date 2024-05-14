import React from "react";

const Home = () => {
  return (
    <main>
      <section id="frontPage">
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

        <div id="displayText">
          <p id="disParagraph">YOU CAN HAVE ANYTHING YOU WANT IF YOU DRESS FOR IT</p>
          <h1 id="disHead">Inspired By Nature & Crafted With Love</h1>
          <button id="shopBtn">SHOP NOW</button>
          <div id="disDiv">
            <span className="disShowing" id="disOne">1</span>
            <span className="disShowing" id="disTwo">2</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;