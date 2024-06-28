import React from "react";

const CartTemplate = ({id, productImage, productName, cartColor, cartSize, cartAmt, productPrice}) => {
  return (
    <main key={id} className="cartProductMain">
      <img src={productImage} alt="product image" className="cartProductImage" />
      <div className="cartProductDetails">
        <i className="fa-solid fa-xmark cartRemove"></i>
        <section className="cartDetailsSection">
          <h1 className="cartProductName">{productName}</h1>
          {cartColor && <p className="cartProductText cartProductColor">Color: {cartColor}</p>}
          {cartSize && <p className="cartProductText cartProductSize">Size: {cartSize}</p>}
          <p className="cartProductText cartProductAmt">{cartAmt} * ${productPrice}.00</p>
        </section>
      </div>
    </main>
  );
}

export default CartTemplate;