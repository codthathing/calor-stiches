import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { productDetails } from "./products";

const ProductReview = () => {

  const [name, setName] = useState("");
  const { productName } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    const presentProduct = productDetails.find((product)=> product.productName === productName);
    setName(presentProduct.productName);
    window.scrollTo(0, 0);
  }, [name, pathname])

  return (
    <div className="otherPages" id="productReview">
      <Link to="/">Home</Link>
      {name}
    </div>
  );
}

export default ProductReview;