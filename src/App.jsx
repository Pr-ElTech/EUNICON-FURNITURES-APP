import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Blog from "./Pages/Blog";
import PrivateRoute from "./Routes/PrivateRoute";
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
import ProfessionalCard from "./Components/ProfessionalCard";
// import PrivateRoute from "./Routes/PrivateRoute";
import ConfirmationPage from "./Components/ConfirmationPage";
import WatchList from "./Pages/WatchList";
import ProductDetail from "./Components/ProductDetail";
import ProfilePage from "./Pages/ProfilePage";
import EditInfoModal from "./Components/EditInfoModal";
import EditAdress from "./Components/EditAddress";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignupPage />} />

        {/* 
          Root Redirection: If users hit "/" it safely sends them to "/home".
          If they aren't logged in, PrivateRoute inside "/home" handles the kick-back to login.
        */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Public Content Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        {/* Uniformly low-cased utility paths */}
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/professional-card" element={<ProfessionalCard />} />

        {/* Protected Application Routes */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        {/* Alias path to handle both variations seamlessly */}
        <Route
          path="/addtocart"
          element={
            <PrivateRoute>
              <Navigate to="/cart" replace />
            </PrivateRoute>
          }
        />
        <Route
          path="/watchlist"
          element={
            <PrivateRoute>
              <WatchList />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/product-detail"
          element={
            <PrivateRoute>
              <ProductDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/confirmation"
          element={
            <PrivateRoute>
              <ConfirmationPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/category/:categoryId"
          element={
            <PrivateRoute>
              <CategoryPage />
            </PrivateRoute>
          }
        />

        {/* Core Dedicated Services Pages */}
        <Route
          path="/custom-furniture"
          element={
            <PrivateRoute>
              <CustomFurniturePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/service"
          element={
            <PrivateRoute>
              <Service />
            </PrivateRoute>
          }
        />
        <Route
          path="/furniture-service"
          element={
            <PrivateRoute>
              <FurnitureService />
            </PrivateRoute>
          }
        />

        {/* Auxiliary Portfolio / Profile Modals */}
        <Route
          path="/service-about"
          element={
            <PrivateRoute>
              <ServiceAbout />
            </PrivateRoute>
          }
        />
        <Route
          path="/service-portfolio"
          element={
            <PrivateRoute>
              <ServicePortfolio />
            </PrivateRoute>
          }
        />
        <Route
          path="/service-ubani"
          element={
            <PrivateRoute>
              <ServiceUbani />
            </PrivateRoute>
          }
        />
        <Route
          path="/about-ubani"
          element={
            <PrivateRoute>
              <AboutUbani />
            </PrivateRoute>
          }
        />
        <Route
          path="/ubani-portfolio"
          element={
            <PrivateRoute>
              <UbaniPortfolio />
            </PrivateRoute>
          }
        />
        <Route
          path="/furniture-about"
          element={
            <PrivateRoute>
              <FurnitureAbout />
            </PrivateRoute>
          }
        />
        <Route
          path="/furniture-portfolio"
          element={
            <PrivateRoute>
              <FurniturePortfolio />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-info"
          element={
            <PrivateRoute>
              <EditInfoModal />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-address"
          element={
            <PrivateRoute>
              <EditAdress />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
