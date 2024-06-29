import React from "react";

const CartTemplate = ({ id, productImage, productName, productPrice, productDetails, cartAmt }) => {
  return (
    <main key={id} className="cartProductMain">
      <img src={productImage} alt={productName} className="cartProductImage" />
      <div className="cartProductDetails">
        <i className="fa-solid fa-xmark cartRemove"></i>
        <section className="cartDetailsSection">
          <h1 className="cartProductName">{productName}</h1>
          {/* {productDetails.map(({ cartSize, cartColor }) => {
            return (
              <>
                {/* <p className="cartProductText cartProductColor">Color: {cartColor}</p>
                <p className="cartProductText cartProductSize">Size: {cartSize}</p> 
              </>
            );
          })} */}
          <p className="cartProductText cartProductAmt">{cartAmt} * ${productPrice}.00</p>
        </section>
      </div>
    </main>
  );
}

export default CartTemplate;