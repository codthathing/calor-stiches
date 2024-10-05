import React, { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { productDetails } from "./products";
import { ToggleRegister } from "../../contextpage";
import PageLinkTemplate from "../../pagelinks";
import Handle from "../handleIcons/handle";

const ProductReview = () => {

  const [name, setName] = useState("");
  const { productName } = useParams();
  const { pathname } = useLocation();
  const { setSearch, setNavbar, setCart, setToggleSideMenu } = useContext(ToggleRegister);

  useEffect(() => {
    const presentProduct = productDetails.find((product) => product.productName === productName);
    setName(presentProduct.productName);
    window.scrollTo(0, 0);
    setSearch(false);
    setToggleSideMenu(false);
    setNavbar(true);
    setCart(false);
  }, [name, pathname])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "/product", linkText: "Product", linkArrow: true },
    { id: 2, linkDirect: "", linkText: name, linkArrow: false }
  ]

  return (
    <div className="otherPages" id="productReview">
      <ul className="productList">
        {pageLinkDetails.map((details) => {
          return <PageLinkTemplate {...details}></PageLinkTemplate>
        })}
      </ul>
      <main id="productReviewMain">
        <picture id="productReviewImages">
          <ul id="productSideImages"></ul>
          <img src="" alt="" id="productMainImage" />
        </picture>
        <div id="productDetailsDiv">
          <p id="productDetailName"></p>
          <var id="productDetailPrice"></var>
          <p id="productDetailReview"></p>
          <p id="productDetailDesc"></p>
          <div id="productDetailPrep">
            <p id="productPrepText"></p>
            <div id="productPrepDiv"></div>
          </div>
        </div>
        <div id="productColor">
          <p id="productColorText"></p>
          <main id="productColorMain">
            <div className="productColorMainDiv"></div>
            <p className="productColorMainText"></p>
          </main>
        </div>
        <div id="productSize">
          <div id="productSizeDiv">
            <p id="productSizeDetail" className="productSizeText"></p>
            <p id="productSizeChart" className="productSizeText"></p>
          </div>
          <main id="productSizeMain">
            <p className="productSizeMainText"></p>
          </main>
        </div>
        <div id="productFunctions">
          <div id="productToCart">
            <div id="productToCartDiv">
              <div className="productToCartInnerDiv"></div>
              <div className="productToCartInnerDiv"></div>
              <div className="productToCartInnerDiv"></div>
            </div>
            <button type="button" id="productToCartButton"></button>
          </div>
          <div id="productToWishlist">
            <i id="productWishlistIcon"></i>
            <p id="productWishlistText"></p>
          </div>
        </div>
        <div id="productDelivery">
          <div id="productDeliveryInfo">
            <img src="" alt="" className="preoductDeliveryInfoIcons" />
            <p className="productDeliveryInfoTexts"></p>
          </div>
          <div id="productDeliveryPayment">
            <p id="productDeliveryPaymentText"></p>
            <div id="productDeliveryPaymentDiv">
              <img src="" alt="" className="productDeliveryPaymentImages" />
            </div>
          </div>
          <div id="productDeliveryDetails">
            <p className="productDeliveryDetailsTexts"></p>
          </div>
          <div id="poductHandles">
            <Handle></Handle>
          </div>
        </div>
        <div id="productAbout">
          <main id="productAboutMain">
            <p className="productAboutMainTexts"></p>
          </main>
          <p id="productAboutText"></p>
          <div id="productAboutDiv">
            <div className="productAboutInnerDiv">
              <img src="" alt="" className="productAboutInnerImage" />
              <p className="productAboutInnerText"></p>
            </div>
          </div>
        </div>
      </main>
      <div id="productRelatedDvi">
        <p id="productRelatedText"></p>
        <main id="productRelatedText"></main>
      </div>
    </div>
  );
}

export default ProductReview;