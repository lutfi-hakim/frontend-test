import React, { useState } from "react";
import AddProduct from "../../parts/Product/AddProduct";
import Product from "../../parts/Product/Product";

import "./Index.scss";

const tabItems = [
  {
    id: 1,
    title: "Daftar Produk",
    content: <Product />,
  },
  {
    id: 2,
    title: "Tambah Produk",
    content: <AddProduct />,
  },
];

function Tabs() {
  const [active, setActive] = useState(1);

  return (
    <div className="wrapper">
      <div className="tabs">
        {tabItems.map(({ id, icon, title }) => {
          return (
            <div
              key={id}
              className={active ? "tabitem" : "tabitem tabitem--inactive"}
              onClick={() => setActive(id)}
            >
              <p className="tabitem__title">{title}</p>
            </div>
          );
        })}
      </div>
      <div className="content">
        {tabItems.map(({ id, content }) => {
          return <div key={id}>{active === id ? content : ""}</div>;
        })}
      </div>
    </div>
  );
}

export default Tabs;
