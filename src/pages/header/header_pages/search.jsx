import { useContext, useState, useEffect } from "react";
import { ToggleRegister } from "../../contextpage";
import ProductTemplate from "../../body/frontpage/innerpages/products_func/productTemplate";
import { useScroll } from "../usescroll";
import { useFocus } from "../header_pages/register_page/main_pages/usefocus";

const Search = () => {

  const { setSearch, search, products } = useContext(ToggleRegister)
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");
  const { inputFocus } = useFocus(search);
  const [searchItems, setSearchItems] = useState(products);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    setSearchItems(products.filter((items) => (items.productName).includes(searchInput.toLowerCase())));
  }, [searchInput]);

  return (
    <section ref={addScroll} id="searchSection" className="whiteBackSections">
      <div id="searchHeader" className="navBack"><i ref={removeScroll} onClick={() => setSearch(false)} className="fa-solid fa-xmark navBackIcon"></i></div>
      <main id="searchMain">
        <form id="searchForm">
          <input ref={inputFocus}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            id="searchInput"
            placeholder="What are you looking for?" />
          <div id="searchIconDiv">
            <i className="fa-solid fa-magnifying-glass" id="searchIcon" type="submit"></i>
          </div>
        </form>
        <div id="searchProductDiv">
          {searchItems.length > 0 ?
            <>
              <h1 className="navHeadText" id="searchHead">Popular Product</h1>
              <section id="searchProductSection">
                {searchItems.map((details) => {
                  return <ProductTemplate key={details.id} {...details}></ProductTemplate>
                })}
              </section>
            </> :
            <p id="absentText">`{searchInput}` is not available.</p>
          }
        </div>
      </main>
      <footer id="searchFooter" className="navFooter"></footer>
    </section>
  );
}

export default Search;