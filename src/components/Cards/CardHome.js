import React from "react";

function CardHome({ data }) {
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
                    <span>{item.brand}</span>
                    <h4>{item.nama}</h4>
                  </div>
                </div>
                <div className="content-3">
                  <div className="sku">
                    <h5>Terjual</h5>
                    <span>{item.sold}</span>
                  </div>

                  <div className="price">
                    <h5>Harga</h5>
                    {item.variasi.map((i) => (
                      <span>Rp. {i.harga}</span>
                    ))}
                  </div>
                </div>
                <div className="actions">Rate({item.rating})</div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default CardHome;
