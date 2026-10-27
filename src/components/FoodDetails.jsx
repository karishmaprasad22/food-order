import { useParams } from "react-router-dom";
import { demoFoods } from "../Data/foods";
import "./FoodDetails.css";

function FoodDetails() {
  const { id } = useParams();
  const food = demoFoods.find((f) => f.id === Number(id));

  if (!food) {
    return <h2 style={{ padding: "20px" }}>Food not found</h2>;
  }

  return (
    <div className="food-details-page">

  {/* LEFT IMAGES */}
  <div className="food-images">
    <div className="main-image">
      <img src={food.img} alt={food.name} />
    </div>

    <div className="side-images">
      <img src={food.img2 || food.img} alt="food" />
      <div className="gallery-box">
        <img src={food.img3 || food.img} alt="food" />
        <div className="gallery-overlay">View Gallery</div>
      </div>
    </div>
  </div>

  {/* RIGHT DETAILS */}
  <div className="food-info">

    {/* TITLE + SHARE */}
    <div className="title-row">
      <h1>{food.name}</h1>
      <button className="share-btn">🔗 Share</button>
    </div>

    <p className="food-desc">{food.desc}</p>

    {/* TAGS */}
    <div className="tags">
      <span className="tag veg">🌱 Veg</span>
      <span className="tag bestseller">🔥 Bestseller</span>
      <span className="tag spicy">🌶 Spicy</span>
    </div>

    {/* RATING + TIME */}
    <div className="food-meta">
      <span className="rating">⭐ {food.rating}</span>
      <span className="time">⏱ {food.time}</span>
    </div>

    {/* PRICE */}
    <h2 className="food-price">{food.price}</h2>

    {/* OFFERS */}
    <div className="offer-box">
      🎉 ₹50 OFF on orders above ₹299
    </div>

    {/* RESTAURANT INFO */}
    <div className="restaurant-box">
      <p><strong>Restaurant:</strong> FlavorHut Kitchen</p>
      <p><strong>📍 Location:</strong> Anna Nagar, Chennai</p>
      <p><strong>📞 Contact:</strong> +91 98765 43210</p>
      <p><strong>🚚 Delivery:</strong> Free delivery in 30 mins</p>
    </div>

    {/* ACTION BUTTONS */}
    <div className="action-buttons">
      <button className="add-cart">Add to Cart</button>
      <button className="buy-now">Buy Now</button>
    </div>

  </div>
</div>

   
  );
}

export default FoodDetails;
