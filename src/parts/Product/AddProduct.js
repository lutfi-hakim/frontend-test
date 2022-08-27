import React, { useEffect, useState } from "react";
import { convertToRaw, EditorState } from "draft-js";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./AddProduct.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/product";
import { useNavigate } from "react-router-dom";

function AddProduct() {
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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");

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
    e.preventDefault();
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
        <input type="submit" name="submit" value="Simpan" />
      </form>
    </div>
  );
}

export default AddProduct;
