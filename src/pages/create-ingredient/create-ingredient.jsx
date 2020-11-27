import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

/*  
  name: string,
  vegeterian: boolean,
  calories: number
*/

function CreateIngredient() {
  var [name, setName] = useState("");
  var [isVegeterian, setIsVegeterian] = useState("false");
  var [calories, setCalories] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(name, isVegeterian, calories);
  }

  return (
    <div>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <FormControl>
          <InputLabel htmlFor="ingredient-name"> Name </InputLabel>
          <Input
            id="ingredient-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="ingredient-vegeterian"> Vegeterian </FormLabel>
          <RadioGroup
            aria-label="ingredient-vegeterian"
            name="ingredient-vegeterian"
            value={isVegeterian}
            onChange={(e) => setIsVegeterian(e.target.value)}
            required
          >
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>

          <FormControl>
            <InputLabel htmlFor="ingredient-calories">
              Number of Calories
            </InputLabel>
            <Input
              id="ingredient-calories"
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              required
            />
          </FormControl>

          <Button variant="contained" color="primary" type="submit">
            SUBMIT
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default CreateIngredient;
