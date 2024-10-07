import React, { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import PageLinkTemplate from "../../../pagelinks";
import Handle from "../../handleIcons/handle";
import productImage from "../../products/productImages/design_eight.jpeg";
import serviceIcon from "../../service/serviceIcons/iconmonstr-time-17-240.png";
import Payment from "../../paymentIcons/payment";
import ProductTemplate from "../../../productFunc/productTemplate";

const ProductReview = () => {

  const [product, setProduct] = useState({});
  const { productName } = useParams();
  const { pathname } = useLocation();
  const { setSearch, setNavbar, setCart, setToggleSideMenu, products } = useContext(ToggleRegister);

  useEffect(() => {
    const presentProduct = products.find((product) => product.productName === productName);
    setProduct(presentProduct);
    window.scrollTo(0, 0);
    setSearch(false);
    setToggleSideMenu(false);
    setNavbar(true);
    setCart(false);
  }, [product, pathname])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "/product", linkText: "Product", linkArrow: true },
    { id: 2, linkDirect: "", linkText: product.productName, linkArrow: false }
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
            <li className="productSizeList imageSize"><img src={productImage} alt="" className="productSizeImage imageSize" /></li>
            <li className="productSizeList imageSize"><img src={productImage} alt="" className="productSizeImage imageSize" /></li>
            <li className="productSizeList imageSize"><img src={productImage} alt="" className="productSizeImage imageSize" /></li>
            <li className="productSizeList imageSize"><img src={productImage} alt="" className="productSizeImage imageSize" /></li>
            <li className="productSizeList imageSize"><img src={productImage} alt="" className="productSizeImage imageSize" /></li>
          </ul>
          <div id="productMainImageDiv" className="imageSize">
            <img src={productImage} alt="" id="productMainImage imageSize" className="imageSize" />
          </div>
        </picture>
        <div id="productDetailsDiv">
          <p id="productDetailName">Heeloo</p>
          <span id="productDetailPrice">$85.00</span>
          <p id="productDetailReview">(1 customer review / Add review)</p>
          <p id="productDetailDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!</p>
        </div>
        <div id="productPrep" className="productDivs">
          <p id="productPrepText">Stock: In stock, ready to be shipped</p>
          <div id="productPrepDiv"></div>
        </div>
        <div id="productColor" className="productDivs">
          <p id="productColorText">Color Green</p>
          <main id="productColorMain">
            <div className="productColorMainDiv" style={{ backgroundColor: "green" }}></div>
            <p className="productColorMainText">Green</p>
          </main>
        </div>
        <div id="productSize" className="productDivs">
          <div id="productSizeDiv">
            <p id="productSizeDetail" className="productSizeText">Size L</p>
            <p id="productSizeChart" className="productSizeText">SIZE CHARTS</p>
          </div>
          <main id="productSizeMain">
            <p className="productSizeMainText">L</p>
          </main>
        </div>
        <div id="productFunctions" className="productDivs">
          <div id="productToCart">
            <div id="productToCartDiv">
              <div className="productToCartInnerDiv">1</div>
              <div className="productToCartInnerDiv">+</div>
              <div className="productToCartInnerDiv">-</div>
            </div>
            <button type="button" id="productToCartButton">ADD TO CART</button>
          </div>
          <div id="productToWishlist">
            <i className="fa-regular fa-heart" id="productWishlistIcon"></i>
            <p id="productWishlistText">ADD TO WISHLIST</p>
          </div>
        </div>
        <div id="productDelivery">
          <div id="productDeliveryInfo">
            <div className="productDeliveryInfoInnerDiv">
              <img src={serviceIcon} alt="" className="productDeliveryInfoIcons" />
              <p className="productDeliveryInfoTexts">Free shipping on US orders $90+</p>
            </div>
            <div className="productDeliveryInfoInnerDiv">
              <img src={serviceIcon} alt="" className="productDeliveryInfoIcons" />
              <p className="productDeliveryInfoTexts">Free shipping on US orders $90+</p>
            </div>
          </div>
          <div id="productDeliveryPayment">
            <p id="productDeliveryPaymentText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas autem ipsum unde veritatis laboriosam placeat quia illo asperiores distinctio consectetur.</p>
            <div id="productDeliveryPaymentDiv">
              <Payment></Payment>
            </div>
          </div>
          <div id="productDeliveryDetails">
            <p className="productDeliveryDetailsTexts">SKU: <span className="productDeliveryDetailsInnerText">ED5690042</span> <span className="productDeliveryDetailsSpan">|</span></p>
          </div>
          <div id="productHandles">
            <Handle></Handle>
          </div>
        </div>
        <div id="productAbout">
          <main id="productAboutMain">
            <p className="productAboutMainTexts">DESCRIPTION</p>
            <p className="productAboutMainTexts">REVIEW</p>
          </main>
          <p id="productAboutText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae maxime veniam molestias ex odit quas ipsum tempore sint. Sunt ea, quam illo officiis quasi ut molestias delectus impedit facere vel quia quibusdam! Harum, non, accusantium magnam deserunt, tenetur vero dolores itaque officiis esse placeat deleniti? Voluptates beatae minima unde nisi.</p>
          <div id="productAboutDiv">
            <div className="productAboutInnerDiv">
              <img src={serviceIcon} alt="" className="productAboutInnerImage" />
              <p className="productAboutInnerText">Machine wash max. 30ºC. Short spin.</p>
            </div>
            <div className="productAboutInnerDiv">
              <img src={serviceIcon} alt="" className="productAboutInnerImage" />
              <p className="productAboutInnerText">Machine wash max. 30ºC. Short spin.</p>
            </div>
            <div className="productAboutInnerDiv">
              <img src={serviceIcon} alt="" className="productAboutInnerImage" />
              <p className="productAboutInnerText">Machine wash max. 30ºC. Short spin.</p>
            </div>
          </div>
        </div>
      </main>
      <div id="productRelatedDiv">
        <p id="productRelatedText">Related products</p>
        <main id="productRelatedText">
          {products.map((products) => {
            return <ProductTemplate {...products}></ProductTemplate>
          })}
        </main>
      </div>
    </div>
  );
}

export default ProductReview;