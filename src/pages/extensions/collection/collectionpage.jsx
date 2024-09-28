import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collections } from "./collectionTemplate";
import { ToggleRegister } from "../../contextpage";

const CollectionPage = () => {
  const [name, setName] = useState("");
  const { collectionName } = useParams();
  const { setToggleSideMenu } = useContext(ToggleRegister);

  useEffect(() => {
    const presentCollection = collections.find((items) => items.collectionName === collectionName);
    setName(presentCollection.collectionName);
    window.scrollTo(0, 0);
    setToggleSideMenu(false);
  }, [name])

  return (
    <div className="otherPages">
      <p>{name.toLocaleUpperCase()}</p>
    </div>
  );
}

export default CollectionPage;