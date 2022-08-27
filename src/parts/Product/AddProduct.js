import React, { useState } from "react";
import { convertToRaw, EditorState } from "draft-js";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./AddProduct.scss";

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
    console.log(data);
  };

  return (
    <div className="add-product">
      <div className="top-head">
        <div className="title">Tambah Produk</div>
      </div>
      <div className="add">
        <label htmlFor="nama">Nama</label>
        <input
          type="text"
          id="nama"
          name="nama"
          placeholder="Type in your nama.."
          autoComplete="off"
          required
        />
        <label htmlFor="sku">SKU</label>
        <input
          type="text"
          id="sku"
          name="sku"
          placeholder="Type in your SKU.."
          autoComplete="off"
          required
        />
        <label htmlFor="brand">Brand</label>
        <select name="brand" id="brand">
          <option disabled selected>
            Select Cource
          </option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JAVASCRIPT</option>
          <option value="c">C LANGUAGE</option>
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
      </div>
    </div>
  );
}

export default AddProduct;
