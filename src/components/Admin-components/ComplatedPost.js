import React from "react";

const ComplatedPost = ({ checked }) => {
  return (
    <div className={checked ? "comlated_header active" : "comlated_header"}>
      {checked ? <span></span> : null}
      <div className="comlated_text">
        Youre Post done{" "}
        <b
          className="cleare_here"
          onClick={() => {
            window.location.reload();
          }}
        >
          cleare
        </b>
      </div>
      <i className="bx bx-check"></i>
    </div>
  );
};

export default ComplatedPost;
