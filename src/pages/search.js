import React, { useContext } from "react";
import { ToggleRegister } from "./contextpage";
import ProductTemplate from "./extensions/productTemplate";
import { productDetails } from "./extensions/products/products";
import { useScroll } from "./usescroll";
import { useFocus } from "./register_page/main_pages/usefocus";

const Search = () => {

  const { setSearch, search } = useContext(ToggleRegister)
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");
  const { inputFocus } = useFocus(search);

  return (
    <section ref={addScroll} id="searchSection" className="navSections whiteBackSections">
      <div id="searchHeader" className="navBack"><i ref={removeScroll} onClick={() => setSearch(false)} class="fa-solid fa-xmark navBackIcon"></i></div>
      <main id="searchMain">
        <form id="searchForm">
          <input ref={inputFocus} type="text" id="searchInput" placeholder="What are you looking for?" />
          <i className="fa-solid fa-magnifying-glass" id="searchIcon" type="submit"></i>
        </form>
        <div id="searchProductDiv">
          <h1 className="navHeadText" id="searchHead">Popular Product</h1>
          <section id="searchProductSection">
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