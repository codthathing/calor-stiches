import React from "react";
import { Link } from "react-router-dom";

const CartTemplate = ({ id, productImage, productName, productPrice, productDetails, cartAmt, cartPrice }) => {
  return (
    <main key={id} className="cartProductMain">
      <img src={productImage} alt={productName} className="cartProductImage" />
      <div className="cartProductDetails">
        <i className="fa-solid fa-xmark cartRemove"></i>
        <section className="cartDetailsSection">
          <h1 className="cartProductName">
            <Link className="cartProductNameText" to={`/product/${productName}`}>
              {productName}
            </Link>
          </h1>
          {productDetails && productDetails.map(({ cartSize, cartColor }) => {
            return (
              <>
                {cartColor && <p className="cartProductText cartProductColor">Color: {cartColor}</p>}
                {cartSize && <p className="cartProductText cartProductSize">Size: {cartSize}</p>}
              </>
            );
          })}
          <p className="cartProductText cartProductAmt">{cartAmt} * ${cartPrice ? cartPrice : productPrice}.00</p>
        </section>
      </div>
    </main>
  );
}

export default CartTemplate;