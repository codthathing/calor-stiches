import React from "react";
import imagePost from "./productImages/style.jpg"

const PostTemplate = () => {

  const posts = [
    {
      id: 0,
      postImage: imagePost,
      postDate: "OCTOBER 24, 2023 | FASHION, LIFESTYLE",
      postHead: "The Perfect Guide To Pick Your Perfect Duffle 2024!",
      postParagraph: "Summer is here, the season of road trips, redeyes, and getaways is upon us. Add in regularly like your Tuesday cycling class and a duffle..."
    },
    {
      id: 2,
      postImage: imagePost,
      postDate: "OCTOBER 24, 2023 | DENIUM, INDUSTRY",
      postHead: "Products With Purpose: What is clean denim...",
      postParagraph: "We’ve come up with a few tips, in the form of a practical care guide, to increase your products’ lifespan while keeping things like energy..."
    },
    {
      id: 3,
      postImage: imagePost,
      postDate: "OCTOBER 24, 2023 | GOLD, STYLE",
      postHead: "Gold Seal of Sustainability: GOTS, Finally Explained!",
      postParagraph: "One of the reasons why sustainable brands tend to have higher prices than what’s considered the average it’s because the product’s price reflects its..."
    }
  ]

  return (
    <>
      {posts.map(({ id, postImage, postDate, postHead, postParagraph }) => {
        return (
          <div key={id} className="mainPostDiv">
            <img src={postImage} className="postImage" alt="post_image" />
            <p className="paragraphStyles postDate">{postDate}</p>
            <h1 className="postHead">{postHead}</h1>
            <p className="postParagraph">{postParagraph}</p>
            <span className="postRead">READ MORE</span>
          </div>
        );
      })}
    </>
  );
}

export default PostTemplate;