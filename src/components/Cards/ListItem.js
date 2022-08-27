import React from "react";

import "./listitem.scss";

function ListItem({ data }) {
  console.log(data);
  return (
    <>
      {data &&
        data.data.map((item, index) => {
          return (
            <div className="card">
              <div className="content-1">
                <img src="https://i.postimg.cc/cHgcX5zQ/nike.png" alt="" />
              </div>
              <div className="content-2">
                <div className="branding">
                  <span>Lenovo Premium</span>
                  <h4>Lenovo Slim Idepad 4</h4>
                </div>
              </div>
              <div className="content-3">
                <div className="sku">
                  <h5>SKU</h5>
                  <span>A01</span>
                </div>
                <div className="price">
                  <h5>Harga</h5>
                  <span>Rp. 12,995,000</span>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default ListItem;
