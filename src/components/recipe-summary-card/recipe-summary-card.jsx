import React from "react";
import "./recipe-summary-card.scss";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import EcoIcon from "@material-ui/icons/Eco";

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

      <div>
        Calories: {recipe.metadata.calories}
        {recipe.metadata.isVegetarian ? (
          <EcoIcon style={{ color: "rgb(76 175 80)" }} />
        ) : (
          ""
        )}
      </div>

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
