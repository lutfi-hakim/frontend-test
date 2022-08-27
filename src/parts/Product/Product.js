import React from "react";
import ListItem from "../../components/Cards/ListItem";

import data from "../../constans/data.json";

import "./product.scss";

function Product() {
  return (
    <div className="list-product">
      <div className="top-head">
        <div className="title">Daftar Produk</div>
      </div>
      <ListItem data={data} />
    </div>
  );
}

export default Product;
