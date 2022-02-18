import React, { useState } from "react";
import { Link } from "react-router-dom";
const dashborList = [
  { id: 1, name: "Users", icon: "bx bxs-dashboard", path: "" },
  {
    id: 2,
    name: "Add Product",
    icon: "bx bxs-shopping-bag-alt",
    path: "addProduct",
  },
  {
    id: 3,
    name: "Dashboard",
    icon: "bx bxs-doughnut-chart",
    path: "dashboard",
  },
  { id: 4, name: "Store", icon: "bx bxs-message-dots", path: "store" },
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
        <img src="../assest/admin.png" alt="icon" />
        <span className="text">Admin</span>
      </a>
      <ul className="side-menu top">
        {dashborList.map((items) => (
          <li
            className={
              window.location.pathname === "/" + items.path ? "active" : ""
            }
            key={items.id}
            onClick={() => handleSideBar(items.id)}
          >
            <Link to={items.path}>
              <i className={items.icon}></i>
              <span className="text">{items.name}</span>
            </Link>
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
