import React, { useContext } from "react";
import { ToggleRegister } from "./contextpage";

const Search = () => {
  const {setSearch} = useContext(ToggleRegister)
  return (
    <section id="searchSection" className="navSections whiteBackSections">
      <span onClick={() => setSearch(false)}><i class="fa-solid fa-xmark"></i></span>
    </section>
  );
}

export default Search;