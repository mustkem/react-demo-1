import React from "react";

function Product({ item, productDetailsHandler }) {
  return (
    <li>
      <div onClick={() => productDetailsHandler(item)} className="item-card">
        <img alt={item.Title} src={item.Poster} />
        <span>{item.Title}</span>
      </div>
    </li>
  );
}

export default Product;
