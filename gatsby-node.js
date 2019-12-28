const recipeDefinition = require("./index")

exports.createSchemaCustomization = ({schema, actions: {createTypes}}) => {
  createTypes([
    schema.buildInterfaceType(recipeDefinition),
    schema.buildObjectType({
      name: `SplitNumberString`,
      fields: {
        strings: "[String]!",
        numbers: "[Float]!",
      },
    }),
    schema.buildUnionType({
      name: "RecipeIngredientListEntry",
      types: ["RecipeIngredientEntry", "RecipeHeadingEntry"],
      resolveType: x => x.type,
    }),
    schema.buildObjectType({
      name: `RecipeIngredientEntry`,
      fields: {
        ingredient: `String`,
        line: `SplitNumberString!`,
        ingredientSlug: {
          type: `String`,
          extensions: {
            toTagSlug: {
              taxonomy: "ingredients",
              field: "ingredient",
            },
          },
        },
      },
    }),
    schema.buildObjectType({
      name: `RecipeHeadingEntry`,
      fields: {
        text: "String",
      },
    }),
  ])
}
