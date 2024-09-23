import React, { createContext, useState } from "react";
import { productDetails } from "./extensions/products/products";
import { hotitems } from "./extensions/hotItems/hotitems";
import { newarrivals } from "./extensions/newArrivals/newarrivals";
import { onsales } from "./extensions/onSale/onsale";
import product_one from "../pages/extensions/products/productImages/design_one.jpeg";

export const ToggleRegister = createContext();

export const OptNavProvider = ({ children }) => {
  const [register, setRegister] = useState(false);
  const [search, setSearch] = useState(false);
  const [wishList, setWishList] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [toggleSideMenu, setToggleSideMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [presentRegister, setPresentRegister] = useState("LOGIN");
  const [products, setProducts] = useState(productDetails);
  const [hotItems, setHotItems] = useState(hotitems);
  const [newArrivals, setNewArrivals] = useState(newarrivals);
  const [onSales, setOnSales] = useState(onsales);
  const [curSymbol, setCurSymbol] = useState("₦");

  return (
    <ToggleRegister.Provider value={{ register, setRegister, presentRegister, setPresentRegister, wishList, setWishList, cart, setCart, search, setSearch, toggleSideMenu, setToggleSideMenu, navbar, setNavbar, products, setProducts, curSymbol, setCurSymbol, hotItems, setHotItems, newArrivals, setNewArrivals, onSales, setOnSales, wishlistItems, setWishlistItems, cartItems, setCartItems }}>
      {children}
    </ToggleRegister.Provider>
  );
}