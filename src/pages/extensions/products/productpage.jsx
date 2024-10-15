import React, { useContext, useEffect, useState } from "react";
import { ToggleRegister } from "../../contextpage";
import PageLinkTemplate from "../../pagelinks";
import ProductTemplate from "../../productFunc/productTemplate";

const ProductPage = () => {

  const { setNavbar, setToggleSideMenu, products } = useContext(ToggleRegister);

  useEffect(() => {
    setNavbar(true);
    setToggleSideMenu(false);
    window.scrollTo(0, 0);
  }, [])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: false },
  ]
  const [mapProducts, setMapProducts] = useState(0);
  const shownProducts = 2;
  const pageNumbers = [];

  for (let i = 0; i < Math.floor(products.length / shownProducts); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="otherPages">
      <ul className="productList">
        {pageLinkDetails.map((details) => {
          return <PageLinkTemplate {...details}></PageLinkTemplate>
        })}
      </ul>
      <main>
        <p>Showing {mapProducts + 1} - {mapProducts + shownProducts} of {products.length} products</p>
        <section>
          {products.slice(mapProducts, mapProducts + shownProducts).map((products) => {
            return <ProductTemplate {...products}></ProductTemplate>
          })}
        </section>
        <div>
          {pageNumbers.map((pages) => {
            return <p onClick={() => setMapProducts(shownProducts * pages)}>{pages + 1}</p>
          })}
        </div>
      </main>
    </div>
  );
}

export default ProductPage;