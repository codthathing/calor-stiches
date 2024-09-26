import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ToggleRegister } from "../../contextpage";

const ProductView = () => {
  const [name, setName] = useState("HEllo");
  const { products } = useContext(ToggleRegister);
  const { productName } = useParams();

  useEffect(() => {
    const product = products.find((product) => product.productName === productName);
    setName(product.productName);
  }, [name]);

  return (
    <section className="navSections">
      <main id="productViewMain">
        <header id="productViewHeader">
          <p id="productViewText">{name}</p>
          <Link to="/" style={{ color: "black" }}>Back</Link>
        </header>
      </main>
    </section>
  );
}

export default ProductView;