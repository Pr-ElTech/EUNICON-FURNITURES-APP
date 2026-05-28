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
import AddToCart from "./Pages/AddToCart";
import CustomFurniturePage from "./Components/CustomFurniturePage";
import Checkout from "./Components/Checkout";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import ProfessionalCard from "./Components/ProfessionalCard"
// import Service from "./Pages/Service"; // Imported and now correctly mapped below

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignupPage />} />

        {/* Public Content Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/professionalCard" element={<ProfessionalCard/>} />

        

        <Route
          path="/CartPage"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/Service"
          element={
            <PrivateRoute>
              <Service />
            </PrivateRoute>
          }
        />
        <Route
          path="/ServiceAbout"
          element={
            <PrivateRoute>
              <ServiceAbout />
            </PrivateRoute>
          }
        />
        <Route
          path="/ServicePortfolio"
          element={
            <PrivateRoute>
              <ServicePortfolio />
            </PrivateRoute>
          }
        />
        <Route
          path="/ServiceUbani"
          element={
            <PrivateRoute>
              <ServiceUbani />
            </PrivateRoute>
          }
        />
        <Route
          path="/AboutUbani"
          element={
            <PrivateRoute>
              <AboutUbani />
            </PrivateRoute>
          }
        />
        <Route
          path="/UbaniPortfolio"
          element={
            <PrivateRoute>
              <UbaniPortfolio />
            </PrivateRoute>
          }
        />
        <Route
          path="/FurnitureService"
          element={
            <PrivateRoute>
              <FurnitureService />
            </PrivateRoute>
          }
        />
        <Route
          path="/FurnitureAbout"
          element={
            <PrivateRoute>
              <FurnitureAbout />
            </PrivateRoute>
          }
        />
        <Route
          path="/FurniturePortfolio"
          element={
            <PrivateRoute>
              <FurniturePortfolio />
            </PrivateRoute>
          }
        />
        <Route
          path="/AddToCart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/ConfirmationPage"
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
        <Route
          path="/WatchList"
          element={
            <PrivateRoute>
              <WatchList />
            </PrivateRoute>
          }
        />
        <Route
          path="/ProductDetail"
          element={
            <PrivateRoute>
              <ProductDetail />
            </PrivateRoute>
          }
        />
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
          path="/Profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/EditInfoModal"
          element={
            <PrivateRoute>
              <EditInfoModal />
            </PrivateRoute>
          }
        />
        <Route
          path="/EditAdress"
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
