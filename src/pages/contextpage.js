import React, { createContext, useState } from "react";

export const ToggleRegister = createContext(); 

export const OptNavProvider = ({children}) => {
  const [register, setRegister] = useState(false);
  const [search, setSearch] = useState(false);
  const [wishList, setWishList] = useState(false);
  const [cart, setCart] = useState(false);
  const [toggleSideMenu, setToggleSideMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [currency, setCurrency] = useState(false);
  const [presentRegister, setPresentRegister] = useState("LOGIN");

  return (
    <ToggleRegister.Provider value={{register, setRegister, presentRegister, setPresentRegister, wishList, setWishList, cart, setCart, search, setSearch, toggleSideMenu, setToggleSideMenu, navbar, setNavbar, currency, setCurrency}}>
      {children}
    </ToggleRegister.Provider>
  );
}