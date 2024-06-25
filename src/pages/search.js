import React, { useContext } from "react";
import { ToggleRegister } from "./contextpage";
import ProductTemplate from "./extensions/productTemplate";
import { productDetails } from "./extensions/products/products";

const Search = () => {
  const {setSearch} = useContext(ToggleRegister)
  return (
    <section id="searchSection" className="navSections whiteBackSections">
      <div onClick={() => setSearch(false)} className="navBack"><i class="fa-solid fa-xmark navBackIcon"></i></div>
      <main id="searchMain">
        <form id="searchForm">
          <input type="text" id="searchInput" placeholder="What are you looking for?"/>
          <i className="fa-solid fa-magnifying-glass" id="searchIcon" type="submit"></i>
        </form>
        <div className="navDiv">
          <h1 className="navHeadText" id="searchHead">Popular Product</h1>
          <section>
            {productDetails.map((details) => {
              return <ProductTemplate key={details.id} {...details}></ProductTemplate>
            })}
          </section>
        </div>
      </main>
      <footer className="navFooter"></footer>
    </section>
  );
}

export default Search;