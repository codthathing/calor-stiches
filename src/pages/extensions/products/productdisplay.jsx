import React, { useContext, useEffect } from "react";
import { ToggleRegister } from "../../contextpage";
import ProductTemplate from "../../productFunc/productTemplate";

const ProductDisplay = () => {
  const { latestItems, setToggleSideMenu } = useContext(ToggleRegister);
  useEffect(() => {
    window.scrollTo(0, 0);
    setToggleSideMenu(false);
  }, [latestItems]);

  return (
    <div className="otherPages">
      {latestItems.map((items) => {
        return <ProductTemplate {...items}></ProductTemplate>
      })}
    </div>
  );
}

export default ProductDisplay;