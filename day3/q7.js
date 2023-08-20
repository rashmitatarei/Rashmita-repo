// 7. Question: Given an object representing a shopping cart with properties `item1`, `item2`, and `item3`, write a loop to calculate the total price of all the items.

//    Example:
//    Input: `{ item1: 10, item2: 20, item3: 15 }`
//    Output: `45`
   

const shoppingCart = { item1: 10, item2: 20, item3: 15 };
let totalPrice = 0;

for (const item in shoppingCart) {
    if (shoppingCart.hasOwnProperty(item)) {
        totalPrice += shoppingCart[item];
    }
}

console.log(totalPrice);           