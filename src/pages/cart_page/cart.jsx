import React, { useContext } from "react";
import { ToggleRegister } from "../contextpage";
import CartTemplate from "./cartTemplate";
import { useScroll } from "../usescroll";
import { Link } from "react-router-dom";

const Cart = () => {
  const { setCart, products, curSymbol } = useContext(ToggleRegister);
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");

  const CalTotal = () => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].averagePrice ? products[i].averagePrice * products[i].cartAmt : products[i].productPrice * products[i].cartAmt;
    }
    return total;
  };

  const CartTotalPriceMain = () => {
    return (
      <main id="cartTotalPriceMain">
        <div id="totalPriceDiv">
          <p className="totalPrice" id="totalPriceText">Subtotal:</p>
          <p className="totalPrice" id="totalPriceValue">
            {curSymbol}{CalTotal().toFixed(2)}
          </p>
        </div>
        <div id="cartButtonsDiv">
          <Link to="/shop/cart" className="navBtn cartButtons" id="cartButton">VIEW CART</Link>
          <Link to="/shop/checkout" className="navBtn cartButtons" id="checkoutButton">CHECKOUT</Link>
        </div>
      </main>
    );
  };

  return (
    <section className="navSections">
      <main id="cartSection" ref={addScroll} className="whiteBackSections">
        <div className="navBack cartEnds" id="cartHeader">
          <i onClick={() => setCart(false)} ref={removeScroll} className="fa-solid fa-xmark navBackIcon"></i>
          <h1 className="navHeadText" id="cartHead">Shopping Cart</h1>
        </div>
        <div id="cartProductDiv">
          {products.length > 0 ?
            <>
              <div id="cartProductInnerDiv">
                {products.map((details) => {
                  return <CartTemplate {...details}></CartTemplate>
                })}
              </div>
              <CartTotalPriceMain></CartTotalPriceMain>
            </> :
            <p className="defaultText" id="cartDefaultText">No products in the cart</p>}
        </div>
        <footer id="cartFooter" className="navFooter cartEnds"></footer>
      </main>
    </section>
  );
}

export default Cart;