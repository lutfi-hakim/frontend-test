import React, { useState } from "react";

import "./Login.scss";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/login";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeName = (text) => {
    setUsername(text);
  };

  const handleChangePass = (text) => {
    setPass(text);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username, pass));
    navigate("/user/dashboard");
    window.location.reload();
  };

  return (
    <div>
      <form className="form-login" onSubmit={handleLogin}>
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Type in your username.."
          autocomplete="off"
          required
          value={username}
          onChange={(e) => handleChangeName(e.target.value)}
        />

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password.."
          autocomplete="off"
          required
          value={pass}
          onChange={(e) => handleChangePass(e.target.value)}
        />

        <a className="forgot" href="#">
          Forgot Password?
        </a>
        <a className="register" href="#">
          Register
        </a>

        <input type="submit" name="submit" value="Log In" />
      </form>
    </div>
  );
}

export default Login;
