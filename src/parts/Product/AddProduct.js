import React, { useEffect, useState } from "react";
import {
  convertFromRaw,
  EditorState,
  ContentState,
  convertToRaw,
} from "draft-js";
import { convertToHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./AddProduct.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/product";
import { useNavigate } from "react-router-dom";

import IconAdd from "../../assets/icon/add.svg";
import IconDel from "../../assets/icon/delete.svg";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [brand, setBrand] = useState("");

  const [inputList, setinputList] = useState([
    { nama: "", sku: "", harga: "" },
  ]);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  console.log(convertedContent);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([...inputList, { nama: "", sku: "", harga: "" }]);
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
        description: convertedContent,
        variasi: inputList,
      },
    ];

    const oldTest = localStorage.getItem("products")
      ? localStorage.getItem("products")
      : "[]";
    const arrTest = JSON.parse(oldTest);
    localStorage.setItem("products", JSON.stringify([...arrTest, ...items]));
    alert("Berhasil!");

    dispatch(addProduct(items));
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
          <option selected>Select Cource</option>
          <option value="">...</option>
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
              onEditorStateChange={handleEditorChange}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              editorStyle={{
                height: 200,
                fontSize: 14,
              }}
            />
          </div>
          {/* <div
            className="preview"
            dangerouslySetInnerHTML={createMarkup(convertedContent)}
          ></div> */}
        </div>
        <div className="variasi">
          <div className="variasi-add">
            <label htmlFor="variasi">Variasi</label>
          </div>
          {inputList.map((x, i) => {
            return (
              <div className="variasi-input">
                <div className="add-input">
                  <label>Nama</label>
                  <input
                    type="text"
                    name="nama"
                    placeholder="Nama"
                    // value={inputList["nama"]}
                    onChange={(e) => handleinputchange(e, i)}
                  />
                </div>
                <div className="add-input">
                  <label>SKU</label>
                  <input
                    type="text"
                    name="sku"
                    placeholder="SKU"
                    onChange={(e) => handleinputchange(e, i)}
                  />
                </div>
                <div className="add-input">
                  <label>Harga</label>
                  <input
                    type="text"
                    name="harga"
                    placeholder="Harga"
                    onChange={(e) => handleinputchange(e, i)}
                  />
                </div>
                <div className="action-va">
                  {inputList.length !== 1 && (
                    <button onClick={() => handleremove(i)}>
                      <img src={IconDel} alt="" />
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button onClick={handleaddclick}>
                      <img src={IconAdd} alt="" />
                    </button>
                  )}
                </div>
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
