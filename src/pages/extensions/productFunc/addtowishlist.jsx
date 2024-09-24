import React, { useContext, useEffect } from "react";
import { ToggleRegister } from "../../contextpage";

const AddToWishList = ({ id }) => {
  const { products, wishlistItems, setWishList } = useContext(ToggleRegister);

  const AddToWishListFunc = (id) => {
    const selectedItem = products.find((item) => item.id == id);
    const { productImage, productName, productPrice, priceOne, priceTwo, averagePrice, wishlistDate, wishlistStock } = selectedItem;
    if (!wishlistItems.some(item => item.productName == selectedItem.productName)) {
      if (selectedItem.priceOne && selectedItem.priceTwo && selectedItem.averagePrice) {
        wishlistItems.push({ id: wishlistItems.length, productImage, productName, priceOne, priceTwo, averagePrice, wishlistDate, wishlistStock });
      } else {
        wishlistItems.push({ id: wishlistItems.length, productImage, productName, productPrice, wishlistDate, wishlistStock });
      };
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    };
    setWishList(true);
  }

  return (
    <div className="optionDiv optionDivWishlist">
      <i className="fa-regular fa-heart optionIcon optioIconWishlist" onClick={() => AddToWishListFunc(id)}></i>
      <p className="wishlistOptionText">Add to Wishlist</p>
    </div>
  );
};

export default AddToWishList;