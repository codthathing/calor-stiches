import React, { useContext } from "react";
import { ToggleRegister } from "../contextpage";
import CartTemplate from "./cartTemplate";
import { productDetails } from "../extensions/products/products";

const Cart = () => {
  const { setCart } = useContext(ToggleRegister)
  return (
    <section id="cartSection" className="navSections whiteBackSections">
      <div className="navBack" id="cartHeader">
        <i onClick={() => setCart(false)} class="fa-solid fa-xmark navBackIcon"></i>
        <h1 className="navHeadText" id="cartHead">Shopping Cart</h1>
      </div>
      <div id="cartProductDiv">
        {productDetails.map((details) => {
          return (
            <CartTemplate {...details}></CartTemplate>
          );
        })}
      </div>
      <footer className="navFooter"></footer>
    </section>
  );
}

export default Cart;