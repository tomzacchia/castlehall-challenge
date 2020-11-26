import React, { useEffect, useState } from "react";
import "./home-page.scss";
import api from "../api";
import { CircularProgress } from "@material-ui/core";
import RecipeSummaryCard from "../components/recipe-summary-card/recipe-summary-card.jsx";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.get("/recipes").then(({ data }) => {
      setRecipes(data.recipes);
    });
  }, []);

  return (
    <div className="homepage">
      <div className="header-container">
        <div className="title-container">
          <h1> Recipes</h1>
          <h2>
            Discover mouth watering recipes that your friends and family will
            love
          </h2>
        </div>
      </div>

      <div className="recipes-container">
        <ul>
          {recipes.map((recipe) => {
            return <li key={recipe.id}>{recipe.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
