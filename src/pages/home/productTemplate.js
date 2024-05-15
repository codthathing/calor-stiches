import React, { useState } from "react";

const ProductTemplate = ({ productAvailable, productImage, productName, cutOff, originalPrice, productPrice }) => {

  const [availSpanColor, setAvailSpanColor] = useState("red")
  // if(productAvailable == "NEW IN") {
  //   setAvailSpanColor("green");
  // } else if (productAvailable == "SOLD OUT") {
  //   setAvailSpanColor("red");
  // } else {
  //   setAvailSpanColor("orange");
  // };

  return (
    <div className="productDiv">
      <section className="orderOptions" style={{ backgroundImage: `url(${productImage})` }}>
        {productAvailable &&
          <span className="productAvail paragraphStyles" style={{ backgroundColor: availSpanColor }}>{productAvailable}</span>
        }
        <div className="optionBtnsDiv">
          <i className="fa-regular fa-heart optionIcon"></i>
          <p className="paragraphStyles">SELECT OPTIONS</p>
          <i class="fa-regular fa-eye optionIcon"></i>
        </div>
      </section>
      <section className="productNamePrice">
        <p className="productName">{productName}</p>
        <div className="priceDiv">
          {cutOff && <span className="productPrice originalPrice">${originalPrice}</span>}
          <span className="productPrice" style={{color: cutOff ? "red" : "black"}}>${productPrice}</span>
        </div>
      </section>
    </div>
  );
};

export default ProductTemplate;