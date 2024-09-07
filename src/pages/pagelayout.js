import React from "react";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./extensions/frontpage/frontpage";
import ProductReview from "./extensions/products/productreview";
import ProductPage from "./extensions/products/productpage";
import WishListPage from "./wishlist_page/wishlistpage";
import CartPage from "./cart_page/cartpage";
import CheckoutPage from "./cart_page/checkoutpage";

const PageLayout = () => {

  return (
    <Routes>
      <Route exact path="/">
        <Route index element={<FrontPage/>}></Route>
        <Route path="/product/:productName" element={<ProductReview/>}></Route>
        <Route path="/product" element={<ProductPage/>}></Route>
        <Route path="/shop/wishlist" element={<WishListPage/>}></Route>
        <Route path="/shop/cart" element={<CartPage/>}></Route>
        <Route path="/shop/checkout" element={<CheckoutPage/>}></Route>
      </Route>
    </Routes>
  );
}

export default PageLayout;