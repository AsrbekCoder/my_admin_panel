import React from "react";
import "./product.scss";
const AddProduct = () => {
  const fileRef = React.useRef();
  const [getFileName, setGetFileName] = React.useState(null);
  const [useImg, setUseImg] = React.useState(null);
  const [brandValue, setBrandValue] = React.useState("");
  const [discValue, setDiscValue] = React.useState("");
  const [sizeValue, setSizeValue] = React.useState("");
  const [priseValue, setPriseValue] = React.useState("");
  const handleGetImg = (e) => {
    let input = e.target;
    let reader = new FileReader();
    reader.onload = function () {
      let dataURL = reader.result;
      setUseImg(dataURL);
    };
    reader.readAsDataURL(input.files[0]);
    setGetFileName(input.files[0].name);
  };

  const sendToDte = () => {
    const obj = {
      brand: brandValue,
      main: discValue,
      size: sizeValue,
      prise: priseValue,
      imgUrl: useImg,
    };
    console.log(obj);
  };
  const removeImg = () => {
    setGetFileName(null);
    setUseImg(null);
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
        <div className="product_text">
          <input
            type="text"
            value={brandValue}
            onChange={(e) => setBrandValue(e.target.value)}
            name="brad"
            id="brand"
          />
          <input
            type="text"
            value={discValue}
            onChange={(e) => setDiscValue(e.target.value)}
            name="discraption"
            id="discraption"
          />
          <input
            type="text"
            value={sizeValue}
            onChange={(e) => setSizeValue(e.target.value)}
            name="size"
            id="size"
          />
          <input
            type="text"
            value={priseValue}
            onChange={(e) => setPriseValue(e.target.value)}
            name="prise"
            id="prise"
          />
          <button className="post_btn" onClick={sendToDte}>
            Post
          </button>
        </div>
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
