import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ToggleRegister } from "../../contextpage";
import { useScroll } from "../../usescroll";
import productImage from "../products/productImages/design_eight.jpeg";

const ProductView = () => {
  const [name, setName] = useState("");
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");
  const { products } = useContext(ToggleRegister);
  const { productName } = useParams();

  useEffect(() => {
    const product = products.find((product) => product.productName === productName);
    setName(product.productName);
  }, [name]);

  return (
    <section className="navSections">
      <main id="productViewMain" ref={addScroll}>
        <div id="productViewDiv">
          <Link to="/" id="productViewBack" ref={removeScroll}><i class="fa-solid fa-xmark" id="productViewBackIcon"></i></Link>
          <main id="productViewInnerMain">
            <div id="productViewImageDiv">
              <img src={productImage} alt="" id="productViewImage" />
            </div>
            <div id="productViewMainDiv">
              <div className="productDetailsDiv">
                <p className="productDetailName">Heeloo</p>
                <span className="productDetailPrice">$85.00</span>
                <p className="productDetailDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!</p>
              </div>
              <div id="productPrepView" className="productDivs">
                <p className="productPrepText">Stock: In stock, ready to be shipped</p>
                <div className="productPrepDiv"></div>
              </div>
              <div id="productColorView" className="productDivs">
                <p className="productColorText">Color Green</p>
                <main className="productColorMain">
                  <div className="productColorMainDiv" style={{ backgroundColor: "#00A849" }}></div>
                  <p className="productColorMainText">Green</p>
                </main>
              </div>
              <div id="productSizeView" className="productDivs">
                <div className="productSizeDiv">
                  <p className="productSizeText">Size L</p>
                </div>
                <main className="productSizeMain">
                  <p className="productSizeMainText">L</p>
                </main>
              </div>
              <div id="productFunctionsView" className="productDivs">
                <div className="productToCart">
                  <div className="productToCartDiv">
                    <div className="productToCartInnerDiv">1</div>
                    <div className="productToCartInnerDiv">+</div>
                    <div className="productToCartInnerDiv">-</div>
                  </div>
                  <button type="button" className="productToCartButton">ADD TO CART</button>
                </div>
                <div className="productToWishlist">
                  <i className="fa-regular fa-heart productWishlistIcon"></i>
                  <p className="productWishlistText">ADD TO WISHLIST</p>
                </div>
              </div>
              <div id="productDeliveryDetailsView" className="productDeliveryDetails">
                <p className="productDeliveryDetailsTexts">SKU: <span className="productDeliveryDetailsInnerText">ED5690042</span> <span className="productDeliveryDetailsSpan">|</span></p>
                <p className="productDeliveryDetailsTexts">SKU: <span className="productDeliveryDetailsInnerText">ED5690042</span></p>
              </div>
              <div id="productReviewLinkDiv">
                <Link to={`/product/${name}`} id="productReviewLink">VIEW PRODUCT DETAILS</Link>
              </div>
            </div>
          </main>
        </div>
      </main>
    </section>
  );
}

export default ProductView;