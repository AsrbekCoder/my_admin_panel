import React, { useState } from "react";
import icon from "../../assest/logo.jpg";
const dashborList = [
  { id: 1, name: "Dashboard", icon: "bx bxs-dashboard" },
  { id: 2, name: "Change Cities", icon: "bx bxs-shopping-bag-alt" },
  { id: 3, name: "Users", icon: "bx bxs-doughnut-chart" },
  { id: 4, name: "Store", icon: "bx bxs-message-dots" },
];

const Siedebar = ({ actMenu }) => {
  const [activeSide, setActiveSide] = useState(1);
  const handleSideBar = (id) => {
    const b = dashborList.find((e) => e.id === id);
    setActiveSide(b.id);
  };

  return (
    <div id="sidebar" className={actMenu ? "hide" : " "}>
      <a href="#sdad" className="brand">
        <img src={icon} alt="icon" />
        <span className="text">Admin</span>
      </a>
      <ul className="side-menu top">
        {dashborList.map((items) => (
          <li
            className={activeSide === items.id ? "active" : ""}
            key={items.id}
            onClick={() => handleSideBar(items.id)}
          >
            <a href="#sdad">
              <i className={items.icon}></i>
              <span className="text">{items.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#sdad">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="#sdad" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Siedebar;
