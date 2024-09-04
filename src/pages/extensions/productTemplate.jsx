import React from "react";
import { Link } from "react-router-dom";

const ProductTemplate = ({ productAvailable, productAvailableColor, doubleProductAvail, doubleAvailColor, productImage, productName, cutOff, originalPrice, productPrice }) => {

  return (
    <div className="productDiv">
      {/* <Link to={`/${productName}`}> */}
        <section className="orderOptions" style={{ backgroundImage: `url(${productImage})` }}>
          <div className="availDiv">
            {doubleProductAvail && <span className="productAvail paragraphStyles" style={{ backgroundColor: doubleAvailColor }}>{doubleProductAvail}</span>}
            {productAvailable && <span className="productAvail paragraphStyles" style={{ backgroundColor: productAvailableColor }}>{productAvailable}</span>}
          </div>
        </section>
      {/* </Link> */}
      <div className="optionBtnsDiv">
        <i className="fa-regular fa-heart optionIcon"></i>
        <p className="paragraphStyles selectOption">SELECT OPTIONS</p>
        <i class="fa-regular fa-eye optionIcon"></i>
      </div>
      <section className="productNamePrice">
        <p className="productName">{productName}</p>
        <div className="priceDiv">
          {cutOff && <span className="productPrice originalPrice">${(100 / cutOff) * productPrice}.00</span>}
          <span className="productPrice" style={{ color: cutOff ? "#FF0000" : "#222222" }}>${productPrice}.00</span>
        </div>
      </section>
    </div>
  );
};

export default ProductTemplate;