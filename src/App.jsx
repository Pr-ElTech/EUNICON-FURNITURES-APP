//import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import SignupPage from "./Pages/SignupPage";
import CategoryPage from "./Pages/CategoryPage";
import CustomFurniturePage from "./Components/CustomFurniturePage";
import Checkout from "./Components/Checkout";
import Service from "./Pages/Service";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignupPage />} />

        {/* Primary Functional Content Links */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Category & Custom Services */}
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/custom-furniture" element={<CustomFurniturePage />} />

        {/* Utility Backstops pointing back to Home */}
        <Route path="/cart" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
