import React, { useContext } from "react";
import { ToggleRegister } from "./contextpage";

const Search = () => {
  const {setSearch} = useContext(ToggleRegister)
  return (
    <section id="searchSection" className="navSections whiteBackSections">
      <div onClick={() => setSearch(false)} className="navBack"><i class="fa-solid fa-xmark navBackIcon"></i></div>
      <footer className="navFooter"></footer>
    </section>
  );
}

export default Search;