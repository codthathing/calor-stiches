import React from "react";

const CollectionTemplate = () => {
  const collections = [
    { id: 0, collectionName: "dresses" },
    { id: 1, collectionName: "t-shirts" },
    { id: 2, collectionName: "outerwear" }
  ]

  return (
    <>
      {collections.map(({ id, collectionName }) => {
        return (
          <div key={id} className="mainCollection">
            <main className="collectionMain">
              <h1 className="collectionTopic">{collectionName}</h1>
              <a href="" className="paragraphStyles collectionLink">VIEW COLLECTION</a>
            </main>
          </div>
        );
      })}
    </>
  );
}

export default CollectionTemplate;