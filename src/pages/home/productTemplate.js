import React from "react";

const ProductTemplate = ({ productAvailable, productAvailableColor, doubleProductAvail, doubleAvailColor, productImage, productName, cutOff, originalPrice, productPrice }) => {

  return (
    <div className="productDiv">
      <section className="orderOptions" style={{ backgroundImage: `url(${productImage})` }}>
        <div className="availDiv">
          {doubleProductAvail && <span className="productAvail paragraphStyles" style={{ backgroundColor: doubleAvailColor }}>{doubleProductAvail}</span>}
          {productAvailable && <span className="productAvail paragraphStyles" style={{ backgroundColor: productAvailableColor }}>{productAvailable}</span>}
        </div>
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
          <span className="productPrice" style={{ color: cutOff ? "red" : "black" }}>${productPrice}</span>
        </div>
      </section>
    </div>
  );
};

export default ProductTemplate;