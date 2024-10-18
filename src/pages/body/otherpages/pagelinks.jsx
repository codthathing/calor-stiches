import { Link } from "react-router-dom";

const PageLinkTemplate = ({ id, linkDirect, linkText, linkArrow }) => {
  return (
    <li className="productListItem" key={id}>
      <Link to={linkDirect} className="productLink">
        <p className="productLinkText">{linkText}</p>
        {linkArrow && <i className="fa-solid fa-chevron-right productLinkIcon"></i>}
      </Link>
    </li>
  );
}

export default PageLinkTemplate;