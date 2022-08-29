import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Index";
import Login from "./parts/Login/Login";
import Dashboard from "./pages/Dashboard";

import Product from "./pages/Product";

function App() {
  const authUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="App">
      <Navbar user={authUser} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/product/edit/:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
