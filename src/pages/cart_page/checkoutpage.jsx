import React, { useEffect, useContext } from "react";
import { ToggleRegister } from "../contextpage";
import PageLinkTemplate from "../pagelinks";

const CheckoutPage = () => {

  const { setNavbar, setCart, setToggleSideMenu } = useContext(ToggleRegister);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCart(false);
    setToggleSideMenu(false);
    setNavbar(true);
  }, [])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "shop", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "checkout", linkArrow: false }
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

export default CheckoutPage;