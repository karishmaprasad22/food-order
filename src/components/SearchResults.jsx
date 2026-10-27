import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SearchResults() {
  const { keyword } = useParams();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/foods/search/${keyword}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [keyword]);

  if (loading) return <h2>Loading...</h2>;

  if (foods.length === 0) {
    return <h2>No items found for "{keyword}"</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search results for "{keyword}"</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {foods.map((food) => (
          <div key={food.id} style={{ width: "220px", border: "1px solid #ccc", padding: "10px" }}>
            <img
              src={food.imageUrl}
              alt={food.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{food.name}</h3>
            <p>⭐ {food.rating}</p>
            <p>{food.offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
