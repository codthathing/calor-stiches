import { useState } from "react";

const PageArticle = () => {

  const [currentArticle, setCurrentArticle] = useState({
    articleShown: true,
    articleText: "Love it! It's knitted from extra fine mulesing free Merino wool and really has kept its shape over time. Can't wait to buy some more colours and new awesome styles!",
    articleAuthor: "LOLA DARK"
  })
  // if (currentArticle.articleShown) {
  //   setTimeout(() => {
  //     setCurrentArticle({
  //       ...currentArticle,
  //       articleShown: false,
  //       articleText: "You can never take too much care over the choice of your shoes. Too many women think they are unimportant, but the real proof of an elegant woman is what is on are feet.",
  //       articleAuthor: "CHRISTIAN DIOR"
  //     })
  //   }, 2500)
  // } else {
  //   setTimeout(() => {
  //     setCurrentArticle({
  //       ...currentArticle,
  //       articleShown: true,
  //       articleText: "Love it! It's knitted from extra fine mulesing free Merino wool and really has kept its shape over time. Can't wait to buy some more colours and new awesome styles!",
  //       articleAuthor: "LOLA DARK"
  //     })
  //   }, 2500)
  // }

  return (
    <article id="pageArticle">
      <p id="articleText">{currentArticle.articleText}</p>
      <cite id="articleAuthor">- {currentArticle.articleAuthor}</cite>
    </article>
  );
}

export default PageArticle;