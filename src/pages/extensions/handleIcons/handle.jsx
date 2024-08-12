import React from "react";
import facebook from "./iconmonstr-facebook-4-240.png";
import instagram from "./iconmonstr-instagram-11-240.png";
import tiktok from "./tiktok_black.png";
import twitter from "./iconmonstr-twitter-4-240.png";

const Handle = () => {
  const handleIcons = [
    {id: 0, handleIcon: facebook, handleAlt: "facebook_handle"},
    {id: 1, handleIcon: instagram, handleAlt: "instagram_handle"},
    {id: 2, handleIcon: tiktok, handleAlt: "tiktok_handle"},
    {id: 3, handleIcon: twitter, handleAlt: "twitter_handle"},
  ]
  return (
    <>
      {handleIcons.map(({id, handleIcon, handleAlt}) => {
        return <img key={id} src={handleIcon} alt={handleAlt} className="newsHandle" />
      })}
    </>
  );
}

export default Handle;