import React from "react";
import FrontText from "./frontText";
import ProductTemplate from "./productTemplate";
import { productDetails } from "./products";
import CollectionTemplate from "./collectionTemplate";
import PageArticle from "./article";
import DisplayPage from "./display";
import videoPoster from "./productImages/style.jpg";
import ServiceTemplate from "./service";
import PostTemplate from "./post";
import facebook from "./handleIcons/iconmonstr-facebook-4-240.png";
import instagram from "./handleIcons/iconmonstr-instagram-11-240.png";
import tiktok from "./handleIcons/tiktok_black.png";
import twitter from "./handleIcons/iconmonstr-twitter-4-240.png";
import ContactTemplate from "./contact";
import visa from "./paymentIcons/Visa-Card.webp";
import master_card from "./paymentIcons/Master-Card.webp";
import american_express from "./paymentIcons/American-Express.webp";
import dinner_club from "./paymentIcons/Dinner-Club.webp";
import discover from "./paymentIcons/Discover.webp";
import LinkMainTemplate from "./linktest";


const Home = () => {

  return (
    <main>
      <section id="frontPage">
        <header id="header">
          <div id="curLangHead">
            <main className="curLangMain">
              <p className="curLangText">(USD $)</p>
              <i className="fa-solid fa-chevron-down curLangIcon" style={{ color: "#ffffff" }}></i>
            </main>
            <main className="curLangMain">
              <p className="curLangText">English</p>
              <i className="fa-solid fa-chevron-down curLangIcon" style={{ color: "#ffffff" }}></i>
            </main>
          </div>
          <nav id="logoIcon">
            <h1 id="logo">Calor Stiches</h1>
            <ul id="navIcons">
              <li className="icons"><i className="fa-regular fa-user iconTag"></i></li>
              <li className="icons"><i className="fa-solid fa-magnifying-glass iconTag"></i></li>
              <li className="icons"><i className="fa-regular fa-heart iconTag"></i></li>
              <li className="icons"><i class="fa-solid fa-bag-shopping iconTag"></i></li>
              <li className="icons"><i className="fa-solid fa-bars iconTag"></i></li>
            </ul>
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

      <PageArticle></PageArticle>

      <section id="displaySection">
        <DisplayPage></DisplayPage>
      </section>

      <div id="videoDiv">
        <video id="videoMain" poster={videoPoster} alt="products_adverts"></video>
        <aside id="videoAside">
          {true ? <i className="fa-solid fa-chevron-right" id="videoPlayer"></i> : <p id="videoPlay" className="paragraphStyles">PLAY VIDEO</p>}
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
            <img src={facebook} alt="facebook_handle" className="newsHandle" />
            <img src={instagram} alt="instagram_handle" className="newsHandle" />
            <img src={tiktok} alt="tiktok_handle" className="newsHandle" />
            <img src={twitter} alt="twitter_handle" className="newsHandle" />
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
            <img src={visa} className="payImage" />
            <img src={master_card} className="payImage" />
            <img src={american_express} className="payImage" />
            <img src={dinner_club} className="payImage" />
            <img src={discover} className="payImage" />
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
    </main>
  );
}

export default Home;