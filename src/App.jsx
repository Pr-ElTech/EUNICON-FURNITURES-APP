import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import SignupPage from "./Pages/SignupPage";
import CategoryPage from "./Pages/CategoryPage";
import Service from "./Pages/Service";
import ServiceAbout from "./Pages/ServiceAbout";
import ServicePortfolio from "./Pages/ServicePortfolio";
import AboutUbani from "./Pages/AboutUbani";
import ServiceUbani from "./Pages/ServiceUbani";
import UbaniPortfolio from "./Pages/UbaniPortfolio";
import FurnitureService from "./Pages/FurnitureService";
import FurnitureAbout from "./Pages/FurnitureAbout";
import FurniturePortfolio from "./Pages/FurniturePortfolio";
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
        <Route path="/Service" element={<Service />} />
        <Route path="/ServiceAbout" element={<ServiceAbout />} />
        <Route path="/ServicePortfolio" element={<ServicePortfolio />} />
        <Route path="/ServiceUbani" element={<ServiceUbani />} />
        <Route path="/AboutUbani" element={<AboutUbani />} />
        <Route path="/UbaniPortfolio" element={<UbaniPortfolio />} />
        <Route path="/FurnitureService" element={<FurnitureService />} />
        <Route path="/FurnitureAbout" element={<FurnitureAbout />} />
        <Route path="/FurniturePortfolio" element={<FurniturePortfolio />} />
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
