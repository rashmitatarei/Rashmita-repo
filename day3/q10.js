// 10. Question: Write a program that takes an object representing a recipe with properties `name`, `ingredients`, and `instructions`. Use a loop to log each ingredient and its corresponding instruction to the console.

//    Example:
//    Input: `{ name: 'Chocolate Cake', ingredients: ['flour', 'sugar', 'cocoa powder'], instructions: ['Mix dry ingredients', 'Add wet ingredients', 'Bake in the oven'] }`
//    Output:

//    ```
//    Ingredient: flour, Instruction: Mix dry ingredients
//    Ingredient: sugar, Instruction: Add wet ingredients
//    Ingredient: cocoa powder, Instruction: Bake in the oven
//    ```
const recipe = {
    name: 'Chocolate Cake',
    ingredients: ['flour', 'sugar', 'cocoa powder'],
    instructions: ['Mix dry ingredients', 'Add wet ingredients', 'Bake in the oven']
};

for (let i = 0; i < recipe.ingredients.length; i++) {
    const ingredient = recipe.ingredients[i];
    const instruction = recipe.instructions[i];
    console.log(`Ingredient: ${ingredient}, Instruction: ${instruction}`);
}  
