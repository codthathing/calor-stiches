import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./extensions/frontpage/frontpage";
import ProductReview from "./extensions/products/productreview";

const PageLayout = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Route index element={<FrontPage/>}></Route>
          <Route path="/:productName" element={<ProductReview/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default PageLayout;