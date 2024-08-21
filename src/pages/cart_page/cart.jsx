import React, { useContext } from "react";
import { ToggleRegister } from "../contextpage";
import CartTemplate from "./cartTemplate";
import { productDetails } from "../extensions/products/products";
import { useScroll } from "../usescroll";

const Cart = () => {
  const { setCart } = useContext(ToggleRegister);
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");

  const CalTotal = () => {
    let total = 0;
    for (let i = 0; i < productDetails.length; i++) {
      total += productDetails[i].cartPrice ? productDetails[i].cartPrice * productDetails[i].cartAmt : productDetails[i].productPrice * productDetails[i].cartAmt;
    }
    return total;
  };

  const CartTotalPriceMain = () => {
    return (
      <main id="cartTotalPriceMain">
        <div id="totalPriceDiv">
          <p className="totalPrice" id="totalPriceText">Subtotal:</p>
          <p className="totalPrice" id="totalPriceValue">
            $<CalTotal></CalTotal>.00
          </p>
        </div>
        <div id="cartButtonsDiv">
          <button className="navBtn" id="cartButton">VIEW CART</button>
          <button className="navBtn" id="checkoutButton">CHECKOUT</button>
        </div>
      </main>
    );
  };

  return (
    <section id="cartSection" ref={addScroll} className="navSections whiteBackSections">
      <div className="navBack" id="cartHeader">
        <i onClick={() => setCart(false)} ref={removeScroll} class="fa-solid fa-xmark navBackIcon"></i>
        <h1 className="navHeadText" id="cartHead">Shopping Cart</h1>
      </div>
      <div id="cartProductDiv">
        {productDetails.length > 0 ?
          <>
            <div id="cartProductInnerDiv">
              {productDetails.map((details) => {
                return <CartTemplate {...details}></CartTemplate>
              })}
            </div>
            <CartTotalPriceMain></CartTotalPriceMain>
          </> :
          <p className="defaultText" id="cartDefaultText">No products in the cart</p>}
      </div>
      <footer className="navFooter"></footer>
    </section>
  );
}

export default Cart;