import React, { useEffect } from "react";
import api from "./api";

/**
 * The API endpoints are availables as:
 *
 * recipes:
 * get all -> GET -> /recipes/
 * get one -> GET -> /recipes/ID
 * create one -> POST -> /recipes/ {recipe: {name: 'abc', ingredients: [1,2,3]}}
 * update one -> PUT/PATCH -> /recipes/ID {recipe: {name: 'abc', ingredients: [1,2,3]}}
 * delete -> DELETE -> /recipes/ID
 *
 * ingredients:
 * get all -> GET -> /ingredients/
 * get one -> GET -> /ingredients/ID
 * create one -> POST -> /ingredients/ {ingredient: {name: 'abc'}}
 * update one -> PUT/PATCH -> /ingredients/ID {ingredient: {name: 'abc'}}
 * delete -> DELETE -> /recipes/ID
 *
 */

const App = (props) => {
  const [recipes, setRecipes] = React.useState([]);

  useEffect(() => {
    api.get("/recipes").then(({ data }) => {
      setRecipes(data.recipes);
    });
  }, []);

  return (
    <div>
      Recipes:
      <ul>
        {recipes.map((recipe) => {
          return <li key={recipe.id}>{recipe.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
