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

    this.resource("recipe");
    this.resource("ingredient");

    this.get("/recipes", (schema) => {
      var recipesCollection = schema.recipes.all();

      var recipes = recipesCollection.models;

      recipes.forEach((model) => {
        var ingredientIDs = model.attrs.ingredients;

        var ingredients = schema.ingredients.find(ingredientIDs).models;

        var metadata = makeIngredientsMetadata(ingredients);

        model.attrs.metadata = metadata;
      });

      return recipesCollection;
    });

    this.get("/recipes/:id", (schema, request) => {
      let id = request.params.id;
      var recipe = schema.recipes.find(id);

      var ingredientIDs = recipe.attrs.ingredients;
      var ingredients = schema.ingredients.find(ingredientIDs);

      recipe.attrs.ingredients = ingredients.models;

      return recipe;
    });

    this.post("/recipes", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.recipes.create(attrs);
    });

    this.post("/ingredients", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.ingredients.create(attrs);
    });
  },
});

function makeIngredientsMetadata(ingredients) {
  return ingredients.reduce(
    (acc, model) => {
      var modelCalories = model.attrs.calories;
      var modelIsVegetarian = model.attrs.vegetarian;

      acc.calories += modelCalories;

      if (acc.isVegetarian && !modelIsVegetarian) acc.isVegetarian = false;

      return acc;
    },
    { calories: 0, isVegetarian: true }
  );
}

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
      vegetarian: false,
      calories: 204,
    },
    {
      id: 5,
      name: "hamburger buns",
      vegetarian: true,
      calories: 263,
    },
    {
      id: 6,
      name: "lettuce",
      vegetarian: true,
      calories: 5,
    },
    {
      id: 7,
      name: "ketchup",
      vegetarian: true,
      calories: 19,
    },
    {
      id: 8,
      name: "tomatoes",
      vegetarian: true,
      calories: 22,
    },
    {
      id: 9,
      name: "ranch dressing",
      vegetarian: true,
      calories: 73,
    },
    {
      id: 10,
      name: "pizza dough",
      vegetarian: true,
      calories: 125,
    },
    {
      id: 11,
      name: "tomato sauce",
      vegetarian: true,
      calories: 30,
    },
  ],
  recipes: [
    {
      id: 1,
      name: "poutine",
      ingredients: [1, 2, 3],
      imgUrl:
        "https://images.unsplash.com/photo-1491449347753-6b0223fb6931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
    },
    {
      id: 2,
      name: "hamburger",
      ingredients: [4, 5, 6, 7, 8],
      imgUrl:
        "https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=738&q=80",
    },
    {
      id: 3,
      name: "ranch salad",
      ingredients: [7, 8, 9],
      imgUrl:
        "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
    },
  ],
});

export default server;
