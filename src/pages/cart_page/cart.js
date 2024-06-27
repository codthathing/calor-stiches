import React, { useContext } from "react";
import { ToggleRegister } from "../contextpage";

const Cart = () => {
  const { setCart } = useContext(ToggleRegister)
  return (
    <section id="cartSection" className="navSections whiteBackSections">
      <div className="navBack" id="cartHeader">
        <i onClick={() => setCart(false)} class="fa-solid fa-xmark navBackIcon"></i>
        <h1 className="navHeadText" id="cartHead">Shopping Cart</h1>
      </div>
      <div className="navDiv">
        <section>

        </section>
      </div>
      <footer className="navFooter"></footer>
    </section>
  );
}

export default Cart;