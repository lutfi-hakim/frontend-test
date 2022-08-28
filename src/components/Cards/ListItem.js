import React from "react";

import "./listitem.scss";

function ListItem({ data }) {
  return (
    <>
      {data &&
        data.data.map((item, index) => {
          return (
            <div className="lists" key={index + 1}>
              <div className="card">
                <div className="content-1">
                  <img
                    src="https://www.agres.id/assets/images/product/616157e06505c_lenovo-laptop-yoga-slim-7i-pro-14-subseries-gallery-1.png"
                    alt=""
                  />
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
            </div>
          );
        })}
    </>
  );
}

export default ListItem;
