import React, { useEffect, useState } from "react";
import api from "../../api";

function CreateRecipe() {
  let [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    api.get("/ingredients").then(({ data }) => console.log(data));
  }, []);

  return <div></div>;
}

export default CreateRecipe;
