const { read, write } = require ("../read-write.js");

const displayRecipes = async (req, res) => {
    const data = await read();
    res.status(200).send(data)
}

const addRecipe = async (req, res) => {
    const recipes = await read();
    recipes.push(req.body);
    await write(recipes);
    res.status(200).send("New recipe added!");
}

const deleteRecipe = async (req, res) => {
    let recipes = await read();
    recipes = recipes.filter((recipe, i) => i !== Number(req.params.id));
    await write(recipes);
    res.status(200).send(`Recipe with id ${req.params.id} has been deleted`);
}

const editRecipe = async (req, res) => {
    let recipes = await read();
    recipes.map((recipe, index)=>{
        if(index === Number(req.params.id)){
            return{...recipe, ...req.body,}
        }
        return recipe;
    })
    await write(recipes);
    res.status(200).send(`Recipe with the id ${req.params.id} has been edited.`)
}

const searchRecipe = async (req, res) => {
  const recipes = await read();
  const query = req.query.ime?.toLowerCase(); 

  const filteredRecipes = recipes.filter(recipe => recipe.ime.toLowerCase() === query);

  if (filteredRecipes.length > 0) {
    res.status(200).send(filteredRecipes);
  } else {
    res.status(404).send("No recipe with that name found");
  }
};

module.exports = {
    displayRecipes,
    addRecipe,
    deleteRecipe,
    editRecipe,
    searchRecipe,
}