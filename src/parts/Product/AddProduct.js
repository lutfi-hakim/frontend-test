import React, { useEffect, useState } from "react";
import { convertToRaw, EditorState } from "draft-js";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./AddProduct.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/product";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  // setEditorState(
  //   EditorState.createWithContent(
  //     convertFromRaw(JSON.parse(current.description))
  //   )
  // );
  const updateTextDescription = async (state) => {
    await setEditorState(state);
    const data = convertToRaw(editorState.getCurrentContent());
    if (data) {
      console.log(data);
    }
  };

  const inputArr = [
    {
      type: "text",
      name: "",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);
  console.log("variasi:", arr);
  const addInput = () => {
    setArr((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.name;
    console.log(index);
    setArr((s) => {
      const newArr = s.slice();
      newArr[index] = e.target.value;

      return newArr;
    });
  };

  const handleChangeName = (text) => {
    setName(text);
  };

  const handleChangeSku = (text) => {
    setSku(text);
  };

  const handleChangeBrand = (text) => {
    setBrand(text);
  };

  const handleSubmitForm = (e) => {
    const items = [
      {
        id: Math.random().toString(16).slice(2),
        name: name,
        image:
          "https://www.agres.id/assets/images/product/616157e06505c_lenovo-laptop-yoga-slim-7i-pro-14-subseries-gallery-1.png",
        sku: sku,
        brand: brand,
        description: description,
      },
    ];

    const oldTest = localStorage.getItem("products")
      ? localStorage.getItem("products")
      : "[]";
    const arrTest = JSON.parse(oldTest);
    localStorage.setItem("products", JSON.stringify([...arrTest, ...items]));
    alert("Sudah di Tangkap!");

    dispatch(addProduct(name, sku, brand));
    navigate("/");
  };

  return (
    <div className="add-product">
      <div className="top-head">
        <div className="title">Tambah Produk</div>
      </div>
      <form className="add" onSubmit={handleSubmitForm}>
        <label htmlFor="nama">Nama</label>
        <input
          type="text"
          id="nama"
          name="nama"
          placeholder="Type in your nama.."
          autoComplete="off"
          required
          value={name}
          onChange={(e) => handleChangeName(e.target.value)}
        />
        <label htmlFor="sku">SKU</label>
        <input
          type="text"
          id="sku"
          name="sku"
          placeholder="Type in your SKU.."
          autoComplete="off"
          required
          value={sku}
          onChange={(e) => handleChangeSku(e.target.value)}
        />
        <label htmlFor="brand">Brand</label>
        <select
          name="brand"
          id="brand"
          value={brand}
          onChange={(e) => handleChangeBrand(e.target.value)}
        >
          <option disabled selected>
            Select Cource
          </option>
          <option value="Lenovo">Lenovo</option>
          <option value="Acer">Acer</option>
          <option value="Asus">Asus</option>
          <option value="HP">HP</option>
          <option value="MSI">MSI</option>
        </select>
        <div className="editors">
          <label htmlFor="deskripsi">Deskripsi</label>
          <div className="editor">
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={updateTextDescription}
              placeholder="Enter your text here:"
              editorStyle={{
                height: 200,
                fontSize: 14,
              }}
            />
          </div>
        </div>
        <div className="variasi">
          <div className="variasi-add">
            <label htmlFor="variasi">Variasi</label>
            <a className="btn-add" onClick={addInput}>
              + Tambah Variasi
            </a>
          </div>
          {arr.map((item, i) => {
            return (
              <div className="variasi-input">
                <div className="add-input">
                  <label htmlFor="nama">{item.name}</label>
                  <input
                    onChange={handleChange}
                    name={item.name}
                    value={item.value}
                    id={item.id}
                    type={item.type}
                    size="40"
                  />
                </div>
                {/* <div className="add-input">
                  <label htmlFor="sku_var">SKU</label>
                  <input
                    onChange={handleChange}
                    name="sku_var"
                    value={item.value}
                    id={i}
                    type={item.type}
                    size="40"
                  />
                </div>
                <div className="add-input">
                  <label htmlFor="harga">Harga Jual</label>
                  <input
                    onChange={handleChange}
                    name="harga"
                    value={item.value}
                    id={i}
                    type={item.type}
                    size="40"
                  />
                </div> */}
              </div>
            );
          })}
        </div>
        <input type="submit" name="submit" value="Simpan" />
      </form>
    </div>
  );
}

export default AddProduct;
