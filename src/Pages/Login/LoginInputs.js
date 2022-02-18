import React from "react";
import "./style.css";

const LoginInputs = ({ getUsers }) => {
  const [bool, setBool] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className="login_box">
      <div className="form_box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="User Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label>
          {password.length > 0 && (
            <i
              className={!bool ? "bx bx-show" : "bx bx-low-vision"}
              onClick={() => setBool(!bool)}
            ></i>
          )}
          <input
            type={!bool ? "password" : "text"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button onClick={() => getUsers(user, password)}>Join</button>
      </div>
    </div>
  );
};

export default LoginInputs;
