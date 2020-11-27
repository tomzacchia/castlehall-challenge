import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import api from "../../api";
import { useForm } from "react-hook-form";

/*  
  name: string,
  vegeterian: boolean,
  calories: number
*/

function CreateIngredient() {
  var { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    api
      .post("/ingredients", data)
      .then(({ statusText }) => {
        reset();
        alert(`successfully ${statusText.toLowerCase()}`);
      })
      .catch(() => alert("error"));
  }

  return (
    <div
      style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", width: "500px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          margin="normal"
          variant="outlined"
          name="name"
          id="name"
          label="name"
          inputRef={register}
          required
        />

        <FormControlLabel
          control={
            <Checkbox color="primary" name={"vegetarian"} inputRef={register} />
          }
          label={"Vegetarian"}
        />

        <TextField
          margin="normal"
          variant="outlined"
          name="calories"
          id="calories"
          label="calories"
          inputRef={register}
          required
          type="number"
        />

        <Button variant="contained" color="primary" type="submit">
          SUBMIT
        </Button>
      </form>
    </div>
  );
}

export default CreateIngredient;
