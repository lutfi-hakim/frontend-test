import React, { useEffect, useState } from "react";

import IconUser from "../../assets/icon/user.svg";
import "./Index.scss";
import { useDispatch, useSelector } from "react-redux";

function Navbar({ user }) {
  const handleLogut = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.replace("/");
  };

  const [loading, setLoading] = useState("");
  useEffect(() => {
    setLoading(user);
  }, [setLoading]);

  const userRe = useSelector((state) => state.login?.payload);

  return (
    <div className="header">
      <div className="container">
        <div className="brand">STORE</div>
        <div className="manus">
          {!user || user == null || user == undefined ? (
            <>
              <div className="login">
                <a href="/login">Login</a>
              </div>
            </>
          ) : user.username != null ? (
            <>
              <div className="product">
                <a href="/user/dashboard">Product</a>
              </div>
              <div className="user-login">
                <img src={IconUser} alt="" />
                <span>{user ? user.username : "Anonime"}</span>
              </div>
              <div className="logut">
                <button onClick={handleLogut}>Logout</button>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
