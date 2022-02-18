import React, { useState } from "react";
import { Routes, Route } from "react-router";
import AddProduct from "../components/Admin-components/AddProduct/AddProduct";
import {
  Dashbord,
  SectionNavbar,
  Siedebar,
} from "../components/Admin-components/index";

const AdminPannel = () => {
  const [menuAct, setMenuAct] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const handleClickMenu = () => {
    setMenuAct(() => !menuAct);
  };

  const hendleChangeColor = () => {
    setChangeColor(() => !changeColor);
  };
  return (
    <div className={changeColor ? "body_admin dark" : "body_admin"}>
      <Siedebar actMenu={menuAct} />
      <div id="content">
        <SectionNavbar
          actMenu={menuAct}
          hendleClickMenu={handleClickMenu}
          hendleChangeColor={hendleChangeColor}
        />
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPannel;
