import { useContext, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ToggleRegister } from "../../contextpage";
import FrontText from "./innerpages/frontText";
import ProductTemplate from "./innerpages/products_func/productTemplate";
import CollectionTemplate from "./innerpages/collection";
import LatestLinks from "./innerpages/latestlinks";
import PageArticle from "./innerpages/article";
import videoPoster from "../../../asset/images-icons/youtube-poster/video_poster.jpeg";
import ServiceTemplate from "./innerpages/service";
import ProductView from "../otherpages/innerpages/productview";

const FrontPage = () => {

  const { setToggleSideMenu, setNavbar, products, latestItems } = useContext(ToggleRegister);
  const [ showVideoPlayer, setShowVideoPlayer ] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setToggleSideMenu(false);
    setNavbar(false);
  }, [setNavbar, setToggleSideMenu]);

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
          <Link style={{ textDecoration: "none", color: "#222222" }} to="/product">
            <p id="productButtonText" className="paragraphStyles">VIEW ALL</p>
          </Link>
        </button>
      </section>

      <Routes>
        <Route path="/:productName" element={<ProductView />}></Route>
      </Routes>

      <section id="collectionSection">
        <CollectionTemplate></CollectionTemplate>
      </section>

      <section id="latestSection">
        <ul id="navLatest">
          <LatestLinks></LatestLinks>
        </ul>
        <section id="latestSections">
          {latestItems.map((details) => {
            return <ProductTemplate key={details.id} {...details}></ProductTemplate>
          })}
        </section>
        <button id="latestButton" className="viewButton">
          <Link style={{ textDecoration: "none", color: "#222222" }} to="/product/latest-items">
            <p id="latestButtonText" className="paragraphStyles">VIEW ALL</p>
          </Link>
        </button>
      </section>

      <PageArticle></PageArticle>

      <div id="videoDiv" 
        onMouseEnter={() => setShowVideoPlayer(true)}
        onMouseLeave={() => setShowVideoPlayer(false)}>
        <video id="videoMain" poster={videoPoster} alt="products_adverts"></video>
        <aside id="videoAside">
          {showVideoPlayer ? <p id="videoPlay" className="paragraphStyles">PLAY VIDEO</p> : <i className="fa-solid fa-chevron-right" id="videoPlayer"></i>}
        </aside>
      </div>

      <section id="serviceSection">
        <ServiceTemplate></ServiceTemplate>
      </section>
    </>
  );
}

export default FrontPage;