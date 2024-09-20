import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleRegister } from "../contextpage";

const CartTemplate = ({ id, productImage, productName, averagePrice, productPrice, productDetails, cartAmt }) => {
  const { curSymbol } = useContext(ToggleRegister);

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
          <p className="cartProductText cartProductAmt">
            {cartAmt} * {averagePrice ? `${curSymbol}${averagePrice.toFixed(2)}` : `${curSymbol}${productPrice.toFixed(2)}`}
            </p>
        </section>
      </div>
    </main>
  );
}

export default CartTemplate;