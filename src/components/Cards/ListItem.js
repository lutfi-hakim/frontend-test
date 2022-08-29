import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import "./listitem.scss";

function ListItem({ data }) {
  const [getLo, setGetLo] = useState([]);
  // console.log(getLo);
  useEffect(() => {
    const lokData = JSON.parse(localStorage.getItem("products"));
    setGetLo(lokData);
  }, [setGetLo]);
  //   console.log(getLo);

  const handleDelete = (id) => {
    const oldData = getLo.filter((item) => item.id !== id);
    localStorage.setItem("products", JSON.stringify(oldData));
    window.location.reload(true);
  };

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  return (
    <>
      {getLo &&
        getLo.map((item, index) => {
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
                    <h4>{item.name}</h4>
                  </div>
                </div>
                <div
                  className="desk"
                  dangerouslySetInnerHTML={createMarkup(item.description)}
                ></div>
                <div className="content-3">
                  <div className="sku">
                    <h5>SKU</h5>
                    <span>{item.sku}</span>
                  </div>
                  <div className="price">
                    <h5>Harga</h5>
                    {item.variasi.map((i) => (
                      <span>Rp. {i.harga}</span>
                    ))}
                  </div>
                </div>
                <div className="actions">
                  <a href={`/product/edit/${item.id}`} className="edit">
                    Edit Produk
                  </a>
                  <a className="delete" onClick={() => handleDelete(item.id)}>
                    Hapus Produk
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default ListItem;
