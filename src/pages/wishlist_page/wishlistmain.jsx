import React, { useContext } from "react";
import { useScroll } from "../usescroll";
import { ToggleRegister } from "../contextpage";
import WishlistTemplate from "./wishlisttemplate";
import { Link } from "react-router-dom";

const WishlistMain = () => {
  const { setWishList, products } = useContext(ToggleRegister);
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");

  return (
    <main ref={addScroll} id="wishListMain">
      <header className="wishListContainers" id="wishListHeader">
        <p id="wishListText">Wishlist ({products.length})</p>
        <span ref={removeScroll} id="wishListCancel" onClick={() => setWishList(false)}><i id="wishListCanIcon" className="fa-solid fa-xmark"></i></span>
      </header>
      <section id="wishListItemSection">
        {products.length > 0 ? products.map((details) => {
          return <WishlistTemplate {...details}></WishlistTemplate>
        }) : <p id="wishListDefaultText" className="defaultText">There are no products on the Wishlist!</p>}
      </section>
      <div className="wishListContainers" id="wishListLinkDiv">
        <Link to="/shop/wishlist" className="wishListLinks">OPEN WISHLIST PAGE</Link>
        <a href="#productSection" className="wishListLinks" onClick={() => setWishList(false)}>CONTINUE SHOPPING</a>
      </div>
    </main>
  );
}

export default WishlistMain;