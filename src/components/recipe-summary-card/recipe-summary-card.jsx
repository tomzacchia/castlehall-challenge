import React from "react";
import "./recipe-summary-card.scss";

function RecipeSummaryCard({ recipe }) {
  return (
    <div className="recipe-summary-card">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${recipe.imgUrl})` }}
      ></div>
      <h2>{recipe.name}</h2>
    </div>
  );
}

export default RecipeSummaryCard;
