import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import api from "../../api";
import { useParams } from "react-router";

const useStyles = makeStyles({
  root: {
    padding: "1rem",
    marginLeft: "-250px",
    width: 500,
    position: "fixed",
    top: 100,
    left: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  media: {
    height: 300,
    width: 300,
  },
  spinner: {
    marginLeft: "-125px",
    width: 250,
    position: "fixed",
    top: 300,
    left: "50%",
  },
});

function RecipeDetailsPage() {
  const { id: recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    api.get(`/recipes/${recipeId}`).then(({ data }) => {
      setRecipe(data.recipe);
    });
  }, [recipeId]);

  return !recipe ? (
    <CircularProgress className={classes.spinner} />
  ) : (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={recipe.imgUrl}
        title={recipe.name}
      ></CardMedia>

      <CardContent>
        <Typography variant="h5" component="h2">
          {recipe.name}
        </Typography>

        {recipe.ingredients.map((ingredient) => (
          <Typography variant="body2" key={ingredient.id} component="p">
            {ingredient.name} - Calories: {ingredient.calories}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default RecipeDetailsPage;
