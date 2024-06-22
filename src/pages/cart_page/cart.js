import React, { useContext } from "react";
import { ToggleRegister } from "../contextpage";

const Cart = () => {
  const {setCart} = useContext(ToggleRegister)
  return (
    <section id="cartSection" className="navSections whiteBackSections">
        <span onClick={() => setCart(false)}><i class="fa-solid fa-xmark"></i></span>
    </section>
  );
}

export default Cart;