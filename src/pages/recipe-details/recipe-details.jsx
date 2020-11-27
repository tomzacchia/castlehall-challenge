import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import api from "../../api";
import { useParams } from "react-router";

function RecipeDetailsPage() {
  let { id: recipeId } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    api.get(`/recipes/${recipeId}`).then(({ data }) => {
      setRecipe(data.recipe);
    });
  }, [recipeId]);

  return !recipe ? (
    <CircularProgress />
  ) : (
    <div className="recipe-details">
      <div className="image-container">
        <div className="img"></div>
        <p> {recipe.name}</p>
      </div>
      <div className="ingredients">
        {recipe.ingredients.map((ingredient) => (
          <p key={ingredient.id}>
            {ingredient.name}{" "}
            {ingredient.vegeration ? "vegeratian" : "not vegeterian"}
          </p>
        ))}
      </div>
    </div>
  );
}

export default RecipeDetailsPage;
