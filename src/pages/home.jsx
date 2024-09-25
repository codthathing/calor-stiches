import React, { useContext } from "react";
import CurLangTemplate from "../pages/extensions/currency/currencylang";
import PageLayout from "./pagelayout";
import Handle from "./extensions/handleIcons/handle";
import ContactTemplate from "./extensions/contact";
import Payment from "./extensions/paymentIcons/payment";
import LinkMainTemplate from "./extensions/linktest";
import Sidemenu from "./extensions/sidemenu";
import RegisterLayout from "./register_page/registerlayout";
import { ToggleRegister } from "./contextpage";
import { useHead } from "./usehead";
import Search from "./search";
import WishList from "./wishlist_page/wishlist";
import Cart from "./cart_page/cart";


const Home = () => {

  const { register, setRegister, search, setSearch, wishList, setWishList, cart, setCart, toggleSideMenu, setToggleSideMenu } = useContext(ToggleRegister);
  const { header, navbar } = useHead();

  return (
    <>
      <header id="header" className={header ? "scrollTop" : ""}>
        <div id="curLangHead">
          <p id="curLangOuterText">Delivery time 2-3 working days</p>
          <CurLangTemplate></CurLangTemplate>
        </div>
        <nav id="headerNav">
          {toggleSideMenu &&
            <aside id="sideMenuAside">
              <Sidemenu></Sidemenu>
            </aside>
          }
          <div id="logoIcon" className={navbar ? "scrollDownNavbar" : ""}>
            <h1 id="logo">
              <blockquote abbr="Calor Stiches" id="logoMob">CS</blockquote>
              <span id="logoDesk">Calor Stiches</span>
            </h1>
            <ul id="navIcons">
              <li className="icons"><p onClick={() => setRegister(true)} id="loginText">LOGIN</p></li>
              <li className="icons">
                <i id="userIcon" className="fa-regular fa-user iconTag" onClick={() => setRegister(true)}></i>
                {register && <RegisterLayout></RegisterLayout>}
              </li>
              <li className="icons">
                <i className="fa-solid fa-magnifying-glass iconTag" onClick={() => setSearch(true)}></i>
                {search && <Search></Search>}
              </li>
              <li className="icons">
                <i className="fa-regular fa-heart iconTag" onClick={() => setWishList(true)}></i>
                {wishList && <WishList></WishList>}
              </li>
              <li className="icons">
                <i className="fa-solid fa-bag-shopping iconTag" onClick={() => setCart(true)}></i>
                {cart && <Cart></Cart>}
              </li>
              <li className="icons">
                <i className={toggleSideMenu ? "fa-solid fa-xmark iconTag" : "fa-solid fa-bars iconTag"} onClick={() => setToggleSideMenu(!toggleSideMenu)}></i>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <PageLayout></PageLayout>

      <section id="newsSection">
        <ContactTemplate></ContactTemplate>
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
          <div>
            <article id="storeArticle">
              <h1 id="storeHead">About Our Store</h1>
              <p id="storeParagraph">Our values in Chani are upheld within high quality tailoring, fabric insight and innovative design alongside the desire for innovative and the natural beauty with versatility and top of mind allowing for the investment pieces.</p>
            </article>
            <aside id="payAside">
              <Payment></Payment>
            </aside>
          </div>
          <div id="linksDiv">
            <LinkMainTemplate></LinkMainTemplate>
          </div>
        </section>
        <section id="lastPage">
          <div id="curencyLangDiv">
            <p id="currencyLangInerText">United States (USD $)</p>
            <CurLangTemplate></CurLangTemplate>
          </div>
          <p id="copyText">©2024 Pheezy, All Rights Reserved. With Love by CalorStiches</p>
        </section>
      </footer>
    </>
  );
}

export default Home;