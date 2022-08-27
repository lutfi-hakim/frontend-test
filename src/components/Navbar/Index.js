import React from "react";

import "./Index.scss";

function Navbar() {
  return (
    <div className="header">
      <div className="container">
        <div className="brand">STORE</div>
        <div className="manus">
          <div className="product">Product</div>
          <div className="login">
            <button>Login</button>
          </div>
          <div className="logut">
            <button>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
