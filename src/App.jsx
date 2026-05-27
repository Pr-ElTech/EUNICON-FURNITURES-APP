//import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Register from "./Pages/Register";
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
import AddToCart from "./Pages/AddToCart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignupPage />} />
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
        <Route path="/AddToCart" element={<AddToCart />} />
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
