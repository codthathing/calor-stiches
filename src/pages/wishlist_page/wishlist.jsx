import React, { useContext } from "react";
import { ToggleRegister } from "../contextpage";
import WishlistTemplate from "./wishlisttemplate";
import { productDetails } from "../extensions/products/products";
import { useScroll } from "../usescroll";

const WishList = () => {
  const { setWishList } = useContext(ToggleRegister);
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");

  return (
    <section ref={addScroll} id="wishListSection" className="navSections">
      <main id="wishListMain" className="mainNav">
        <header className="wishListContainers" id="wishListHeader">
          <p id="wishListText">Wishlist ({productDetails.length})</p>
          <span ref={removeScroll} id="wishListCancel" onClick={() => setWishList(false)}><i className="fa-solid fa-xmark"></i></span>
        </header>
        <section id="wishListItemSection">
          {productDetails.length > 0 ? productDetails.map((details) => {
            return <WishlistTemplate {...details}></WishlistTemplate>
          }) : <p id="wishListDefaultText" className="defaultText">There are no products on the Wishlist!</p>}
        </section>
        <div className="wishListContainers" id="wishListLinkDiv">
          <a href="" className="wishListLinks">OPEN WISHLIST PAGE</a>
          <a href="#productSection" className="wishListLinks" onClick={() => setWishList(false)}>CONTINUE SHOPPING</a>
        </div>
      </main>
    </section>
  );
}

export default WishList;