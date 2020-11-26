import React, { useEffect, useState } from "react";
import api from "../api";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.get("/recipes").then(({ data }) => {
      setRecipes(data.recipes);
    });
  }, []);

  return (
    <div className="homePage">
      <div className="homePageNavSpacer">
        <div className="titleContainer">
          <h1> Recipes</h1>
          <h2>
            Discover mouth watering recipes that your friends and family will
            love
          </h2>
        </div>
      </div>
      <ul>
        {recipes.map((recipe) => {
          return <li key={recipe.id}>{recipe.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default HomePage;
