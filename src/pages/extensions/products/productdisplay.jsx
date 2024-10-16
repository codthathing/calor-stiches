import React, { useState, useContext, useEffect } from "react";
import { ToggleRegister } from "../../contextpage";
import ProductTemplate from "../../productFunc/productTemplate";
import PageLinkTemplate from "../../pagelinks";

const ProductDisplay = () => {
  const { latestItems, setToggleSideMenu, products } = useContext(ToggleRegister);
  useEffect(() => {
    window.scrollTo(0, 0);
    setToggleSideMenu(false);
  }, [latestItems]);

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: false },
  ]
  const [mapProducts, setMapProducts] = useState(0);
  const shownProducts = 4;
  const pageNumbers = [];
  const [showFilterDiv, setShowFilterDiv] = useState(false);
  const [ showFilterSection, setShowFilterSection ] = useState(false);

  for (let i = 0; i < Math.floor(products.length / shownProducts); i++) {
    pageNumbers.push(i);
  };

  return (
    <div className="otherPages">
      <ul className="productList">
        {pageLinkDetails.map((details) => {
          return <PageLinkTemplate {...details}></PageLinkTemplate>
        })}
      </ul>
      <main id="productAllMain" className="productMains">
        <div className="productShownDiv">
          <div id="productFilterIconTextDiv" onClick={() => setShowFilterSection(true)}>
            <i class="fa-solid fa-arrow-up-wide-short productIcons"></i>
            <p className="productShownText">FILTERS</p>
          </div>
          <div className="productFilterDiv">
            <div className="productTexIcontDiv" onClick={() => setShowFilterDiv(!showFilterDiv)}>
              <i className="fa-solid fa-angle-down productIcons"></i>
              <p className="productTexts">{"Date, new to old"}</p>
            </div>
            {showFilterDiv && <div className="productInnerDivs">
              <p className="productFilterTexts">Best selling</p>
              <p className="productFilterTexts">Rating</p>
              <p className="productFilterTexts">Aphabetically, A to Z</p>
              <p className="productFilterTexts">Aphabetically, Z to A</p>
              <p className="productFilterTexts">Price, low to high</p>
              <p className="productFilterTexts">Price, high to low</p>
              <p className="productFilterTexts">Date, old to new</p>
              <p className="productFilterTexts">Date, new to old</p>
            </div>}
          </div>
        </div>
        <section className="productFilterSection">
          {products.slice(mapProducts, mapProducts + shownProducts).map((products) => {
            return <ProductTemplate {...products}></ProductTemplate>
          })}
        </section>
        <div className="productNavigationDiv">
          {pageNumbers.map((pages) => {
            return <p className="productNavigationText" onClick={() => setMapProducts(shownProducts * pages)}>{pages + 1}</p>
          })}
        </div>
      </main>
      {showFilterSection && <section id="productFilterOptionsSection" className="productFilterSectionMainFixed">
        <main id="productFilterOptionsMain" className="productFilterSectionMainFixed">
          <div id="productFilterHeader" className="productFilterMainDivs">
            <p id="filterHeaderText">Flters</p>
            <i className="fa-solid fa-xmark productIcons" onClick={() => setShowFilterSection(false)} id="filterHeaderBackIcon"></i>
          </div>
          <div className="productFilterMainDivs">
            <p className="productFilterText">Product Type</p>
            <section className="productFilterSections">
              <div className="productFilterDivs">
                <input type="checkbox" className="filterCheckbox" />
                <p className="filterTextsLength">Accessories ({0})</p>
              </div>
            </section>
          </div>
          <div className="productFilterMainDivs">
            <p className="productFilterText">Price</p>
            <section id="productFilterPriceSection">
              <input type="range" name="" id="" className="filterPriceRange" />
              <div id="filterPriceInnerDiv">
                <p className="filterPriceValueTexts">${20}</p>
                <p className="filterPriceValueTexts"></p>
              </div>
            </section>
          </div>
          <div className="productFilterMainDivs">
            <p className="productFilterText">Color</p>
            <section className="productFilterSections">
              <div className="productFilterDivs">
                <div className="filterColorInnerDivs"></div>
                <p className="filterTextsLength">Red ({0})</p>
              </div>
            </section>
          </div>
          <div className="productFilterMainDivs">
            <p className="productFilterText">Size</p>
            <section className="productFilterSections">
              <div className="productFilterDivs">
                <input type="checkbox" name="" id="" className="filterCheckbox" />
                <p className="filterTextsLength">L ({0})</p>
              </div>
              <div className="productFilterDivs">
                <input type="checkbox" name="" id="" className="filterCheckbox" />
                <p className="filterTextsLength">L ({0})</p>
              </div>
            </section>
          </div>
          <footer id="productFilterFooter"></footer>
        </main>
      </section>}
    </div>
  );
}

export default ProductDisplay;