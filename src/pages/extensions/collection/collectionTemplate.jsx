import React from "react";
import { Link } from "react-router-dom";
import dressCollection from "./collectImages/design_nine.jpeg";
import tshirtCollection from "./collectImages/design_ten.jpeg";
import outwearCollection from "./collectImages/design_eleven.jpeg";

const CollectionTemplate = () => {
  const collections = [
    { id: 0, collectionImage: dressCollection, collectionName: "Dresses" },
    { id: 1, collectionImage: tshirtCollection, collectionName: "T-shirts" },
    { id: 2, collectionImage: outwearCollection, collectionName: "Outerwear" }
  ]

  return (
    <>
      {collections.map(({ id, collectionImage, collectionName }) => {
        return (
          <div key={id} style={{ backgroundImage: `url(${collectionImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="mainCollection">
            <main className="collectionMain">
              <h1 className="collectionTopic">{collectionName}</h1>
              <Link to={`/product/collection/${collectionName}`} className="paragraphStyles collectionLink">VIEW COLLECTION</Link>
            </main>
          </div>
        );
      })}
    </>
  );
}

export default CollectionTemplate;