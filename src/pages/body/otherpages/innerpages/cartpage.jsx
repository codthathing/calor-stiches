import { useEffect, useContext, useState } from "react";
import { ToggleRegister } from "../../../contextpage";
import PageLinkTemplate from "../pagelinks";
import wishlistImage from "../../../../asset/images-icons/productImages/design_eight.jpeg";

const CartPage = () => {

  const { setNavbar, setCart, setToggleSideMenu } = useContext(ToggleRegister);
  const [ showUpdateAddress, setShowUpdateAddress ] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCart(false);
    setToggleSideMenu(false);
    setNavbar(true);
  }, [])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "shop", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "cart", linkArrow: false }
  ]

  return (
    <div className="otherPages" id="productReview">
      <ul className="productList">
        {pageLinkDetails.map((details) => {
          return <PageLinkTemplate key={details.id} {...details}></PageLinkTemplate>
        })}
      </ul>
      <main className="productWishlistCartMain">
        <section className="productWishlistCartSection">
          <div id="productCartTopicsDiv">
            <p className="wishlistCartTopicTexts">Product</p>
            <p className="wishlistCartTopicTexts">Price</p>
            <p className="wishlistCartTopicTexts">Quantity</p>
            <p className="wishlistCartTopicTexts">Subtotal</p>
          </div>
          <main>
            <div className="wishlistCartDiv productCartDiv">
              <div className="wishlistCartIconImageTextDiv">
                <i className="fa-solid fa-xmark wishlistCartDeleteIcon"></i>
                <div className="wishlistCartImageNameDiv">
                  <img src={wishlistImage} alt="" className="wishlistCartMainImage" />
                  <p className="wishlistCartName">Apple Cinnam Pants</p>
                </div>
              </div>
              <div className="wishlistCartPriceValueDiv">
                <p className="wishlistCartPriceText">Price</p>
                <p className="wishlistCartPriceValue">$20.00</p>
              </div>
              <div className="cartQuantityDiv">
                <p className="wishlistStatusText">Quantity</p>
                <div className="productToCartDiv">
                  <div className="productToCartInnerDiv">1</div>
                  <div className="productToCartInnerDiv">+</div>
                  <div className="productToCartInnerDiv">-</div>
                </div>
              </div>
              <div className="wishlistCartPriceValueDiv">
                <p className="wishlistCartPriceText">Subtotal</p>
                <p className="wishlistCartPriceValue">$20.00</p>
              </div>
            </div>
            <div className="wishlistCartDiv productCartDiv">
              <div className="wishlistCartIconImageTextDiv">
                <i className="fa-solid fa-xmark wishlistCartDeleteIcon"></i>
                <div className="wishlistCartImageNameDiv">
                  <img src={wishlistImage} alt="" className="wishlistCartMainImage" />
                  <p className="wishlistCartName">Apple Cinnam Pants</p>
                </div>
              </div>
              <div className="wishlistCartPriceValueDiv">
                <p className="wishlistCartPriceText">Price</p>
                <p className="wishlistCartPriceValue">$20.00</p>
              </div>
              <div className="cartQuantityDiv">
                <p className="wishlistStatusText">Quantity</p>
                <div className="productToCartDiv">
                  <div className="productToCartInnerDiv">1</div>
                  <div className="productToCartInnerDiv">+</div>
                  <div className="productToCartInnerDiv">-</div>
                </div>
              </div>
              <div className="wishlistCartPriceValueDiv">
                <p className="wishlistCartPriceText">Subtotal</p>
                <p className="wishlistCartPriceValue">$20.00</p>
              </div>
            </div>
          </main>
        </section>
        <div id="cartUpdateBtnDiv">
          <button id="cartUpdateBtn">UPDATE CART</button>
        </div>
        <div id="cartTotalDiv">
          <p id="cartTotalText">Cart totals</p>
          <div className="cartPriceValueDiv">
            <p className="cartPriceText">Subtotal</p>
            <p className="wishlistCartPriceValue">$20.00</p>
          </div>
          <div id="cartShippingAddressDiv">
            <div id="cartShippingDiv">
              <p id="cartShippingText">Shipping to <span id="cartShippingSpan">lagos</span></p>
              <p id="cartAddressText" onClick={() => setShowUpdateAddress(!showUpdateAddress)}>CHANGE ADDRESS</p>
            </div>
            {showUpdateAddress && <form id="cartAddressDiv">
              <input type="text" value={"Nigeria"} readOnly className="cartAddressInputs" />
              <input type="text" value={"State"} className="cartAddressInputs" />
              <input type="text" value={"Town / City"} className="cartAddressInputs" />
              <input type="button" value="UPDATE" className="cartAddressBtn" />
            </form>}
          </div>
          <div className="cartPriceValueDiv">
            <p className="cartPriceText">Total</p>
            <p className="wishlistCartPriceValue cartTotalValue">$20.00</p>
          </div>
          <button id="cartCheckoutButton">PROCEED TO CHECKOUT</button>
        </div>
      </main>
    </div>
  );
}

export default CartPage;