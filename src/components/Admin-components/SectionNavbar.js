import React from "react";

const SectionNavbar = ({ hendleClickMenu, hendleChangeColor, actMenu }) => {
  return (
    <nav className={actMenu ? "hide" : ""}>
      <i className="bx bx-menu" onClick={() => hendleClickMenu()}></i>
      <a href="\" className="nav-link">
        Categories
      </a>
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </form>
      <input
        type="checkbox"
        id="switch-mode"
        hidden
        onChange={() => hendleChangeColor()}
      />
      <label htmlFor="switch-mode" className="switch-mode"></label>
      <a href="\" className="notification">
        <i className="bx bxs-bell"></i>
        <span className="num">8</span>
      </a>
      <a href="\" className="profile">
        {/*<img src={man} alt="logoImg" />*/}
      </a>
    </nav>
  );
};

export default SectionNavbar;
