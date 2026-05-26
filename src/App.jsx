import React from "react";
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
import Service from "./Pages/Service"; // Imported and now correctly mapped below

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignupPage />} />

        {/* Primary Content Links */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Home />} />
        <Route path="/blog" element={<Blog />} />

        {/* Consolidated Single Lowercase Checkout Route */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Category & Services */}
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/custom-furniture" element={<CustomFurniturePage />} />
        <Route path="/service" element={<Service />} />

        {/* Utility Backstops */}
        <Route path="/cart" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
