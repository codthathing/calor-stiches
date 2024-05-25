import React from "react";

const CollectionTemplate = ({collectionName}) => {
  return (
    <div className="mainCollection">
      <main className="collectionMain">
        <h1 className="collectionTopic">{collectionName}</h1>
        <a href="" className="paragraphStyles collectionLink">VIEW COLLECTION</a>
      </main>
    </div>
  );
}

export default CollectionTemplate;