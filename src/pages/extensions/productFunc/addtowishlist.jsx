import React, { useContext, useState } from "react";
import { ToggleRegister } from "../../contextpage";

const AddToWishList = ({ id }) => {
  const { products, wishlistItems, setWishList, dispatch } = useContext(ToggleRegister);
  const [showWishlistText, setShowWishlistText] = useState(false);

  const AddToWishListFunc = (id) => {
    const selectedItem = products.find((item) => item.id === id);
    const { productImage, productName, productPrice, priceOne, priceTwo, averagePrice, wishlistDate, wishlistStock } = selectedItem;
    if (!wishlistItems.some(item => item.productName === selectedItem.productName)) {
      if (selectedItem.priceOne && selectedItem.priceTwo && selectedItem.averagePrice) {
        wishlistItems.push({ id: wishlistItems.length, productImage, productName, priceOne, priceTwo, averagePrice, wishlistDate, wishlistStock });
      } else {
        wishlistItems.push({ id: wishlistItems.length, productImage, productName, productPrice, wishlistDate, wishlistStock });
      };
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
      dispatch({display: "ADD"});
    } else {
      dispatch({display: "NOACTION"});
    };
    setTimeout(() => {
      setWishList(true);
      setShowWishlistText(false);
      setTimeout(() => {
        dispatch({display: "CLOSE"});
      }, 1250);
    }, 500);
  };

  return (
    <div className="optionDiv optionDivWishlist">
      <i className="fa-regular fa-heart optionIcon optioIconWishlist" 
        onMouseEnter={() => setShowWishlistText(true)} 
        onMouseLeave={() => setShowWishlistText(false)} 
        onClick={() => AddToWishListFunc(id)}></i>
      {showWishlistText && <p className="wishlistOptionText">Add to Wishlist</p>}
    </div>
  );
};

export default AddToWishList;