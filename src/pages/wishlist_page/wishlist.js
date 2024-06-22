import React, { useContext } from "react";
import { ToggleRegister } from "../contextpage";

const WishList = () => {
  const {setWishList} = useContext(ToggleRegister)

  return (
    <section id="wishListSection" className="navSections">
      <main id="wishListMain" className="mainNav">
        <span onClick={() => setWishList(false)}><i class="fa-solid fa-xmark"></i></span>
      </main>
    </section>
  );
}

export default WishList;