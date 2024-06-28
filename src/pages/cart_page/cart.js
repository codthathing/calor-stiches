import React, { useContext } from "react";
import { ToggleRegister } from "../contextpage";
import cartImage from "../extensions/products/productImages/design_one.jpeg";

const Cart = () => {
  const { setCart } = useContext(ToggleRegister)
  return (
    <section id="cartSection" className="navSections whiteBackSections">
      <div className="navBack" id="cartHeader">
        <i onClick={() => setCart(false)} class="fa-solid fa-xmark navBackIcon"></i>
        <h1 className="navHeadText" id="cartHead">Shopping Cart</h1>
      </div>
      <div id="cartProductDiv">
        <main className="cartProductMain">
          <img src={cartImage} alt="product image" className="cartProductImage" />
          <div className="cartProductDetails">
            <i className="fa-solid fa-xmark cartRemove"></i>
            <section className="cartDetailsSection">
              <h1 className="cartProductName">{"sunflower jumpsuit - olive green"}</h1>
              <p className="cartProductText cartProductColor">Color: {"Olive green"}</p>
              <p className="cartProductText cartProductSize">Size: {"L"}</p>
              <p className="cartProductText cartProductAmt">{2} * ${85}.00</p>
            </section>
          </div>
        </main>
        <main className="cartProductMain">
          <img src={cartImage} alt="product image" className="cartProductImage" />
          <div className="cartProductDetails">
            <i className="fa-solid fa-xmark cartRemove"></i>
            <section className="cartDetailsSection">
              <h1 className="cartProductName">{"dark olive short dress"}</h1>
              <p className="cartProductText cartProductAmt">{1} * ${79}.00</p>
            </section>
          </div>
        </main>
      </div>
      <footer className="navFooter"></footer>
    </section>
  );
}

export default Cart;