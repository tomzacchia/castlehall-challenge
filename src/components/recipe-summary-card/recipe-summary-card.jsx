import React from "react";
import "./recipe-summary-card.scss";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

function RecipeSummaryCard({ recipe }) {
  let history = useHistory();

  function clickHandler(id) {
    history.push(`/recipe/${id}`);
  }
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
