// src/components/Navbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiMoreVertical,
  FiHeart,
  FiGift,
  FiBox,
  FiShoppingBag,
} from "react-icons/fi";

import "../components/Homepge.css";

function Navbar() {
  const navigate = useNavigate();

  // ✅ STATES
  const [search, setSearch] = useState("");
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ SEARCH HANDLER
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="Navbar">
      {/* LEFT SIDE */}
      <div className="left-nav">
        <h1 className="heading" onClick={() => navigate("/")}>
          FlavorHut
        </h1>

        <form className="searchbox" onSubmit={handleSearch}>
          <FiSearch className="searchicon" />
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-nav">
        {/* LOGIN */}
        <div className="login-wrapper">
          <button
            className="btn"
            onClick={() => setShowLoginMenu((s) => !s)}
          >
            <FiUser className="icon" /> Login
          </button>

          {showLoginMenu && (
            <div className="login-dropdown">
              <p onClick={() => navigate("/profile")}>
                <FiUser /> My Profile
              </p>
              <p onClick={() => navigate("/wishlist")}>
                <FiHeart /> Wishlist
              </p>
              <p onClick={() => navigate("/orders")}>
                <FiBox /> Orders
              </p>
              <p>
                <FiGift /> Rewards
              </p>
            </div>
          )}
        </div>

        {/* CART */}
        <button className="btn" onClick={() => navigate("/cart")}>
          <FiShoppingCart className="icon" /> Cart
        </button>

        {/* SELLER */}
        <button className="seller-link" onClick={() => navigate("/seller")}>
          <FiShoppingBag className="seller-icon" />
          Become a Seller
        </button>

        {/* THREE DOT MENU */}
        <div className="menu-wrapper">
          <FiMoreVertical
            className="dots"
            onClick={() => setMenuOpen((s) => !s)}
          />

          {menuOpen && (
            <div className="dropdown">
              <p onClick={() => navigate("/notifications")}>🔔 Notification</p>
              <p onClick={() => navigate("/settings")}>⚙️ Settings</p>
              <p onClick={() => navigate("/advertise")}>📢 Advertise</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
