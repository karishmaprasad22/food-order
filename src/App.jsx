// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepge from "./components/Homepge";
import FoodList from "./components/Foodlist";
import FoodDetails from "./components/FoodDetails";
import ProfilePage from "./components/ProfilePage";
import CreateProfile from "./components/CreateProfile";
import CategoryPage from "./components/CategoryPage";
import OrdersPage from "./components/OrdersPage";
import SellerPage from "./components/SellerPage";
import NotificationPage from "./components/NotificationPage";
import SettingsPage from "./components/SettingsPage";
import AdvertisePage from "./components/AdvertisePage";
import Home from "./pages/Home";
function App() {
  return (
    <>
      {/* Navbar always on top */}
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Homepge />} />

        {/* FOOD LIST & SEARCH */}
        <Route path="/foods" element={<FoodList />} />
        <Route path="/search/:keyword" element={<FoodList />} />

        {/* FOOD DETAILS */}
         <Route path="/" element={<Home />} />
        <Route path="/food/:id" element={<FoodDetails />} />

        {/* USER */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create-profile" element={<CreateProfile />} />
          
        
        {/* OTHER PAGES */}
        <Route path="/wishlist" element={<CategoryPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/advertise" element={<AdvertisePage />} />
      </Routes>
    </>
  );
}

export default App;
