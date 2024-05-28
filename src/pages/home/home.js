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
import facebook from "./handleIcons/facebook_black.png";
import instagram from "./handleIcons/instagram_white.jpg";
import tiktok from "./handleIcons/tiktok_black.png";
import twitter from "./handleIcons/twi_white.png";


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
          <main className="contactMain">
            <h1 className="contactHead">Contact Us</h1>
            <p className="contactParagraph">Email: akinwumiboluwatife1975@gmail.com</p>
            <p className="contactParagraph">Phone: 09043445618</p>
          </main>
          <main className="contactMain">
            <h1 className="contactHead">Our store</h1>
            <p className="contactParagraph">36 Imam Olorunimbe, Lagos State Nigeria</p>
          </main>
        </div>
        <div id="subscribeDiv">
          <h1 id="subscribeHead">Subscribe To Our Newsletter</h1>
          <form id="subscribeForm">
            <input type="text" id="subscribeInput" title="Please fill out this field" placeholder="Your Email Address"/>
            <button type="submit" id="subscribeButton">SUBSCRIBE</button> 
          </form>
          <p id="subscribeParagraph">By subscribing, you accept the Privacy Policy</p>
          <aside id="newsAside">
            <img src={facebook} alt="facebook_handle" className="newsHandle"/>
            <img src={instagram} alt="instagram_handle" className="newsHandle"/>
            <img src={tiktok} alt="tiktok_handle" className="newsHandle"/>
            <img src={twitter} alt="twitter_handle" className="newsHandle"/>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Home;