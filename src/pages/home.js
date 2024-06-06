import React, { useState } from "react";
import FrontText from "./extensions/frontText";
import ProductTemplate from "./extensions/productTemplate";
import { productDetails } from "./extensions/products/products";
import CollectionTemplate from "./extensions/collection/collectionTemplate";
import PageArticle from "./extensions/article";
import DisplayPage from "./extensions/display/display";
import videoPoster from "./youtube_poster/video_poster.jpeg";
import ServiceTemplate from "./extensions/service";
import PostTemplate from "./extensions/post/post";
import { hotitems } from "./extensions/hotItems/hotitems";
import { newarrivals } from "./extensions/newArrivals/newarrivals";
import { onsales } from "./extensions/onSale/onsale";
import Handle from "./extensions/handleIcons/handle";
import ContactTemplate from "./extensions/contact";
import Payment from "./extensions/paymentIcons/payment";
import LinkMainTemplate from "./extensions/linktest";
import Sidemenu from "./extensions/sidemenu/sidemenu";


const Home = () => {

  const [latestItems, setLatestItems] = useState(hotitems)
  const changeLatestItem = (newitem) => {
    setLatestItems(newitem)
  }

  return (
    <main>
      <section id="frontPage">
        <header id="header">
          <div id="curLangHead">
            <p id="curLangOuterText">Delivery time 2-3 working days</p>
            <div id="curLangInnerDiv">
              <p id="curLangInerText">United States(USD $)</p>
              <main className="curLangMain">
                <p className="curLangText">(USD $)</p>
                <i className="fa-solid fa-chevron-down curLangIcon" style={{ color: "#ffffff" }}></i>
              </main>
              <main className="curLangMain">
                <p className="curLangText">English</p>
                <i className="fa-solid fa-chevron-down curLangIcon" style={{ color: "#ffffff" }}></i>
              </main>
            </div>
          </div>
          <nav id="headerNav">
            <aside id="sideMenuAside">
              <Sidemenu></Sidemenu>
            </aside>
            <div id="logoIcon">
              <h1 id="logo">Calor Stiches</h1>
              <ul id="navIcons">
                <li className="icons"><i className="fa-regular fa-user iconTag"></i></li>
                <li className="icons"><i className="fa-solid fa-magnifying-glass iconTag"></i></li>
                <li className="icons"><i className="fa-regular fa-heart iconTag"></i></li>
                <li className="icons"><i class="fa-solid fa-bag-shopping iconTag"></i></li>
                <li className="icons"><i className="fa-solid fa-bars iconTag"></i></li>
              </ul>
            </div>
          </nav>
        </header>

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
          <li className="latestItem" onMouseOver={() => changeLatestItem(hotitems)}>HOT ITEMS</li>
          <li className="latestItem" onMouseOver={() => changeLatestItem(newarrivals)}>NEW ARRIVALS</li>
          <li className="latestItem" onMouseOver={() => changeLatestItem(onsales)} style={{ color: '#FF421D', borderBottomColor: '#FF421D' }}>ON SALE</li>
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

      <section id="newsSection"> 
        <div id="contactDiv">
          <ContactTemplate></ContactTemplate>
        </div>
        <div id="subscribeDiv">
          <h1 id="subscribeHead">Subscribe To Our Newsletter</h1>
          <form id="subscribeForm">
            <input type="text" id="subscribeInput" title="Please fill out this field" placeholder="Your Email Address" />
            <button type="submit" id="subscribeButton">SUBSCRIBE</button>
          </form>
          <p id="subscribeParagraph">By subscribing, you accept the Privacy Policy</p>
          <aside id="newsAside">
            <Handle></Handle>
          </aside>
        </div>
      </section>

      <footer id="footer">
        <section id="storeSection">
          <article id="storeArticle">
            <h1 id="storeHead">About Our Store</h1>
            <p id="storeParagraph">Our values in Chani are upheld within high quality tailoring, fabric insight and innovative design alongside the desire for innovative and the natural beauty with versatility and top of mind allowing for the investment pieces.</p>
          </article>
          <aside id="payAside">
            <Payment></Payment>
          </aside>
          <div id="linksDiv">
            <LinkMainTemplate></LinkMainTemplate>
          </div>
        </section>
        <section id="lastPage">
          <div id="curencyLangDiv">
            <main className="curLangMain">
              <p className="curLangText">(USD $)</p>
              <i className="fa-solid fa-chevron-down curLangIcon" style={{ color: "#ffffff" }}></i>
            </main>
            <main className="curLangMain">
              <p className="curLangText">English</p>
              <i className="fa-solid fa-chevron-down curLangIcon" style={{ color: "#ffffff" }}></i>
            </main>
          </div>
          <p id="copyText">©2024 Pheezy, All Rights Reserved. With Love by CalorStiches</p>
        </section>
      </footer>
    </main >
  );
}

export default Home;