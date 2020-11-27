import React from "react";
import { navigate } from "@reach/router";
import "./recipe-summary-card.scss";
import { Button } from "@material-ui/core";

function RecipeSummaryCard({ recipe }) {
  return (
    <div className="recipe-summary-card">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${recipe.imgUrl})` }}
      ></div>
      <h2>{recipe.name}</h2>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          clickHandler(recipe.id);
        }}
      >
        View Details
      </Button>
    </div>
  );
}

export default RecipeSummaryCard;

function clickHandler(id) {
  navigate(`/recipe/${id}`);
}
