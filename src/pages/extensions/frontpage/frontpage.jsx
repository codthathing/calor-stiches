import React, { useContext, useEffect, useState } from "react";
import { ToggleRegister } from "../../contextpage";
import FrontText from "./frontText";
import ProductTemplate from "../productTemplate";
import { productDetails } from "../products/products";
import CollectionTemplate from "../collection/collectionTemplate";
import PageArticle from "../article";
import DisplayPage from "../display/display";
import videoPoster from "../../youtube_poster/video_poster.jpeg";
import ServiceTemplate from "../service/service";
import { hotitems } from "../hotItems/hotitems";
import { newarrivals } from "../newArrivals/newarrivals";
import { onsales } from "../onSale/onsale";
import PostTemplate from "../post/post";

const FrontPage = () => {

  const [latestItems, setLatestItems] = useState(hotitems);
  const ChangeLatestItem = (newitem) => {
    setLatestItems(newitem);
  }
  const { setToggleSideMenu, setNavbar } = useContext(ToggleRegister);

  useEffect(() => {
    window.scrollTo(0, 0);
    setToggleSideMenu(false);
    setNavbar(false);
  }, [])

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
          {productDetails.map((details) => {
            return <ProductTemplate key={details.id} {...details}></ProductTemplate>
          })}
        </main>
        <button id="productButton" className="viewButton">
          <p id="productButtonText" className="paragraphStyles">VIEW ALL</p>
        </button>
      </section>

      <section id="collectionSection">
        <CollectionTemplate></CollectionTemplate>
      </section>

      <section id="latestSection">
        <ul id="navLatest">
          <li className="latestItem" onMouseOver={() => ChangeLatestItem(hotitems)}>HOT ITEMS</li>
          <li className="latestItem" onMouseOver={() => ChangeLatestItem(newarrivals)}>NEW ARRIVALS</li>
          <li className="latestItem" onMouseOver={() => ChangeLatestItem(onsales)} style={{ color: '#FF421D', borderBottomColor: '#FF421D' }}>ON SALE</li>
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

      <section id="displaySection">
        <DisplayPage></DisplayPage>
      </section>

      <div id="videoDiv">
        <video id="videoMain" poster={videoPoster} alt="products_adverts"></video>
        <aside id="videoAside">
          {false ? <i className="fa-solid fa-chevron-right" id="videoPlayer"></i> : <p id="videoPlay" className="paragraphStyles">PLAY VIDEO</p>}
        </aside>
      </div>

      <section id="serviceSection">
        <ServiceTemplate></ServiceTemplate>
      </section>

      <section id="postSection">
        <div id="postHeadDiv">
          <p id="postParagraph" className="paragraphStyles">FROM THE BLOGS</p>
          <p id="postHead">Check Out Our Latest Posts</p>
        </div>
        <main id="mainPost">
          <PostTemplate></PostTemplate>
        </main>
      </section>
    </>
  );
}

export default FrontPage;