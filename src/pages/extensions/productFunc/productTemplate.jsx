import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleRegister } from "../../contextpage";
import AddToWishList from "./addtowishlist";
import AddToCart from "./addtocart";

const ProductTemplate = ({ id, productAvailable, productAvailableColor, doubleProductAvail, doubleAvailColor, productImage, productName, cutOff, productPrice, priceOne, priceTwo, averagePrice }) => {
  const { curSymbol } = useContext(ToggleRegister);

  return (
    <div className="productDiv">
      <Link to={`/product/${productName}`}>
        <section className="orderOptions" style={{ backgroundImage: `url(${productImage})` }}>
          <div className="availDiv">
            {doubleProductAvail && <span className="productAvail paragraphStyles" style={{ backgroundColor: doubleAvailColor }}>{doubleProductAvail}</span>}
            {productAvailable && <span className="productAvail paragraphStyles" style={{ backgroundColor: productAvailableColor }}>{productAvailable}</span>}
          </div>
        </section>
      </Link>
      <div className="optionBtnsDiv">
        <AddToWishList id={id}></AddToWishList>
        <AddToCart id={id}></AddToCart>
        <div className="optionDiv"><i class="fa-regular fa-eye optionIcon"></i></div>
      </div>
      <section className="productNamePrice">
        <p className="productName">{productName}</p>
        <div className="priceDiv">
          {cutOff && <span className="productPrice originalPrice">{curSymbol}{((100 / cutOff) * productPrice).toFixed(2)}</span>}
          <span className="productPrice" style={{ color: cutOff ? "#FF0000" : "#222222" }}>
            {averagePrice ? `${curSymbol}${priceOne.toFixed(2)} - ${curSymbol}${priceTwo.toFixed(2)}` : `${curSymbol}${productPrice.toFixed(2)}`}
          </span>
        </div>
      </section>
    </div>
  );
};

export default ProductTemplate;