import { Routes, Route } from "react-router-dom";
import FrontPage from "./frontpage/frontpage";
import ProductReview from "./otherpages/innerpages/productreview";
import CollectionPage from "./otherpages/innerpages/collectionpage";
import ProductPage from "./otherpages/innerpages/productpage";
import ProductDisplay from "./otherpages/innerpages/productdisplay";
import WishListPage from "./otherpages/innerpages/wishlistpage";
import CartPage from "./otherpages/innerpages/cartpage";
import CheckoutPage from "./otherpages/innerpages/checkoutpage";

const PageLayout = () => {

  return (
    <Routes>
      <Route path="/*" element={<FrontPage />}></Route>
      <Route path="/product/:productName" element={<ProductReview />}></Route>
      <Route path="/product/collection/:collectionName" element={<CollectionPage/>}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/product/latest-items" element={<ProductDisplay/>}></Route>
      <Route path="/shop/wishlist" element={<WishListPage />}></Route>
      <Route path="/shop/cart" element={<CartPage />}></Route>
      <Route path="/shop/checkout" element={<CheckoutPage />}></Route>
    </Routes>
  );
}

export default PageLayout;