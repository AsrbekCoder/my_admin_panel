import React, { Component } from "react";
import AdminPannel from "./Pages/AdminPannel";
// import LoginInputs from "./Pages/Login/LoginInputs";
import "./style.css";
class App extends Component {
  // state = {
  //   getAllCheck: null,
  //   boolNames: false,
  // };

  // getUsers = (user, password) => {
  //   const gettings = {
  //     user,
  //     password,
  //   };
  //   localStorage.setItem("users", JSON.stringify(gettings));
  //   let main = JSON.parse(localStorage.getItem("users"));
  //   this.setState({ getAllCheck: main });
  //   if (main?.user === "Asrbek Coder" || main?.password === "asrbek1625") {
  //     this.setState({ boolNames: true });
  //   }
  // };

  render() {
    // if (this.state.boolNames) return <Navigate to="admin" />;

    return (
      <>
        <AdminPannel />
      </>
    );
  }
}

export default App;
