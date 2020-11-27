import React, { useEffect, useState } from "react";
import api from "../../api";

function RecipeDetailsPage({ id: recipeId }) {
  // const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    api.get(`/recipes/${recipeId}`).then((data) => {
      console.log(data);
    });
  }, [recipeId]);

  return <div></div>;
}

export default RecipeDetailsPage;
