import React, { useContext } from "react";
import { ToggleRegister } from "../contextpage";
import { Link } from "react-router-dom";

const WishlistTemplate = ({ id, productImage, productName, productPrice, priceOne, priceTwo, averagePrice, wishlistDate, wishlistStock }) => {
  const { curSymbol, wishlistItems, setWishlistItems } = useContext(ToggleRegister);
  const RemoveWishlistItem = (id) => {
    let remainderItems = wishlistItems.filter((items) => items.id != id);
    setWishlistItems(remainderItems);
  };

  return (
    <div key={id} className="wishListDiv">
      <span className="delWishListSpan"><i onClick={() => RemoveWishlistItem(id)} className="fa-solid fa-xmark delWishListIcon"></i></span>
      <img src={productImage} alt={productName} className="wishListImage" />
      <div className="wishListDetails">
        <h1 className="wishListName wishListTexts">
          <Link className="productNameText" to={`shop/${productName}`}>
            {productName}
          </Link>
        </h1>
        <p className="wishListPrice wishListTexts">
          {averagePrice ? `${curSymbol}${priceOne.toFixed(2)} - ${curSymbol}${priceTwo.toFixed(2)}` : `${curSymbol}${productPrice.toFixed(2)}`}
        </p>
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