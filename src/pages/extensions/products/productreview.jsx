import React, { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { productDetails } from "./products";
import { ToggleRegister } from "../../contextpage";
import PageLinkTemplate from "../../pagelinks";

const ProductReview = () => {

  const [name, setName] = useState("");
  const { productName } = useParams();
  const { pathname } = useLocation();
  const { setSearch, setNavbar, setCart, setToggleSideMenu } = useContext(ToggleRegister);

  useEffect(() => {
    const presentProduct = productDetails.find((product) => product.productName === productName);
    setName(presentProduct.productName);
    window.scrollTo(0, 0);
    setSearch(false);
    setToggleSideMenu(false);
    setNavbar(true);
    setCart(false);
  }, [name, pathname])

  const pageLinkDetails = [
    {id: 0, linkDirect: "/", linkText: "Home", linkArrow: true},
    {id: 1, linkDirect: "/product", linkText: "Product", linkArrow: true},
    {id: 2, linkDirect: "", linkText: name, linkArrow: false}
  ]

  return (
    <div className="otherPages" id="productReview">
      <ul className="productList">
        {pageLinkDetails.map((details) => {
          return <PageLinkTemplate {...details}></PageLinkTemplate>
        })}
      </ul>
    </div>
  );
}

export default ProductReview;