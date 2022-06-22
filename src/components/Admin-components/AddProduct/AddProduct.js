import axios from "axios";
import React from "react";
import ComplatedPost from "../ComplatedPost";
import Input from "./Input";
import "./product.scss";
import Products from "./Products";

const AddProduct = () => {
  const [useImg, setUseImg] = React.useState(null);
  const [imgHelp, setImgHelp] = React.useState(null);

  const [productInput, setProductInput] = React.useState({
    brand: "",
    content: "",
    prise: "",
  });

  const [getSize, setGetSize] = React.useState([]);

  const [productsas, setProductsas] = React.useState(false);
  const [errorBound, setErrorBound] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [dragBoolean, setDragBoolean] = React.useState(false);

  const handleGetImg = (e) => {
    e.preventDefault();
    setImgHelp(e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0]);
    let input = e.dataTransfer ? e.dataTransfer : e.target;
    let reader = new FileReader();
    reader.onload = function () {
      let dataURL = reader.result;
      setUseImg(dataURL);
    };
    reader.readAsDataURL(input.files[0]);
  };

  const sendToDate = () => {
    const data = new FormData();
    setSending(true);
    for (const key in productInput) {
      data.append(key, productInput[key]);
    }
    data.append("sizes", getSize);
    data.append("productImgUrl", imgHelp);
    axios
      .post("http://localhost:5252/api/products", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((e) => {
        setProductsas(true);
        sending(false);
      })
      .catch((e) => setErrorBound(e));
    setImgHelp(null);
    setGetSize([]);
  };
  const removeImg = () => {
    setUseImg(null);
    setImgHelp(null);
    setDragBoolean(false);
  };

  const onDragReporterOver = (e) => {
    e.preventDefault();
    setDragBoolean(true);
  };
  const onDragReporterLeave = (e) => {
    e.preventDefault();
    setDragBoolean(false);
  };
  const onChangeProductInputs = (e) => {
    const { name, value } = e.target;
    setProductInput({ ...productInput, [name]: value });
  };

  return (
    <main>
      <div className="head-title" id="scrollto_head">
        <div className="left">
          <h1>Add Product</h1>
        </div>
      </div>

      <div className="add_product">
        <Input
          sending={sending}
          sendToDate={sendToDate}
          onChangeProductInputs={onChangeProductInputs}
          productInput={productInput}
          setGetSize={setGetSize}
        />
        <div
          className="product_img"
          onDragOver={(e) => onDragReporterOver(e)}
          onDragLeave={(e) => onDragReporterLeave(e)}
        >
          <div
            className={dragBoolean ? "product_box active" : "product_box"}
            style={useImg ? { border: "none" } : null}
          >
            {useImg ? <img src={useImg} alt="" /> : null}
            {!useImg ? (
              <div className="icons">
                <i className="bx bx-cloud-upload"></i>
                <p>Drop img or click here</p>
              </div>
            ) : null}
            {imgHelp ? (
              <>
                <i className="bx bx-x x_mare" onClick={removeImg}></i>
                <p className="file_name">Youre file name {imgHelp.name}</p>
              </>
            ) : null}
            <input
              className="inputDrag"
              type="file"
              id="addFile"
              onChange={handleGetImg}
              onDrop={handleGetImg}
            />
          </div>
        </div>

        <div className={productsas ? "product_done active" : "product_done"}>
          <h3>Done</h3>
        </div>
      </div>

      <ComplatedPost checked={productsas} />
      <Products changed={productsas} />
    </main>
  );
};

export default AddProduct;
