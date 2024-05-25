import React from "react";
import FrontText from "./frontText";
import ProductTemplate from "./productTemplate";
import { productDetails } from "./products";
import CollectionTemplate from "./collectionTemplate";
import { collections } from "./collections";

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
        <button id="productButton" className="viewButton">
          <p id="productButtonText" className="paragraphStyles">VIEW ALL</p>
        </button>
      </section>

      <section id="collectionSection">
        {collections.map((details) => {
          return <CollectionTemplate key={details.id} {...details}></CollectionTemplate>
        })}
      </section>

      <section id="latestSection">
        <ul id="navLatest">
          <li className="latestItem">HOT ITEMS</li>
          <li className="latestItem">NEW ARRIVALS</li>
          <li className="latestItem">ON SALE</li>
        </ul>
        <section id="latestSections">
          {productDetails.map((details) => {
            return <ProductTemplate key={details.id} {...details}></ProductTemplate>
          })}
        </section>
        <button id="latestButton" className="viewButton">
          <p id="latestButtonText" className="paragraphStyles">VIEW ALL</p>
        </button>
      </section>
    </main>
  );
}

export default Home;