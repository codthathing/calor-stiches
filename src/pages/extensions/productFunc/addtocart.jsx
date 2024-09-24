import React, { useContext } from "react";
import { ToggleRegister } from "../../contextpage";

const AddToCart = ({id}) => {
  const { products, cartItems } = useContext(ToggleRegister);

  const AddToCartFunc = (id) => {
    const selectedItem = products.find((item) => item.id == id);
    const { productImage, productName, productPrice, averagePrice, productDetails, cartAmt } = selectedItem;
    if (cartItems.some(item => item.productName == selectedItem.productName)) {
      let increseItem = cartItems.find((items) => items.productName == selectedItem.productName);
      increseItem.cartAmt += 1;
    } else {
      if (selectedItem.averagePrice) {
        cartItems.push({ id: cartItems.length, productImage, productName, averagePrice, productDetails, cartAmt });
      } else {
        cartItems.push({ id: cartItems.length, productImage, productName, productPrice, productDetails, cartAmt });
      };
    };
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  return (<p className="paragraphStyles selectOption" onClick={() => AddToCartFunc(id)}>ADD TO CART</p>);
};

export default AddToCart;