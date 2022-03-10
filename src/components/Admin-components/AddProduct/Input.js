import React from "react";

const Input = ({ onChangeValues, onChangePriseValues }) => {
  const [sendSize, setSendSize] = React.useState([]);
  const [getSize, setGetdSize] = React.useState(null);

  const handleSize = () => {
    sendSize.length < 6
      ? setSendSize((prev) => [...prev, Number(getSize)])
      : console.log("err");
  };

  const handleRemove = (e) => {
    setSendSize(sendSize.filter((item, index) => index !== e));
  };
  return (
    <div className="product_text">
      <input
        type="text"
        onChange={(e) => onChangeValues(e.target.value)}
        name="brad"
        placeholder="Brand"
        id="brand"
      />
      <div className="size_btn">
        <div className="size_numbers">
          {sendSize?.map((e, index) => (
            <p key={e + "_" + index} onClick={() => handleRemove(index)}>
              {e} <span>X</span>
            </p>
          ))}
        </div>
        <input
          type="number"
          onChange={(e) => setGetdSize(e.target.value)}
          style={{ width: "100px" }}
        />
        <input
          type="submit"
          className={getSize?.length > 0 ? "post_btn" : "post_btn disabled"}
          onClick={handleSize}
          style={{ width: "120px", padding: "0", margin: "0 15px" }}
        />
      </div>
      <input
        type="text"
        onChange={(e) => onChangePriseValues(e.target.value)}
        name="prise"
        id="prise"
      />
      <input className="post_btn" type="submit" value="Post" />
    </div>
  );
};

export default Input;
