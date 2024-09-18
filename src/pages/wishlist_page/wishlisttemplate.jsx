import React from "react";

const WishlistTemplate = ({ id, productImage, productName, productPrice, wishlistDate, wishlistStock }) => {
  return (
    <div key={id} className="wishListDiv">
      <span className="delWishListSpan"><i className="fa-solid fa-xmark delWishListIcon"></i></span>
      <img src={productImage} alt={productName} className="wishListImage" />
      <div className="wishListDetails">
        <h1 className="wishListName wishListTexts">{productName}</h1>
        <p className="wishListPrice wishListTexts">#{productPrice}.00</p>
        <p className="wishListDate wishListTexts">{wishlistDate}</p>
      </div>
      <div className="wishListAvailDiv">
        <main className="wishListAvailMain">
          <p className="wishListAvail wishListTexts">Stock: {wishlistStock}</p>
          <div className="wishListAvailBar"></div>
        </main>
        <p className="wishListAddCart wishListTexts">ADD TO CART</p>
      </div>
    </div>
  );
}

export default WishlistTemplate;