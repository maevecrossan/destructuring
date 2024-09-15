/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 37];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2]; // this is not destructuring.
let [john, mary, joe] = ages;
console.log(john, mary, joe); 

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs
console.log(mike, jill, alicia); //logs respective jobs

// Destructuring subsets of arrays and objects.
    //...Array
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages; // skips first two values.
console.log(maryNative, marySecondary); //prints spanish & german.

//...Object
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
    //...Array
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(...others);

    //...Object
let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};

let { brian, anna, ...rest } = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);

