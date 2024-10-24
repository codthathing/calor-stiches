import { useContext, useEffect } from "react";
import { ToggleRegister } from "../../../contextpage";
import PageLinkTemplate from "../pagelinks";
import wishlistImage from "../../../../asset/images-icons/productImages/design_eight.jpeg";
import facebook from "../../../../asset/images-icons/handleIcons/iconmonstr-facebook-4-240.png";
import twitter from "../../../../asset/images-icons/handleIcons/iconmonstr-twitter-4-240.png";

const WishListPage = () => {

  const { setNavbar, setWishList, setToggleSideMenu } = useContext(ToggleRegister);

  useEffect(() => {
    setNavbar(true);
    setWishList(false);
    setToggleSideMenu(false);
    window.scrollTo(0, 0);
  }, [])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "CS wishlist", linkArrow: false },
  ]

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main className="productWishlistCartMain">
        <section className="productWishlistCartSection">
          <div id="productWishlistTopicsDiv">
            <p className="wishlistCartTopicTexts">Products</p>
            <p className="wishlistCartTopicTexts">Price</p>
            <p className="wishlistCartTopicTexts">Stock Status</p>
          </div>
          <main>
            <div className="wishlistCartDiv">
              <div className="wishlistCartIconImageTextDiv">
                <i className="fa-solid fa-xmark wishlistCartDeleteIcon"></i>
                <div className="wishlistCartImageNameDiv">
                  <img src={wishlistImage} alt="" className="wishlistCartMainImage" />
                  <div className="wishlistNameDateDiv">
                    <p className="wishlistCartName">Apple Cinnam Pants</p>
                    <p className="wishlistDate">0ctober 7, 2024</p>
                  </div>
                </div>
              </div>
              <div className="wishlistCartPriceValueDiv">
                <p className="wishlistCartPriceText">Price</p>
                <p className="wishlistCartPriceValue">$20.00</p>
              </div>
              <div className="wishlistStatusDiv">
                <p className="wishlistStatusText">Stock Status</p>
                <p className="wishlistStatus">In Stock</p>
              </div>
              <div className="wishlistToCartDiv">
                <button className="wishlistToCartBtn">ADD TO CART</button>
              </div>
            </div>
            <div className="wishlistCartDiv">
              <div className="wishlistCartIconImageTextDiv">
                <i className="fa-solid fa-xmark wishlistCartDeleteIcon"></i>
                <div className="wishlistCartImageNameDiv">
                  <img src={wishlistImage} alt="" className="wishlistCartMainImage" />
                  <div className="wishlistNameDateDiv">
                    <p className="wishlistCartName">Apple Cinnam Pants</p>
                    <p className="wishlistDate">0ctober 7, 2024</p>
                  </div>
                </div>
              </div>
              <div className="wishlistCartPriceValueDiv">
                <p className="wishlistCartPriceText">Price</p>
                <p className="wishlistCartPriceValue">$20.00</p>
              </div>
              <div className="wishlistStatusDiv">
                <p className="wishlistStatusText">Stock Status</p>
                <p className="wishlistStatus">In Stock</p>
              </div>
              <div className="wishlistToCartDiv">
                <button className="wishlistToCartBtn">ADD TO CART</button>
              </div>
            </div>
          </main>
        </section>
        <div id="wishlistHandleShare">
          <div className="wishlistHandleDiv">
            <img src={facebook} alt="" className="wislistHandleShareImg" />
            <p className="wishlistHandleText">SHARE</p>
          </div>
          <div className="wishlistHandleDiv">
            <img src={twitter} alt="" className="wislistHandleShareImg" />
            <p className="wishlistHandleText">TWEET</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WishListPage;