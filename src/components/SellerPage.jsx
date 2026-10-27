import React from "react";
import "./SellerPage.css";

function SellerPage() {
  return (
    <div className="seller-container">

      {/* Banner Section */}
      <div className="seller-banner">
        <h1>Sell Online with FlavorHut</h1>
        <p>Start your food business and reach thousands of customers!</p>
        <button className="seller-btn">Start Selling</button>
      </div>

      {/* Features Section */}
      <div className="seller-features">
        <div className="feature-card">
          <h3>1 Lakh+ Customers</h3>
          <p>Grow your business with a huge customer base.</p>
        </div>

        <div className="feature-card">
          <h3>Secure Payments</h3>
          <p>Fast & secure weekly settlements.</p>
        </div>

        <div className="feature-card">
          <h3>Low Commission</h3>
          <p>Increase your profit with lowest platform charges.</p>
        </div>

        <div className="feature-card">
          <h3>24/7 Seller Support</h3>
          <p>Always available to help your restaurant.</p>
        </div>
      </div>
    </div>
  );
}

export default SellerPage;
