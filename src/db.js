/* eslint-disable no-unused-vars */
import {
  Server,
  Model,
  Factory,
  RestSerializer,
  Serializer,
  JSONAPISerializer,
  Collection,
  Response,
  belongsTo,
  hasMany,
} from "miragejs";

const server = new Server({
  models: {
    recipe: Model.extend(),
    ingredient: Model.extend({
      recipe: hasMany(),
    }),
  },

  serializers: {
    application: RestSerializer,
  },

  routes() {
    this.namespace = "";

    // this.resource("recipe");
    // this.resource("ingredient");
    this.get("/recipes", (schema) => {
      var recipes = schema.recipes.all();

      var ingredientIDs = recipes.models[0].attrs.ingredients;
      var ingredients = schema.ingredients.find(ingredientIDs);

      recipes.models[0].attrs.ingredients = ingredients.models;

      return recipes;
    });
  },
});

server.db.loadData({
  ingredients: [
    {
      id: 1,
      name: "fries",
      vegetarian: true,
      calories: 312,
    },
    {
      id: 2,
      name: "cheese",
      vegetarian: true,
      calories: 402,
    },
    {
      id: 3,
      name: "gravy",
      vegetarian: false,
      calories: 79,
    },
    {
      id: 4,
      name: "hamburger patty",
      vegeterian: false,
      calories: 204,
    },
    {
      id: 5,
      name: "hamburger buns",
      vegeterian: true,
      calories: 263,
    },
    {
      id: 6,
      name: "lettuce",
      vegeterian: true,
      calories: 5,
    },
    {
      id: 7,
      name: "ketchup",
      vegeterian: true,
      calories: 19,
    },
    {
      id: 8,
      name: "tomatoes",
      vegeterian: true,
      calories: 22,
    },
    {
      id: 9,
      name: "ranch dressing",
      vegeterian: true,
      calories: 73,
    },
  ],
  recipes: [
    {
      id: 1,
      name: "poutine",
      ingredients: [1, 2, 3],
    },
    {
      id: 2,
      name: "hamburger",
      ingredients: [4, 5, 6, 7, 8],
    },
    {
      id: 3,
      name: "salad",
      ingredients: [7, 8, 9],
    },
  ],
});

export default server;
