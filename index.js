module.exports = {
  name: `Recipe`,
  fields: {
    name: `String`,
    ingredients: `[RecipeIngredientListEntry]`,
    yield: `SplitNumberString`,
  },
}
