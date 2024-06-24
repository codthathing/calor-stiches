import React, { useContext } from "react";
import { ToggleRegister } from "../contextpage";

const Cart = () => {
  const { setCart } = useContext(ToggleRegister)
  return (
    <section id="cartSection" className="navSections whiteBackSections">
      <div onClick={() => setCart(false)} className="navBack"><i class="fa-solid fa-xmark navBackIcon"></i></div>
      <div className="navDiv">
        <h1 className="navHeadText" id="cartHead">Shopping Cart</h1>
        <section>

        </section>
      </div>
      <footer className="navFooter"></footer>
    </section>
  );
}

export default Cart;