import { demoFoods } from "../Data/foods";
import FoodCard from "../components/FoodCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="food-list">
      {demoFoods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          onClick={() => navigate(`/food/${food.id}`)}
        />
      ))}
    </div>
  );
}

export default Home;
