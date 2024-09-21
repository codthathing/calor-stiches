import React from "react";
import WishlistMain from "./wishlistmain";
import { Routes, Route } from "react-router-dom";
import WishlistReview from "./wishlistreview";

const WishList = () => {

  return (
    <section id="wishListSection" className="navSections">
      <Routes>
        <Route exact path="/">
          <Route index element={<WishlistMain />}></Route>
          <Route path="/shop/:productName" element={<WishlistReview/>}></Route>
        </Route>
      </Routes>
    </section>
  );
}

export default WishList;