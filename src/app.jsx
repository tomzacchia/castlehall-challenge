import React from "react";
import "./app.styles.scss";
import HomePage from "./home-page/home-page";
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
      APP
      <HomePage />
    </div>
  );
};

export default App;
