import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import SignupPage from "./Pages/SignupPage";
import CategoryPage from "./Pages/CategoryPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/chart" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />{" "}
        <Route path="/contact" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
