import "./FoodCard.css";
function FoodCard({ food, onClick }) {
  return (
    <div className="food-card" onClick={onClick}>
      <img src={food.img} alt={food.name} width="200" />
      <h3>{food.name}</h3>
      <p>{food.desc}</p>
      <p>{food.price}</p>
    {food.offer && <span className="offer-tag">{food.offer}</span>}

      {/* INFO */}
      <h3>{food.name}</h3>
      <p>{food.desc}</p>

      <div className="card-bottom">
        <span>{food.price}</span>
        <span>{food.time}</span>
      </div>

      <div className="rating">⭐ {food.rating}</div>
    </div>
  );
}

export default FoodCard;
