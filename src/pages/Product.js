import React from "react";
import EditProduct from "../parts/Product/EditProduct";
import { Routes, Route, Link, useParams } from "react-router-dom";
function Product() {
  const { id } = useParams();
  return (
    <div className="container" style={{ marginTop: 40 }}>
      <EditProduct id={id} />
    </div>
  );
}

export default Product;
