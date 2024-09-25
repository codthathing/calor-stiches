import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleRegister } from "../contextpage";

const CartTemplate = ({ id, productImage, productName, averagePrice, productPrice, productDetails, cartAmt }) => {
  const { curSymbol, cartItems, setCartItems } = useContext(ToggleRegister);
  const RemoveCartItem = (id) => {
    let remainderItems = cartItems.filter((items) => items.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(remainderItems));
    setCartItems(remainderItems);
  };

  return (
    <main key={id} className="cartProductMain">
      <img src={productImage} alt={productName} className="cartProductImage" />
      <div className="cartProductDetails">
        <i className="fa-solid fa-xmark cartRemove" onClick={() => RemoveCartItem(id)}></i>
        <section className="cartDetailsSection">
          <h1 className="cartProductName">
            <Link key={id} className="productNameText" to={`/product/${productName}`}>
              {productName}
            </Link>
          </h1>
          {productDetails && productDetails.map(({ idOne, idTwo, cartSize, cartColor }) => {
            return (
              <>
                {cartColor && <p key={idOne} className="cartProductText cartProductColor">Color: {cartColor}</p>}
                {cartSize && <p key={idTwo} className="cartProductText cartProductSize">Size: {cartSize}</p>}
              </>
            );
          })}
          <p className="cartProductText cartProductAmt">
            {cartAmt} * {averagePrice ? `${curSymbol}${averagePrice.toFixed(2)}` : `${curSymbol}${productPrice.toFixed(2)}`}
            </p>
        </section>
      </div>
    </main>
  );
}

export default CartTemplate;