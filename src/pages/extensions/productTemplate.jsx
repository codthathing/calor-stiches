import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleRegister } from "../contextpage";

const ProductTemplate = ({ id, productAvailable, productAvailableColor, doubleProductAvail, doubleAvailColor, productImage, productName, cutOff, productPrice, priceOne, priceTwo, averagePrice }) => {
  const { curSymbol, products, wishlistItems, setWishList, cartItems } = useContext(ToggleRegister);

  const AddToWishList = (id) => {
    const selectedItem = products.find((item) => item.id == id);
    const { wishlistDate, wishlistStock } = selectedItem;
    if (!wishlistItems.some(item => item.productName === selectedItem.productName)) {
      if (selectedItem.priceOne && selectedItem.priceTwo && selectedItem.averagePrice) {
        wishlistItems.push({ id: wishlistItems.length, productImage, productName, priceOne, priceTwo, averagePrice, wishlistDate, wishlistStock });
      } else {
        wishlistItems.push({ id: wishlistItems.length, productImage, productName, productPrice, wishlistDate, wishlistStock });
      };
    };
    setWishList(true);
  };

  const AddToCart = (id) => {
    const selectedItem = products.find((item) => item.id == id);
    const { productDetails, cartAmt } = selectedItem;
    // if (wishlistItems.some(item => item.productName === selectedItem.productName)) {
      
    // };
    if (selectedItem.averagePrice) {
      cartItems.push({ id: cartItems.length, productImage, productName, averagePrice, productDetails, cartAmt });
    } else {
      cartItems.push({ id: cartItems.length, productImage, productName, productPrice, productDetails, cartAmt });
    };
  }

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
        <div className="optionDiv"><i className="fa-regular fa-heart optionIcon" onClick={() => AddToWishList(id)}></i></div>
        <p className="paragraphStyles selectOption" onClick={() => AddToCart(id)}>ADD TO CART</p>
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