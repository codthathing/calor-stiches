import React from "react";
import FrontText from "./frontText";
import ProductTemplate from "./productTemplate";
import { productDetails } from "./products";

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

        <FrontText></FrontText>
      </section>

      <section id="productSection">
        <div id="productTopicDiv">
          <p id="productParagraph" className="paragraphStyles">NEW AND EXTRAORDINARY</p>
          <h1 id="productHead" className="headStyles">Featured Products</h1>
        </div>
        <main id="mainProduct">
          {productDetails.map((details) => {
            return <ProductTemplate key={details.id} {...details}></ProductTemplate>
          })}
        </main>
      </section>
    </main>
  );
}

export default Home;