import React, { useContext, useState } from "react";
import { ToggleRegister } from "../contextpage";

const WishList = () => {
  const { setWishList } = useContext(ToggleRegister)
  const [wishListItem, setWishListItem] = useState([])

  return (
    <section id="wishListSection" className="navSections">
      <main id="wishListMain" className="mainNav">
        <header className="wishListContainers" id="wishListHeader">
          <p id="wishListText">Wishlist ({wishListItem.length})</p>
          <span id="wishListCancel" onClick={() => setWishList(false)}><i class="fa-solid fa-xmark"></i></span>
        </header>
        <section id="wishListItemSection">
          {wishListItem.length > 0 ? wishListItem.map((x) => {
            return (
              <p>{x}</p>
            )
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