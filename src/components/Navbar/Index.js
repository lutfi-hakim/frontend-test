import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconUser from "../../assets/icon/user.svg";
import "./Index.scss";

function Navbar() {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user")) || ""
  );

  const handleLogut = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.replace("/");
  };

  return (
    <div className="header">
      <div className="container">
        <div className="brand">STORE</div>
        <div className="manus">
          <div className="product">Product</div>
          {authUser.username == undefined ? (
            <div className="login">
              <a href="/login">Login</a>
            </div>
          ) : (
            <>
              <div className="user-login">
                <img src={IconUser} alt="" />
                <span>{authUser.username}</span>
              </div>
              <div className="logut">
                <button onClick={handleLogut}>Logout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
