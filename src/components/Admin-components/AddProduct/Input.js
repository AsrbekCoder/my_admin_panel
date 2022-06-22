import React from "react";

const Input = ({
  onChangeProductInputs,
  sendToDate,
  sending,
  productInput,
  setGetSize,
}) => {
  const [sendSize, setSendSize] = React.useState([]);
  const [getSize, setGetdSize] = React.useState("");

  const handleSize = () => {
    if (sendSize.length < 6) {
      setSendSize((prev) => [...prev, Number(getSize)]);
    }
    setGetdSize("");
  };
  React.useEffect(() => {
    setGetSize(sendSize);
  }, [setGetSize, sendSize]);

  const handleRemove = (e) => {
    setSendSize(sendSize.filter((item, index) => index !== e));
  };
  return (
    <div className="product_text">
      <input
        type="text"
        onChange={onChangeProductInputs}
        name="brand"
        value={productInput.brandValue}
        placeholder="Brand"
        id="brand"
      />
      <select
        name="content"
        id="getSnick"
        defaultValue="select"
        onChange={onChangeProductInputs}
      >
        <option value="select" disabled>
          Select type
        </option>
        <option value="Мужской">Мужской</option>
        <option value="Женский">Женский</option>
        <option value="Детский»">Детский»</option>
      </select>
      <div className="size_btn">
        <div className="size_numbers">
          {sendSize?.map((e, index) => (
            <p key={e + "_" + index}>
              {e}{" "}
              <span onClick={() => handleRemove(index)}>
                <i className="bx bx-trash-alt"></i>
              </span>
            </p>
          ))}
        </div>
        <div className="set_size">
          <input
            type="number"
            value={getSize}
            min="20"
            max="60"
            onChange={(e) => setGetdSize(e.target.value)}
            style={{ width: "100px" }}
          />

          <button
            type="submit"
            value="Add"
            className={getSize?.length > 0 ? "post_btn" : "post_btn disabled"}
            onClick={handleSize}
            style={{
              width: "120px",
              padding: "0",
              height: "35px",
              margin: "0 10px",
              borderRadius: "5px",
            }}
          >
            Add
          </button>
          {sendSize.length < 6 ? null : (
            <span className="error_size">Max sizes 6</span>
          )}
        </div>
      </div>
      <input
        type="text"
        onChange={onChangeProductInputs}
        name="prise"
        value={productInput.priseValue}
        id="prise"
        placeholder="Prise"
        style={{ margin: "0" }}
      />

      <input
        className="post_btn"
        type="submit"
        value={!sending ? "Post" : "Sending..."}
        onClick={sendToDate}
      />
    </div>
  );
};

export default Input;
