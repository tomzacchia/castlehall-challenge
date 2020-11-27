import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../api";
import "./create-recipe.scss";

/*
imgUrl: string
ingredients: [ingredientIds]
name: string
*/

function CreateRecipe() {
  let [ingredients, setIngredients] = useState([]);
  let { register, handleSubmit } = useForm();
  // const classes = useStyles();

  useEffect(() => {
    api.get("/ingredients").then(({ data }) => {
      setIngredients(data.ingredients);
    });
  }, []);

  function onSubmit(data) {
    let formattedData = formatFormData({ ...data });
  }

  return (
    <div className="create-recipe-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          margin="normal"
          variant="outlined"
          name="name"
          id="name"
          label="name"
          inputRef={register}
          required
        />

        <TextField
          margin="normal"
          variant="outlined"
          name="imgUrl"
          id="imgUrl"
          label="Recipe Image URL"
          inputRef={register}
          required
        />

        <Typography variant="body2" component="p">
          Ingredients
        </Typography>

        <div>
          {ingredients.map((ingredient) => (
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name={"ingredients." + ingredient.id}
                  inputRef={register}
                  value={ingredient.id}
                />
              }
              key={ingredient.id}
              label={ingredient.name}
            />
          ))}
        </div>

        <Button variant="contained" color="primary" type="submit">
          SUBMIT
        </Button>
      </form>
    </div>
  );
}

export default CreateRecipe;

function formatFormData(data) {
  let newIngredients = data.ingredients
    .filter((id) => {
      if (id) return true;
    })
    .map((id) => parseInt(id));

  data.ingredients = newIngredients;

  return data;
}
