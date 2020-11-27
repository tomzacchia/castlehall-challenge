import React from "react";
import { Link, HashRouter as Router, Switch, Route } from "react-router-dom";
import "./app.styles.scss";
import HomePage from "./pages/home-page/home-page";
import RecipeDetailsPage from "./pages/recipe-details/recipe-details.jsx";
import { Button } from "@material-ui/core";
import CreateIngredient from "./pages/create-ingredient/create-ingredient.jsx";
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
        <div className="navbar">
          <Link to="/">
            <Button variant="contained" color="secondary">
              Home
            </Button>
          </Link>
          <Link to="/create-ingredient">
            <Button variant="contained" color="primary">
              Add Ingredient
            </Button>
          </Link>
          <Link to="/create-recipe">
            <Button variant="contained" color="primary">
              Add Recipe
            </Button>
          </Link>
        </div>

        <Switch>
          <Route path="/recipe/:id">
            <RecipeDetailsPage />
          </Route>
          <Route path="/create-ingredient">
            <CreateIngredient />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
