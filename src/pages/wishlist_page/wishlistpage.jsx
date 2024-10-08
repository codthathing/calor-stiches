import React, { useContext, useEffect } from "react";
import { ToggleRegister } from "../contextpage";
import PageLinkTemplate from "../pagelinks";

const WishListPage = () => {

  const { setNavbar, setWishList, setToggleSideMenu } = useContext(ToggleRegister);

  useEffect(() => {
    setNavbar(true);
    setWishList(false);
    setToggleSideMenu(false);
    window.scrollTo(0, 0);
  }, [])

  const pageLinkDetails = [
    {id: 0, linkDirect: "/", linkText: "Home", linkArrow: true},
    {id: 1, linkDirect: "", linkText: "CS wishlist", linkArrow: false},
  ]

  return (
    <div className="otherPages">
      <ul className="productList">
        {pageLinkDetails.map((details) => {
          return <PageLinkTemplate {...details}></PageLinkTemplate>
        })}
      </ul>
    </div>
  );
}

export default WishListPage;