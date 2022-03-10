import axios from "axios";
import React from "react";

import setProduct from "../../../redux/action/setProduct";
import Input from "./Input";
import "./product.scss";

const AddProduct = () => {
  const fileRef = React.useRef();
  const [getFileName, setGetFileName] = React.useState(null);
  const [useImg, setUseImg] = React.useState(null);
  const [imgHelp, setImgHelp] = React.useState(null);
  const [sizeVal, setSize] = React.useState([]);

  const [brandValue, setBrandValue] = React.useState("");
  const [priseValue, setPriseValue] = React.useState("");

  const handleGetImg = (e) => {
    setImgHelp(e.target.files[0]);

    let input = e.target;
    let reader = new FileReader();
    reader.onload = function () {
      let dataURL = reader.result;
      setUseImg(dataURL);
    };
    reader.readAsDataURL(input.files[0]);
    setGetFileName(input.files[0].name);
  };

  const sendToDte = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("brand", brandValue);
    data.append("sizes", sizeVal);
    data.append("prise", priseValue);
    data.append("productImgUrl", imgHelp);

    axios
      .post("http://localhost:5252/api/products", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };
  const removeImg = () => {
    setGetFileName(null);
    setUseImg(null);
  };

  const getSize = (e) => {
    setSize((prev) => [...prev, +e]);
  };

  const onChangeValues = (e) => {
    setBrandValue(e);
  };
  const onChangePriseValues = (e) => {
    setPriseValue(e);
  };
  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Add Product</h1>
        </div>
      </div>

      <ul className="box-info">
        <li>
          <i className="bx bx-shopping-bag"></i>
          <span className="text">
            <h3>25</h3>
            <p>Peoducts</p>
          </span>
        </li>
      </ul>

      <div className="add_product">
        <Input
          onChangeValues={onChangeValues}
          onChangePriseValues={onChangePriseValues}
        />
        <div className="product_img">
          <div
            className="product_box"
            style={useImg ? { border: "none" } : null}
          >
            {useImg ? <img src={useImg} alt="" /> : null}
            {!useImg ? (
              <div className="icons" onClick={() => fileRef.current.click()}>
                <i className="bx bx-cloud-upload"></i>
                <p>None img selected yet</p>
              </div>
            ) : null}
            {getFileName ? (
              <>
                <i className="bx bx-x" onClick={removeImg}></i>
                <p className="file_name">Youre file name {getFileName}</p>
              </>
            ) : null}
          </div>
          <input
            type="file"
            id="addFile"
            ref={fileRef}
            hidden
            onChange={handleGetImg}
          />
        </div>
      </div>
    </main>
  );
};

export default AddProduct;
