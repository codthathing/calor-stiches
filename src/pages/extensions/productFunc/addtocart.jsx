import React, { useContext, useReducer } from "react";
import { ToggleRegister } from "../../contextpage";

const AddToCart = ({ id }) => {
  const { products, cartItems } = useContext(ToggleRegister);
  const changeText = (state, action) => {
    if (action.display === "ADD") {
      return "ITEM ADDED";
    } else if (action.display === "INCREASE") {
      return "ITEM INCREASED";
    } else if (action.display === "DEFAULT") {
      return "ADD TO CART";
    };
  };
  const cartText = "ADD TO CART";
  const [state, dispatch] = useReducer(changeText, cartText);

  const AddToCartFunc = (id) => {
    const selectedItem = products.find((item) => item.id === id);
    const { productImage, productName, productPrice, averagePrice, productDetails, cartAmt } = selectedItem;
    if (cartItems.some(item => item.productName === selectedItem.productName)) {
      let increseItem = cartItems.find((items) => items.productName === selectedItem.productName);
      increseItem.cartAmt += 1;
      dispatch({ display: "INCREASE" });
    } else {
      if (selectedItem.averagePrice) {
        cartItems.push({ id: cartItems.length, productImage, productName, averagePrice, productDetails, cartAmt });
      } else {
        cartItems.push({ id: cartItems.length, productImage, productName, productPrice, productDetails, cartAmt });
      };
      dispatch({ display: "ADD" });
    };
    setTimeout(() => {
      dispatch({display: "DEFAULT"});
    }, 1250);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  return (<p className="paragraphStyles selectOption" onClick={() => AddToCartFunc(id)}>{state}</p>);
};

export default AddToCart;