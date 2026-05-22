import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Blog from "./Pages/Blog";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import CategoryPage from "./Pages/CategoryPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/product" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/chart" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/category/:categoryID" element={<CategoryPage />} />        <Route path="/contact" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
