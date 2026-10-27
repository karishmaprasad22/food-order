import React, { useState } from "react";

function CategoryPage() {
  const [category, setCategory] = useState(""); // example state

  return (
    <div style={{ padding: "20px" }}>
      <h1>Category Page</h1>
      <p>Selected: {category || "None"}</p>
      {/* Example buttons to set category */}
      <button onClick={() => setCategory("Biryani")}>Biryani</button>
      <button onClick={() => setCategory("Pizza")}>Pizza</button>
    </div>
  );
}

export default CategoryPage;
