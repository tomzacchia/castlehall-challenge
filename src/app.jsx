import React from "react";
import { Router } from "@reach/router";
import "./app.styles.scss";
import HomePage from "./pages/home-page/home-page";
import RecipeDetailsPage from "./pages/recipe-details/recipe-details.jsx";
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

const App = () => {
  return (
    <div>
      <Router>
        <HomePage path="/" default />
        <RecipeDetailsPage path="/recipe/:id" />
      </Router>
    </div>
  );
};

export default App;
