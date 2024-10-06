import React, { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { productDetails } from "./products";
import { ToggleRegister } from "../../contextpage";
import PageLinkTemplate from "../../pagelinks";
import Handle from "../handleIcons/handle";
import productImage from "../products/productImages/design_eight.jpeg";

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
          <ul id="productSideImages">
            <li className="productSizeList"><img src={productImage} alt="" className="productSizeImage" /></li>
            <li className="productSizeList"><img src={productImage} alt="" className="productSizeImage" /></li>
            <li className="productSizeList"><img src={productImage} alt="" className="productSizeImage" /></li>
            <li className="productSizeList"><img src={productImage} alt="" className="productSizeImage" /></li>
            <li className="productSizeList"><img src={productImage} alt="" className="productSizeImage" /></li>
          </ul>
          <div id="productMainImageDiv">
            <img src={productImage} alt="" id="productMainImage" />
          </div>
        </picture>
        <div id="productDetailsDiv">
          <p id="productDetailName">{name}</p>
          <span id="productDetailPrice">$85.00</span>
          <p id="productDetailReview">(1 customer review / Add review)</p>
          <p id="productDetailDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!</p>
        </div>
        <div id="productPrep">
          <p id="productPrepText">Stock: In stock, ready to be shipped</p>
          <div id="productPrepDiv"></div>
        </div>
        <div id="productColor">
          <p id="productColorText">color Green</p>
          <main id="productColorMain">
            <div className="productColorMainDiv"></div>
            <p className="productColorMainText">Green</p>
          </main>
        </div>
        <div id="productSize">
          <div id="productSizeDiv">
            <p id="productSizeDetail" className="productSizeText">Size L</p>
            <p id="productSizeChart" className="productSizeText">SIZE CHARTS</p>
          </div>
          <main id="productSizeMain">
            <p className="productSizeMainText">L</p>
          </main>
        </div>
        <div id="productFunctions">
          <div id="productToCart">
            <div id="productToCartDiv">
              <div className="productToCartInnerDiv">1</div>
              <div className="productToCartInnerDiv">+</div>
              <div className="productToCartInnerDiv">-</div>
            </div>
            <button type="button" id="productToCartButton">ADD TO CART</button>
          </div>
          <div id="productToWishlist">
            <i id="productWishlistIcon"></i>
            <p id="productWishlistText">ADD TO WISHLIST</p>
          </div>
        </div>
        <div id="productDelivery">
          <div id="productDeliveryInfo">
            <img src="" alt="" className="preoductDeliveryInfoIcons" />
            <p className="productDeliveryInfoTexts">Free shipping on US orders $90+</p>
          </div>
          <div id="productDeliveryPayment">
            <p id="productDeliveryPaymentText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas autem ipsum unde veritatis laboriosam placeat quia illo asperiores distinctio consectetur.</p>
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
            <p className="productAboutMainTexts">DESCRIPTION</p>
          </main>
          <p id="productAboutText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae maxime veniam molestias ex odit quas ipsum tempore sint. Sunt ea, quam illo officiis quasi ut molestias delectus impedit facere vel quia quibusdam! Harum, non, accusantium magnam deserunt, tenetur vero dolores itaque officiis esse placeat deleniti? Voluptates beatae minima unde nisi.</p>
          <div id="productAboutDiv">
            <div className="productAboutInnerDiv">
              <img src="" alt="" className="productAboutInnerImage" />
              <p className="productAboutInnerText">Machine wash max. 30ºC. Short spin.</p>
            </div>
          </div>
        </div>
      </main>
      <div id="productRelatedDvi">
        <p id="productRelatedText">Related products</p>
        <main id="productRelatedText"></main>
      </div>
    </div>
  );
}

export default ProductReview;