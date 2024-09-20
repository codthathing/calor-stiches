import React, { useContext, useEffect, useState } from "react";
import { ToggleRegister } from "../../contextpage";
import FrontText from "./frontText";
import ProductTemplate from "../productTemplate";
import PageArticle from "../article";
import videoPoster from "../../youtube_poster/video_poster.jpeg";
import ServiceTemplate from "../service/service";

const FrontPage = () => {

  const { setToggleSideMenu, setNavbar, products, hotItems, newArrivals, onSales } = useContext(ToggleRegister);
  const [latestItems, setLatestItems] = useState(hotItems);
  const ChangeLatestItem = (newitem) => {
    setLatestItems(newitem);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setToggleSideMenu(false);
    setNavbar(false);
  }, []);

  return (
    <>
      <section id="frontPage">
        <FrontText></FrontText>
      </section>

      <section id="productSection">
        <div id="productTopicDiv">
          <p id="productParagraph" className="paragraphStyles">NEW AND EXTRAORDINARY</p>
          <h1 id="productHead">Featured Products</h1>
        </div>
        <main id="mainProduct">
          {products.map((details) => {
            return <ProductTemplate key={details.id} {...details}></ProductTemplate>
          })}
        </main>
        <button id="productButton" className="viewButton">
          <p id="productButtonText" className="paragraphStyles">VIEW ALL</p>
        </button>
      </section>

      <section id="latestSection">
        <ul id="navLatest">
          <li className="latestItem" onMouseOver={() => ChangeLatestItem(hotItems)}>HOT ITEMS</li>
          <li className="latestItem" onMouseOver={() => ChangeLatestItem(newArrivals)}>NEW ARRIVALS</li>
          <li className="latestItem" onMouseOver={() => ChangeLatestItem(onSales)} style={{ color: '#FF421D', borderBottomColor: '#FF421D' }}>ON SALE</li>
        </ul>
        <section id="latestSections">
          {latestItems.map((details) => {
            return <ProductTemplate key={details.id} {...details}></ProductTemplate>
          })}
        </section>
        <button id="latestButton" className="viewButton">
          <p id="latestButtonText" className="paragraphStyles">VIEW ALL</p>
        </button>
      </section>

      <PageArticle></PageArticle>

      <div id="videoDiv">
        <video id="videoMain" poster={videoPoster} alt="products_adverts"></video>
        <aside id="videoAside">
          {false ? <i className="fa-solid fa-chevron-right" id="videoPlayer"></i> : <p id="videoPlay" className="paragraphStyles">PLAY VIDEO</p>}
        </aside>
      </div>

      <section id="serviceSection">
        <ServiceTemplate></ServiceTemplate>
      </section>
    </>
  );
}

export default FrontPage;