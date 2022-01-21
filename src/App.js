import React, { useState } from "react";
import {
  Dashbord,
  SectionNavbar,
  Siedebar,
} from "./components/Admin-components/index";
import "./style.css";

function App() {
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
        <Dashbord />
      </div>
    </div>
  );
}

export default App;
