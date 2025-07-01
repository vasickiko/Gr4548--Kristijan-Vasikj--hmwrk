const express = require("express");

const { displayRecipes, addRecipe, deleteRecipe, editRecipe, searchRecipe } = require("./handlers/recipes.js")

const app = express();
app.use(express.json());

app.get("/recipes", displayRecipes)
app.get("/recipes/search", searchRecipe)
app.post("/recipes", addRecipe)
app.delete("/recipes/:id", deleteRecipe)
app.put("/recipes/:id", editRecipe)

port = 3000;
app.listen(port, () => { console.log(`Server started at port ${port}!`)})