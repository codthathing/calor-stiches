import React, { useContext } from "react";
import { ToggleRegister } from "../contextpage";
import WishlistTemplate from "./wishlisttemplate";
import { useScroll } from "../usescroll";
import { Link } from "react-router-dom";

const WishList = () => {
  const { setWishList, wishlistItems, state } = useContext(ToggleRegister);
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");

  return (
    <section id="wishListSection" className="navSections">
      <main ref={addScroll} id="wishListMain">
        <header className="wishListContainers" id="wishListHeader">
          <div id="wishlistHeaderDiv" className="wishlistInnerContainers">
            <p id="wishListText">Wishlist ({wishlistItems.length})</p>
            <span ref={removeScroll} id="wishListCancel" onClick={() => setWishList(false)}><i id="wishListCanIcon" className="fa-solid fa-xmark"></i></span>
          </div>
          {state.showText &&
            <p id="wishlistInfoText" style={{ backgroundColor: state.textBackground }}>
              {state.defaultText}
            </p>
          }
        </header>
        <section id="wishListItemSection">
          {wishlistItems.length > 0 ? wishlistItems.map((details) => {
            return <WishlistTemplate {...details}></WishlistTemplate>
          }) : <p id="wishListDefaultText" className="defaultText">There are no products on the Wishlist!</p>}
        </section>
        <div className="wishListContainers wishlistInnerContainers" id="wishListLinkDiv">
          <Link to="/shop/wishlist" className="wishListLinks">OPEN WISHLIST PAGE</Link>
          <a href="#productSection" className="wishListLinks" onClick={() => setWishList(false)}>CONTINUE SHOPPING</a>
        </div>
      </main>
    </section>
  );
}

export default WishList;