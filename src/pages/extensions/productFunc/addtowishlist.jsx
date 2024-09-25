import React, { useContext, useEffect, useState } from "react";
import { ToggleRegister } from "../../contextpage";

const AddToWishList = ({ id }) => {
  const { products, wishlistItems, setWishList } = useContext(ToggleRegister);
  const [showWishlistText, setShowWishlistText] = useState(false);

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
    setTimeout(() => {
      setWishList(true);
      setShowWishlistText(false);
    }, 500);
  };

  return (
    <div className="optionDiv optionDivWishlist">
      <i className="fa-regular fa-heart optionIcon optioIconWishlist" onMouseEnter={() => setShowWishlistText(true)} onClick={() => AddToWishListFunc(id)}></i>
      {showWishlistText && <p className="wishlistOptionText">Add to Wishlist</p>}
    </div>
  );
};

export default AddToWishList;