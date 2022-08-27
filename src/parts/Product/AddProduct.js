import React from "react";

function AddProduct() {
  return (
    <div>
      <form method="post" action="">
        <h3 id="logo">Log In</h3>

        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Type in your username.."
          autocomplete="off"
          required
        />

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password.."
          autocomplete="off"
          required
        />

        <a class="forgot" href="#">
          Forgot Password?
        </a>
        <a class="register" href="#">
          Register
        </a>

        <input type="submit" name="submit" value="Log In" />
      </form>
    </div>
  );
}

export default AddProduct;
