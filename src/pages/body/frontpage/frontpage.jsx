import { useContext, useEffect, useRef, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ToggleRegister } from "../../contextpage";
import advert_video from "../../../asset/videos/advert_video.mp4";
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
  const [showController, setShowController] = useState(true);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [videoPlayControl, setVideoPlayControl] = useState(false);
  const [currentAction, setCurrentAction] = useState(false);
  const [showWidth, setShowWidth] = useState(false);
  const [widthIcon, setWidthIcon] = useState(false);
  const videoContainer = useRef();

  const PlayVideo = () => {
    videoContainer.current.play();
    setShowController(false);
    setCurrentAction(true);
    setShowWidth(true);
    setVideoPlayControl(true);
    setTimeout(() => {
      setVideoPlayControl(false);
    }, 5000)
  }

  const ControllVideo = () => {
    if (currentAction) {
      videoContainer.current.pause();
      setCurrentAction(false);
    } else {
      videoContainer.current.play();
      setShowController(false);
      setCurrentAction(true);
    }
    setShowWidth(true);
    setVideoPlayControl(true);
    setTimeout(() => {
      setVideoPlayControl(false);
    }, 5000)
  }

  useEffect(() => {
    // window.scrollTo(0, 0);
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

      <div id="videoDiv">
        <video id="videoMain" onClick={ControllVideo} style={{ height: `${widthIcon ? "100%" : ""}` }} ref={videoContainer} poster={videoPoster} src={advert_video} alt="products_adverts"></video>
        <div id="videoControllerDiv">
          {showController &&
            <aside id="videoAside" onMouseEnter={() => setShowVideoPlayer(true)} onMouseLeave={() => setShowVideoPlayer(false)}>
              {showVideoPlayer ? <p id="videoPlay" className="paragraphStyles videoCursor" onClick={PlayVideo}>PLAY VIDEO</p> : <i className="fa-solid fa-chevron-right videoPlayer"></i>}
            </aside>
          }
          {videoPlayControl && <i className={`fa-solid ${currentAction ? "fa-pause" : "fa-play"} videoPlayer`}></i>}
        </div>
        {showWidth && <span className="material-symbols-outlined videoWidthIcon" onClick={() => setWidthIcon(!widthIcon)}>{widthIcon ? "fullscreen_exit" : "fullscreen"}</span>}
      </div>

      <section id="serviceSection">
        <ServiceTemplate></ServiceTemplate>
      </section>
    </>
  );
}

export default FrontPage;